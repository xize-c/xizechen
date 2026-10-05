import type { Item } from "@/data/content";

export default function Entry({ item }: { item: Item }) {
  const title = item.link
    ? <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
    : item.title;
  return (
    <li className="entry">
      <div className="entry-body">
        <div className="entry-head">
          <strong>{title}</strong>
          {item.date && <span className="date">{item.date}</span>}
        </div>
        {item.sub && <div className="muted">{item.sub}</div>}
        {item.desc && <p>{item.desc}</p>}
      </div>
      {item.image && (
        // tabIndex 让手机点按 / 键盘聚焦也能放大
        <span className="thumb" tabIndex={0}>
          <img src={item.image} alt="" loading="lazy" />
          <img className="zoom" src={item.image} alt={item.title} />
        </span>
      )}
    </li>
  );
}
