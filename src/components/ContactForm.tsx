"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  conversationType: string;
  message: string;
  botcheck: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  conversationType: "",
  message: "",
  botcheck: "",
  consent: false,
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/25";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.conversationType) {
      nextErrors.conversationType = "Select a conversation type.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Enter a message.";
    } else if (values.message.trim().length < 20) {
      nextErrors.message = "Message must be at least 20 characters.";
    }

    if (!values.consent) {
      nextErrors.consent = "Confirm that Badou may contact you.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setSubmissionError("");

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
      } | null;

      if (!response.ok || result?.success !== true) {
        throw new Error("Contact submission failed.");
      }

      setValues(initialValues);
      setSuccessMessage("Thank you. Your message has been sent.");
    } catch {
      setSubmissionError(
        "Your message could not be sent. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-2xl border border-sky-300/20 bg-slate-950/70 p-6 sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      {Object.keys(errors).length > 0 && (
        <div
          className="mb-6 rounded-xl border border-red-300/30 bg-red-400/10 p-4 text-sm text-red-200"
          role="alert"
          aria-live="assertive"
        >
          <p className="font-medium">Please correct the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {successMessage && (
        <div
          className="mb-6 rounded-xl border border-sky-300/30 bg-sky-400/10 p-4 text-sm leading-6 text-sky-100"
          role="status"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}

      {submissionError && (
        <div
          className="mb-6 rounded-xl border border-red-300/30 bg-red-400/10 p-4 text-sm text-red-200"
          role="alert"
          aria-live="assertive"
        >
          {submissionError}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="name">
            Name
          </label>
          <input
            className={fieldClassName}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) =>
              setValues({ ...values, name: event.target.value })
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            className="text-sm font-medium text-slate-200"
            htmlFor="email"
          >
            Work email
          </label>
          <input
            className={fieldClassName}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          className="text-sm font-medium text-slate-200"
          htmlFor="phone"
        >
          Phone number <span className="text-slate-500">(optional)</span>
        </label>
        <input
          className={fieldClassName}
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone ?? ""}
          onChange={(event) =>
            setValues({ ...values, phone: event.target.value })
          }
        />
      </div>

      <div className="mt-6">
        <label
          className="text-sm font-medium text-slate-200"
          htmlFor="organization"
        >
          Organization <span className="text-slate-500">(optional)</span>
        </label>
        <input
          className={fieldClassName}
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          value={values.organization}
          onChange={(event) =>
            setValues({ ...values, organization: event.target.value })
          }
        />
      </div>

      <div className="mt-6">
        <label
          className="text-sm font-medium text-slate-200"
          htmlFor="conversation-type"
        >
          What would you like to discuss?
        </label>
        <select
          className={fieldClassName}
          id="conversation-type"
          name="conversationType"
          required
          value={values.conversationType}
          onChange={(event) =>
            setValues({ ...values, conversationType: event.target.value })
          }
          aria-invalid={Boolean(errors.conversationType)}
          aria-describedby={
            errors.conversationType ? "conversation-type-error" : undefined
          }
        >
          <option value="">Select a conversation type</option>
          <option value="leadership-opportunity">Leadership opportunity</option>
          <option value="program-portfolio-challenge">
            Program or portfolio challenge
          </option>
          <option value="business-product-collaboration">
            Business or product collaboration
          </option>
          <option value="board-advisory">
            Board or advisory conversation
          </option>
          <option value="other">Other</option>
        </select>
        {errors.conversationType && (
          <p
            id="conversation-type-error"
            className="mt-2 text-sm text-red-300"
          >
            {errors.conversationType}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label
          className="text-sm font-medium text-slate-200"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={`${fieldClassName} min-h-36 resize-y`}
          id="message"
          name="message"
          required
          minLength={20}
          value={values.message}
          onChange={(event) =>
            setValues({ ...values, message: event.target.value })
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-help message-error"
        />
        <p id="message-help" className="mt-2 text-sm text-slate-500">
          Share the challenge, context, and desired outcome. Minimum 20
          characters.
        </p>
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="botcheck">Leave this field empty</label>
        <input
          id="botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={(event) =>
            setValues({ ...values, botcheck: event.target.value })
          }
        />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-sky-400 outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(event) =>
              setValues({ ...values, consent: event.target.checked })
            }
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            I understand that Badou may contact me regarding this inquiry.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-red-300">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
