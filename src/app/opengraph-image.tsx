import { ImageResponse } from "next/og";

export const alt =
  "Badou Franck: 20 years of technology delivery leadership, multiplied by AI";

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
          background: "#f7f9fc",
          color: "#102a43",
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
            border: "1px solid #d9e3f0",
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
              color: "#164c96",
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
              background: "#eef5ff",
              border: "1px solid #7ca5d8",
              color: "#164c96",
              display: "flex",
              fontSize: 15,
              padding: "9px 15px",
            }}
          >
            Proving Ground · Applying the full range
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
              color: "#164c96",
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
            color: "#334155",
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
                  background: index % 2 === 0 ? "#ffffff" : "#eef5ff",
                  border: "1px solid #d9e3f0",
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
                    color: "#164c96",
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
            color: "#52657a",
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
