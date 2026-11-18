import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getProject } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import PhotoGrid from "@/components/PhotoGrid";
import Path from "@/components/Path";

export function generateStaticParams() {
  return content.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.note ? `${project.caption} ${project.note}` : project.caption,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = content.projects.findIndex((item) => item.slug === project.slug);
  const previous = content.projects[index - 1];
  const next = content.projects[index + 1];

  return (
    <PageMain>
      <Hedge grow>
        <div className="p-5 md:p-8">
          <p className="mb-3">
            <Link href="/projecten" className="link">
              Alle projecten
            </Link>
          </p>
          <h1>{project.title}</h1>
          {project.specs ? null : <p className="mt-4 max-w-3xl">{project.caption}</p>}
          {project.specs ? (
            <ul className="mono mt-4 space-y-1 text-[0.95rem] text-inkt">
              {project.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          ) : null}
          {project.note ? <p className="mt-4 max-w-3xl">{project.note}</p> : null}
          <p className="mt-4 max-w-3xl">{project.lead}</p>
        </div>
      </Hedge>

      <Path label={`${String(project.photos.length).padStart(2, "0")} FOTO’S`} />

      <PhotoGrid photos={project.photos} />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-4">
          {previous ? (
            <Hedge>
              <Link href={`/projecten/${previous.slug}`} className="block h-full p-4">
                <span className="mono text-sm text-aarde">Vorige</span>
                <span className="mt-2 block font-display text-2xl text-aarde">{previous.title}</span>
              </Link>
            </Hedge>
          ) : (
            <Hedge>
              <Link href="/projecten" className="block h-full p-4">
                <span className="mono text-sm text-aarde">Overzicht</span>
                <span className="mt-2 block font-display text-2xl text-aarde">Alle projecten</span>
              </Link>
            </Hedge>
          )}
        </div>
        <div className="md:col-span-4">
          <Hedge>
            <Link href={project.relatedHref} className="block h-full p-4">
              <span className="mono text-sm text-aarde">Bij dit werk</span>
              <span className="mt-2 block font-display text-2xl text-aarde">{project.relatedLabel}</span>
            </Link>
          </Hedge>
        </div>
        <div className="md:col-span-4">
          {next ? (
            <Hedge>
              <Link href={`/projecten/${next.slug}`} className="block h-full p-4">
                <span className="mono text-sm text-aarde">Volgende</span>
                <span className="mt-2 block font-display text-2xl text-aarde">{next.title}</span>
              </Link>
            </Hedge>
          ) : (
            <Hedge>
              <Link href="/offerte" data-cta="offerte" className="block h-full p-4">
                <span className="mono text-sm text-aarde">Verder</span>
                <span className="mt-2 block font-display text-2xl text-aarde">Offerte aanvragen</span>
              </Link>
            </Hedge>
          )}
        </div>
      </div>
    </PageMain>
  );
}
