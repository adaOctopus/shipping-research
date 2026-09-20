import { ImageResponse } from "next/og";

export const alt =
  "Greek Ships XYZ — cargos de flete marítimo no verificables después de la entrega";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpenGraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f0e4",
          color: "#0e2340",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2c4a6e",
          }}
        >
          Greek Ships XYZ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.08,
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            Cargos de flete marítimo no verificables después de la entrega.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#1a2332",
              maxWidth: 860,
            }}
          >
            Remedición, demurrage, detention, examen aduanero, recargo de
            guerra — para gerentes de importación DDP/CIF en mayoristas de 11 a
            50 personas.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );

export default OpenGraphImage;
