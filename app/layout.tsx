import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--serif" });
const sans = Inter({ subsets: ["latin"], variable: "--sans" });

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.name} — ${profile.school}`,
  openGraph: { title: profile.name, description: profile.school, images: [profile.photo] },
};

// 在页面渲染前设置主题，避免闪白
const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
