export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold">Xize Chen</div>

        <div className="flex gap-6 text-sm text-zinc-600">
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
          <a href="#experience" className="hover:text-black">
            Experience
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-5xl items-center px-6">
        <div>
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Computer Science @ UC San Diego
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I&apos;m Xize.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I&apos;m a Computer Science student interested in software
            engineering, artificial intelligence, and hardware.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View My Work
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">About Me</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            I&apos;m a first-year Computer Science student at UC San Diego.
            I enjoy building software, exploring AI, and working on projects
            that connect software with hardware.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-200 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-xl font-semibold">
                Autonomous Blimp
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Led a team to build a helium-powered blimp using Arduino,
                Bluetooth communication, and propellers for remote control.
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                Arduino · Bluetooth · Hardware
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-xl font-semibold">
                Personal Portfolio
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                A personal website built with Next.js, TypeScript, and
                Tailwind CSS.
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                Next.js · TypeScript · Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-zinc-200 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Experience</h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Research Intern
              </h3>
              <p className="mt-1 text-zinc-500">
                Institute of Semiconductors, Chinese Academy of Sciences
              </p>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-600">
                Worked on optoelectronic devices and integrated photonics,
                including experimental data processing and analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Founder & President
              </h3>
              <p className="mt-1 text-zinc-500">
                Hohhot No.2 High School Computer Science Club
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Let&apos;s Connect</h2>

          <p className="mt-4 text-zinc-600">
            Feel free to reach out or connect with me online.
          </p>

          <div className="mt-6 flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8">
        <div className="mx-auto max-w-5xl text-sm text-zinc-500">
          © 2026 Xize Chen. All rights reserved.
        </div>
      </footer>
    </main>
  );
}