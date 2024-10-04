import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
export function Header() {
  return (
    <section className="py-2 bg-white dark:bg-[#0D0E10] sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          <div>
            <Link href="/" className="w-fit">
              <Image
                src="/lawh-logo.png"
                height={10}
                width={50}
                alt="Cordoba Digital Media"
              />
            </Link>
          </div>
          <nav className="hidden md:flex md:grow justify-end items-center">
            <Link href="mailto:ismael@cordobadigitalmedia.com" target="_blank">
              <Button variant="link">Contact</Button>
            </Link>
          </nav>
          <div className="grow flex justify-end md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
