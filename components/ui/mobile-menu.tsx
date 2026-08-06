import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { MenuIcon, CircleX, Home, FolderOpen, PenLine, Mail } from "lucide-react";
import { Button } from "./button";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#projects", label: "Projects", icon: FolderOpen },
  { href: "/writing", label: "Writing", icon: PenLine },
  {
    href: "mailto:ismael@cordobadigitalmedia.com",
    label: "Contact",
    icon: Mail,
    external: true,
  },
];

export function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="text-olive border-foreground/20"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full bg-stone border-l border-foreground/10">
        <div className="flex justify-end p-3">
          <DrawerClose asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Close menu"
              className="text-olive border-foreground/20"
            >
              <CircleX className="h-5 w-5" />
            </Button>
          </DrawerClose>
        </div>
        <nav className="flex flex-col w-full px-4 gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const button = (
              <Button
                className="w-full justify-start h-12 text-base"
                variant={link.external ? "clay" : "secondary"}
              >
                <Icon className="mr-3 h-4 w-4" />
                {link.label}
              </Button>
            );

            return link.external ? (
              <DrawerClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button}
                </Link>
              </DrawerClose>
            ) : (
              <DrawerClose asChild key={link.href}>
                <Link href={link.href} className="w-full">
                  {button}
                </Link>
              </DrawerClose>
            );
          })}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
