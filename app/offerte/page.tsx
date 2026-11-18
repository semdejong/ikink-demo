import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een offerte aan bij Hoveniersbedrijf Felix Ikink. Het formulier opent uw mailprogramma; er wordt niets via deze site verstuurd.",
};

export default function OffertePage() {
  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-5">
          <Hedge grow>
            <div className="p-5 md:p-7">
              <h1 className="text-[clamp(2.2rem,3.2vw,3.15rem)]">Offerte aanvragen</h1>
              <p className="mt-4">
                Vul in wat u wilt laten doen. Uw mailprogramma opent met alles ingevuld; er wordt niets via deze site verstuurd.
              </p>
              <p className="mt-4">
                Foto’s van uw tuin kunt u in de mail toevoegen. Ook kleine klussen, ook als die niet bij de tuin horen, kunt u in de omschrijving zetten.
              </p>
              <p className="mt-4">
                {content.company.name}
                <br />
                {content.company.street}
                <br />
                {content.company.postalCode} {content.company.city}
              </p>
              <p className="mt-4">
                <a href={content.company.phoneTel} data-cta="bellen" className="mono link">
                  {content.company.phoneDisplay}
                </a>
              </p>
              <h2 className="mt-8">Voorbeelden</h2>
              <ul className="mt-3 space-y-3">
                {content.projects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/projecten/${project.slug}`} className="link">
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Hedge>
        </div>
        <div className="lg:col-span-7">
          <Hedge>
            <div className="p-5 md:p-7">
              <QuoteForm email={content.company.email} works={content.works.map((work) => work.label)} />
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
