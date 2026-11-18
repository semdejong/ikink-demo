import type { Metadata } from "next";
import Link from "next/link";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina staat niet op de conceptsite van Hoveniersbedrijf Felix Ikink.",
};

export default function NotFound() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Deze pagina bestaat niet</h1>
          <p className="mt-4 max-w-2xl">
            Het adres hoort niet bij deze site. Ga terug naar de beginpagina, of bel voor tuinwerk.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-buxus">
              Naar de beginpagina
            </Link>
            <a href={content.company.phoneTel} data-cta="bellen" className="btn btn-line">
              Bellen
            </a>
          </div>
        </div>
      </Hedge>
    </PageMain>
  );
}
