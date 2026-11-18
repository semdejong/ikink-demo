import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import Path from "@/components/Path";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Vier projecten van Hoveniersbedrijf Felix Ikink: lounge-terras, erfafscheidingen, herinrichting van een natuurlijk gebied en vorm- en hagensnoei.",
};

const coverIndex = [6, 1, 6, 1];

export default function ProjectenPage() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Projecten</h1>
          <p className="mt-4 max-w-3xl">
            Vier werken van Hoveniersbedrijf Felix Ikink, met de foto’s en bijschriften van de eigen site. Het lounge-terras loopt van zandbed tot terras. De andere reeksen zijn voorbeelden: erfafscheiding, graafwerk, en verschillende hagen.
          </p>
        </div>
      </Hedge>

      <Path label="DE VIER BEDDEN" />

      <ul className="space-y-5">
        {content.projects.map((project, index) => {
          const photo = project.photos[coverIndex[index]] ?? project.photos[0];
          const flip = index % 2 === 1;
          return (
            <li key={project.slug}>
              <Hedge>
                <Link href={`/projecten/${project.slug}`} className="grid md:grid-cols-12">
                  <span className={`block md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                    <SiteImage photo={photo} sizes="(min-width: 768px) 58vw, 100vw" preload={index === 0} />
                  </span>
                  <span className="block p-5 md:col-span-5 md:p-7">
                    <span className="mono text-sm text-aarde">{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-2 block font-display text-[1.85rem] leading-tight text-aarde">
                      {project.title}
                    </span>
                    <span className="mt-3 block">{project.caption}</span>
                    {project.cardLine ? <span className="mt-3 block">{project.cardLine}</span> : null}
                    <span className="mono mt-4 block text-sm text-aarde">{project.photos.length} foto’s</span>
                  </span>
                </Link>
              </Hedge>
            </li>
          );
        })}
      </ul>
    </PageMain>
  );
}
