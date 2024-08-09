import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import {
  MenuIcon,
  CircleX,
  Home,
  Calendar,
  List,
  Ticket,
  MapPin,
  Mail,
} from "lucide-react";
import { Button } from "./button";

export function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button variant="outline" size="icon" className="text-gray-700">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerClose className="flex justify-end pr-3">
          <Button variant="outline" size="icon" className="text-gray-700">
            <CircleX className="h-4 w-4" />
          </Button>
        </DrawerClose>
        <div className="flex flex-col justify-start items-start w-full p-3 gap-2">
          <Link href="/" className="w-full">
            <DrawerClose className="w-full">
              <Button className="w-full" variant="secondary">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </DrawerClose>
          </Link>
          <Link href="/projects" className="w-full">
            <DrawerClose className="w-full">
              <Button className="w-full" variant="secondary">
                <List className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </DrawerClose>
          </Link>
          <Link href="/contact" className="w-full">
            <DrawerClose className="w-full">
              <Button className="w-full" variant="secondary">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </DrawerClose>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
