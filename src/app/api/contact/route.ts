const MAX_BODY_BYTES = 32_000;
const MAKE_TIMEOUT_MS = 10_000;

const fieldLimits = {
  name: 120,
  email: 254,
  phone: 40,
  organization: 160,
  conversationType: 80,
  message: 5_000,
  botcheck: 200,
} as const;

type StringField = keyof typeof fieldLimits;

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  conversationType: string;
  message: string;
  botcheck: string;
  consent: true;
};

type ParseResult =
  | { submission: ContactSubmission }
  | { error: string };

function jsonError(message: string, status: number) {
  return Response.json({ success: false, error: message }, { status });
}

function parseSubmission(payload: unknown): ParseResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { error: "Invalid submission." };
  }

  const record = payload as Record<string, unknown>;
  const strings = {} as Record<StringField, string>;

  for (const field of Object.keys(fieldLimits) as StringField[]) {
    const value = record[field];

    if (value === undefined && (field === "phone" || field === "organization")) {
      strings[field] = "";
      continue;
    }

    if (typeof value !== "string" || value.length > fieldLimits[field]) {
      return { error: "Invalid submission." };
    }

    strings[field] = value.trim();
  }

  if (strings.botcheck) {
    return { error: "Invalid submission." };
  }

  if (!strings.name) {
    return { error: "Name is required." };
  }

  if (!strings.email) {
    return { error: "Email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(strings.email)) {
    return { error: "Email is invalid." };
  }

  if (!strings.conversationType) {
    return { error: "Conversation type is required." };
  }

  if (strings.message.length < 20) {
    return { error: "Message must be at least 20 characters." };
  }

  if (record.consent !== true) {
    return { error: "Consent is required." };
  }

  const submission: ContactSubmission = {
    ...strings,
    consent: true,
  };

  return { submission };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");

  if (!contentType?.toLowerCase().includes("application/json")) {
    return jsonError("Content-Type must be application/json.", 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonError("Submission is too large.", 413);
  }

  let bodyText: string;

  try {
    bodyText = await request.text();
  } catch {
    return jsonError("Unable to read submission.", 400);
  }

  if (new TextEncoder().encode(bodyText).length > MAX_BODY_BYTES) {
    return jsonError("Submission is too large.", 413);
  }

  let payload: unknown;

  try {
    payload = JSON.parse(bodyText);
  } catch {
    return jsonError("Invalid JSON.", 400);
  }

  const parsed = parseSubmission(payload);

  if ("error" in parsed) {
    return jsonError(parsed.error, 422);
  }

  const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return jsonError("Contact service is not configured.", 500);
  }

  try {
    new URL(webhookUrl);
  } catch {
    return jsonError("Contact service is not configured.", 500);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MAKE_TIMEOUT_MS);

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: parsed.submission.name,
        email: parsed.submission.email,
        phone: parsed.submission.phone,
        organization: parsed.submission.organization,
        conversationType: parsed.submission.conversationType,
        message: parsed.submission.message,
        submittedAt: new Date().toISOString(),
        source: "badou-apm.com",
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!webhookResponse.ok) {
      return jsonError("Contact service rejected the submission.", 502);
    }

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return jsonError("Contact service timed out.", 504);
    }

    return jsonError("Contact service is unavailable.", 502);
  } finally {
    clearTimeout(timeout);
  }
}
