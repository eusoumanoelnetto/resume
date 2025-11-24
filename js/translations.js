// Sistema de Traduções Multilíngue
const translations = {
  pt: {
    objective: "Atuar como Desenvolvedor Full Stack, QA ou Agente de IA, aplicando tecnologia e testes para criar soluções eficientes e inteligentes.",
    role: "IA Agent | Software Engineering Pro | Cybersecurity Student",
    hardSkills: "Hard Skills",
    hardSkillsTitle: "Habilidades Técnicas",
    softSkills: "Soft Skills",
    softSkillsTitle: "Habilidades Blandas",
    skill1: "Pensamento Crítico",
    skill2: "Adaptabilidade",
    skill3: "Resiliência",
    skill4: "Comunicação Eficaz",
    skill5: "Aprendizagem Ativa",
    skill6: "Autonomia",
    skill7: "Iniciativa",
    skill8: "Gestão de projetos",
    skill9: "Resolução de problemas",
    skill10: "Liderança",
    skill11: "Trabalho em equipe",
    skill12: "Docência",
    languages: "Idiomas",
    langPT: "Português - Nativo",
    langES: "Espanhol - Básico",
    langEN: "Inglês - Técnico",
    certificates: "Certificados",
    seeMore: "VER MAIS",
    blackMirrorMode: "Modo Black Mirror",
    experience: "Experiência Profissional",
    education: "Educação",
    projects: "Projetos em Destaque",
    project1Title: "Gerador de Currículos com IA",
    project1Desc: "Gera currículos PDF com inteligência artificial com base nos dados do usuário.",
    project2Title: "Insta Terminal",
    project2Desc: "🧠 Ferramenta de Consulta de Perfis do Instagram via Terminal — Estilo Hacker Black Mirror",
    project3Title: "Portfólio Pessoal com HTML",
    project3Desc: "Este site mesmo! Simples, responsivo e elegante feito com HTML, CSS e W3.CSS.",
    viewProject: "Ver Projeto",
    socialMedia: "Minhas mídias sociais.",
    job1Title: "Suporte Help Desk | www.servcom.com.br",
    job1Period: "Mar 2024 - Set 2024",
    job1Desc1: "Auxiliar na conferência, configuração e manutenção de backup em nuvem. Auxiliar na conferência, configuração e manutenção de espelhamento em servidores.",
    job1Desc2: "Prestar suporte de nível 1 aplicado em demandas de tecnologia.",
    job1Desc3: "Auxiliar na configuração e instalação do banco de dados.",
    job2Title: "Analista de Marketing Digital | Lilipe Festas",
    job2Period: "Jan 2023 - Fev 2024",
    job2Intro: "Responsável por planejar, executar e analisar estratégias de marketing em ambientes digitais com habilidades em:",
    job2Skill1: "Criação e execução de campanhas",
    job2Skill2: "Gerenciamento de redes sociais",
    job2Skill3: "Otimização para mecanismos de busca (SEO)",
    job2Skill4: "Análise de dados",
    job2Skill5: "Criação de conteúdo",
    job2Skill6: "E-mail marketing",
    job2Skill7: "Gerenciamento de tráfego pago",
    job3Title: "Analista de E-commerce | Porão do Alien",
    job3Period: "Jun 2017 - Dez 2023",
    job3Intro: "Responsável por otimizar a loja virtual, melhorar a experiência do cliente e impulsionar as vendas com habilidades em:",
    job3Skill1: "Análise de Dados e Otimização",
    job3Skill2: "Implementação de Estratégias de Marketing Digital",
    job3Skill3: "Gerenciamento da Experiência do Cliente",
    job3Skill4: "Monitoramento de Indicadores de Desempenho",
    job3Skill5: "Pesquisa de Concorrentes e Tendências de Mercado",
    job3Skill6: "Colaboração com Outras Áreas do Negócio",
    edu1Title: "Defesa Cibernética | Uniasselvi",
    edu1Period: "2º Semestre",
    edu1Course1: "Pensamento Computacional",
    edu1Course2: "Introdução à Segurança da Informação",
    edu1Course3: "Fundamentos de Redes de Computadores",
    edu1Course4: "Arquitetura de Computadores",
    edu1Course5: "Paradigmas de Linguagens de Programação em Python",
    edu1Course6: "Segurança em Ambientes Inteligentes e Internet of Things",
    edu1Course7: "Inteligência de Ameaças Cibernéticas",
    edu2Title: "Analista de Operações de Segurança | Microsoft Learn",
    edu2Period: "Cursando",
    edu2Course1: "SC-200: Mitigar ameaças usando o Microsoft Defender XDR",
    edu3Title: "Analista de Cibersegurança Júnior | Cisco Networking Academy",
    edu3Period: "Cursando",
    edu3Course1: "Especialista em recursos",
    edu3Course2: "Defesa de Rede",
    edu3Course3: "Salvaguardas do sistema",
    edu3Course4: "Análise de ameaças",
    edu4Title: "Bootcamp Potência Tech iFood – Programação do Zero | DIO",
    edu4Period: "Cursando",
    edu4Course1: "Testes de Software",
    edu4Course2: "Trabalhando com Testes Automatizados",
    edu4Course3: "Testes de Software com Python"
  },
  en: {
    objective: "Work as a Full Stack Developer, QA, or AI Agent, applying technology and testing to create efficient and intelligent solutions.",
    role: "AI Agent | Software Engineering Pro | Cybersecurity Student",
    hardSkills: "Hard Skills",
    hardSkillsTitle: "Technical Skills",
    softSkills: "Soft Skills",
    softSkillsTitle: "Soft Skills",
    skill1: "Critical Thinking",
    skill2: "Adaptability",
    skill3: "Resilience",
    skill4: "Effective Communication",
    skill5: "Active Learning",
    skill6: "Autonomy",
    skill7: "Initiative",
    skill8: "Project Management",
    skill9: "Problem Solving",
    skill10: "Leadership",
    skill11: "Teamwork",
    skill12: "Teaching",
    languages: "Languages",
    langPT: "Portuguese - Native",
    langES: "Spanish - Basic",
    langEN: "English - Technical",
    certificates: "Certificates",
    seeMore: "SEE MORE",
    blackMirrorMode: "Black Mirror Mode",
    experience: "Professional Experience",
    education: "Education",
    projects: "Featured Projects",
    project1Title: "AI Resume Generator",
    project1Desc: "Generates PDF resumes with artificial intelligence based on user data.",
    project2Title: "Insta Terminal",
    project2Desc: "🧠 Instagram Profile Query Tool via Terminal — Black Mirror Hacker Style",
    project3Title: "Personal Portfolio with HTML",
    project3Desc: "This very site! Simple, responsive and elegant made with HTML, CSS and W3.CSS.",
    viewProject: "View Project",
    socialMedia: "My social media.",
    job1Title: "Help Desk Support | www.servcom.com.br",
    job1Period: "Mar 2024 - Sep 2024",
    job1Desc1: "Assist in checking, configuring and maintaining cloud backups. Assist in checking, configuring and maintaining server mirroring.",
    job1Desc2: "Provide level 1 support applied to technology demands.",
    job1Desc3: "Assist in database configuration and installation.",
    job2Title: "Digital Marketing Analyst | Lilipe Festas",
    job2Period: "Jan 2023 - Feb 2024",
    job2Intro: "Responsible for planning, executing and analyzing marketing strategies in digital environments with skills in:",
    job2Skill1: "Campaign creation and execution",
    job2Skill2: "Social media management",
    job2Skill3: "Search engine optimization (SEO)",
    job2Skill4: "Data analysis",
    job2Skill5: "Content creation",
    job2Skill6: "Email marketing",
    job2Skill7: "Paid traffic management",
    job3Title: "E-commerce Analyst | Porão do Alien",
    job3Period: "Jun 2017 - Dec 2023",
    job3Intro: "Responsible for optimizing the online store, improving customer experience and boosting sales with skills in:",
    job3Skill1: "Data Analysis and Optimization",
    job3Skill2: "Digital Marketing Strategy Implementation",
    job3Skill3: "Customer Experience Management",
    job3Skill4: "Performance Indicator Monitoring",
    job3Skill5: "Competitor Research and Market Trends",
    job3Skill6: "Collaboration with Other Business Areas",
    edu1Title: "Cyber Defense | Uniasselvi",
    edu1Period: "2nd Semester",
    edu1Course1: "Computational Thinking",
    edu1Course2: "Introduction to Information Security",
    edu1Course3: "Computer Networks Fundamentals",
    edu1Course4: "Computer Architecture",
    edu1Course5: "Python Programming Language Paradigms",
    edu1Course6: "Security in Smart Environments and Internet of Things",
    edu1Course7: "Cyber Threat Intelligence",
    edu2Title: "Security Operations Analyst | Microsoft Learn",
    edu2Period: "In Progress",
    edu2Course1: "SC-200: Mitigate threats using Microsoft Defender XDR",
    edu3Title: "Junior Cybersecurity Analyst | Cisco Networking Academy",
    edu3Period: "In Progress",
    edu3Course1: "Resource specialist",
    edu3Course2: "Network Defense",
    edu3Course3: "System safeguards",
    edu3Course4: "Threat analysis",
    edu4Title: "Bootcamp Potência Tech iFood – Programming from Scratch | DIO",
    edu4Period: "In Progress",
    edu4Course1: "Software Testing",
    edu4Course2: "Working with Automated Tests",
    edu4Course3: "Software Testing with Python"
  },
  es: {
    objective: "Actuar como Desarrollador Full Stack, QA o Agente de IA, aplicando tecnología y pruebas para crear soluciones eficientes e inteligentes.",
    role: "Agente IA | Ingeniero de Software Pro | Estudiante de Ciberseguridad",
    hardSkills: "Habilidades Técnicas",
    hardSkillsTitle: "Habilidades Técnicas",
    softSkills: "Habilidades Blandas",
    softSkillsTitle: "Habilidades Blandas",
    skill1: "Pensamiento Crítico",
    skill2: "Adaptabilidad",
    skill3: "Resiliencia",
    skill4: "Comunicación Efectiva",
    skill5: "Aprendizaje Activo",
    skill6: "Autonomía",
    skill7: "Iniciativa",
    skill8: "Gestión de proyectos",
    skill9: "Resolución de problemas",
    skill10: "Liderazgo",
    skill11: "Trabajo en equipo",
    skill12: "Docencia",
    languages: "Idiomas",
    langPT: "Portugués - Nativo",
    langES: "Español - Básico",
    langEN: "Inglés - Técnico",
    certificates: "Certificados",
    seeMore: "VER MÁS",
    blackMirrorMode: "Modo Black Mirror",
    experience: "Experiencia Profesional",
    education: "Educación",
    projects: "Proyectos Destacados",
    project1Title: "Generador de Currículos con IA",
    project1Desc: "Genera currículos PDF con inteligencia artificial basándose en los datos del usuario.",
    project2Title: "Insta Terminal",
    project2Desc: "🧠 Herramienta de Consulta de Perfiles de Instagram vía Terminal — Estilo Hacker Black Mirror",
    project3Title: "Portafolio Personal con HTML",
    project3Desc: "¡Este mismo sitio! Simple, responsivo y elegante hecho con HTML, CSS y W3.CSS.",
    viewProject: "Ver Proyecto",
    socialMedia: "Mis redes sociales.",
    job1Title: "Soporte Help Desk | www.servcom.com.br",
    job1Period: "Mar 2024 - Sep 2024",
    job1Desc1: "Asistir en la verificación, configuración y mantenimiento de copias de seguridad en la nube. Asistir en la verificación, configuración y mantenimiento de réplica de servidores.",
    job1Desc2: "Prestar soporte de nivel 1 aplicado a demandas de tecnología.",
    job1Desc3: "Asistir en la configuración e instalación de la base de datos.",
    job2Title: "Analista de Marketing Digital | Lilipe Festas",
    job2Period: "Ene 2023 - Feb 2024",
    job2Intro: "Responsable de planificar, ejecutar y analizar estrategias de marketing en entornos digitales con habilidades en:",
    job2Skill1: "Creación y ejecución de campañas",
    job2Skill2: "Gestión de redes sociales",
    job2Skill3: "Optimización para motores de búsqueda (SEO)",
    job2Skill4: "Análisis de datos",
    job2Skill5: "Creación de contenido",
    job2Skill6: "Email marketing",
    job2Skill7: "Gestión de tráfico pagado",
    job3Title: "Analista de E-commerce | Porão do Alien",
    job3Period: "Jun 2017 - Dic 2023",
    job3Intro: "Responsable de optimizar la tienda virtual, mejorar la experiencia del cliente e impulsar las ventas con habilidades en:",
    job3Skill1: "Análisis de Datos y Optimización",
    job3Skill2: "Implementación de Estrategias de Marketing Digital",
    job3Skill3: "Gestión de la Experiencia del Cliente",
    job3Skill4: "Monitoreo de Indicadores de Desempeño",
    job3Skill5: "Investigación de Competidores y Tendencias del Mercado",
    job3Skill6: "Colaboración con Otras Áreas del Negocio",
    edu1Title: "Defensa Cibernética | Uniasselvi",
    edu1Period: "2º Semestre",
    edu1Course1: "Pensamiento Computacional",
    edu1Course2: "Introducción a la Seguridad de la Información",
    edu1Course3: "Fundamentos de Redes de Computadoras",
    edu1Course4: "Arquitectura de Computadoras",
    edu1Course5: "Paradigmas de Lenguajes de Programación en Python",
    edu1Course6: "Seguridad en Ambientes Inteligentes e Internet de las Cosas",
    edu1Course7: "Inteligencia de Amenazas Cibernéticas",
    edu2Title: "Analista de Operaciones de Seguridad | Microsoft Learn",
    edu2Period: "En Curso",
    edu2Course1: "SC-200: Mitigar amenazas usando Microsoft Defender XDR",
    edu3Title: "Analista de Ciberseguridad Junior | Cisco Networking Academy",
    edu3Period: "En Curso",
    edu3Course1: "Especialista en recursos",
    edu3Course2: "Defensa de Red",
    edu3Course3: "Salvaguardas del sistema",
    edu3Course4: "Análisis de amenazas",
    edu4Title: "Bootcamp Potência Tech iFood – Programación desde Cero | DIO",
    edu4Period: "En Curso",
    edu4Course1: "Pruebas de Software",
    edu4Course2: "Trabajando con Pruebas Automatizadas",
    edu4Course3: "Pruebas de Software con Python"
  }
};

function changeLanguage(lang) {
  console.log('Mudando idioma para:', lang);
  const elements = document.querySelectorAll('[data-lang]');
  console.log('Elementos encontrados:', elements.length);
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else {
      console.warn('Tradução não encontrada para:', key, 'no idioma:', lang);
    }
  });
  
  // Salvar preferência no localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Remover classe ativa de todos os botões
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active', 'w3-white');
  });
  
  // Adicionar classe ativa apenas ao botão selecionado
  const activeBtn = document.querySelector(`[onclick="changeLanguage('${lang}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  console.log('Idioma alterado com sucesso para:', lang);
}

// Carregar idioma preferido ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  
  // Remover classe ativa de todos os botões primeiro
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active', 'w3-white');
  });
  
  if (savedLang !== 'pt') {
    changeLanguage(savedLang);
  } else {
    // Destacar o botão PT como padrão
    const ptBtn = document.querySelector(`[onclick="changeLanguage('pt')"]`);
    if (ptBtn) {
      ptBtn.classList.add('active');
    }
  }
});
