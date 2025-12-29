export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Full-Stack Developer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          I’m Sai Kiran Kamugari — a full-stack engineer with 4+ years of
          experience building scalable React, Node.js, and cloud-native
          applications used by millions of users.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl"
          >
            View Projects
          </a>
          <a
            href="/Sai_Kiran_Kamugari_Resume.pdf"
            download
            className="px-6 py-3 border rounded-xl"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl text-gray-700 dark:text-gray-300">
          I specialize in full-stack and platform engineering, with deep
          experience in Server-Driven UI, backend SDKs, and cloud
          infrastructure. I enjoy building systems that improve performance,
          developer velocity, and reliability at scale.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          <li>React / Next.js</li>
          <li>Node.js / TypeScript</li>
          <li>Java / Spring Boot</li>
          <li>AWS / Docker / Kubernetes</li>
          <li>REST / GraphQL</li>
          <li>PostgreSQL / MongoDB</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Server-Driven UI Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Built backend SDKs enabling unified UI delivery across Web, iOS,
              and Android, improving feature rollout speed and developer
              experience.
            </p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Increased development velocity by 25%</li>
              <li>• Reduced UI onboarding time by 35%</li>
              <li>• Used by multiple product teams</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              High-Traffic API Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Designed and optimized REST and GraphQL APIs for ticketing and
              membership systems serving millions of users.
            </p>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>• Reduced API latency by ~40%</li>
              <li>• Zero downtime during seasonal traffic spikes</li>
              <li>• Deployed on AWS EKS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        <div className="space-y-8 border-l pl-6">
          <div>
            <h3 className="text-xl font-semibold">
              Full-Stack Developer — Universal Studios
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Aug 2023 – Present | Atlanta, GA
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>
                Built scalable React and Node.js features for high-traffic
                consumer platforms.
              </li>
              <li>
                Engineered backend SDKs for Server-Driven UI used across Web and
                mobile.
              </li>
              <li>
                Improved API performance by ~40% through query and caching
                optimizations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Software Engineer — Capgemini
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Jun 2020 – Jul 2022 | India
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>
                Developed enterprise applications using React, Node.js, and
                Spring Boot.
              </li>
              <li>
                Increased data throughput by 30% by redesigning backend
                workflows.
              </li>
              <li>Automated QA processes reducing manual effort by 25%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Email:{" "}
          <a
            href="mailto:skkamugari@gmail.com"
            className="text-blue-600 underline"
          >
            skkamugari@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
