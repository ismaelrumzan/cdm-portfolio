import { Button } from "@/components/ui/button";
import { Mail } from "react-feather";
import Link from "next/link";

export function Footer() {
  return (
    <section className="py-5 bg-[#A6B8C4] dark:bg-[#6C7377]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold dark:text-gray-100 text-[#0D0E10]">
              Location
            </h2>
            <div className="text-sm">Based in Edmonton, Alberta, Canada</div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl text-right font-bold dark:text-gray-100 text-[#0D0E10]">
                Contact Us
              </h2>
              <div className="flex gap-2">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-gray-700">
                    <Mail />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
