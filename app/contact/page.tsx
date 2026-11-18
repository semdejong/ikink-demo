import type { Metadata } from "next";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import ContactForm from "@/components/ContactForm";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Hoveniersbedrijf Felix Ikink in Winterswijk: Kortestraat 11, 06 13 68 04 21, info@hovenier-ikink.nl.",
};

export default function ContactPage() {
  const { company } = content;
  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-5">
          <Hedge grow>
            <div className="p-5 md:p-7">
              <h1>Contact</h1>
              <div className="mt-4">
                <ContactSentence />
              </div>
              <p className="mt-4">
                {company.name}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </p>
              <p className="mt-4">
                <a href={company.phoneTel} data-cta="bellen" className="mono link text-[1.2rem]">
                  {company.phoneDisplay}
                </a>
                <br />
                <a href={`mailto:${company.email}`} data-cta="mailen" className="link">
                  {company.email}
                </a>
              </p>
              <p className="mt-5 text-sm">
                KvK {company.kvk}
                <br />
                Btw {company.btw}
              </p>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-7">
          <Hedge>
            <div className="p-5 md:p-7">
              <h2>Stuur een bericht</h2>
              <div className="mt-4">
                <ContactForm email={company.email} />
              </div>
            </div>
          </Hedge>
        </div>
      </div>
    </PageMain>
  );
}
