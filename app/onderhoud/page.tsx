import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Onderhoud van tuinen",
  description:
    "Onderhoud door Hoveniersbedrijf Felix Ikink: snoeien, zagen, maaien, gazons, planten, zaaien en kweken. Hagen in verschillende knipwijzen.",
};

const knippen = ["hagen-07", "hagen-02", "hagen-04", "hagen-05", "hagen-10", "hagen-06"];
const knipSpans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-5",
  "md:col-span-7",
];

export default function OnderhoudPage() {
  const shears = photoById("hagen-11");
  return (
    <PageMain>
      <Hedge grow>
        <div className="grid items-start md:grid-cols-12">
          <div className="p-5 md:col-span-7 md:p-8">
            <h1>Onderhoud van tuinen</h1>
            <p className="mt-4">{content.copy.onderhoudIntro}</p>
            <p className="mt-4">
              <Link href="/projecten/vorm-en-hagensnoei" className="link">
                Alle foto’s van de hagen
              </Link>
            </p>
          </div>
          <div className="md:col-span-5">
            <SiteImage photo={photoById("hagen-07")} sizes="(min-width: 768px) 40vw, 100vw" preload />
          </div>
        </div>
      </Hedge>

      <Path label="KNIPWIJZEN" />

      <Hedge beds>
        <ul className="grid grid-cols-1 items-start gap-3 md:grid-cols-12">
          {knippen.map((id, index) => {
            const photo = photoById(id);
            return (
              <li key={id} className={`hedge-inner ${knipSpans[index]}`}>
                <SiteImage photo={photo} sizes="(min-width: 768px) 40vw, 100vw" />
                <p className="p-4 text-[1.0625rem]">{photo.blik}</p>
              </li>
            );
          })}
        </ul>
      </Hedge>

      <div className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        {content.copy.onderhoud.map((block, index) => (
          <div key={block.title} className={index === 0 ? "md:col-span-12" : "md:col-span-6"}>
            <Hedge>
              <div className={index === 0 ? "grid items-start md:grid-cols-12" : "p-5"}>
                {index === 0 ? (
                  <>
                    <div className="p-5 md:col-span-7 md:p-6">
                      <h2>{block.title}</h2>
                      <p className="mt-3">{block.text}</p>
                    </div>
                    <div className="md:col-span-5">
                      <SiteImage photo={shears} sizes="(min-width: 768px) 36vw, 100vw" />
                      <p className="p-4 text-[1.0625rem]">{shears.blik}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2>{block.title}</h2>
                    <p className="mt-3">{block.text}</p>
                  </>
                )}
              </div>
            </Hedge>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
