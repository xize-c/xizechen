import type { Item } from "@/data/content";
import Entry from "./Entry";

export default function Section({ id, title, items }: { id: string; title: string; items: Item[] }) {
  if (!items.length) return null;
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ul className="list">{items.map((it, i) => <Entry key={i} item={it} />)}</ul>
    </section>
  );
}
