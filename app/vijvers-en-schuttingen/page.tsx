import type { Metadata } from "next";
import Link from "next/link";
import { photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";

export const metadata: Metadata = {
  title: "Vijvers en schuttingen",
  description:
    "Vijvers en erfafscheidingen door Hoveniersbedrijf Felix Ikink, onder meer betongaas met hedera. Het vijverwerk op de foto’s is graafwerk.",
};

export default function VijversPage() {
  const fence = ["erfafscheiding-02", "erfafscheiding-07", "erfafscheiding-09"].map(photoById);
  const dig = photoById("natuurlijk-08");
  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-6">
          <Hedge grow>
            <div className="p-5 md:p-8">
              <h1>Vijvers en schuttingen</h1>
              <p className="mt-4">
                Schuttingen en andere erfafscheidingen, en vijvers. Erfafscheiding wordt aangelegd, zoals bijvoorbeeld betongaas met hedera.
              </p>
              <p>
                Voor een vijver begint het bij het graafwerk. Een stuk grond dat natuurlijk wordt ingericht met een grote vijver, gras en beplanting; hier het graaf- en grondwerk. Een afgewerkte vijver staat niet op de foto’s.
              </p>
            </div>
          </Hedge>
        </div>
        <div className="md:col-span-6">
          <Hedge>
            <SiteImage photo={fence[2]} sizes="(min-width: 768px) 48vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-4">
          <Hedge>
            <SiteImage photo={fence[0]} sizes="(min-width: 768px) 32vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-4">
          <Hedge>
            <SiteImage photo={fence[1]} sizes="(min-width: 768px) 32vw, 100vw" />
          </Hedge>
        </div>
        <div className="md:col-span-4">
          <Hedge>
            <SiteImage photo={dig} sizes="(min-width: 768px) 32vw, 100vw" />
            <p className="p-4">Graafwerk voor de geplande vijver. Er staat geen water in de kuil.</p>
          </Hedge>
        </div>
      </div>
      <p className="mt-6 flex flex-col gap-2">
        <Link href="/projecten/erfafscheidingen" className="link">
          Alle foto’s van de erfafscheidingen
        </Link>
        <Link href="/projecten/natuurlijk-gebied" className="link">
          Het graafwerk van het natuurlijke terrein
        </Link>
      </p>
      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
