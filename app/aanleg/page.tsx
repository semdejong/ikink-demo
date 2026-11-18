import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import Captioned from "@/components/Captioned";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Aanleg van tuinen",
  description:
    "Aanleg van tuinen door Hoveniersbedrijf Felix Ikink in Winterswijk: van ontwerp tot terras, pad en beplanting. Het lounge-terras loopt van zandbed tot terras.",
};

const sequence = ["terras-01", "terras-03", "terras-04", "terras-10"];
const sequenceSpans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-8"];

export default function AanlegPage() {
  const finished = photoById("terras-10");
  const other = photoById("werk-staand");
  const stones = photoById("terras-02");
  const project = content.projects.find((item) => item.slug === "lounge-terras");

  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-7">
          <Hedge grow>
            <div className="p-5 md:p-8">
              <h1>Aanleg van tuinen</h1>
              {content.copy.aanleg.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-4">
                  {paragraph}
                </p>
              ))}
              <p className="mt-5">
                <Link href="/projecten/lounge-terras" className="link">
                  Alle tien foto’s van het lounge-terras
                </Link>
              </p>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={finished} sizes="(min-width: 768px) 42vw, 100vw" preload />
            <p className="p-4 text-[1.0625rem]">{finished.blik}</p>
          </Hedge>
        </div>
      </div>

      <Path label="VAN ZANDBED TOT TERRAS" />

      <Hedge beds>
        <ul className="grid grid-cols-1 items-start gap-3 md:grid-cols-12">
          {sequence.map((id, index) => {
            const photo = photoById(id);
            return (
              <li key={id} className={`hedge-inner ${sequenceSpans[index]}`}>
                <SiteImage photo={photo} sizes="(min-width: 768px) 45vw, 100vw" />
                <p className="p-4 text-[1.0625rem]">
                  <span className="mono mr-2 text-sm text-aarde">{String(index + 1).padStart(2, "0")}</span>
                  {photo.blik}
                </p>
              </li>
            );
          })}
          {project?.specs ? (
            <li className="hedge-inner p-4 md:col-span-5 md:p-5">
              <h2>Maten en materiaal</h2>
              <ul className="mono mt-3 space-y-2 text-[0.95rem]">
                {project.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </li>
          ) : null}
          <li className="hedge-inner md:col-span-7">
            <SiteImage photo={stones} sizes="(min-width: 768px) 50vw, 100vw" />
            <p className="p-4 text-[1.0625rem]">{stones.blik}</p>
          </li>
        </ul>
      </Hedge>

      <div className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-5">
          <Captioned photo={other} sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div className="md:col-span-7">
          <Hedge>
            <div className="p-5 md:p-7">
              <h2>Een ander terras</h2>
              <p className="mt-3">
                Naast het lounge-terras is er een foto van een terras in uitvoering met gemengde grijze en roodbruine tegels, naast een bakstenen muur, met een glazen windscherm. Dat is een ander werk.
              </p>
              <p className="mt-4">
                <Link href="/offerte" data-cta="offerte" className="btn btn-blad">
                  Offerte aanvragen
                </Link>
              </p>
              <div className="mt-5">
                <ContactSentence />
              </div>
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
