import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Vier projecten van Hoveniersbedrijf Felix Ikink: lounge-terras, erfafscheidingen, herinrichting van een natuurlijk gebied en vorm- en hagensnoei.",
};

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function ProjectenPage() {
  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <h1>Projecten</h1>
          <p className="mt-4 max-w-3xl">
            Vier werken van Hoveniersbedrijf Felix Ikink, met de foto’s en bijschriften van de eigen site.
          </p>
        </div>
      </Hedge>
      <ul className="mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        {content.projects.map((project, index) => (
          <li key={project.slug} className={spans[index]}>
            <Hedge>
              <Link href={`/projecten/${project.slug}`} className="block">
                <SiteImage
                  photo={project.photos[index === 2 ? project.photos.length - 1 : 0]}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <span className="block p-4">
                  <span className="font-display text-[1.75rem] leading-tight text-aarde">{project.title}</span>
                  <span className="mt-2 block">{project.note ?? project.caption}</span>
                </span>
              </Link>
            </Hedge>
          </li>
        ))}
      </ul>
    </PageMain>
  );
}
