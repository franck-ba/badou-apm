import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://badou-apm.com/";
const title = "Badou Franck | Technology Delivery Leadership";
const description =
  "Badou Franck brings 20 years of technology delivery leadership across business analysis, project, program, and portfolio management—now multiplied by AI.";
const socialDescription =
  "20 years across business analysis, project, program, and portfolio leadership—now applied as a founder and multiplied by AI.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Badou Franck",
  url: siteUrl,
  jobTitle: "Technology Delivery Leader",
  description,
  knowsAbout: [
    "Business Analysis",
    "Project Management",
    "Program Management",
    "Portfolio Management",
    "AI-enabled technology delivery",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Badou Franck", url: siteUrl }],
  creator: "Badou Franck",
  openGraph: {
    title,
    description: socialDescription,
    url: siteUrl,
    siteName: "Badou Franck",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Badou Franck — technology delivery leadership, multiplied by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
