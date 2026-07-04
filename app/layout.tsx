import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varandacl.com.br"),
  title: "Varanda Gourmet | Restaurante em Campo Largo - PR",
  description:
    "Vencedor do prêmio 'O Quilo é Nosso 2025' — melhor restaurante por quilo do Paraná. Buffet com mais de 35 opções, sopas artesanais, open wine e muito mais. Campo Largo, PR.",
  keywords: [
    "varanda gourmet",
    "restaurante campo largo",
    "buffet campo largo",
    "melhor restaurante campo largo",
    "restaurante por quilo paraná",
    "buffet de sopas campo largo",
    "open wine campo largo",
    "restaurante familiar campo largo",
    "almoço campo largo",
    "jantar campo largo",
  ],
  authors: [{ name: "Varanda Gourmet" }],
  openGraph: {
    title: "Varanda Gourmet | Melhor por quilo do Paraná",
    description:
      "Vencedor do prêmio 'O Quilo é Nosso 2025'. Buffet com mais de 35 opções, sopas artesanais e open wine. Campo Largo, PR.",
    url: "https://varandacl.com.br",
    siteName: "Varanda Gourmet",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Varanda Gourmet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanda Gourmet | Melhor por quilo do Paraná",
    description: "Vencedor do prêmio 'O Quilo é Nosso 2025'. Campo Largo, PR.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      name: "Varanda Gourmet",
      url: "https://varandacl.com.br",
      telephone: "+5541984899847",
      email: "varandagourmetltda@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Dom Pedro II, 935",
        addressLocality: "Campo Largo",
        addressRegion: "PR",
        postalCode: "83601-160",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "23:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "11:30", closes: "15:00" },
      ],
      servesCuisine: ["Brasileira", "Frutos do Mar", "Internacional"],
      priceRange: "$$",
      hasMenu: "https://varandacl.com.br/#cardapio",
      sameAs: [
        "https://www.instagram.com/varandagourmetcl/",
        "https://www.facebook.com/people/Varanda-Gourmet/100095347802075/",
      ],
      award: "O Quilo é Nosso 2025 — Melhor restaurante por quilo do Paraná",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
        { "@type": "LocationFeatureSpecification", name: "Estacionamento Conveniado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Área Climatizada", value: true },
        { "@type": "LocationFeatureSpecification", name: "Acessibilidade", value: true },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body, Lato, sans-serif)" }}>{children}</body>
    </html>
  );
}
