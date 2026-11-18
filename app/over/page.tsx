import type { Metadata } from "next";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Over het bedrijf",
  description:
    "Hoveniersbedrijf Felix Ikink bestaat sinds mei 2013. Opleiding Uitvoerder Hoveniersbedrijf, stages in binnen- en buitenland, daarna zelfstandig in Winterswijk.",
};

export default function OverPage() {
  const { company, extraPhotos, about } = content;
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
            <SiteImage photo={extraPhotos.bus} sizes="(min-width: 768px) 40vw, 100vw" />
            <p className="p-4">De bedrijfsbus, geparkeerd langs een straat.</p>
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
              </div>
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
