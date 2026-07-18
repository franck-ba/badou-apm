import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#020617",
          border: "10px solid #38bdf8",
          color: "#7dd3fc",
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-3px",
          width: "100%",
        }}
      >
        BF
      </div>
    ),
    size,
  );
}
