import Image from "next/image";
import Link from "next/link";
import ProfileFlip from "./components/pfpFlip";
import ProjectVisual from "./components/ProjectVisual";
import { projects } from "./data/projects";

const experience = [
  {
    role: "Software Engineer",
    company: "Recho",
    period: "Present",
    detail: "Building voice-AI products for enterprise customer operations.",
  },
  {
    role: "AI Tutor",
    company: "xAI",
    period: "2024—2025",
    detail: "Multimodal data annotation for language-model training and evaluation.",
  },
  {
    role: "Software Engineer Intern",
    company: "SPAN",
    period: "2023",
    detail: "Automated data pipelines with Prefect and made operational data legible in Datadog.",
  },
  {
    role: "Software Engineer Intern",
    company: "Trend Micro",
    period: "2021",
    detail: "Built a network-health monitor with ELK and Slack alerts.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zach Yeo",
    url: "https://zachyeo.com",
    image: "https://zachyeo.com/profile_photos/pfp4.jpg",
    jobTitle: "Software Developer",
    homeLocation: { "@type": "Place", name: "Tokyo, Japan" },
    sameAs: [
      "https://github.com/zyeo",
      "https://www.linkedin.com/in/zacharyyeo",
      "https://photos.zachyeo.com",
    ],
    knowsAbout: ["Web development", "Browser extensions", "Automation", "IoT"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Software developer · Tokyo</p>
            <h1 id="hero-heading">
              I make small, useful software for everyday systems.
            </h1>
            <p className="hero-deck">
              I’m Zach. I build focused tools for the things I care about—from
              finding a climbing gym to understanding time spent online.
            </p>
            <div className="hero-links" aria-label="Primary links">
              <a href="#work">Selected work ↓</a>
              <a href="https://github.com/zyeo" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <ProfileFlip />
            <p className="portrait-note">Click to meet Benji.</p>
          </div>
        </section>

        <section className="work-section shell" id="work" aria-labelledby="work-heading">
          <div className="section-heading">
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-heading">Things I’ve made</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.slug}>
                <div className="project-visual-wrap" aria-hidden="true">
                  <ProjectVisual kind={project.visual} />
                </div>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>0{index + 1}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    <Link href={`/work/${project.slug}`}>Read the case study →</Link>
                    <a href={project.primaryUrl} target="_blank" rel="noreferrer">
                      {project.primaryLabel} ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="outside-section" aria-labelledby="outside-heading">
          <div className="outside-grid shell">
            <div className="outside-image">
              <Image
                src="/dark-rock.webp"
                alt="A lone climber silhouetted against a granite wall"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <div className="outside-copy">
              <p className="eyebrow">02 / Away from the keyboard</p>
              <h2 id="outside-heading">I climb and make photographs.</h2>
              <p>
                When I’m not working, I’m often walking around with a camera,
                photographing whatever catches my eye. Here I keep a daily photo
                journal of the places I’ve explored.
              </p>
              <a className="text-link" href="https://photos.zachyeo.com" target="_blank" rel="noreferrer">
                Visit my photography journal ↗
              </a>
            </div>
          </div>
        </section>

        <section className="experience-section shell" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading">
            <p className="eyebrow">03 / Experience</p>
            <h2 id="experience-heading">Places I’ve worked</h2>
          </div>
          <ol className="experience-list">
            {experience.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <p className="experience-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-detail">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-heading">
          <p className="eyebrow">04 / Say hello</p>
          <h2 id="contact-heading">Have a thoughtful project in mind?</h2>
          <p>I’m always happy to talk about useful software, climbing, or a good cup of coffee.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zacharyyeo" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/zyeo" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://photos.zachyeo.com" target="_blank" rel="noreferrer">Photography ↗</a>
          </div>
        </section>
      </main>
    </>
  );
}
