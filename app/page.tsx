import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Portfolio } from "@/components/ui/items";

export const metadata: Metadata = {
  title: "Educational Technology & Instructional Design",
  description:
    "Cordoba Digital Media builds culturally sensitive educational technology—custom LMS platforms, learning apps, and instructional design for education and training since 2002.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cordoba Digital Media | Educational Technology & Instructional Design",
    description:
      "Effective, culturally sensitive solutions for education and training through instructional design. Portfolio of EdTech projects since 2002.",
    url: "/",
    images: [
      {
        url: "/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg",
        width: 1280,
        height: 720,
        alt: "City of Cordoba — Cordoba Digital Media",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative w-full min-h-[85svh] flex items-end sm:items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              alt="City of Cordoba"
              className="w-full h-full object-cover"
              height={1080}
              src="/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg"
              priority
              width={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/55 to-olive/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-olive/40 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-4 pb-16 pt-28 sm:pb-24 sm:pt-20">
            <div className="max-w-2xl text-stone">
              <p
                className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                Cordoba Digital Media
              </p>
              <h1
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug mb-4 text-stone/95 animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                Educational technology, designed with care
              </h1>
              <p
                className="text-base sm:text-lg text-stone/85 max-w-xl mb-8 leading-relaxed animate-fade-up"
                style={{ animationDelay: "220ms" }}
              >
                Effective, culturally sensitive solutions for education and
                training through instructional design.
              </p>
              <div
                className="animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <Link
                  href="mailto:ismael@cordobadigitalmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="clay">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-foreground/10">
          <div className="container mx-auto max-w-3xl text-center px-4">
            <h2 className="font-display text-2xl sm:text-3xl text-olive mb-4">
              Instructional design for real learning
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              We specialize in Educational Technology—building courses,
              platforms, and learning experiences that respect culture and
              context. Cordoba Digital Media has been helping educators and
              organizations since 2002.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20" id="projects">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl sm:text-4xl text-olive mb-10 sm:mb-12">
              Projects
            </h2>
            <Portfolio />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
