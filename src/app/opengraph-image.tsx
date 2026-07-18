import { ImageResponse } from "next/og";

export const alt =
  "Badou Franck — 20 years of technology delivery leadership, multiplied by AI";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const progression = ["Understand", "Deliver", "Coordinate", "Allocate"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "58px 68px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            bottom: 22,
            border: "1px solid rgba(125, 211, 252, 0.28)",
            display: "flex",
            left: 44,
            position: "absolute",
            right: 44,
            top: 22,
          }}
        />

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#7dd3fc",
              display: "flex",
              fontSize: 23,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            Badou Franck
          </div>
          <div
            style={{
              border: "1px solid rgba(125, 211, 252, 0.35)",
              color: "#bae6fd",
              display: "flex",
              fontSize: 15,
              padding: "9px 15px",
            }}
          >
            Founder · Applying the full range
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 50,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
            }}
          >
            20 years mastering how the work gets done.
          </div>
          <div
            style={{
              color: "#7dd3fc",
              display: "flex",
              fontSize: 50,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              marginTop: 6,
            }}
          >
            Now rebuilding it with AI.
          </div>
        </div>

        <div
          style={{
            color: "#cbd5e1",
            display: "flex",
            fontSize: 20,
            marginTop: 30,
          }}
        >
          Business Analyst · Project Manager · Program Manager · Portfolio Manager
        </div>

        <div
          style={{
            alignItems: "stretch",
            display: "flex",
            marginTop: 40,
            width: "100%",
          }}
        >
          {progression.map((stage, index) => (
            <div
              key={stage}
              style={{
                alignItems: "center",
                display: "flex",
                flex: 1,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "rgba(14, 165, 233, 0.08)",
                  border: "1px solid rgba(125, 211, 252, 0.3)",
                  display: "flex",
                  flex: 1,
                  fontSize: 18,
                  justifyContent: "center",
                  padding: "13px 10px",
                }}
              >
                {stage}
              </div>
              {index < progression.length - 1 && (
                <div
                  style={{
                    color: "#38bdf8",
                    display: "flex",
                    fontSize: 22,
                    justifyContent: "center",
                    width: 34,
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            color: "#94a3b8",
            display: "flex",
            fontSize: 18,
            marginTop: 26,
          }}
        >
          AI multiplies the work; the judgment stays mine.
        </div>
      </div>
    ),
    size,
  );
}
