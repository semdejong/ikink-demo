import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Vijvers en schuttingen",
  description:
    "Erfafscheidingen en vijvers door Hoveniersbedrijf Felix Ikink. Betongaas met hedera, en graafwerk voor een vijver nog zonder water.",
};

const fenceIds = ["erfafscheiding-01", "erfafscheiding-02", "erfafscheiding-07", "erfafscheiding-09"];
const waterIds = ["natuurlijk-05", "natuurlijk-08", "natuurlijk-07"];

export default function VijversPage() {
  return (
    <PageMain>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] md:gap-4">
        <div className="space-y-4">
          <Hedge grow>
            <div className="p-5 md:p-7">
              <h1>Vijvers en schuttingen</h1>
              <p className="mt-4">{content.copy.vijversErf}</p>
              <p className="mt-4">
                <Link href="/projecten/erfafscheidingen" className="link">
                  Alle foto’s van de erfafscheidingen
                </Link>
              </p>
            </div>
          </Hedge>
          {fenceIds.map((id) => {
            const photo = photoById(id);
            return (
              <Hedge key={id}>
                <SiteImage photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
                <p className="p-4 text-[1.0625rem]">{photo.blik}</p>
              </Hedge>
            );
          })}
        </div>

        <div className="hidden min-h-full rounded-[8px] bg-buxus md:block" aria-hidden />

        <div className="space-y-4">
          <div className="md:hidden">
            <Path label="WATER" />
          </div>
          <Hedge>
            <div className="p-5 md:p-7">
              <h2>Vijvers</h2>
              <p className="mt-4">{content.copy.vijversWater}</p>
              <p className="mt-4">{content.projects.find((item) => item.slug === "natuurlijk-gebied")?.caption}</p>
              <p className="mt-4">
                <Link href="/projecten/natuurlijk-gebied" className="link">
                  Het graafwerk van het natuurlijke terrein
                </Link>
              </p>
            </div>
          </Hedge>
          {waterIds.map((id) => {
            const photo = photoById(id);
            return (
              <Hedge key={id}>
                <SiteImage photo={photo} sizes="(min-width: 768px) 46vw, 100vw" />
                <p className="p-4 text-[1.0625rem]">{photo.blik}</p>
              </Hedge>
            );
          })}
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
