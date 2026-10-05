import Sidebar from "@/components/Sidebar";
import NewsList from "@/components/NewsList";
import Section from "@/components/Section";
import { profile, research, projects, publications, activities, honors } from "@/data/content";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <section id="about">
          {profile.intro.map((p, i) => <p key={i} className="intro">{p}</p>)}
        </section>
        <NewsList />
        <Section id="research" title="Research Experiences" items={research} />
        <Section id="projects" title="Projects" items={projects} />
        <Section id="publications" title="Publications" items={publications} />
        <Section id="honors" title="Honors and Awards" items={honors} />
        <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
      </main>
    </>
  );
}
