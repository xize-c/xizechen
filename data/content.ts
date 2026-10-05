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
  name: "Xize(Zee) Chen  陈熙泽",
  photo: "/images/me.jpg",
  school: "University of California San Diego",
  major: "Computer Science, CSE",
  email: "xic131@ucsd.edu",
  email_personal: "xize.chen.dev@gmail.com",
  github: "https://github.com/xize-c",
  linkedin: "https://www.linkedin.com/in/yourname",
  cv: "/cv.pdf", // 放在 public/cv.pdf
  intro: [
    "Hi, I’m Zee, a CS major at UC San Diego. My research interests include Artificial Intelligence, Computer Vision, and Cybersecurity.",
    "I’m currently looking for opportunities to explore research and internship experiences. If you’re interested in collaborating or would like to connect, feel free to reach out to me by email.",
  ],
};

export const news: Item[] = [
  { date: "2026-09", title: "Under Consturction..." },
  { date: "2026-07", title: "Under Consturction..." },
  { date: "2026-05", title: "Under Consturction..." },
  { date: "2026-03", title: "Under Consturction..." },
  { date: "2025-12", title: "Under Consturction..." },
];

export const research: Item[] = [
  { title: "Lab Research Intern", sub: "Prof. Ninghua Zhu, Chinese Academy of Sciences (CAS)", date: "Aug. 2025 – Aug. 2026",
    desc: "Participated in a year-long research project on optoelectronic devices and integrated photonics, observing project development, experimental design, and data-processing workflows.", image: "/images/lab2.jpg" },
  { title: "Student Researcher", sub: "Prof. Guanglai Gao, China Talent Program (YINGCAIJIHUA)", date: "Dec. 2023–Dec. 2024", desc: "Developed an AI classroom note-generation system using ASR, LLMs, and APIs to generate timestamps, summaries, and lecture screenshots. Designed the workflow for video processing, speech-to-text, LLM summarization, and multimodal note generation.", image: "/images/lab1.jpg"},
  { title: "Student Researcher", sub: "Advisor Minglong Li, Stanford Center at Peking University", date: "May. 2024–Jul. 2024", desc: "Achieved an average SSIM and PSNR with DMGI-SSIM in the reported experiments; authored “Optimization of Light Source Structure in Ghost Imaging Based on a Diffusion Model Derived from DDPM.", image: "/images/lab0.jpg"},
];

export const projects: Item[] = [
  { title: "Optimization of Light Source Structure in Ghost Imaging Based on a Diffusion Model Derived from DDPM", sub: "技术栈或角色，如 Python · PyTorch", date: "2025",
    desc: "一两句话说明这个项目做了什么。",
    image: "/images/project1.jpg" },
  { title: "另一个项目", date: "2024", desc: "……" },
];

export const publications: Item[] = [
  
];

export const activities: Item[] = [
  { title: "Teaching Assistant, Course XXX", sub: "XXX University", date: "2025" },
  { title: "Member, XXX Club", date: "2024 – Present", image: "/images/club.jpg" },
];

export const honors: Item[] = [
  { title: "China Association for Science and Technology (CAST) Chairman’s Award (with ¥5000)", sub: "39th China Adolescents Science & Technology Innovation Contest", date: "2025" },
  { title: "GalaxyCore Special Award (with ¥10000)", sub: "Sponsored by GalaxyCore Inc., 39th China Adolescents Science & Technology Innovation Contest", date: "2025" },
  { title: "Platinum Division", sub: "USA Computing Olympiad (USACO)", date: "2026" },
  { title: "Outstanding Scholar in Computer Science (top 80/1800)", sub: "China Talent Program (YINGCAIJIHUA)", date: "2024" },
  { title: "Outstanding Award (Top 10%)", sub: "National Olympiad in AI (NOAI)", date: "2025" },
  { title: "Outstanding Student", sub: "Stanford Center at Peking University", date: "2025" },
];
