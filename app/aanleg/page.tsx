import type { Metadata } from "next";
import Link from "next/link";
import { photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Aanleg van tuinen",
  description:
    "Aanleg van tuinen door Hoveniersbedrijf Felix Ikink in Winterswijk: van ontwerp tot terras, pad en beplanting.",
};

export default function AanlegPage() {
  const photos = ["terras-10", "terras-03", "werk-staand", "terras-04"].map(photoById);
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Aanleg van tuinen</h1>
          <p className="mt-4 max-w-3xl">
            Aanleg van tuinen hoort bij het werk van Hoveniersbedrijf Felix Ikink, van ontwerp tot aanleg. Dat geldt voor particulieren en voor bedrijven.
          </p>
          <p className="max-w-3xl">
            Een terras, een pad, een gazon of nieuwe beplanting: u bespreekt wat er moet komen. Het lounge-terras is daar een voorbeeld van. De foto’s van dat project lopen van zandbed tot terras; steen en maat staan op de projectpagina.
          </p>
        </div>
      </Hedge>

      <div className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-7">
          <Hedge>
            <SiteImage photo={photos[0]} sizes="(min-width: 768px) 58vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={photos[1]} sizes="(min-width: 768px) 40vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={photos[2]} sizes="(min-width: 768px) 40vw, 100vw" />
            <p className="p-4 text-[1.0625rem]">
              Een ander terras in uitvoering, met gemengde tegels. Dit is niet het lounge-terras.
            </p>
          </Hedge>
        </div>
        <div className="md:col-span-7">
          <Hedge>
            <SiteImage photo={photos[3]} sizes="(min-width: 768px) 58vw, 100vw" />
          </Hedge>
        </div>
      </div>

      <p className="mt-6">
        <Link href="/projecten/lounge-terras" className="link">
          Alle foto’s van het lounge-terras
        </Link>
      </p>
      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
