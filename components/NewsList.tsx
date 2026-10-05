"use client";
import { useState } from "react";
import { news } from "@/data/content";
import Entry from "./Entry";

export default function NewsList() {
  const [open, setOpen] = useState(false);
  const shown = open ? news : news.slice(0, 3);
  return (
    <section id="news">
      <h2>News</h2>
      <ul className="list">{shown.map((n, i) => <Entry key={i} item={n} />)}</ul>
      {news.length > 3 && (
        <button className="more" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "收起" : `展开全部 (${news.length})`}
        </button>
      )}
    </section>
  );
}
