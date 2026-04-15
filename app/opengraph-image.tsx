import { ImageResponse } from "next/og";

export const alt = "1885.ai — Dealership intelligence, built by dealers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 160, fontWeight: 700, letterSpacing: -4 }}>
          1885.ai
        </div>
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85 }}>
          Dealership intelligence, built by dealers.
        </div>
        <div style={{ fontSize: 28, marginTop: 80, opacity: 0.6 }}>
          Powersports CRM & BI · Launching 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
