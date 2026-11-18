import type { Metadata } from "next";
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
        <div className="lg:col-span-4">
          <Hedge grow>
            <div className="p-5 md:p-7">
              <h1>Offerte aanvragen</h1>
              <p className="mt-4">
                Vul in wat u wilt laten doen. Uw mailprogramma opent met alles ingevuld; er wordt niets via deze site verstuurd.
              </p>
              <p className="mt-4">
                Foto’s van uw tuin kunt u in de mail toevoegen. Ook kleine klussen, ook als die niet bij de tuin horen, kunt u in de omschrijving zetten.
              </p>
              <p className="mt-4">
                <a href={content.company.phoneTel} data-cta="bellen" className="mono link">
                  {content.company.phoneDisplay}
                </a>
              </p>
            </div>
          </Hedge>
        </div>
        <div className="lg:col-span-8">
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
