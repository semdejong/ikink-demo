import type { Metadata } from "next";
import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Tuinrenovatie",
  description:
    "Tuinrenovatie door Hoveniersbedrijf Felix Ikink. De herinrichting van een natuurlijk gebied toont het graaf- en grondwerk, nog zonder afgewerkte vijver.",
};

const steps = ["natuurlijk-02", "natuurlijk-03", "natuurlijk-06", "natuurlijk-07", "natuurlijk-04", "natuurlijk-05"];

export default function RenovatiePage() {
  const project = content.projects.find((item) => item.slug === "natuurlijk-gebied");
  const open = photoById("natuurlijk-06");

  return (
    <PageMain>
      <Hedge grow>
        <div className="grid items-start md:grid-cols-2">
          <div className="p-5 md:p-8">
            <h1>Tuinrenovatie</h1>
            {content.copy.renovatie.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="mt-4">
                {paragraph}
              </p>
            ))}
            {project ? <p className="mt-4">{project.note}</p> : null}
          </div>
          <SiteImage photo={open} sizes="(min-width: 768px) 50vw, 100vw" preload />
        </div>
      </Hedge>

      <Path label="HET GRONDWERK" />

      <ol className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12 md:gap-5">
        {steps.map((id, index) => {
          const photo = photoById(id);
          const wide = index % 2 === 0 ? "md:col-span-7" : "md:col-span-5";
          return (
            <li key={id} className={`flex h-full flex-col ${wide}`}>
              <p className="mono mb-2 text-sm text-aarde">{String(index + 1).padStart(2, "0")}</p>
              <Hedge className="h-full flex-1">
                <div className="flex h-full flex-col">
                  <SiteImage photo={photo} sizes="(min-width: 768px) 48vw, 100vw" />
                  <p className="p-4 text-[1.0625rem]">{photo.blik}</p>
                </div>
              </Hedge>
            </li>
          );
        })}
      </ol>

      <div className="mt-5">
        <Hedge>
          <div className="grid items-center gap-4 p-5 md:grid-cols-2 md:p-7">
            <div>
              <h2>Herinrichting natuurlijk gebied</h2>
              <p className="mt-3">{project?.caption}</p>
              <p className="mt-3">{project?.lead}</p>
            </div>
            <p>
              <Link href="/projecten/natuurlijk-gebied" className="btn btn-buxus">
                Alle foto’s van het graafwerk
              </Link>
            </p>
          </div>
        </Hedge>
      </div>

      <div className="mt-6 max-w-3xl">
        <ContactSentence />
      </div>
    </PageMain>
  );
}
