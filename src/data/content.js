export const data = {
  pt: {
    nav: {
      links: ["Início", "Sobre", "Projetos", "Experiência", "Contato"],
      logoAlt: "Logo com ícone de código",
    },
    hero: {
      greeting: "Boas vindas! Sou",
      name: "Júlia Nicola,",
      role: "desenvolvedora front-end!",
      ctaProjects: "Projetos",
      ctaContact: "Contato",
    },
    about: {
      title: "Sobre mim",
      text: "Sou desenvolvedora front-end sênior formada em Engenharia de Software com mais de 6 anos de experiência na área. Ao longo da minha trajetória participei de projetos com diferentes portes e complexidades, desde pequenas aplicações até soluções mais robustas, nos quais pude obter uma visão ampla sobre arquitetura front-end, qualidade de código e o impacto real que boas decisões técnicas têm no produto final.",
      highlights: [
        {
          emoji: "💜",
          text: "Construindo aplicações web modernas e intuitivas",
        },
        { emoji: "✨", text: "Detalhista, curiosa e sempre aprendendo" },
        {
          emoji: "⚡",
          text: "Focada em desenvolvimento frontend clean, escalável e acessível",
        },
      ],
    },
    stack: {
      title: "Stack",
      items: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Vue",
        "Angular",
        "Sass",
        "Git",
        "Docker",
      ],
    },
    projects: {
      title: "Projetos",
      seeAll: "Ver todos os projetos",
      items: [
        {
          id: 1,
          name: "Music Stats Generator",
          description:
            "Conecte sua conta Last.fm, obtenha estatísticas com base no que você ouve e compartilhe banners incríveis com seus amigos!",
          tech: ["React", "TypeScript", "Next.js"],
          url: "https://music-stats-generator.vercel.app/",
          image: "/projects/cover-music-stats.png",
        },
        {
          id: 2,
          name: "Wheel",
          description:
            "Uma roda interativa para escolher aleatoriamente entre uma lista de opções — perfeita para decisões, sorteios e jogos.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://junicola.github.io/wheel/",
          image: "/projects/cover-wheel.jpg",
        },
        {
          id: 3,
          name: "Let me Ask",
          description:
            "Aplicação web para compartilhar, avaliar e destacar perguntas. Desenvolvido na NLW - Rocketseat.",
          tech: ["React", "TypeScript", "Firebase", "Sass"],
          url: "https://letmeask-fa059.web.app/",
          image: "/projects/cover-let-me-ask.jpg",
        },
        {
          id: 4,
          name: "Grupo ELLP",
          description:
            "Site para compartilhar informações sobre o Grupo ELLP, um projeto de voluntariado focado na educação lúdica de robótica e programação para crianças.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://grupoellp.com.br/",
          image: "/projects/cover-ellp.jpg",
        },
        {
          id: 5,
          name: "Search Zipcode",
          description:
            "Aplicativo de busca de CEP brasileiro — digite um CEP e obtenha rua, bairro, cidade e estado com um clique.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://junicola.github.io/search-zipcode/",
          image: "/projects/cover-cep.jpg",
        },
      ],
    },
    experience: {
      title: "Experiência Profissional",
      items: [
        {
          period: "2021 – Atual",
          role: "Desenvolvedora Frontend Sênior",
          company: "Stefanini Group",
          companyColor: "#8BA9EE",
          dateRange: "Agosto 2021 – Atualmente",
          description:
            "Desenvolvimento de diversos projetos envolvendo front-end web e mobile, principalmente com React, React-Native, Vue, Angular, jQuery, TypeScript, Tailwind e Sass. Participação em metodologias ágeis e gestão de projetos para grandes clientes dos setores de varejo, mobilidade e governo.",
          highlights: [
            "Design System com microfrontends",
            "Performance Web & SEO",
            "Code Reviews & Planejamento",
          ],
          tech: ["React", "Vue", "TypeScript", "Tailwind", "Sass"],
        },
        {
          period: "2020 – 2021",
          role: "Desenvolvedora Frontend",
          company: "Fresh Lab",
          companyColor: "#e096c0",
          dateRange: "Agosto 2020 – Julho 2021",
          description:
            "Desenvolvimento front-end de e-commerces e sites institucionais com WordPress, com foco em SEO, web core vitals, plugins de page building e performance.",
          highlights: [
            "WordPress & SEO",
            "Web Core Vitals",
            "Otimização de Performance",
          ],
          tech: ["WordPress", "JavaScript", "CSS"],
        },
        {
          period: "2019 – 2020",
          role: "Estagiária de Desenvolvimento Web e Mobile",
          company: "Yankton Technologies",
          companyColor: "#b59adf",
          dateRange: "Novembro 2019 – Julho 2020",
          description:
            "Primeiro estágio na área de tecnologia com foco em programação, atuando diretamente em projetos de clientes envolvendo aplicações Android e iOS e aplicações web.",
          highlights: [
            "React Native",
            "Next.js & Node.js",
            "Google Apps Script e Data Studio",
          ],
          tech: ["React Native", "Next.js", "Sass"],
        },
        {
          period: "2018 – 2019",
          role: "Estagiária no DIRPPG",
          company: "UTFPR",
          companyColor: "#d9cdbd",
          dateRange: "Novembro 2018 – Outubro 2019",
          description:
            "Estágio na Diretoria de Pesquisa e Pós-Graduação (DIRPPG) da UTFPR, com auxílio em tarefas administrativas e gerenciamento do banco de dados do setor.",
          highlights: ["Suporte Administrativo", "Gestão de Banco de Dados"],
          tech: ["Microsoft Access"],
        },
      ],
    },
    contact: {
      title: "Entre em contato!",
      subtitle:
        "Vamos conversar?\nEstou sempre aberta a novas oportunidades, projetos e conexões incríveis.",
      closing: "Sinta-se à vontade para me mandar uma mensagem!",
      links: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          handle: "/in/julianicola",
          url: "https://www.linkedin.com/in/junicola/",
        },
        {
          icon: "email",
          label: "Email",
          handle: "julia.nicola@hotmail.com",
          url: "mailto:julia.nicola@hotmail.com",
        },
        {
          icon: "github",
          label: "GitHub",
          handle: "/junicola",
          url: "https://github.com/junicola",
        },
      ],
    },
    footer: "Feito com ♥ por Júlia Nicola • 2026",
  },

  en: {
    nav: {
      links: ["Home", "About", "Projects", "Experience", "Contact"],
      logoAlt: "Logo with code icon",
    },
    hero: {
      greeting: "Welcome! I'm",
      name: "Júlia Nicola,",
      role: "front-end developer!",
      ctaProjects: "Projects",
      ctaContact: "Contact",
    },
    about: {
      title: "About me",
      text: "I'm a senior front-end developer with a Software Engineering degree and over 6 years of experience. Throughout my career I've worked on projects of different sizes and complexities, from small applications to large-scale platforms, gaining a broad perspective on front-end architecture, code quality, and the real impact that good technical decisions have on the final product.",
      highlights: [
        {
          emoji: "💜",
          text: "Building modern and intuitive web applications",
        },
        { emoji: "✨", text: "Detail-oriented, curious and always learning" },
        {
          emoji: "⚡",
          text: "Focused on clean, scalable and accessible frontend development",
        },
      ],
    },
    stack: {
      title: "Stack",
      items: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Vue",
        "Angular",
        "Sass",
        "Git",
        "Docker",
      ],
    },
    projects: {
      title: "Projects",
      seeAll: "See all projects",
      items: [
        {
          id: 1,
          name: "Music Stats Generator",
          description:
            "Connect your LastFm account, get stats based on what you listen to and share cool banners with your friends!",
          tech: ["React", "TypeScript", "Next.js"],
          url: "https://music-stats-generator.vercel.app/",
          image: "/projects/cover-music-stats.png",
        },
        {
          id: 2,
          name: "Wheel",
          description:
            "An interactive spinning wheel to randomly pick from a list of options — perfect for decisions, giveaways, and games.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://junicola.github.io/wheel/",
          image: "/projects/cover-wheel.jpg",
        },
        {
          id: 3,
          name: "Let me Ask",
          description:
            "Web application to share, rate and hightlight questions. Developed at NLW - Rocketseat.",
          tech: ["React", "TypeScript", "Firebase", "Sass"],
          url: "https://letmeask-fa059.web.app/",
          image: "/projects/cover-let-me-ask.jpg",
        },
        {
          id: 4,
          name: "Grupo ELLP",
          description:
            "Website to share information about the Group ELLP, a volunteer project focused on ludic education of robotics and programming for kids.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://grupoellp.com.br/",
          image: "/projects/cover-ellp.jpg",
        },
        {
          id: 5,
          name: "Search Zipcode",
          description:
            "Brazilian zip code lookup app — type a CEP and get street, neighborhood, city, and state in one click.",
          tech: ["JavaScript", "HTML", "CSS"],
          url: "https://junicola.github.io/search-zipcode/",
          image: "/projects/cover-cep.jpg",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          period: "2021 – Present",
          role: "Senior Frontend Developer",
          company: "Stefanini Group",
          companyColor: "#8BA9EE",
          dateRange: "August 2021 – Currently",
          description:
            "Developing numerous projects involving web and mobile front-end, mainly using React, React-Native, Vue, Angular, jQuery, TypeScript, Tailwind, and Sass. Participating in agile methodologies and project management for large clients in retail, mobility, and government.",
          highlights: [
            "Design System with microfrontends",
            "Web Performance & SEO",
            "Code Reviews & Planning",
          ],
          tech: ["React", "Vue", "TypeScript", "Tailwind", "Sass"],
        },
        {
          period: "2020 – 2021",
          role: "Frontend Developer",
          company: "Fresh Lab",
          companyColor: "#e096c0",
          dateRange: "August 2020 – July 2021",
          description:
            "Front-end development for e-commerce and institutional websites using WordPress, gaining knowledge in SEO, web core vitals, page building plugins, and performance.",
          highlights: [
            "WordPress & SEO",
            "Web Core Vitals",
            "Performance Optimization",
          ],
          tech: ["WordPress", "JavaScript", "CSS"],
        },
        {
          period: "2019 – 2020",
          role: "Web and Mobile Development Intern",
          company: "Yankton Technologies",
          companyColor: "#b59adf",
          dateRange: "November 2019 – July 2020",
          description:
            "First technology internship focused on programming, working directly on client projects involving Android and iOS applications and web applications.",
          highlights: [
            "React Native",
            "Next.js & Node.js",
            "Google Apps Script and Data Studio",
          ],
          tech: ["React Native", "Next.js", "Sass"],
        },
        {
          period: "2018 – 2019",
          role: "Intern at DIRPPG",
          company: "UTFPR",
          companyColor: "#d9cdbd",
          dateRange: "November 2018 – October 2019",
          description:
            "Internship at the Directorate of Research and Graduate Studies (DIRPPG) at UTFPR, assisting with administrative tasks and managing the DIRPPG database.",
          highlights: ["Administrative Support", "Database Management"],
          tech: ["Microsoft Access"],
        },
      ],
    },
    contact: {
      title: "Get in touch!",
      subtitle:
        "Let's chat?\nI'm always open to new opportunities, projects and amazing connections.",
      closing: "Feel free to reach out anytime!",
      links: [
        {
          icon: "linkedin",
          label: "LinkedIn",
          handle: "/in/julianicola",
          url: "https://www.linkedin.com/in/junicola/",
        },
        {
          icon: "email",
          label: "Email",
          handle: "julia.nicola@hotmail.com",
          url: "mailto:julia.nicola@hotmail.com",
        },
        {
          icon: "github",
          label: "GitHub",
          handle: "/junicola",
          url: "https://github.com/junicola",
        },
      ],
    },
    footer: "Made with ♥ by Júlia Nicola • 2026",
  },
}
