import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Over het bedrijf",
  description:
    "Hoveniersbedrijf Felix Ikink bestaat sinds mei 2013. Opleiding Uitvoerder Hoveniersbedrijf, stages in binnen- en buitenland, daarna zelfstandig in Winterswijk.",
};

export default function OverPage() {
  const { company, extraPhotos, about, copy } = content;
  const parterre = photoById("hagen-02");
  const hedge = photoById("hagen-08");

  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-7">
          <Hedge grow>
            <div className="p-5 md:p-8">
              <h1>Over het bedrijf</h1>
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={extraPhotos.bus} sizes="(min-width: 768px) 40vw, 100vw" preload />
            <p className="p-4 text-[1.0625rem]">{extraPhotos.bus.blik}</p>
          </Hedge>
        </div>
      </div>

      <Path label="HET PAD NAAR ZELFSTANDIG" />

      <Hedge beds>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.overSteps.map((step, index) => (
            <li key={step.label} className="hedge-inner p-4 md:p-5">
              <p className="mono text-sm text-aarde">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2">{step.label}</h2>
              <p className="mt-2 text-[1.0625rem]">{step.text}</p>
            </li>
          ))}
        </ol>
      </Hedge>

      <div className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="h-full md:col-span-5">
          <Hedge className="h-full">
            <div className="flex h-full flex-col">
              <SiteImage photo={parterre} sizes="(min-width: 768px) 40vw, 100vw" />
              <p className="p-4 text-[1.0625rem]">{parterre.blik}</p>
            </div>
          </Hedge>
        </div>
        <div className="h-full md:col-span-7">
          <Hedge className="h-full">
            <div className="flex h-full flex-col">
              <SiteImage photo={hedge} sizes="(min-width: 768px) 55vw, 100vw" />
              <p className="p-4 text-[1.0625rem]">{hedge.blik}</p>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-12">
          <Hedge>
            <div className="grid gap-6 p-5 md:grid-cols-2 md:p-8">
              <div>
                <h2>Contact</h2>
                <div className="mt-3">
                  <ContactSentence />
                </div>
                <p className="mt-4">
                  <a href={company.phoneTel} data-cta="bellen" className="mono link text-[1.15rem]">
                    {company.phoneDisplay}
                  </a>
                </p>
                <p className="mt-4">
                  <Link href="/offerte" data-cta="offerte" className="btn btn-line">
                    Offerte aanvragen
                  </Link>
                </p>
              </div>
              <div>
                <p>
                  {company.name}
                  <br />
                  {company.street}
                  <br />
                  {company.postalCode} {company.city}
                </p>
                <p className="mt-4 text-sm">
                  KvK {company.kvk}
                  <br />
                  Btw {company.btw}
                </p>
                <p className="mt-4 text-[1.0625rem]">{copy.kleineKlussen}</p>
              </div>
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
