export default function PortfolioBackend() {
  const skills = [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Fastify",
    "Express",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma ORM",
    "Drizzle ORM",
    "Jest",
    "Vitest",
    "Git",
    "API REST",
  ];

  const capabilities = [
    {
      id: "01",
      title: "APIs organizadas",
      text: "Criação de APIs REST com rotas bem estruturadas, separação de responsabilidades e regras de negócio claras.",
    },
    {
      id: "02",
      title: "Banco de dados",
      text: "Modelagem, consultas e integração com PostgreSQL, MySQL e MongoDB em aplicações reais e projetos de estudo.",
    },
    {
      id: "03",
      title: "Validação e testes",
      text: "Uso de validação de dados, tratamento de erros e testes automatizados para manter o código mais previsível.",
    },
    {
      id: "04",
      title: "Integrações externas",
      text: "Consumo e processamento de APIs externas com foco em desempenho, reaproveitamento de dados e manutenção simples.",
    },
  ];

  const stats = [
    { label: "foco", value: "back-end" },
    { label: "stack", value: "node + ts" },
    { label: "banco", value: "sql + nosql" },
    { label: "objetivo", value: "primeira oportunidade" },
  ];

  const projects = [
    {
      title: "Steam ASC",
      badge: "destaque",
      description:
        "Plataforma que analisa jogos da Steam e organiza títulos por dificuldade de completar 100%, com foco em processamento de dados, cache e integração com API externa.",
      stack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Jest",
        "Steam Web API",
        "Tailwind CSS",
      ],
      challenge:
        "Receber diferentes formatos de perfil Steam e transformar isso em consultas consistentes e rápidas.",
      solution:
        "Implementei resolução de SteamID, cache persistente em banco, separação por camadas e processamento centralizado para reduzir consultas repetidas.",
      result:
        "Melhor organização da lógica, reaproveitamento do cache e experiência mais eficiente para o usuário.",
      github: "https://github.com/luaviduedo/TSsteam-asc",
      live: "https://steamasc.vercel.app/",
    },
    {
      title: "API REST com Node.js",
      badge: "back-end",
      description:
        "Projeto de API voltado para cadastro, consulta e validação de dados, com foco em organização de rotas, regras de negócio e integração com banco.",
      stack: ["Node.js", "TypeScript", "Fastify", "Zod", "PostgreSQL"],
      challenge: "Estruturar uma API escalável e fácil de manter.",
      solution:
        "Separei responsabilidades entre rotas, serviços e validações para deixar o código mais limpo e previsível.",
      result: "Base sólida para evolução do projeto e manutenção mais simples.",
      github: "#",
      live: "#",
    },
  ];

  const asciiHero = String.raw`
┌──────────────────────────────┐
│                              │
│        status: online        │
│                              │
└──────────────────────────────┘`;

  const asciiTree = String.raw`.
├─ back-end
├─ apis
├─ bancos-de-dados
├─ testes
└─ integracoes`;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black font-mono text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_2px,transparent_4px)]" />
        <div className="absolute inset-0 opacity-[0.05] [background:linear-gradient(90deg,rgba(255,255,255,0.06),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[24px] border border-white/15 bg-[#080808] px-4 py-4 backdrop-blur-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-[#101010] text-sm font-bold shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                LV
              </div>
              <div>
                <p className="text-sm tracking-wide">[ luã viduedo ]</p>
                <p className="text-xs text-white/55">desenvolvedor back-end</p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-white/75">
              <a href="#about" className="transition hover:text-white">
                sobre
              </a>
              <a href="#skills" className="transition hover:text-white">
                habilidades
              </a>
              <a href="#projects" className="transition hover:text-white">
                projetos
              </a>
              <a href="#contact" className="transition hover:text-white">
                contato
              </a>
            </nav>
          </div>
        </header>

        <section className="mt-6 rounded-[32px] border border-white/15 bg-[#080808] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-[#101010] px-3 py-1 text-xs text-white/70 shadow-[0_0_25px_rgba(255,255,255,0.05)]">
                $ portfolio
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                sobre mim
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-white/75 sm:text-base">
                Sou Luã Viduedo, desenvolvedor com foco em back-end. Construo
                APIs, regras de negócio, integrações e estruturas de dados com
                organização, clareza e preocupação com evolução do sistema.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com/luaviduedo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white px-4 py-2.5 text-black transition hover:scale-[1.02]"
                >
                  [ github ]
                </a>
                <a
                  href="https://linkedin.com/in/luaviduedo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-[#101010] px-4 py-2.5 transition hover:bg-white hover:text-black"
                >
                  [ linkedin ]
                </a>
                <a
                  href="mailto:luaviduedo@gmail.com"
                  className="rounded-2xl border border-white/15 bg-[#101010] px-4 py-2.5 transition hover:bg-white hover:text-black"
                >
                  [ email ]
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[104px] flex-col justify-between rounded-2xl border border-white/12 bg-[#0b0b0b] px-4 py-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                  >
                    <p className="text-base font-bold leading-6 text-white sm:text-lg">
                      {item.value}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/45">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-[#050505] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  terminal
                </span>
              </div>

              <pre className="overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-emerald-200/90 sm:text-sm">
                {asciiHero}
              </pre>

              <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-white/72">
                <p>
                  <span className="text-white">$</span> quemsoueu
                </p>
                <p className="text-white/90">
                  Luã Viduedo · Desenvolvedor Back-end
                </p>
                <p>
                  <span className="text-white">$</span> stack --principal
                </p>
                <p className="text-white/90">
                  Node.js, TypeScript, PostgreSQL, API REST
                </p>
                <p>
                  <span className="text-white">$</span> projeto --destaque
                </p>
                <p className="text-white/90">Steam ASC</p>
                <p>
                  <span className="text-white">$</span> status
                </p>
                <p className="text-emerald-300">pronto_para_construir = true</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-[28px] border border-white/15 bg-[#080808] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <p className="text-sm text-white/55">$ ls secoes/</p>
            <h2 className="mt-3 text-2xl font-bold">sobre</h2>
            <pre className="mt-6 text-xs leading-5 text-white/65 sm:text-sm">
              {asciiTree}
            </pre>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-[#080808] p-6 text-sm leading-8 text-white/75 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:text-base">
            <p>
              Sou formado em Engenharia de Software e estou buscando uma
              oportunidade para atuar na área de tecnologia com foco principal
              em desenvolvimento back-end.
            </p>
            <p className="mt-4">
              Gosto de construir APIs, modelar bancos de dados, integrar
              serviços externos e organizar regras de negócio de forma
              reutilizável, clara e fácil de manter.
            </p>
            <p className="mt-4">
              Meu objetivo é crescer profissionalmente contribuindo com sistemas
              bem estruturados, performáticos e preparados para evoluir.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="mt-6 rounded-[32px] border border-white/15 bg-[#080808] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-8"
        >
          <p className="text-sm text-white/55">$ tree habilidades/</p>
          <h2 className="mt-3 text-2xl font-bold">habilidades e capacidades</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.id}
                className="rounded-[24px] border border-white/12 bg-[#0a0a0a] p-5 transition hover:-translate-y-1 hover:bg-black/50"
              >
                <p className="text-xs text-white/45">[{item.id}]</p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-white/12 bg-[#0a0a0a] p-5">
            <p className="text-sm text-white/55">$ cat stack-tecnologica.txt</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/12 bg-[#111111] px-3 py-1.5 text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mt-6 rounded-[32px] border border-white/15 bg-[#080808] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-8"
        >
          <p className="text-sm text-white/55">
            $ grep -r &quot;destaque&quot; projetos/
          </p>
          <h2 className="mt-3 text-2xl font-bold">projetos</h2>

          <div className="mt-8 grid gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-[26px] border border-white/12 bg-[#0a0a0a] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs text-white/45">
                      projeto_{index + 1} :: {project.badge}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/78">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/12 bg-[#101010] px-4 py-2 transition hover:bg-white hover:text-black"
                    >
                      [ github ]
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/12 bg-white px-4 py-2 text-black transition hover:scale-[1.02]"
                    >
                      [ ver projeto ]
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs sm:text-sm">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-[#111111] px-3 py-1.5 text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-[22px] border border-white/12 bg-[#080808] p-4">
                    <p className="text-xs text-white/45">desafio.md</p>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/12 bg-[#080808] p-4">
                    <p className="text-xs text-white/45">solucao.md</p>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {project.solution}
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/12 bg-[#080808] p-4">
                    <p className="text-xs text-white/45">resultado.md</p>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {project.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-6 rounded-[32px] border border-white/15 bg-[#080808] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8"
        >
          <p className="text-sm text-white/55">
            $ echo &quot;vamos conversar&quot;
          </p>
          <h2 className="mt-3 text-2xl font-bold">contato</h2>

          <div className="mt-6 rounded-[24px] border border-white/12 bg-[#0a0a0a] p-5 sm:p-6">
            <pre className="inline-block overflow-x-auto whitespace-pre text-xs leading-5 text-white/70 sm:text-sm">
              {String.raw`┌──────────────────────────────┐
│ disponivel para vagas        │
│ backend e fullstack          │
│ remoto ou presencial         │
└──────────────────────────────┘`}
            </pre>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
              Estou em busca de uma oportunidade para atuar com desenvolvimento
              back-end | fullstack e contribuir com soluções bem estruturadas,
              eficientes e escaláveis.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:luaviduedo@gmail.com"
                className="rounded-2xl border border-white/12 bg-white px-4 py-2 text-black transition hover:scale-[1.02]"
              >
                [ luaviduedo@gmail.com ]
              </a>
              <a
                href="https://linkedin.com/in/luaviduedo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/12 bg-[#101010] px-4 py-2 transition hover:bg-white hover:text-black"
              >
                [ linkedin ]
              </a>
              <a
                href="https://github.com/luaviduedo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/12 bg-[#101010] px-4 py-2 transition hover:bg-white hover:text-black"
              >
                [ github ]
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
