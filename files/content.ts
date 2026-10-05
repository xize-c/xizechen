// 所有内容都在这里改，不用动组件代码
export type Item = {
  title: string;
  sub?: string;       // 机构 / 角色
  date?: string;
  desc?: string;
  link?: string;
  image?: string;     // 放在 public/images/ 下，如 "/images/lab.jpg"
};

export const profile = {
  name: "你的名字",
  photo: "/images/me.jpg",
  school: "你的学校 · 院系",
  email: "you@school.edu",
  github: "https://github.com/yourname",
  linkedin: "https://www.linkedin.com/in/yourname",
  cv: "/cv.pdf", // 放在 public/cv.pdf
  intro: [
    "你好，我是 XXX，目前就读于 XXX 大学 XXX 专业。我的研究兴趣包括 ……",
    "我正在寻找 …… 方向的机会，欢迎通过邮件联系我。",
  ],
};

export const news: Item[] = [
  { date: "2026-09", title: "论文被 XXX 会议接收" },
  { date: "2026-07", title: "加入 XXX 实验室做研究助理" },
  { date: "2026-05", title: "获得 XXX 奖学金" },
  { date: "2026-03", title: "完成 XXX 项目" },
  { date: "2025-12", title: "参加 XXX 研讨会并做报告" },
];

export const research: Item[] = [
  { title: "Research Assistant", sub: "XXX Lab, XXX University", date: "2025 – Present",
    desc: "研究内容简述，一两句话即可。", image: "/images/lab.jpg" },
  { title: "Summer Intern", sub: "XXX Institute", date: "Summer 2025", desc: "……" },
];

export const publications: Item[] = [
  { title: "论文标题", sub: "作者列表（加粗自己）", date: "XXX 2026", link: "https://arxiv.org" },
];

export const activities: Item[] = [
  { title: "Teaching Assistant, Course XXX", sub: "XXX University", date: "2025" },
  { title: "Member, XXX Club", date: "2024 – Present", image: "/images/club.jpg" },
];

export const honors: Item[] = [
  { title: "XXX Scholarship", sub: "XXX University", date: "2025" },
  { title: "Dean's List", date: "2024" },
];
