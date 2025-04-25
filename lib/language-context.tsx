'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role':
      'A fullstack developer passionate about creating beautiful, functional, and user-centered digital experiences.',
    'hero.cta.work': 'View My Work',
    'hero.cta.cv': 'Download CV',
    'hero.stats.years': 'Years Experience',
    'hero.stats.projects': 'Projects Completed',
    'hero.stats.technologies': 'Technologies',

    // About
    'about.title': 'About Me',
    'about.role': 'Fullstack Developer',
    'about.description1':
      "I'm a passionate fullstack developer with over 2 years of experience creating modern web applications.",
    'about.description2':
      'My approach combines clean code principles with user-centered design to build solutions that are not only technically sound but also intuitive and enjoyable to use.',
    'about.name': 'Name',
    'about.email': 'Email',
    'about.location': 'Location',
    'about.available': 'Available',
    'about.status': 'Freelance & Full-time',
    'about.contact': 'Get in Touch',

    // Services
    'services.frontend': 'Frontend Development',
    'services.frontend.desc':
      'Creating responsive, interactive UIs with React, Next.js, and modern CSS techniques.',
    'services.backend': 'Backend Development',
    'services.backend.desc':
      'Building robust APIs and server applications with Node.js, Express, and various databases.',
    'services.fullstack': 'Full Stack Solutions',
    'services.fullstack.desc':
      'Delivering end-to-end applications with seamless integration between frontend and backend.',
    'services.automate': 'Automation Solutions',
    'services.automate.desc':
      'Process automation, transforming manual tasks into efficient flows.',

    // Projects
    'projects.title': 'My Projects',
    'projects.description':
      'Explore my recent projects showcasing my expertise in frontend, backend, fullstack development, and automations.',
    'projects.filter.all': 'All Projects',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Full Stack',
    'projects.cta.code': 'Code',
    'projects.cta.demo': 'Live Demo',
    'project.vivaconsultors': 'Dashboard & App',
    'project.vivaconsultors.description':
      'Application for invoce management and automation',
    'project.renovatAutomate': 'Dashboard & App',
    'project.renovatAutomate.description':
      'Application for business incident management and automation. Delivery note and invoice management',
    'project.frontend': 'Web Site',
    'project.frontend.description': 'Dynamic and responsive websites.',

    // Skills
    'skills.title': 'My Skills',
    'skills.description':
      'A comprehensive overview of my technical expertise and tools I work with.',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Tools',
    'skills.expert': 'Expert in',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description':
      'Feel free to reach out for collaboration opportunities or just to say hello.',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Ways you can reach me directly.',
    'contact.form.title': 'Send Me a Message',
    'contact.form.description': "I'll get back to you as soon as possible.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',

    // Footer
    'footer.description':
      'Fullstack developer crafting beautiful, functional web experiences with modern technologies.',
    'footer.links': 'Links',
    'footer.connect': 'Connect',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role':
      'Un desarrollador fullstack apasionado por crear experiencias digitales hermosas, funcionales y centradas en el usuario.',
    'hero.cta.work': 'Ver Mi Trabajo',
    'hero.cta.cv': 'Descargar CV',
    'hero.stats.years': 'Años de Experiencia',
    'hero.stats.projects': 'Proyectos Completados',
    'hero.stats.technologies': 'Tecnologías',

    // About
    'about.title': 'Sobre Mí',
    'about.role': 'Desarrollador Fullstack',
    'about.description1':
      'Soy un desarrollador fullstack apasionado con más de 4 años de experiencia creando aplicaciones web modernas.',
    'about.description2':
      'Mi enfoque combina principios de código limpio con diseño centrado en el usuario para construir soluciones que no solo son técnicamente sólidas sino también intuitivas y agradables de usar.',
    'about.name': 'Nombre',
    'about.email': 'Correo',
    'about.location': 'Ubicación',
    'about.available': 'Disponible',
    'about.status': 'Freelance y Tiempo Completo',
    'about.contact': 'Contactar',

    // Services
    'services.frontend': 'Desarrollo Frontend',
    'services.frontend.desc':
      'Creación de interfaces de usuario responsivas e interactivas con React, Next.js y técnicas modernas de CSS.',
    'services.backend': 'Desarrollo Backend',
    'services.backend.desc':
      'Construcción de APIs robustas y aplicaciones de servidor con Node.js, Express y diversas bases de datos.',
    'services.fullstack': 'Soluciones Full Stack',
    'services.fullstack.desc':
      'Entrega de aplicaciones end-to-end con integración perfecta entre frontend y backend.',
    'services.automate': 'Soluciones de Automatización',
    'services.automate.desc':
      'Automatización de procesos, transformando tareas manuales en flujos eficientes.',

    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.description':
      'Explora mis proyectos recientes que muestran mi experiencia en desarrollo frontend, backend,fullstack y automatizaciones.',
    'projects.filter.all': 'Todos los Proyectos',
    'projects.filter.frontend': 'Frontend',
    'projects.filter.backend': 'Backend',
    'projects.filter.fullstack': 'Full Stack',
    'projects.cta.code': 'Código',
    'projects.cta.demo': 'Demo en Vivo',
    'project.vivaconsultors': 'Panel de adminitador y App',
    'project.vivaconsultors.description':
      'Aplicación para la gestión y automatización de facturas',
    'project.renovatAutomate': 'Panel de adminitador y App',
    'project.renovatAutomate.description':
      'Aplicación para la gestión y automatización de incidencia de empresa. Gestión de albaranes y facturas',
    'project.frontend': 'Sitio Web',
    'project.frontend.description': 'Sitios web dinámicos y responsivos',

    // Skills
    'skills.title': 'Mis Habilidades',
    'skills.description':
      'Una visión completa de mi experiencia técnica y las herramientas con las que trabajo.',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Herramientas',
    'skills.expert': 'Experto en',

    // Contact
    'contact.title': 'Contacto',
    'contact.description':
      'No dudes en contactarme para oportunidades de colaboración o simplemente para saludar.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.description': 'Formas de contactarme directamente.',
    'contact.form.title': 'Envíame un Mensaje',
    'contact.form.description': 'Te responderé lo antes posible.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',

    // Footer
    'footer.description':
      'Desarrollador fullstack creando experiencias web hermosas y funcionales con tecnologías modernas.',
    'footer.links': 'Enlaces',
    'footer.connect': 'Conectar',
    'footer.legal': 'Legal',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
