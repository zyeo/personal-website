import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "../../components/ProjectVisual";
import { getProject, projects } from "../../data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zach Yeo — small, useful software in Tokyo" }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="case-study shell">
      <Link className="back-link" href="/#work">← Selected work</Link>
      <header className="case-header">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-intro">{project.intro}</p>
        <div className="case-actions">
          <a href={project.primaryUrl} target="_blank" rel="noreferrer">{project.primaryLabel} ↗</a>
          {project.sourceUrl !== project.primaryUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          )}
        </div>
      </header>

      <div className="case-visual" aria-hidden="true"><ProjectVisual kind={project.visual} /></div>

      <dl className="case-facts">
        {project.facts.map((fact) => (
          <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
        ))}
      </dl>

      <div className="case-body">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <nav className="case-next" aria-label="More projects">
        <p className="eyebrow">Keep looking</p>
        <Link href="/#work">See all selected work →</Link>
      </nav>
    </main>
  );
}
