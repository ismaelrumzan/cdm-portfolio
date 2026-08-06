import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Portfolio } from "@/components/ui/items";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Writing & Educational Technology",
  description:
    "Cordoba Digital Media — technical writing for developers and educational technology built with care. Documentation, LMS platforms, and instructional design since 2002.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cordoba Digital Media | Technical Writing & Educational Technology",
    description:
      "Developer documentation and educational technology—writing that clarifies complex systems, products that respect culture and context.",
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
                Technical writing and educational technology
              </h1>
              <p
                className="text-base sm:text-lg text-stone/85 max-w-xl mb-8 leading-relaxed animate-fade-up"
                style={{ animationDelay: "220ms" }}
              >
                User focused documentation and interactive learning
                environments crafted with care and cultural sensitivity
              </p>
              <div
                className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <Link href="/writing">
                  <Button size="lg" variant="clay">
                    View writing
                  </Button>
                </Link>
                <Link href="/#projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-stone/50 text-stone hover:bg-stone/15 hover:text-stone"
                  >
                    View projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-foreground/10">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl sm:text-3xl text-olive mb-3 text-center">
              Two paths, one practice
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              Writing that makes complex systems usable, and development that
              creates effective learning environments.
            </p>
            <div className="grid sm:grid-cols-2 gap-0 max-w-4xl mx-auto border-y border-foreground/10 divide-y sm:divide-y-0 sm:divide-x divide-foreground/10">
              <Link
                href="/writing"
                className="group block py-8 sm:py-10 px-4 sm:px-8 transition-colors hover:bg-sage/15 animate-fade-up"
                style={{ animationDelay: "80ms" }}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-sage mb-3">
                  Writing
                </p>
                <p className="font-display text-xl sm:text-2xl text-olive mb-3 group-hover:text-clay transition-colors">
                  Developer documentation
                </p>
                <p className="text-foreground/75 leading-relaxed mb-5 max-w-sm">
                  Conceptual explanations, tutorials, and references shaped
                  with the Diátaxis framework, together with community
                  engagement.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-olive group-hover:text-clay transition-colors">
                  Explore writing
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
              <Link
                href="/#projects"
                className="group block py-8 sm:py-10 px-4 sm:px-8 transition-colors hover:bg-sage/15 animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-sage mb-3">
                  Development
                </p>
                <p className="font-display text-xl sm:text-2xl text-olive mb-3 group-hover:text-clay transition-colors">
                  Educational technology
                </p>
                <p className="text-foreground/75 leading-relaxed mb-5 max-w-sm">
                  Custom LMS platforms, learning apps, and instructional design
                  for education and training since 2002.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-olive group-hover:text-clay transition-colors">
                  See projects
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </div>
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
