import { Button } from "@/components/ui/button";
import { Mail } from "react-feather";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-sage/25 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 max-w-sm">
            <p className="font-display text-xl text-olive">Cordoba Digital Media</p>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Location
            </h2>
            <p className="text-sm text-foreground/80">
              Based in Edmonton, Alberta, Canada
            </p>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h2>
            <Link
              href="mailto:ismael@cordobadigitalmedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="Email Cordoba Digital Media"
                className="text-olive border-foreground/20"
              >
                <Mail size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
