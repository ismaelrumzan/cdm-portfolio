import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Portfolio } from "@/components/ui/items";
import { getPortfolioItems } from "@/components/actions/airtable";

export const revalidate = 3600;

export default async function Home() {
  const items = await getPortfolioItems();
  return (
    <>
      <Header />
      <section className="relative w-full h-[90vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="City of Cordoba"
            className="w-full h-full object-cover opacity-60"
            height={720}
            src="/img-yoSgrYhV0LdUeSWpKn4Gx.jpeg"
            style={{
              aspectRatio: "1280/720",
              objectFit: "cover",
            }}
            width={1280}
          />
        </div>
        <div className="relative z-5 text-center text-white max-w-3xl px-4 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
          <h1 className="text-5xl font-bold mb-4">
            Cordoba Digital Media specializes in{" "}
            <span className="text-slate-300">Educational Technology</span>
          </h1>
          <h2 className="text-4xl font-bold mb-4">
            We provide <span className="text-slate-300">effective</span> and{" "}
            <span className="text-slate-300">culturally sensitive</span>{" "}
            solutions for education and training using{" "}
            <span className="text-slate-300">instructional design methods</span>
          </h2>
          <p className="text-xl">We have been in existence since 2002</p>
          <div className="flex justify-center mt-4">
            <Link href="mailto:ismael@cordobadigitalmedia.com" target="_blank">
              <Button size="lg" className="w-fit" variant="secondary">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-200">
        <div className="container mx-auto px-4" id="classes">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#C4503E]">
            Projects
          </h2>
          <Portfolio items={items} />
        </div>
      </section>
      <Footer />
    </>
  );
}
