import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { writingOverview, writingSections } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Technical Writing",
  description: writingOverview,
  keywords: [
    "technical writing",
    "developer documentation",
    "Diátaxis",
    "Vercel docs",
    "WAF",
    "CDN",
    "MCP",
    "Vercel Sandbox",
  ],
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: "Technical Writing | Cordoba Digital Media",
    description: writingOverview,
    url: "/writing",
    type: "website",
    images: [
      {
        url: "/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg",
        width: 1280,
        height: 720,
        alt: "Technical writing portfolio — Cordoba Digital Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Writing | Cordoba Digital Media",
    description: writingOverview,
    images: ["/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg"],
  },
};

export default function WritingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-foreground/10">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/30 via-transparent to-moss/20 pointer-events-none" />
          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <p
              className="text-sm uppercase tracking-[0.2em] text-sage mb-4 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              Portfolio
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-olive mb-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Technical Writing
            </h1>
            <p
              className="text-base sm:text-lg text-foreground/80 max-w-2xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {writingOverview}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-14 sm:py-20 space-y-16 sm:space-y-20">
          {writingSections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(sectionIndex, 3) * 80}ms` }}
            >
              <div className="mb-6 sm:mb-8 max-w-2xl">
                <h2 className="font-display text-2xl sm:text-3xl text-olive mb-2">
                  {section.title}
                </h2>
                <p className="text-foreground/75 leading-relaxed">
                  {section.description}
                </p>
              </div>
              <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
                {section.pieces.map((piece) => (
                  <li key={piece.title}>
                    {piece.href ? (
                      <Link
                        href={piece.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-4 py-4 sm:py-5 transition-colors hover:bg-sage/10 -mx-2 px-2 sm:-mx-3 sm:px-3 rounded-sm"
                      >
                        <div className="min-w-0">
                          <span className="font-medium text-olive group-hover:text-clay transition-colors">
                            {piece.title}
                          </span>
                          {piece.note ? (
                            <p className="text-sm text-muted-foreground mt-1">
                              {piece.note}
                            </p>
                          ) : null}
                        </div>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-sage mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </Link>
                    ) : (
                      <div className="py-4 sm:py-5">
                        <span className="font-medium text-olive">
                          {piece.title}
                        </span>
                        {piece.note ? (
                          <p className="text-sm text-muted-foreground mt-1">
                            {piece.note}
                          </p>
                        ) : null}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
