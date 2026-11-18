import type { Metadata } from "next";
import Link from "next/link";
import { photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Onderhoud van tuinen",
  description:
    "Onderhoud door Hoveniersbedrijf Felix Ikink: snoeien, zagen, maaien, gazons, planten, zaaien en kweken.",
};

const blocks = [
  {
    title: "Snoeien, zagen en maaien",
    text: "Hagen, heesters, bomen en gras. De vorm volgt de haag die er staat: laag en in vakken, of hoog en strak langs een huis.",
  },
  {
    title: "Gazons",
    text: "Maaien en het bijhouden van bestaand gazon. Nieuwe gazons horen bij aanleg en renovatie; een vaste maaifrequentie staat hier niet.",
  },
  {
    title: "Planten, zaaien en kweken",
    text: "Nieuwe planten, zaaien en kweken. Welke soorten, spreekt u af. Een plantenlijst staat niet op deze site.",
  },
];

export default function OnderhoudPage() {
  const photos = ["hagen-07", "hagen-05", "hagen-11", "hagen-06"].map(photoById);
  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-7">
          <Hedge grow>
            <div className="p-5 md:p-8">
              <h1>Onderhoud van tuinen</h1>
              <p className="mt-4">
                Onderhoud van tuinen: snoeien, zagen en maaien, gazons, en planten, zaaien en kweken. Voor particulieren en voor bedrijven.
              </p>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={photos[0]} sizes="(min-width: 768px) 40vw, 100vw" />
          </Hedge>
        </div>
        {blocks.map((block, index) => (
          <div key={block.title} className={index === 2 ? "md:col-span-12" : "md:col-span-6"}>
            <Hedge>
              <div className="p-5">
                <h2>{block.title}</h2>
                <p className="mt-3">{block.text}</p>
              </div>
            </Hedge>
          </div>
        ))}
        <div className="md:col-span-7">
          <Hedge>
            <SiteImage photo={photos[1]} sizes="(min-width: 768px) 55vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={photos[2]} sizes="(min-width: 768px) 40vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-4">
          <Hedge>
            <SiteImage photo={photos[3]} sizes="(min-width: 768px) 32vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-8">
          <Hedge>
            <div className="p-5">
              <h2>Vorm- en hagensnoei</h2>
              <p className="mt-3">
                Diverse foto’s van soorten hagen en knipwijzen staan bij elkaar op de projectpagina.
              </p>
              <p className="mt-4">
                <Link href="/projecten/vorm-en-hagensnoei" className="link">
                  Bekijk de hagen
                </Link>
              </p>
            </div>
          </Hedge>
        </div>
      </div>
      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
