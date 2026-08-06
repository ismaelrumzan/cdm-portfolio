import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import "./styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const siteUrl = "https://www.cordobadigitalmedia.com";
const siteName = "Cordoba Digital Media";
const siteDescription =
  "Educational technology and instructional design studio. Effective, culturally sensitive solutions for education and training since 2002.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Educational Technology & Instructional Design`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "educational technology",
    "instructional design",
    "e-learning",
    "LMS",
    "custom learning platforms",
    "technical writing",
    "Cordoba Digital Media",
    "Edmonton",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName,
    title: `${siteName} | Educational Technology & Instructional Design`,
    description: siteDescription,
    images: [
      {
        url: "/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg",
        width: 1280,
        height: 720,
        alt: "Cordoba Digital Media — educational technology studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Educational Technology & Instructional Design`,
    description: siteDescription,
    images: ["/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/lawh-logo.png",
    apple: "/lawh-logo.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${figtree.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
