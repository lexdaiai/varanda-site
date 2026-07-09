import Image from "next/image";
import { FadeIn } from "./components/FadeIn";

const WHATSAPP = "https://wa.me/5541984899847";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-body, Lato, sans-serif)", background: "#F9F2EA", color: "#2C2416" }}>
      <Nav />
      <Hero />
      <Award />
      <Sobre />
      <Almoco />
      <CardapioSemanal />
      <PratosAssinatura />
      <Sopas />
      <Galeria />
      <Instagram />
      <ClubVaranda />
      <HorariosPrecos />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function Nav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(249,242,234,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(155,158,115,0.2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-heading, Georgia, serif)", fontSize: 22, fontWeight: 700, color: "#B66331", letterSpacing: "0.01em" }}>Varanda</span>
          <span style={{ fontFamily: "var(--font-heading, Georgia, serif)", fontSize: 18, fontWeight: 400, color: "#2C2416", letterSpacing: "0.05em" }}>Gourmet</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div className="nav-desktop-links">
            <a href="#cardapio" className="nav-link" style={{ color: "#2C2416", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "0.05em" }}>Cardápio</a>
            <a href="#sopas" className="nav-link" style={{ color: "#2C2416", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "0.05em" }}>Sopas</a>
            <a href="#club" className="nav-link" style={{ color: "#2C2416", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "0.05em" }}>Club</a>
            <a href="#contato" className="nav-link" style={{ color: "#2C2416", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "0.05em" }}>Contato</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-scale"
            style={{ background: "#B66331", color: "#fff", padding: "10px 24px", borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
            Reservar Mesa
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      position: "relative", height: "100vh", minHeight: 600, display: "flex", alignItems: "flex-end",
      backgroundImage: "url('/images/fachada-noturna.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,36,22,0.9) 0%, rgba(44,36,22,0.35) 50%, rgba(44,36,22,0.1) 100%)" }} />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px", width: "100%" }}>
        <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(182,99,49,0.9)", borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
          <span style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>🏆 Melhor Buffet por Quilo do Paraná — 2025</span>
        </div>
        <h1 className="hero-title" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(42px, 6vw, 80px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 20, maxWidth: 700 }}>
          Muito mais que um restaurante.
        </h1>
        <p className="hero-sub" style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 520, lineHeight: 1.6, fontWeight: 300 }}>
          Uma experiência de sabor e acolhimento no coração de Campo Largo.
        </p>
        <div className="hero-ctas" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-scale"
            style={{ background: "#B66331", color: "#fff", padding: "16px 36px", borderRadius: 999, fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.05em" }}>
            Reservar Mesa
          </a>
          <a href="#cardapio"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "16px 36px", borderRadius: 999, fontSize: 16, fontWeight: 400, textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(4px)" }}>
            Ver Cardápio
          </a>
        </div>
      </div>
    </section>
  );
}

function Award() {
  return (
    <section style={{ background: "#2C2416", padding: "64px 24px" }}>
      <div className="grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: 64, alignItems: "center" }}>
        <FadeIn direction="left">
          <div>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Reconhecimento
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 4vw, 52px)", color: "#F9F2EA", lineHeight: 1.2, marginBottom: 24 }}>
              O Quilo é Nosso 2025
            </h2>
            <p style={{ color: "#CCCEB9", fontSize: 18, lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>
              Fomos reconhecidos como o <strong style={{ color: "#F9F2EA", fontWeight: 700 }}>melhor restaurante por quilo do Paraná</strong> — uma confirmação do carinho e da qualidade que colocamos em cada prato preparado aqui.
            </p>
            <p style={{ color: "#9B9E73", fontSize: 16, lineHeight: 1.6, fontWeight: 300 }}>
              Vencedor estadual — categoria Tilápia à Moda do Chef — Paraná 2025
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={150}>
          <div className="photo-zoom" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/images/premio.jpg" alt="Prêmio O Quilo é Nosso 2025 — Varanda Gourmet" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Sobre() {
  const diferenciais = [
    { icon: "❄️", label: "Área interna climatizada" },
    { icon: "🔥", label: "Lareira no inverno" },
    { icon: "🐾", label: "Pet friendly na varanda" },
    { icon: "🅿️", label: "Estacionamento conveniado" },
    { icon: "♿", label: "Rampas de acessibilidade" },
    { icon: "♟️", label: "Cardápio em Braille" },
  ];
  return (
    <section style={{ padding: "96px 24px", background: "#F9F2EA" }}>
      <div className="grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: 80, alignItems: "center" }}>
        <FadeIn direction="left">
          <div className="photo-zoom" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "3/4" }}>
            <Image src="/images/buffet.jpg" alt="Buffet do Varanda Gourmet" fill style={{ objectFit: "cover" }} />
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={120}>
          <div>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Sobre nós
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 46px)", color: "#2C2416", lineHeight: 1.2, marginBottom: 24 }}>
              Um lugar pra se sentir em casa.
            </h2>
            <p style={{ color: "#5a4a38", fontSize: 17, lineHeight: 1.8, marginBottom: 16, fontWeight: 300 }}>
              Localizado no centro de Campo Largo, o Varanda Gourmet é o encontro perfeito entre o aconchego de uma refeição familiar e a qualidade de um restaurante profissional.
            </p>
            <p style={{ color: "#5a4a38", fontSize: 17, lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
              Nosso buffet é cuidadosamente elaborado com ingredientes frescos e selecionados — mais de 35 opções diárias com carnes nobres, peixes, massas artesanais, saladas criativas e sobremesas irresistíveis.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {diferenciais.map((d) => (
                <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{d.icon}</span>
                  <span style={{ fontSize: 14, color: "#5a4a38" }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Almoco() {
  const precos = [
    { periodo: "Segunda a Sexta", livre: "R$ 54,90", kg: "R$ 89,90", destaque: false },
    { periodo: "Sáb, Dom e Feriados", livre: "R$ 79,90", kg: "R$ 119,90", destaque: true },
  ];
  return (
    <section id="cardapio" style={{ padding: "96px 24px", background: "#CCCEB9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Almoço</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#2C2416", lineHeight: 1.2, marginBottom: 16 }}>
              Buffet do Almoço
            </h2>
            <p style={{ color: "#4a5a3a", fontSize: 18, maxWidth: 600, margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
              Mais de 35 opções diárias. Nos fins de semana, especialidades como salmão, camarão, frutos do mar, picanha e filé mignon.
            </p>
          </div>
        </FadeIn>
        <div className="grid-cols-3" style={{ gap: 32, alignItems: "start" }}>
          <FadeIn direction="left" delay={100}>
            <div className="photo-zoom" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
              <Image src="/images/salada.jpg" alt="Salada do buffet" fill style={{ objectFit: "cover" }} />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {precos.map((p) => (
                <div key={p.periodo} className="card-hover" style={{
                  background: p.destaque ? "#B66331" : "#F9F2EA",
                  borderRadius: 16, padding: 28,
                  border: p.destaque ? "none" : "1px solid rgba(155,158,115,0.3)",
                }}>
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, color: p.destaque ? "rgba(255,255,255,0.7)" : "#9B9E73" }}>
                    {p.periodo}
                  </p>
                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                    <div>
                      <p style={{ fontSize: 28, fontWeight: 700, color: p.destaque ? "#fff" : "#2C2416", fontFamily: "var(--font-heading)" }}>{p.livre}</p>
                      <p style={{ fontSize: 13, color: p.destaque ? "rgba(255,255,255,0.8)" : "#9B9E73", marginTop: 4 }}>livre • inclui sobremesas</p>
                    </div>
                    <div style={{ borderLeft: `1px solid ${p.destaque ? "rgba(255,255,255,0.3)" : "rgba(155,158,115,0.3)"}`, paddingLeft: 24 }}>
                      <p style={{ fontSize: 28, fontWeight: 700, color: p.destaque ? "#fff" : "#2C2416", fontFamily: "var(--font-heading)" }}>{p.kg}</p>
                      <p style={{ fontSize: 13, color: p.destaque ? "rgba(255,255,255,0.8)" : "#9B9E73", marginTop: 4 }}>por kg</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="card-hover" style={{ background: "#F9F2EA", borderRadius: 16, padding: 28, border: "1px solid rgba(155,158,115,0.3)" }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, color: "#9B9E73" }}>Pagamento</p>
                <p style={{ fontSize: 14, color: "#5a4a38", lineHeight: 1.7 }}>
                  PIX • Débito • Crédito • Dinheiro<br />
                  VR Refeição • Pluxee • Alelo • Ticket Restaurante
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={300}>
            <div className="photo-zoom" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
              <Image src="/images/buffet3.jpg" alt="Buffet do almoço" fill style={{ objectFit: "cover" }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CardapioSemanal() {
  const especiais = [
    { dia: "Sexta-Feira", prato: "Churrasco", descricao: "Cortes nobres na brasa: picanha, linguiça artesanal e muito mais", foto: "/images/churrasco2.jpg" },
    { dia: "Sábado", prato: "Festival de Sushi", descricao: "Sushi artesanal com salmon, uramaki e temaki selecionados", foto: "/images/sushi.jpg" },
    { dia: "Domingo", prato: "Frutos do Mar", descricao: "Camarão, salmão, polvo e especialidades do mar no buffet", foto: "/images/frutos-do-mar.webp" },
  ];
  return (
    <section style={{ padding: "96px 24px", background: "#F9F2EA" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Destaques da Semana</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#2C2416", lineHeight: 1.2 }}>
              Cardápio especial por dia
            </h2>
          </div>
        </FadeIn>
        <div className="grid-cols-3" style={{ gap: 24 }}>
          {especiais.map((e, i) => (
            <FadeIn key={e.dia} delay={i * 120}>
              <div className="card-hover" style={{ borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 4px 24px rgba(44,36,22,0.08)", height: "100%" }}>
                <div className="photo-zoom" style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image src={e.foto} alt={e.prato} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, background: "#B66331", color: "#fff", borderRadius: 999, padding: "4px 14px", fontSize: 13, fontWeight: 700 }}>
                    {e.dia}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, color: "#2C2416", marginBottom: 8 }}>{e.prato}</h3>
                  <p style={{ fontSize: 14, color: "#9B9E73", fontWeight: 300 }}>{e.descricao}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#9B9E73" }}>
          Cardápio diário atualizado no{" "}
          <a href="https://www.instagram.com/varandagourmetcl/" target="_blank" rel="noopener noreferrer" style={{ color: "#B66331", fontWeight: 700, textDecoration: "none" }}>
            @varandagourmetcl
          </a>
        </p>
      </div>
    </section>
  );
}

function PratosAssinatura() {
  const pratos = [
    {
      nome: "Tilápia à Moda do Chef",
      descricao: "Prato vencedor do prêmio O Quilo é Nosso 2025 — Paraná. Tilápia ao forno com crosta dourada artesanal, ervas frescas e temperos da casa.",
      badge: "🏆 Prato Vencedor 2025",
      foto: "/images/tilapia-chef.jpg",
    },
    {
      nome: "Lasanha de Cordeiro",
      descricao: "Massa artesanal em camadas com cordeiro desfiado e molho especial da casa, gratinada ao ponto certo. Uma das grandes criações do nosso buffet.",
      badge: "⭐ Assinatura da Casa",
      foto: "/images/lasanha-cordeiro.jpg",
    },
    {
      nome: "Salmão ao Molho Varanda",
      descricao: "Filé de salmão grelhado ao ponto com molho exclusivo da casa. Uma combinação que se tornou favorita dos nossos clientes.",
      badge: "⭐ Assinatura da Casa",
      foto: "/images/salmao.jpg",
    },
  ];
  return (
    <section style={{ padding: "96px 24px", background: "#2C2416" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Assinaturas da Casa</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#F9F2EA", lineHeight: 1.2, marginBottom: 16 }}>
              Pratos que nos tornaram referência
            </h2>
            <p style={{ color: "#9B9E73", fontSize: 17, maxWidth: 560, margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
              Criações que conquistaram prêmios e o coração dos nossos clientes.
            </p>
          </div>
        </FadeIn>
        <div className="grid-cols-3" style={{ gap: 24 }}>
          {pratos.map((p, i) => (
            <FadeIn key={p.nome} delay={i * 130}>
              <div className="card-hover" style={{ borderRadius: 16, overflow: "hidden", background: "rgba(249,242,234,0.05)", border: "1px solid rgba(182,99,49,0.2)", height: "100%" }}>
                <div className="photo-zoom" style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image src={p.foto} alt={p.nome} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, background: "#B66331", color: "#fff", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 700 }}>
                    {p.badge}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, color: "#F9F2EA", marginBottom: 10 }}>{p.nome}</h3>
                  <p style={{ fontSize: 14, color: "#9B9E73", lineHeight: 1.7, fontWeight: 300 }}>{p.descricao}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sopas() {
  const sabores = [
    "Canja", "Costelinha com Aipim", "Eslava", "Blumenau com Salsa",
    "Camarão com Inhame", "Abóbora com Carne Seca", "Queijo com Bacon", "Alho-Poró",
  ];
  const acompanhamentos = ["Crispy de Couve", "Crispy de Cebola", "Torradinhas", "Queijo Ralado", "Canjica (sobremesa)"];
  return (
    <section id="sopas" style={{ padding: "96px 24px", background: "#2C2416" }}>
      <div className="grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: 80, alignItems: "start" }}>
        <FadeIn direction="left">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }}>❄️</span>
              <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Temporada de Inverno
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#F9F2EA", lineHeight: 1.2, marginBottom: 20 }}>
              Buffet de Sopas Artesanais
            </h2>
            <p style={{ color: "#CCCEB9", fontSize: 17, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
              8 sabores preparados todos os dias com ingredientes frescos e muito carinho para aquecer as suas noites de inverno.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 40 }}>
              {sabores.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B66331", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "#CCCEB9" }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: 13, color: "#9B9E73", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Acompanhamentos inclusos</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {acompanhamentos.map((a) => (
                  <span key={a} style={{ background: "rgba(155,158,115,0.2)", color: "#CCCEB9", borderRadius: 999, padding: "4px 12px", fontSize: 13 }}>{a}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="card-hover" style={{ background: "rgba(182,99,49,0.15)", border: "1px solid rgba(182,99,49,0.3)", borderRadius: 12, padding: 20 }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 28, color: "#B66331", fontWeight: 700 }}>R$ 59,90</p>
                <p style={{ fontSize: 13, color: "#9B9E73", marginTop: 4 }}>Buffet de Sopas</p>
                <p style={{ fontSize: 12, color: "#9B9E73", marginTop: 8, lineHeight: 1.5 }}>Crianças 0-4 grátis · 5-12 meia</p>
              </div>
              <div className="card-hover" style={{ background: "rgba(155,158,115,0.1)", border: "1px solid rgba(155,158,115,0.2)", borderRadius: 12, padding: 20 }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 28, color: "#CCCEB9", fontWeight: 700 }}>R$ 99,90</p>
                <p style={{ fontSize: 13, color: "#9B9E73", marginTop: 4 }}>Combo: Sopas + Open Wine</p>
                <p style={{ fontSize: 12, color: "#9B9E73", marginTop: 8, lineHeight: 1.5 }}>5 tipos de vinho à vontade</p>
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: "#9B9E73" }}>Terça a Sábado · Das 18h às 23h · Open Wine avulso: R$ 59,90</p>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={200}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -24, borderRadius: 32, background: "radial-gradient(ellipse at 60% 40%, rgba(182,99,49,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div className="sopas-photo-stack">
              <div className="photo-zoom" style={{ flex: "0 0 58%", borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                <Image src="/images/sopa1.jpg" alt="Sopas artesanais Varanda" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="sopas-col-right">
                <div className="photo-zoom" style={{ flex: 1, borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                  <Image src="/images/sopa2.jpg" alt="Sopa de inverno" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="photo-zoom" style={{ flex: 1, borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                  <Image src="/images/sopa3.jpg" alt="Buffet de sopas" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    { src: "/images/buffet.jpg", alt: "Buffet completo" },
    { src: "/images/sushi.jpg", alt: "Festival de sushi" },
    { src: "/images/sobremesa.jpg", alt: "Sobremesas artesanais" },
    { src: "/images/salada3.jpg", alt: "Salada fresca" },
    { src: "/images/salada.jpg", alt: "Saladas frescas" },
    { src: "/images/salada2.jpg", alt: "Frutos do mar no buffet" },
  ];
  return (
    <section style={{ padding: "96px 24px", background: "#F9F2EA" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Galeria</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#2C2416" }}>Uma experiência visual</h2>
          </div>
        </FadeIn>
        <div className="grid-cols-3" style={{ gap: 12 }}>
          {fotos.map((f, i) => (
            <FadeIn key={f.src} delay={i * 80}>
              <div className="photo-zoom" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                <Image src={f.src} alt={f.alt} fill style={{ objectFit: "cover" }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section style={{ padding: "80px 24px", background: "#2C2416" }}>
      <FadeIn>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          {/* Instagram gradient ring */}
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", marginBottom: 24 }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="#fff" stroke="none" />
            </svg>
          </div>
          <p style={{ color: "#9B9E73", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Instagram
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F9F2EA", marginBottom: 16, lineHeight: 1.2 }}>
            @varandagourmetcl
          </h2>
          <p style={{ color: "#CCCEB9", fontSize: 17, lineHeight: 1.7, marginBottom: 36, fontWeight: 300, maxWidth: 500, margin: "0 auto 36px" }}>
            Cardápio do dia, novidades, promoções e momentos especiais — tudo por lá primeiro.
          </p>
          <a
            href="https://www.instagram.com/varandagourmetcl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-scale"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", color: "#fff", padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: "none" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="#fff" stroke="none" />
            </svg>
            Seguir no Instagram
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function ClubVaranda() {
  const beneficios = [
    { icon: "💰", titulo: "10% de Cashback", desc: "No almoço e no buffet de sopas" },
    { icon: "🎁", titulo: "Promoções Exclusivas", desc: "Ofertas especiais para membros" },
    { icon: "📅", titulo: "Reservas Antecipadas", desc: "Prioridade em festivais e eventos" },
    { icon: "🎉", titulo: "Festivais Temáticos", desc: "Sushi, datas especiais e muito mais" },
  ];
  return (
    <section id="club" style={{ padding: "96px 24px", background: "#9B9E73" }}>
      <div className="grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: 80, alignItems: "center" }}>
        <FadeIn direction="left">
          <div>
            <p style={{ color: "#F9F2EA", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Fidelidade</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#2C2416", lineHeight: 1.2, marginBottom: 20 }}>
              Club Varanda
            </h2>
            <p style={{ color: "#2C2416", fontSize: 17, lineHeight: 1.7, marginBottom: 16, fontWeight: 300, opacity: 0.85 }}>
              Nosso programa de fidelidade é gratuito e pensado para quem ama viver bem à mesa.
            </p>
            <p style={{ color: "#2C2416", fontSize: 17, lineHeight: 1.7, marginBottom: 36, fontWeight: 300, opacity: 0.85 }}>
              Cadastre-se no caixa na sua próxima visita e comece a acumular benefícios imediatamente.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-scale"
              style={{ display: "inline-block", background: "#2C2416", color: "#F9F2EA", padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Saiba mais pelo WhatsApp
            </a>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={150}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {beneficios.map((b) => (
              <div key={b.titulo} className="card-hover" style={{ background: "rgba(249,242,234,0.85)", borderRadius: 16, padding: 24 }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{b.icon}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "#2C2416", marginBottom: 6 }}>{b.titulo}</h3>
                <p style={{ fontSize: 13, color: "#5a4a38", lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HorariosPrecos() {
  const horarios = [
    { periodo: "Almoço — Seg a Sex", horario: "11h às 14h30" },
    { periodo: "Almoço — Sáb, Dom e Feriados", horario: "11h30 às 15h" },
    { periodo: "Jantar — Ter a Sáb", horario: "18h às 23h" },
    { periodo: "Jantar — Dom e Seg", horario: "Fechado" },
  ];
  return (
    <section style={{ padding: "96px 24px", background: "#F9F2EA" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Horários</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#2C2416" }}>
              Quando nos encontrar
            </h2>
          </div>
        </FadeIn>
        <div className="grid-cols-2" style={{ gap: 32 }}>
          {horarios.map((h, i) => (
            <FadeIn key={h.periodo} delay={i * 90}>
              <div className="card-hover" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 28px", background: "#fff", borderRadius: 12, border: "1px solid rgba(155,158,115,0.2)", boxShadow: "0 2px 12px rgba(44,36,22,0.05)" }}>
                <span style={{ fontSize: 15, color: "#5a4a38" }}>{h.periodo}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: h.horario === "Fechado" ? "#9B9E73" : "#B66331" }}>{h.horario}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="contato" style={{ padding: "96px 24px", background: "#2C2416" }}>
      <div className="grid-cols-2" style={{ maxWidth: 1200, margin: "0 auto", gap: 80 }}>
        <FadeIn direction="left">
          <div>
            <p style={{ color: "#B66331", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Localização</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 3.5vw, 48px)", color: "#F9F2EA", lineHeight: 1.2, marginBottom: 32 }}>
              Venha nos visitar
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>📍</span>
                <div>
                  <p style={{ color: "#F9F2EA", fontSize: 16, marginBottom: 4 }}>Rua Dom Pedro II, 935 — Centro</p>
                  <p style={{ color: "#9B9E73", fontSize: 14 }}>Campo Largo, PR — CEP 83601-160</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>📱</span>
                <div>
                  <p style={{ color: "#F9F2EA", fontSize: 16, marginBottom: 4 }}>(41) 98489-9847</p>
                  <p style={{ color: "#9B9E73", fontSize: 14 }}>WhatsApp · Reservas e informações</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>✉️</span>
                <div>
                  <p style={{ color: "#F9F2EA", fontSize: 16 }}>varandagourmetltda@gmail.com</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://g.co/kgs/Djtjx7H" target="_blank" rel="noopener noreferrer" className="btn-scale"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#B66331", color: "#fff", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                <span>📍</span> Abrir no Google Maps
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-scale"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                <span>💬</span> WhatsApp — Reservar Mesa
              </a>
              <a href="https://www.ifood.com.br/delivery/campo-largo-pr/varanda-gourmet-centro/38d6dc54-c40e-4b25-8f67-40210a6dbf6f" target="_blank" rel="noopener noreferrer" className="btn-scale"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "rgba(155,158,115,0.2)", color: "#CCCEB9", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(155,158,115,0.3)" }}>
                <span>🛵</span> Pedir pelo iFood
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={200}>
          <div className="photo-zoom" style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 400 }}>
            <Image src="/images/fachada.jpg" alt="Fachada Varanda Gourmet" fill style={{ objectFit: "cover" }} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#1a1208", padding: "32px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <Image src="/images/logo.jpg" alt="Varanda Gourmet" width={130} height={65} style={{ objectFit: "contain" }} />
          <p style={{ color: "#5a4a38", fontSize: 13, marginTop: 4 }}>© 2025 Varanda Gourmet · Campo Largo, PR</p>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="https://www.instagram.com/varandagourmetcl/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "#9B9E73", textDecoration: "none", fontSize: 14 }}>Instagram</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "#9B9E73", textDecoration: "none", fontSize: 14 }}>WhatsApp</a>
          <a href="https://www.ifood.com.br/delivery/campo-largo-pr/varanda-gourmet-centro/38d6dc54-c40e-4b25-8f67-40210a6dbf6f" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "#9B9E73", textDecoration: "none", fontSize: 14 }}>iFood</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-scale"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 100,
        background: "#25D366", color: "#fff",
        width: 60, height: 60, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        textDecoration: "none", fontSize: 28,
      }}>
      💬
    </a>
  );
}
