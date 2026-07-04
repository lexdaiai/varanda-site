import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, background: "#2C2416", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 100px", position: "relative" }}>
        {/* Warm glow */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(182,99,49,0.18) 0%, transparent 70%)", display: "flex" }} />
        {/* Bottom glow */}
        <div style={{ position: "absolute", bottom: -60, left: 60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,158,115,0.12) 0%, transparent 70%)", display: "flex" }} />
        {/* Award badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ background: "rgba(182,99,49,0.9)", borderRadius: 999, padding: "6px 18px", display: "flex" }}>
            <span style={{ fontSize: 15, color: "#fff", fontWeight: 700 }}>🏆 Melhor Buffet por Quilo do Paraná 2025</span>
          </div>
        </div>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 28 }}>
          <span style={{ fontSize: 52, fontWeight: 700, color: "#B66331" }}>Varanda</span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#CCCEB9" }}>Gourmet</span>
        </div>
        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: 20, gap: 4 }}>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#F9F2EA" }}>Muito mais que um restaurante.</span>
          <span style={{ fontSize: 28, fontWeight: 300, color: "#CCCEB9" }}>Uma experiência de sabor e acolhimento.</span>
        </div>
        {/* Subtitle */}
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 18, color: "#9B9E73" }}>Campo Largo, PR · Almoço e Jantar · Buffet, Sopas & Open Wine</span>
        </div>
        {/* Domain badge */}
        <div style={{ position: "absolute", bottom: 60, right: 100, display: "flex", alignItems: "center", gap: 8, background: "rgba(182,99,49,0.15)", border: "1px solid rgba(182,99,49,0.4)", borderRadius: 999, padding: "8px 20px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#B66331", display: "flex" }} />
          <span style={{ color: "#B66331", fontSize: 18, fontWeight: 600 }}>varandacl.com.br</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
