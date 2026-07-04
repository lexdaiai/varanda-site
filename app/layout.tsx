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
  title: "Varanda Gourmet | Melhor Buffet por Quilo do Paraná — Campo Largo",
  description:
    "Vencedor do O Quilo é Nosso 2025 — melhor buffet por quilo do Paraná. Mais de 35 opções diárias, sopas artesanais de inverno, open wine e pet friendly. Campo Largo, PR.",
  keywords: [
    "varanda gourmet campo largo",
    "buffet campo largo",
    "buffet por quilo campo largo",
    "melhor buffet campo largo",
    "melhor buffet por quilo paraná",
    "restaurante campo largo",
    "restaurante por quilo campo largo",
    "sopas artesanais campo largo",
    "buffet de sopas campo largo",
    "open wine campo largo",
    "almoço campo largo",
    "jantar campo largo",
    "restaurante familiar campo largo",
    "pet friendly campo largo",
    "O Quilo é Nosso 2025",
  ],
  authors: [{ name: "Varanda Gourmet" }],
  alternates: { canonical: "https://varandacl.com.br" },
  openGraph: {
    title: "Varanda Gourmet | Melhor Buffet por Quilo do Paraná",
    description:
      "Vencedor do O Quilo é Nosso 2025. Buffet com mais de 35 opções, sopas artesanais e open wine. Pet friendly. Campo Largo, PR.",
    url: "https://varandacl.com.br",
    siteName: "Varanda Gourmet",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Varanda Gourmet — Melhor Buffet por Quilo do Paraná 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanda Gourmet | Melhor Buffet por Quilo do Paraná",
    description: "Vencedor do O Quilo é Nosso 2025. Buffet, sopas artesanais e open wine. Campo Largo, PR.",
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
      image: "https://varandacl.com.br/opengraph-image",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Dom Pedro II, 935",
        addressLocality: "Campo Largo",
        addressRegion: "PR",
        postalCode: "83601-160",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -25.4632,
        longitude: -49.5267,
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "23:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "11:30", closes: "15:00" },
      ],
      servesCuisine: ["Brasileira", "Frutos do Mar", "Internacional", "Japonesa"],
      priceRange: "$$",
      hasMenu: "https://varandacl.com.br/#cardapio",
      currenciesAccepted: "BRL",
      paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
      sameAs: [
        "https://www.instagram.com/varandagourmetcl/",
        "https://www.facebook.com/people/Varanda-Gourmet/100095347802075/",
      ],
      award: "O Quilo é Nosso 2025 — Melhor buffet por quilo do Paraná",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
        { "@type": "LocationFeatureSpecification", name: "Estacionamento Conveniado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Área Climatizada", value: true },
        { "@type": "LocationFeatureSpecification", name: "Acessibilidade", value: true },
        { "@type": "LocationFeatureSpecification", name: "Lareira", value: true },
        { "@type": "LocationFeatureSpecification", name: "Cardápio em Braille", value: true },
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
