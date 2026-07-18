import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#020617",
          border: "4px solid #38bdf8",
          color: "#7dd3fc",
          display: "flex",
          fontSize: 27,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        BF
      </div>
    ),
    size,
  );
}
