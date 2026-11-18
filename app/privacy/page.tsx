import type { Metadata } from "next";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Korte toelichting bij deze conceptsite van Sleads voor Hoveniersbedrijf Felix Ikink: cookieloos meetpunt, formulieren openen alleen uw mailprogramma.",
};

export default function PrivacyPage() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="max-w-3xl p-5 md:p-8">
          <h1>Privacy</h1>
          <p className="mt-4">
            Dit is een conceptsite, gemaakt door Sleads om te laten zien hoe een nieuwe site voor {content.company.name} eruit kan zien. Het is niet de officiële website van het hoveniersbedrijf.
          </p>
          <p>
            Op deze conceptsite staat een cookieloos meetscript van Sleads. Dat script zet geen cookies. Formulieren worden niet naar een server van deze site gestuurd: ze openen het mailprogramma op uw apparaat, gericht aan {content.company.email}.
          </p>
          <p>
            De teksten, het adres, het telefoonnummer, het e-mailadres, KvK, btw en de foto’s zijn overgenomen van de openbare site van het bedrijf, om dit concept te vullen. Deze pagina is een toelichting bij het concept, geen privacyverklaring van het hoveniersbedrijf.
          </p>
          <p>
            Voor contact met het hoveniersbedrijf gebruikt u de gegevens op de contactpagina: {content.company.street}, {content.company.postalCode} {content.company.city}, telefoon{" "}
            <a href={content.company.phoneTel} data-cta="bellen" className="link">
              {content.company.phoneDisplay}
            </a>
            , e-mail{" "}
            <a href={`mailto:${content.company.email}`} data-cta="mailen" className="link">
              {content.company.email}
            </a>
            .
          </p>
        </div>
      </Hedge>
    </PageMain>
  );
}
