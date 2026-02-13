// Configurações de contato
const CONTACT_EMAIL = "contato@startcria.com";
const WHATSAPP_PHONE = "5521973373098";

// Dicionário de Traduções
const translations = {
    pt: {
        nav_home: "Início",
        nav_services: "Serviços",
        nav_languages: "Linguagens",
        nav_process: "Como Funciona",
        nav_contact: "Contato",
        nav_about: "Sobre nós",
        tech_title: "Nosso",
        tech_title_highlight: "Arsenal",
        tech_subtitle: "Dominamos as tecnologias mais modernas para construir produtos digitais robustos e escaláveis.",
        nav_careers: "Carreiras",
        hero_title: 'Transformamos Ideias em <span class="text-gradient">Realidade Digital</span>',
        hero_subtitle: "Desenvolvemos sites e aplicativos de alta performance para empresas que querem liderar o mercado. Simples para você, poderoso para o seu negócio.",
        btn_start: "Tenho um projeto",
        btn_wizard: "Quero uma orientação",
        btn_services: "Ver Serviços",
        btn_whatsapp: "Chamar no WhatsApp",
        btn_email: "Enviar E-mail",
        services_title: "Nossas",
        services_title_highlight: "Soluções",
        services_subtitle: "Tecnologia de ponta traduzida em ferramentas que fazem sua empresa vender mais e operar melhor.",
        service_1_title: "Sites Institucionais",
        service_1_desc: "Sua vitrine 24h. Sites rápidos, modernos e otimizados para aparecer no Google.",
        service_2_title: "E-commerce",
        service_2_desc: "Lojas virtuais completas. Controle de estoque, pagamentos seguros e painel fácil de usar.",
        service_3_title: "Aplicativos",
        service_3_desc: "Seu negócio na palma da mão do cliente. Apps para Android e iPhone (iOS).",
        service_4_title: "Sistemas Web",
        service_4_desc: "Ferramentas personalizadas para gestão. Automatize processos e ganhe tempo.",
        service_web: "Desenvolvimento Web",
        service_mobile: "Apps Mobile",
        service_consulting: "Consultoria Tech",
        process_title: "Como",
        process_title_highlight: "Trabalhamos",
        process_subtitle: "Transparência total, sem \"techniquês\". Você acompanha cada etapa com clareza.",
        step_1_title: "Conversa",
        step_1_desc: "Entendemos sua necessidade e objetivos em uma reunião descontraída.",
        step_2_title: "Design",
        step_2_desc: "Criamos o visual do projeto para sua aprovação antes de programar.",
        step_3_title: "Código",
        step_3_desc: "Desenvolvemos tudo com as melhores tecnologias do mercado.",
        step_4_title: "Lançamento",
        step_4_desc: "Colocamos no ar e ensinamos você a usar sua nova ferramenta.",
        cta_title: 'Pronto para o <span class="text-gradient">Próximo Nível?</span>',
        cta_subtitle: "Não deixe para depois a inovação que sua empresa precisa hoje. Fale com nossos especialistas.",
        footer_desc: "Soluções digitais que conectam marcas a pessoas através da tecnologia e design estratégico.",
        footer_company: "Empresa",
        rights: "Todos os direitos reservados.<br><b>Desenvolvido por Wagner Pessoa | @StartCria</b>",
        // Wizard
        wiz_step1_title: "O que você está buscando?",
        wiz_opt_site: "Site para Empresa",
        wiz_opt_store: "Loja Virtual (Vendas)",
        wiz_opt_app: "Aplicativo Mobile",
        wiz_opt_system: "Sistema ou Outro",
        wiz_step2_title: "Qual seu principal objetivo?",
        wiz_opt_attract: "Atrair mais clientes",
        wiz_opt_sell: "Vender online",
        wiz_opt_trust: "Passar credibilidade",
        wiz_opt_auto: "Automatizar processos",
        wiz_step3_title: "Você já tem logo e cores?",
        wiz_opt_yes: "Sim, tenho tudo",
        wiz_opt_redesign: "Tenho, mas quero mudar",
        wiz_opt_create: "Não, preciso criar",
        wiz_step4_title: "Perfeito! Como prefere receber o orçamento?",
        wiz_step4_desc: "Já entendemos o que você precisa. Clique abaixo para enviar essa análise direto para nossa equipe.",
        btn_send_wa: "Enviar no WhatsApp",
        btn_send_email: "Enviar por E-mail",
        btn_back: "Voltar"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_languages: "Languages",
        nav_process: "Process",
        nav_contact: "Contact",
        nav_about: "About Us",
        tech_title: "Our",
        tech_title_highlight: "Stack",
        tech_subtitle: "We master the most modern technologies to build robust and scalable digital products.",
        nav_careers: "Careers",
        hero_title: 'Transforming Ideas into <span class="text-gradient">Digital Reality</span>',
        hero_subtitle: "We build high-performance websites and apps for companies that want to lead the market. Simple for you, powerful for your business.",
        btn_start: "I have a project",
        btn_wizard: "I want guidance",
        btn_services: "View Services",
        btn_whatsapp: "Chat on WhatsApp",
        btn_email: "Send Email",
        services_title: "Our",
        services_title_highlight: "Solutions",
        services_subtitle: "Cutting-edge technology translated into tools that help your company sell more and operate better.",
        service_1_title: "Institutional Sites",
        service_1_desc: "Your 24/7 showcase. Fast, modern websites optimized to appear on Google.",
        service_2_title: "E-commerce",
        service_2_desc: "Complete online stores. Inventory control, secure payments, and easy-to-use dashboard.",
        service_3_title: "Mobile Apps",
        service_3_desc: "Your business in the palm of the client's hand. Apps for Android and iPhone (iOS).",
        service_4_title: "Web Systems",
        service_4_desc: "Custom management tools. Automate processes and save time.",
        service_web: "Web Development",
        service_mobile: "Mobile Apps",
        service_consulting: "Tech Consulting",
        process_title: "How We",
        process_title_highlight: "Work",
        process_subtitle: "A transparent process without jargon. You follow every stage clearly.",
        step_1_title: "Discovery",
        step_1_desc: "We understand your needs and goals in a relaxed meeting.",
        step_2_title: "Design",
        step_2_desc: "We create the project visuals for your approval before coding.",
        step_3_title: "Code",
        step_3_desc: "We develop everything with the best market technologies.",
        step_4_title: "Launch",
        step_4_desc: "We launch it and teach you how to use your new tool.",
        cta_title: 'Ready for the <span class="text-gradient">Next Level?</span>',
        cta_subtitle: "Don't delay the innovation your company needs today. Talk to our experts.",
        footer_desc: "Digital solutions connecting brands to people through technology and strategic design.",
        footer_company: "Company",
        rights: "All rights reserved.<br><b>Developed by Wagner Pessoa | @StartCria</b>",
        // Wizard
        wiz_step1_title: "What are you looking for?",
        wiz_opt_site: "Business Website",
        wiz_opt_store: "Online Store (Sales)",
        wiz_opt_app: "Mobile App",
        wiz_opt_system: "System or Other",
        wiz_step2_title: "What is your main goal?",
        wiz_opt_attract: "Attract more clients",
        wiz_opt_sell: "Sell online",
        wiz_opt_trust: "Build credibility",
        wiz_opt_auto: "Automate processes",
        wiz_step3_title: "Do you have logo and colors?",
        wiz_opt_yes: "Yes, I have everything",
        wiz_opt_redesign: "I have, but want to change",
        wiz_opt_create: "No, I need to create",
        wiz_step4_title: "Perfect! How do you prefer to get the quote?",
        wiz_step4_desc: "We understand what you need. Click below to send this analysis directly to our team.",
        btn_send_wa: "Send via WhatsApp",
        btn_send_email: "Send via Email",
        btn_back: "Back"
    }
};

// Wizard Logic
let wizardData = {
    type: '',
    goal: '',
    branding: ''
};

function openWizard() {
    const wizard = document.getElementById('project-wizard');
    wizard.classList.add('active');
    goToStep(1);
}

function closeWizard() {
    const wizard = document.getElementById('project-wizard');
    wizard.classList.remove('active');
    // Reset wizard
    setTimeout(() => {
        wizardData = { type: '', goal: '', branding: '' };
        goToStep(1);
    }, 300);
}

function goToStep(stepNumber) {
    // Update steps UI
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`.wizard-step[data-step="${stepNumber}"]`).classList.add('active');
    
    // Update progress bar
    const progress = (stepNumber / 4) * 100;
    document.getElementById('wizard-progress-bar').style.width = `${progress}%`;
}

function selectOption(step, value) {
    if (step === 1) wizardData.type = value;
    if (step === 2) wizardData.goal = value;
    if (step === 3) wizardData.branding = value;
    
    if (step < 4) {
        goToStep(step + 1);
    }
}

function prevStep(currentStep) {
    goToStep(currentStep - 1);
}

function finishWizard(method) {
    const lang = localStorage.getItem('lang') || 'pt';
    let message = '';
    
    if (lang === 'pt') {
        message = `Olá! Usei o assistente do site StartCria e gostaria de um orçamento.\n\n` +
                  `*Tipo:* ${wizardData.type}\n` +
                  `*Objetivo:* ${wizardData.goal}\n` +
                  `*Identidade Visual:* ${wizardData.branding}`;
    } else {
        message = `Hello! I used the StartCria wizard and would like a quote.\n\n` +
                  `*Type:* ${wizardData.type}\n` +
                  `*Goal:* ${wizardData.goal}\n` +
                  `*Branding:* ${wizardData.branding}`;
    }

    if (method === 'whatsapp') {
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        const subject = lang === 'pt' ? "Orçamento Inteligente StartCria" : "StartCria Smart Quote";
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
    
    closeWizard();
}

// Funções de Contato
function contactWhatsApp() {
    const lang = localStorage.getItem('lang') || 'pt';
    const msg = lang === 'pt' 
        ? "Olá! Vi o site da StartCria e gostaria de um orçamento."
        : "Hello! I saw the StartCria website and would like a quote.";
    
    const message = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
}

function contactEmail() {
    const lang = localStorage.getItem('lang') || 'pt';
    const subject = lang === 'pt' ? "Orçamento de Projeto" : "Project Quote";
    const body = lang === 'pt' 
        ? "Olá equipe StartCria,\n\nGostaria de saber mais sobre os serviços.\n\nMeu nome: \nMinha ideia: "
        : "Hello StarCria team,\n\nI would like to know more about your services.\n\nMy name: \nMy idea: ";
        
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Lógica Principal
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');
    window.addEventListener('load', () => {
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hide');
                setTimeout(() => {
                    loader.remove();
                    document.body.classList.remove('loading');
                }, 700);
            }, 4000);
        } else {
            document.body.classList.remove('loading');
        }
    });

    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verificar preferência salva ou do sistema
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', systemTheme);
        updateThemeIcon(systemTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Language Switcher
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'pt';
    
    // Aplicar tradução inicial
    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        langToggle.textContent = lang.toUpperCase();
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Se contiver HTML (como span), usar innerHTML, senão textContent
                if (translations[lang][key].includes('<')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Navbar Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navCenter.classList.toggle('active');
            
            // Alternar ícone
            const icon = menuToggle.querySelector('i');
            if (navCenter.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar ao clicar em link
        const mobileLinks = navCenter.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navCenter.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach(el => observer.observe(el));

    // Smooth Scroll removido do script.js pois já existe no smooth-scroll.js com lógica avançada
    // Se houver conflito, remover este bloco

    // 3D Interactive Mockup Effect (Cyber Deck)
    const deckContainer = document.querySelector('.cyber-deck-container');
    const heroVisual = document.querySelector('.hero-visual');

    if (deckContainer && heroVisual) {
        // Parallax Effect
        heroVisual.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Increased rotation range for more impact
            const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg
            const rotateY = ((x - centerX) / centerX) * 15;

            deckContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            deckContainer.style.transform = 'rotateX(60deg) rotateY(0) rotateZ(0)'; // Reset to initial grid view feel if needed, or flat
            // Actually let's reset to 0 for the container, but keep grid animation running
            deckContainer.style.transform = 'rotateX(0) rotateY(0)';
        });

        // Interactive Particles Generator
        const particlesArea = document.getElementById('particles-area');
        if (particlesArea) {
            setInterval(() => {
                createParticle(particlesArea);
            }, 200);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('i-dot');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(particle);
        
        // Cleanup
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
});
