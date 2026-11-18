import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Werkzaamheden",
  description:
    "Werkzaamheden van Hoveniersbedrijf Felix Ikink: onderhoud, aanleg, renovatie, materialen, snoei, planten, gazons, vijvers, erfafscheiding, opruimen en advies.",
};

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-12",
];

export default function WerkzaamhedenPage() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Werkzaamheden</h1>
          <p className="mt-4 max-w-3xl">
            Alles op het gebied van tuinen, aanleg en onderhoud, voor particulieren en bedrijven. Ook levering van materialen, en opruimwerk of kleine klussen die niet bij de tuin horen.
          </p>
        </div>
      </Hedge>
      <ul className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        {content.works.map((work, index) => (
          <li key={work.label} className={spans[index]}>
            <Hedge>
              <div className="p-5">
                <h2>{work.label}</h2>
                <p className="mt-3">{work.text}</p>
                {work.href ? (
                  <p className="mt-4">
                    <Link href={work.href} className="link">
                      Lees verder
                    </Link>
                  </p>
                ) : null}
              </div>
            </Hedge>
          </li>
        ))}
      </ul>
      <div className="mt-6 max-w-3xl">
        <p>
          Ook voor opruimwerkzaamheden en kleine (niet tuingerelateerde) klussen, buiten of binnen, kunt u contact opnemen.
        </p>
        <div className="mt-4">
          <ContactSentence />
        </div>
      </div>
    </PageMain>
  );
}
