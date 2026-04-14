import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Christian Thalinger — Avocat d'affaires à Strasbourg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const portraitData = readFileSync(
    join(process.cwd(), "public/images/portrait358x253.png")
  );
  const portraitSrc = `data:image/png;base64,${portraitData.toString("base64")}`;

  // Portrait natural: 358×253 → scale to fill right column height
  // At display height 630 → width = 630 × (358/253) ≈ 891 (crops left edge nicely)
  const portraitH = 630;
  const portraitW = Math.round(portraitH * (358 / 253));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#07137B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left gold accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            backgroundColor: "#D4AF37",
          }}
        />

        {/* Portrait — right-anchored, full height */}
        <img
          src={portraitSrc}
          width={portraitW}
          height={portraitH}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />

        {/* Gradient fade so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #07137B 52%, transparent 80%)",
          }}
        />

        {/* Text */}
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 0,
            bottom: 0,
            width: 620,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Cabinet d'Avocat · Strasbourg
          </div>

          <div
            style={{
              fontSize: 68,
              color: "#F5F3EF",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Christian Thalinger
          </div>

          <div
            style={{
              width: 56,
              height: 3,
              backgroundColor: "#D4AF37",
              marginBottom: 24,
            }}
          />

          <div
            style={{
              fontSize: 30,
              color: "#D4AF37",
              lineHeight: 1.4,
            }}
          >
            Avocat d'affaires
          </div>
        </div>
      </div>
    ),
    size
  );
}
