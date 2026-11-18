import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getProject } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import PhotoGrid from "@/components/PhotoGrid";

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
          <p className="mt-4 max-w-3xl">{project.caption}</p>
          {project.specs ? (
            <ul className="mono mt-4 space-y-1 text-[0.95rem] text-inkt">
              {project.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          ) : null}
          {project.note ? <p className="mt-4 max-w-3xl">{project.note}</p> : null}
        </div>
      </Hedge>
      <div className="mt-5">
        <PhotoGrid photos={project.photos} />
      </div>
      <nav className="mt-6 flex flex-wrap gap-4" aria-label="Andere projecten">
        {previous ? (
          <Link href={`/projecten/${previous.slug}`} className="btn btn-line">
            Vorige: {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link href={`/projecten/${next.slug}`} className="btn btn-line">
            Volgende: {next.title}
          </Link>
        ) : null}
      </nav>
    </PageMain>
  );
}
