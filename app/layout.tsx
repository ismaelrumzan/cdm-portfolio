import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./styles.css";

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson_text",
  weight: ["400", "600", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Cordoba Digital Media",
  description:
    "We specialize in Educational Technology and provide effective andculturally sensitive solutions for education and training using instructional design methods.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={crimson_text.variable + " " + manrope.variable}>
        {children}
      </body>
    </html>
  );
}
