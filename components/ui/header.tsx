import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "mailto:ismael@cordobadigitalmedia.com", label: "Contact", external: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-stone/85 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/lawh-logo.png"
              height={40}
              width={40}
              alt=""
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-lg sm:text-xl text-olive leading-tight tracking-tight">
              Cordoba Digital Media
            </span>
          </Link>
          <nav className="hidden md:flex grow justify-end items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="clay" size="sm">
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Link key={link.href} href={link.href}>
                  <Button variant="ghost" size="sm" className="text-olive">
                    {link.label}
                  </Button>
                </Link>
              )
            )}
          </nav>
          <div className="grow flex justify-end md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
