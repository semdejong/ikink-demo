import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Werkzaamheden",
  description:
    "Werkzaamheden van Hoveniersbedrijf Felix Ikink: onderhoud, aanleg, renovatie, materialen, snoei, planten, gazons, vijvers, erfafscheiding, opruimen en advies.",
};

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-12",
];

export default function WerkzaamhedenPage() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Werkzaamheden</h1>
          <p className="mt-4 max-w-3xl">
            Alles op het gebied van tuinen, aanleg en onderhoud, voor particulieren en bedrijven. Ook levering van materialen, advies, en opruimwerk of kleine klussen die niet bij de tuin horen.
          </p>
          <p className="max-w-3xl">{content.about[1]}</p>
        </div>
      </Hedge>

      <Path label="VAN ONDERHOUD TOT ADVIES" />

      <ul className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        {content.works.map((work, index) => {
          const photo = work.photoId ? photoById(work.photoId) : null;
          const wide = spans[index]?.includes("span-12") || spans[index]?.includes("span-8") || spans[index]?.includes("span-7");
          return (
            <li key={work.label} className={spans[index]}>
              <Hedge>
                <div className={photo && wide ? "md:grid md:grid-cols-5" : undefined}>
                  <div className={photo && wide ? "p-5 md:col-span-3" : "p-5"}>
                    <h2>
                      {work.label.includes("/") ? (
                        <>
                          {work.label.slice(0, work.label.indexOf("/") + 1)}
                          <wbr />
                          {work.label.slice(work.label.indexOf("/") + 1)}
                        </>
                      ) : (
                        work.label
                      )}
                    </h2>
                    <p className="mt-3">{work.text}</p>
                    {work.href ? (
                      <p className="mt-4">
                        <Link href={work.href} className="link-row">
                          Lees verder
                        </Link>
                      </p>
                    ) : null}
                  </div>
                  {photo && wide ? (
                    <div className="md:col-span-2">
                      <SiteImage photo={photo} sizes="(min-width: 768px) 28vw, 100vw" />
                      <p className="px-4 py-3 text-[1.02rem]">{photo.blik}</p>
                    </div>
                  ) : null}
                </div>
                {photo && !wide ? (
                  <>
                    <SiteImage photo={photo} sizes="(min-width: 768px) 36vw, 100vw" />
                    <p className="px-4 py-3 text-[1.02rem]">{photo.blik}</p>
                  </>
                ) : null}
              </Hedge>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-7">
          <Hedge>
            <div className="p-5">
              <h2>Kleine klussen</h2>
              <p className="mt-3">{content.copy.kleineKlussen}</p>
              <div className="mt-4">
                <ContactSentence />
              </div>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <div className="flex h-full flex-col justify-between gap-4 p-5">
              <p>Voor een prijsopgave vult u in wat u wilt laten doen. Het formulier opent uw mailprogramma.</p>
              <p>
                <Link href="/offerte" data-cta="offerte" className="btn btn-blad">
                  Offerte aanvragen
                </Link>
              </p>
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
