import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Entry from "@/components/Entry";
import { news } from "@/data/content";

export const metadata = { title: "All News" };

export default function AllNews() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <p><Link href="/">← Back</Link></p>
        <section>
          <h2>All News</h2>
          <ul className="list">
            {news.map((n, i) => <Entry key={i} item={n} />)}
          </ul>
        </section>
      </main>
    </>
  );
}