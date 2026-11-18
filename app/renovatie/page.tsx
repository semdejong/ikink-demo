import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Tuinrenovatie",
  description:
    "Tuinrenovatie door Hoveniersbedrijf Felix Ikink: een bestaande tuin opnieuw indelen, te beginnen bij het grondwerk.",
};

export default function RenovatiePage() {
  const project = content.projects.find((item) => item.slug === "natuurlijk-gebied");
  const photos = ["natuurlijk-02", "natuurlijk-03", "natuurlijk-06", "natuurlijk-07"].map(photoById);
  return (
    <PageMain>
      <Hedge grow>
        <div className="grid items-start md:grid-cols-2">
          <div className="p-5 md:p-8">
            <h1>Tuinrenovatie</h1>
            <p className="mt-4">
              Tuinrenovatie is het opnieuw inrichten van een bestaande tuin. Daar horen grondwerk, een nieuwe indeling en beplanting bij.
            </p>
            <p>
              Een voorbeeld is de herinrichting van een natuurlijk gebied. {project?.note}
            </p>
          </div>
          <SiteImage photo={photos[2]} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </Hedge>

      <div className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12">
        <div className="md:col-span-5">
          <Hedge>
            <SiteImage photo={photos[0]} sizes="(min-width: 768px) 40vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-7">
          <Hedge>
            <SiteImage photo={photos[1]} sizes="(min-width: 768px) 55vw, 100vw" />
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
              <h2>Herinrichting natuurlijk gebied</h2>
              <p className="mt-3">{project?.caption}</p>
              <p className="mt-4">
                <Link href="/projecten/natuurlijk-gebied" className="link">
                  Alle foto’s van het graafwerk
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
