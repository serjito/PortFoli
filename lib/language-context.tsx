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
    'hero.available': 'Available for projects',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Contact Me',
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
    'projects.cta.details': 'View Details',
    'projects.detail.problem': 'The Problem',
    'projects.detail.solution': 'The Solution',
    'projects.detail.technologies': 'Technologies Used',
    'projects.detail.close': 'Close',

    // Project: Viva Consultors
    'project.vivaconsultors': 'Viva Consultors Dashboard',
    'project.vivaconsultors.description':
      'Application for invoice management and automation.',
    'project.vivaconsultors.fullDescription':
      'Complete invoice and financial management platform for a consulting firm. Features automated invoice generation, client tracking, and financial reporting with Make.com integrations.',
    'project.vivaconsultors.problem':
      'The client was managing invoices manually using spreadsheets, leading to errors, delayed payments, and no visibility into financial metrics.',
    'project.vivaconsultors.solution':
      'Built a centralized dashboard with automated invoice generation, payment tracking, and real-time financial analytics. Integrated Make.com for automatic email reminders and report generation.',

    // Project: Renovat Automate
    'project.renovatAutomate': 'Renovat Automate',
    'project.renovatAutomate.description':
      'Application for business incident management and automation. Delivery note and invoice management.',
    'project.renovatAutomate.fullDescription':
      'Business operations platform for a renovation company, handling incident tracking, delivery notes, and invoice management with N8N automations for workflow optimization.',
    'project.renovatAutomate.problem':
      'The renovation company struggled with tracking project incidents, managing delivery notes across multiple sites, and generating invoices efficiently.',
    'project.renovatAutomate.solution':
      'Developed an integrated platform with incident logging, automatic delivery note generation, and invoice creation. N8N workflows automate notifications and status updates.',

    // Project: Frontend Sites
    'project.frontend': 'Web Site',
    'project.frontend.description': 'Dynamic and responsive websites.',
    'project.monalisa': 'Mona Lisa Terrassa',
    'project.monalisa.description': 'Professional website for a local business.',
    'project.monalisa.fullDescription':
      'Modern, responsive website for Mona Lisa Terrassa featuring elegant design, smooth animations, and optimized performance for local SEO.',
    'project.monalisa.problem':
      'The business had no online presence and was losing potential customers to competitors with better digital visibility.',
    'project.monalisa.solution':
      'Created a visually stunning website with clear service presentation, contact forms, and local SEO optimization to increase discoverability.',
    'project.renovatWeb': 'Renovat Reformes',
    'project.renovatWeb.description': 'Corporate website for a renovation company.',
    'project.renovatWeb.fullDescription':
      'Professional corporate website for a renovation company, showcasing their services, portfolio of completed projects, and easy contact options.',
    'project.renovatWeb.problem':
      'The company needed a professional web presence to showcase their renovation work and attract new clients in a competitive market.',
    'project.renovatWeb.solution':
      'Built a modern, multilingual website with project galleries, service descriptions, and optimized contact forms to generate leads.',

    // Project: El Equipo Creativo
    'project.equipoCreativo': 'Dash El Equipo Creativo',
    'project.equipoCreativo.description':
      'Project KPIs dashboard with budget management, employee time tracking, and cost control.',
    'project.equipoCreativo.fullDescription':
      'Comprehensive project management dashboard for a creative agency. Tracks KPIs, employee hours, project budgets, and profitability based on individual worker rates. Features automated reporting and email notifications via N8N.',
    'project.equipoCreativo.problem':
      'The agency had no visibility into project profitability. They couldn\'t track how many hours employees spent on each project or whether projects stayed within budget based on employee costs.',
    'project.equipoCreativo.solution':
      'Built a KPI dashboard that tracks time per project, calculates costs based on each worker\'s hourly rate, and compares against budgets in real-time. N8N automates weekly reports and alerts when projects approach budget limits.',

    // Project: CRM Inmobiliario
    'project.crmInmobiliario': 'Real Estate CRM + WhatsApp AI',
    'project.crmInmobiliario.description':
      'WhatsApp AI assistant for lead capture with full CRM dashboard.',
    'project.crmInmobiliario.fullDescription':
      'Intelligent real estate CRM system with an AI-powered WhatsApp assistant that acts as a virtual real estate agent. Captures leads, presents properties, and feeds data into a comprehensive dashboard with funnels, tracking history, and performance metrics.',
    'project.crmInmobiliario.problem':
      'The real estate agency was missing leads because agents couldn\'t respond 24/7. Manual lead tracking in spreadsheets led to lost opportunities and no visibility into conversion rates.',
    'project.crmInmobiliario.solution':
      'Developed an AI WhatsApp assistant that responds instantly, qualifies leads, and presents relevant properties. All leads automatically sync to a CRM dashboard with sales funnels, follow-up tracking, and conversion analytics.',

    // Project: B2B + Ayudas
    'project.b2bAyudas': 'B2B Services + Grants Platform',
    'project.b2bAyudas.description':
      'B2B marketplace for services with Spanish grants/subsidies finder.',
    'project.b2bAyudas.fullDescription':
      'Platform connecting businesses and freelancers to offer and find services by category. Unique feature: based on user profile data, it displays eligible Spanish government grants and subsidies they can apply for.',
    'project.b2bAyudas.problem':
      'Small businesses and freelancers struggle to find B2B services and are often unaware of government grants they qualify for, missing valuable funding opportunities.',
    'project.b2bAyudas.solution':
      'Created a B2B marketplace where users can post/find services by category. Added an intelligent grants module that analyzes user data (business type, size, location) and matches them with applicable Spanish subsidies and grants.',

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
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',

    // Legal
    'legal.back': 'Back to Home',
    'legal.lastUpdated': 'Last updated',

    // Privacy Policy
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.date': 'February 2025',
    'legal.privacy.intro.title': 'Introduction',
    'legal.privacy.intro.content':
      'Sergio Matamoro Diaz ("I", "me", "my") respects your privacy and is committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website sergiomd.es.',
    'legal.privacy.collection.title': 'Information I Collect',
    'legal.privacy.collection.content':
      'I may collect the following types of information:',
    'legal.privacy.collection.item1':
      'Contact information (name, email address) when you use the contact form',
    'legal.privacy.collection.item2':
      'Technical data (IP address, browser type, device information) automatically collected when browsing',
    'legal.privacy.collection.item3':
      'Usage data (pages visited, time spent on site) for analytics purposes',
    'legal.privacy.usage.title': 'How I Use Your Information',
    'legal.privacy.usage.content': 'I use your information for:',
    'legal.privacy.usage.item1': 'Responding to your inquiries and messages',
    'legal.privacy.usage.item2': 'Improving my website and services',
    'legal.privacy.usage.item3':
      'Analyzing website traffic and user behavior to enhance user experience',
    'legal.privacy.protection.title': 'Data Protection',
    'legal.privacy.protection.content':
      'I implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only when necessary.',
    'legal.privacy.cookies.title': 'Local Storage',
    'legal.privacy.cookies.content':
      'This website uses browser localStorage to save your theme preference (light/dark mode). This data is stored only in your browser and is not transmitted to any server. No cookies, advertising trackers, or third-party tracking scripts are used on this website.',
    'legal.privacy.thirdParties.title': 'Third-Party Services',
    'legal.privacy.thirdParties.content':
      'I may use third-party services for email delivery (Brevo/Sendinblue) and hosting (Vercel). These providers have their own privacy policies and are GDPR compliant. I do not sell or share your personal data with third parties for marketing purposes.',
    'legal.privacy.rights.title': 'Your Rights',
    'legal.privacy.rights.content':
      'Under GDPR and Spanish data protection law (LOPDGDD), you have the following rights:',
    'legal.privacy.rights.item1':
      'Right to access your personal data',
    'legal.privacy.rights.item2':
      'Right to rectification of inaccurate data',
    'legal.privacy.rights.item3':
      'Right to erasure ("right to be forgotten")',
    'legal.privacy.rights.item4':
      'Right to data portability',
    'legal.privacy.contact.title': 'Contact',
    'legal.privacy.contact.content':
      'For any questions about this privacy policy or to exercise your rights, please contact me at:',

    // Terms of Service
    'legal.terms.title': 'Terms of Service',
    'legal.terms.date': 'February 2025',
    'legal.terms.intro.title': 'Introduction',
    'legal.terms.intro.content':
      'Welcome to sergiomd.es. By accessing and using this website, you agree to these terms of service. If you do not agree with any part of these terms, please do not use this website.',
    'legal.terms.services.title': 'Services',
    'legal.terms.services.content':
      'This website serves as a professional portfolio and offers information about:',
    'legal.terms.services.item1': 'Web development services (Frontend and Fullstack)',
    'legal.terms.services.item2': 'Process automation solutions',
    'legal.terms.services.item3': 'Previous projects and portfolio',
    'legal.terms.services.item4': 'Contact options for professional collaboration',
    'legal.terms.intellectual.title': 'Intellectual Property',
    'legal.terms.intellectual.content':
      'All content on this website, including but not limited to text, graphics, logos, images, code, and design, is the property of Sergio Matamoro Diaz and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.',
    'legal.terms.obligations.title': 'User Obligations',
    'legal.terms.obligations.content':
      'When using this website, you agree to:',
    'legal.terms.obligations.item1':
      'Use the website only for lawful purposes',
    'legal.terms.obligations.item2':
      'Not attempt to compromise the security or functionality of the website',
    'legal.terms.obligations.item3':
      'Provide accurate information when using the contact form',
    'legal.terms.liability.title': 'Limitation of Liability',
    'legal.terms.liability.content':
      'This website is provided "as is" without warranties of any kind. I am not liable for any damages arising from your use of this website, including but not limited to direct, indirect, incidental, or consequential damages.',
    'legal.terms.modifications.title': 'Modifications',
    'legal.terms.modifications.content':
      'I reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms.',
    'legal.terms.law.title': 'Applicable Law',
    'legal.terms.law.content':
      'These terms are governed by Spanish law. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Barcelona, Spain.',
    'legal.terms.contact.title': 'Contact',
    'legal.terms.contact.content':
      'For any questions about these terms of service, please contact me at:',
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
    'hero.available': 'Disponible para proyectos',
    'hero.cta.work': 'Ver Mi Trabajo',
    'hero.cta.contact': 'Contactar',
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
    'projects.cta.details': 'Ver Detalles',
    'projects.detail.problem': 'El Problema',
    'projects.detail.solution': 'La Solución',
    'projects.detail.technologies': 'Tecnologías Utilizadas',
    'projects.detail.close': 'Cerrar',

    // Project: Viva Consultors
    'project.vivaconsultors': 'Viva Consultors Dashboard',
    'project.vivaconsultors.description':
      'Aplicación para la gestión y automatización de facturas.',
    'project.vivaconsultors.fullDescription':
      'Plataforma completa de gestión financiera y facturación para una consultoría. Incluye generación automática de facturas, seguimiento de clientes y reportes financieros con integraciones de Make.com.',
    'project.vivaconsultors.problem':
      'El cliente gestionaba las facturas manualmente con hojas de cálculo, lo que provocaba errores, retrasos en los pagos y falta de visibilidad en las métricas financieras.',
    'project.vivaconsultors.solution':
      'Construí un dashboard centralizado con generación automática de facturas, seguimiento de pagos y analíticas financieras en tiempo real. Integré Make.com para recordatorios automáticos por email y generación de informes.',

    // Project: Renovat Automate
    'project.renovatAutomate': 'Renovat Automate',
    'project.renovatAutomate.description':
      'Aplicación para gestión de incidencias y automatización. Gestión de albaranes y facturas.',
    'project.renovatAutomate.fullDescription':
      'Plataforma de operaciones empresariales para una empresa de reformas, gestionando seguimiento de incidencias, albaranes y facturación con automatizaciones N8N para optimización de flujos de trabajo.',
    'project.renovatAutomate.problem':
      'La empresa de reformas tenía dificultades para rastrear incidencias de proyectos, gestionar albaranes en múltiples obras y generar facturas de forma eficiente.',
    'project.renovatAutomate.solution':
      'Desarrollé una plataforma integrada con registro de incidencias, generación automática de albaranes y creación de facturas. Los workflows de N8N automatizan notificaciones y actualizaciones de estado.',

    // Project: Frontend Sites
    'project.frontend': 'Sitio Web',
    'project.frontend.description': 'Sitios web dinámicos y responsivos.',
    'project.monalisa': 'Mona Lisa Terrassa',
    'project.monalisa.description': 'Sitio web profesional para negocio local.',
    'project.monalisa.fullDescription':
      'Sitio web moderno y responsive para Mona Lisa Terrassa con diseño elegante, animaciones suaves y rendimiento optimizado para SEO local.',
    'project.monalisa.problem':
      'El negocio no tenía presencia online y estaba perdiendo clientes potenciales frente a competidores con mejor visibilidad digital.',
    'project.monalisa.solution':
      'Creé un sitio web visualmente atractivo con presentación clara de servicios, formularios de contacto y optimización SEO local para aumentar la visibilidad.',
    'project.renovatWeb': 'Renovat Reformes',
    'project.renovatWeb.description': 'Sitio web corporativo para empresa de reformas.',
    'project.renovatWeb.fullDescription':
      'Sitio web corporativo profesional para una empresa de reformas, mostrando sus servicios, portfolio de proyectos completados y opciones de contacto fáciles.',
    'project.renovatWeb.problem':
      'La empresa necesitaba una presencia web profesional para mostrar su trabajo de reformas y atraer nuevos clientes en un mercado competitivo.',
    'project.renovatWeb.solution':
      'Construí un sitio web moderno y multilingüe con galerías de proyectos, descripciones de servicios y formularios de contacto optimizados para generar leads.',

    // Project: El Equipo Creativo
    'project.equipoCreativo': 'Dash El Equipo Creativo',
    'project.equipoCreativo.description':
      'Dashboard de KPIs con gestión de presupuestos, control de horas y costes.',
    'project.equipoCreativo.fullDescription':
      'Dashboard completo de gestión de proyectos para una agencia creativa. Rastrea KPIs, horas de empleados, presupuestos de proyectos y rentabilidad basada en tarifas individuales. Incluye reportes automáticos y notificaciones por email via N8N.',
    'project.equipoCreativo.problem':
      'La agencia no tenía visibilidad sobre la rentabilidad de los proyectos. No podían rastrear cuántas horas dedicaban los empleados a cada proyecto ni si los proyectos se mantenían dentro del presupuesto según los costes de empleados.',
    'project.equipoCreativo.solution':
      'Construí un dashboard de KPIs que rastrea tiempo por proyecto, calcula costes según la tarifa horaria de cada trabajador y compara con presupuestos en tiempo real. N8N automatiza informes semanales y alertas cuando los proyectos se acercan al límite del presupuesto.',

    // Project: CRM Inmobiliario
    'project.crmInmobiliario': 'CRM Inmobiliario + IA WhatsApp',
    'project.crmInmobiliario.description':
      'Asistente IA en WhatsApp para captación de leads con dashboard CRM completo.',
    'project.crmInmobiliario.fullDescription':
      'Sistema CRM inmobiliario inteligente con un asistente IA en WhatsApp que actúa como agente inmobiliario virtual. Capta leads, presenta propiedades y alimenta un dashboard completo con funnels, historial de seguimiento y métricas de rendimiento.',
    'project.crmInmobiliario.problem':
      'La agencia inmobiliaria perdía leads porque los agentes no podían responder 24/7. El seguimiento manual de leads en hojas de cálculo provocaba oportunidades perdidas y falta de visibilidad en tasas de conversión.',
    'project.crmInmobiliario.solution':
      'Desarrollé un asistente IA en WhatsApp que responde instantáneamente, califica leads y presenta propiedades relevantes. Todos los leads se sincronizan automáticamente con un dashboard CRM con funnels de venta, seguimiento y analíticas de conversión.',

    // Project: B2B + Ayudas
    'project.b2bAyudas': 'Plataforma B2B + Ayudas',
    'project.b2bAyudas.description':
      'Marketplace B2B de servicios con buscador de ayudas y subvenciones.',
    'project.b2bAyudas.fullDescription':
      'Plataforma que conecta empresas y autónomos para ofrecer y encontrar servicios por categoría. Característica única: según los datos del perfil del usuario, muestra ayudas y subvenciones del gobierno español a las que pueden optar.',
    'project.b2bAyudas.problem':
      'Las pequeñas empresas y autónomos tienen dificultades para encontrar servicios B2B y a menudo desconocen las ayudas gubernamentales para las que califican, perdiendo valiosas oportunidades de financiación.',
    'project.b2bAyudas.solution':
      'Creé un marketplace B2B donde los usuarios pueden publicar/encontrar servicios por categoría. Añadí un módulo inteligente de ayudas que analiza los datos del usuario (tipo de empresa, tamaño, ubicación) y los empareja con subvenciones y ayudas españolas aplicables.',

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
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',

    // Legal
    'legal.back': 'Volver al Inicio',
    'legal.lastUpdated': 'Última actualización',

    // Política de Privacidad
    'legal.privacy.title': 'Política de Privacidad',
    'legal.privacy.date': 'Febrero 2025',
    'legal.privacy.intro.title': 'Introducción',
    'legal.privacy.intro.content':
      'Sergio Matamoro Diaz ("yo", "mi", "me") respeta tu privacidad y se compromete a proteger tus datos personales. Esta política de privacidad explica cómo recopilo, uso y protejo tu información cuando visitas mi sitio web sergiomd.es.',
    'legal.privacy.collection.title': 'Información que Recopilo',
    'legal.privacy.collection.content':
      'Puedo recopilar los siguientes tipos de información:',
    'legal.privacy.collection.item1':
      'Información de contacto (nombre, correo electrónico) cuando usas el formulario de contacto',
    'legal.privacy.collection.item2':
      'Datos técnicos (dirección IP, tipo de navegador, información del dispositivo) recopilados automáticamente al navegar',
    'legal.privacy.collection.item3':
      'Datos de uso (páginas visitadas, tiempo en el sitio) con fines analíticos',
    'legal.privacy.usage.title': 'Cómo Uso Tu Información',
    'legal.privacy.usage.content': 'Uso tu información para:',
    'legal.privacy.usage.item1': 'Responder a tus consultas y mensajes',
    'legal.privacy.usage.item2': 'Mejorar mi sitio web y servicios',
    'legal.privacy.usage.item3':
      'Analizar el tráfico del sitio y el comportamiento del usuario para mejorar la experiencia',
    'legal.privacy.protection.title': 'Protección de Datos',
    'legal.privacy.protection.content':
      'Implemento medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Tus datos se almacenan de forma segura y solo se accede a ellos cuando es necesario.',
    'legal.privacy.cookies.title': 'Almacenamiento Local',
    'legal.privacy.cookies.content':
      'Este sitio web utiliza localStorage del navegador para guardar tu preferencia de tema (modo claro/oscuro). Estos datos se almacenan únicamente en tu navegador y no se transmiten a ningún servidor. No se utilizan cookies, rastreadores de publicidad ni scripts de seguimiento de terceros en este sitio web.',
    'legal.privacy.thirdParties.title': 'Servicios de Terceros',
    'legal.privacy.thirdParties.content':
      'Puedo utilizar servicios de terceros para el envío de correos electrónicos (Brevo/Sendinblue) y alojamiento (Vercel). Estos proveedores tienen sus propias políticas de privacidad y cumplen con el RGPD. No vendo ni comparto tus datos personales con terceros con fines de marketing.',
    'legal.privacy.rights.title': 'Tus Derechos',
    'legal.privacy.rights.content':
      'Según el RGPD y la ley española de protección de datos (LOPDGDD), tienes los siguientes derechos:',
    'legal.privacy.rights.item1':
      'Derecho de acceso a tus datos personales',
    'legal.privacy.rights.item2':
      'Derecho de rectificación de datos inexactos',
    'legal.privacy.rights.item3':
      'Derecho de supresión ("derecho al olvido")',
    'legal.privacy.rights.item4':
      'Derecho a la portabilidad de datos',
    'legal.privacy.contact.title': 'Contacto',
    'legal.privacy.contact.content':
      'Para cualquier pregunta sobre esta política de privacidad o para ejercer tus derechos, puedes contactarme en:',

    // Términos de Servicio
    'legal.terms.title': 'Términos de Servicio',
    'legal.terms.date': 'Febrero 2025',
    'legal.terms.intro.title': 'Introducción',
    'legal.terms.intro.content':
      'Bienvenido a sergiomd.es. Al acceder y utilizar este sitio web, aceptas estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices este sitio web.',
    'legal.terms.services.title': 'Servicios',
    'legal.terms.services.content':
      'Este sitio web sirve como portfolio profesional y ofrece información sobre:',
    'legal.terms.services.item1': 'Servicios de desarrollo web (Frontend y Fullstack)',
    'legal.terms.services.item2': 'Soluciones de automatización de procesos',
    'legal.terms.services.item3': 'Proyectos anteriores y portfolio',
    'legal.terms.services.item4': 'Opciones de contacto para colaboración profesional',
    'legal.terms.intellectual.title': 'Propiedad Intelectual',
    'legal.terms.intellectual.content':
      'Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes, código y diseño, es propiedad de Sergio Matamoro Diaz y está protegido por las leyes de propiedad intelectual. No puedes reproducir, distribuir o usar ningún contenido sin permiso previo por escrito.',
    'legal.terms.obligations.title': 'Obligaciones del Usuario',
    'legal.terms.obligations.content':
      'Al usar este sitio web, te comprometes a:',
    'legal.terms.obligations.item1':
      'Usar el sitio web solo para fines lícitos',
    'legal.terms.obligations.item2':
      'No intentar comprometer la seguridad o funcionalidad del sitio web',
    'legal.terms.obligations.item3':
      'Proporcionar información veraz cuando uses el formulario de contacto',
    'legal.terms.liability.title': 'Limitación de Responsabilidad',
    'legal.terms.liability.content':
      'Este sitio web se proporciona "tal cual" sin garantías de ningún tipo. No soy responsable de ningún daño derivado del uso de este sitio web, incluyendo pero no limitado a daños directos, indirectos, incidentales o consecuentes.',
    'legal.terms.modifications.title': 'Modificaciones',
    'legal.terms.modifications.content':
      'Me reservo el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente tras su publicación en este sitio web. Tu uso continuado del sitio web constituye la aceptación de los términos modificados.',
    'legal.terms.law.title': 'Ley Aplicable',
    'legal.terms.law.content':
      'Estos términos se rigen por la legislación española. Cualquier disputa derivada de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Barcelona, España.',
    'legal.terms.contact.title': 'Contacto',
    'legal.terms.contact.content':
      'Para cualquier pregunta sobre estos términos de servicio, puedes contactarme en:',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
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
