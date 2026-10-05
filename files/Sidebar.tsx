import { profile } from "@/data/content";
import ThemeToggle from "./ThemeToggle";
import CopyEmail from "./CopyEmail";

export default function Sidebar() {
  return (
    <aside className="side">
      <img className="avatar" src={profile.photo} alt={profile.name} />
      <h1>{profile.name}</h1>
      <p className="muted">{profile.school}</p>
      <CopyEmail email={profile.email} />
      <ul className="links">
        <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={profile.cv} target="_blank" rel="noreferrer">CV</a></li>
      </ul>
      <ThemeToggle />
    </aside>
  );
}
