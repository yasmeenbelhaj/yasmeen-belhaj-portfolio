import { ImageResponse } from "next/og";

export const alt =
  "Yasmeen Belhaj, Front-End Engineer and Interactive Systems Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f3eadc",
          color: "#171412",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#974923",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          YASMEEN BELHAJ
        </div>
        <div
          style={{
            background: "#b98967",
            height: 3,
            margin: "36px 0",
            width: 100,
          }}
        />
        <div
          style={{
            color: "#4a3d34",
            fontSize: 38,
            letterSpacing: "0.02em",
          }}
        >
          Front-End Engineer | Interactive Systems Designer
        </div>
      </div>
    ),
    size,
  );
}
