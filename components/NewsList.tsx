"use client";
import Link from "next/link";
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
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
        <button className="more" style={{ marginTop: 0 }} onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Collapse" : "Show more"}
        </button>
      {open && news.length > 5 && (
    <Link href="/news" style={{ fontSize: ".85rem" }}>View all ({news.length})</Link>
    )}
  </div>
)}
    </section>
  );
}
