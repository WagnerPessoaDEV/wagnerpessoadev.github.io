// --- 1. Efeito de Digitação (Typewriter) - Otimizado ---
const textElement = document.getElementById('typewriter');
const words = ["Front-End", "Web", "E-commerce"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
    }

    typeTimeout = setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);


// --- 1.5 TEMA DARK/LIGHT MODE ---
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Verifica preferência salva ou preferência do sistema
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Define o tema inicial
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
} else {
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
}

// Toggle do tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Salva preferência
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    
    // Muda o ícone
    themeToggle.textContent = isLightMode ? '☀️' : '🌙';
});

// --- 2. Scroll Reveal (Elementos aparecem ao rolar) - Otimizado ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- 3. Efeito 3D Tilt nos Cards (Otimizado) ---
const cards = document.querySelectorAll('.project-card');
let tiltAnimationId = null;

cards.forEach(card => {
    let mouseX = 0, mouseY = 0;
    let isHovering = false;
    
    card.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    card.addEventListener('mouseleave', () => {
        isHovering = false;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

function updateTilt() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const event = new MouseEvent('update');
        }
    });
    tiltAnimationId = requestAnimationFrame(updateTilt);
}
    });
});

const modal = document.getElementById('project-modal');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
const modalImg = modal.querySelector('.modal-img');
const modalTags = modal.querySelector('.modal-tags');
const modalVisit = modal.querySelector('.modal-visit');
const modalClose = modal.querySelector('.modal-close');
const modalYear = modal.querySelector('.modal-year');
const modalRole = modal.querySelector('.modal-role');
const modalCategory = modal.querySelector('.modal-category');
const modalFeatures = modal.querySelector('.modal-features');

function openModal(card) {
    const title = card.querySelector('h3')?.textContent || '';
    const detailsRaw = card.dataset.details || card.querySelector('p')?.textContent || '';
    const img = card.querySelector('.project-img')?.src || '';
    const tags = Array.from(card.querySelectorAll('.tech-tags span')).map(el => el.textContent);
    const url = card.dataset.url || '#';
    
    // Novos campos
    const year = card.dataset.year || '2023';
    const role = card.dataset.role || 'Desenvolvedor';
    const category = card.dataset.category || '';

    modalTitle.textContent = title;
    if (/[;\n•]/.test(detailsRaw)) {
        const lines = detailsRaw.split(/;|\n|•/).map(s => s.trim()).filter(Boolean);
        modalDesc.innerHTML = lines.map(l => `• ${l}`).join('<br>');
    } else {
        modalDesc.textContent = detailsRaw;
    }
    modalImg.src = img;
    modalTags.innerHTML = tags.map(t => `<span>${t}</span>`).join('');
    const feats = (card.dataset.features || '').split(';').map(s => s.trim()).filter(Boolean);
    if (modalFeatures) {
        modalFeatures.innerHTML = feats.map(f => `<li>${f}</li>`).join('');
        const subtitle = modal.querySelector('.modal-subtitle');
        if (feats.length === 0) {
            modalFeatures.style.display = 'none';
            if (subtitle) subtitle.style.display = 'none';
        } else {
            modalFeatures.style.display = '';
            if (subtitle) subtitle.style.display = '';
        }
    }
    modalVisit.href = url;
    
    if (modalYear) modalYear.textContent = year;
    if (modalRole) modalRole.textContent = role;
    if (modalCategory) {
        modalCategory.textContent = category;
        const categoryItem = modalCategory.parentElement;
        if (categoryItem) categoryItem.style.display = category ? '' : 'none';
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

cards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// --- 4. Modal para Cidade (Copacabana) ---
const cityModal = document.getElementById('city-modal');
const cityClose = cityModal ? cityModal.querySelector('.modal-close') : null;
const cityVideos = cityModal ? cityModal.querySelectorAll('.city-video') : [];
const locationBtn = document.querySelector('.contact-location');

function openCityModal() {
    if (!cityModal) return;
    // Preenche vídeos a partir dos data-video* do botão
    const v1 = locationBtn?.dataset.video1 || '';
    const v2 = locationBtn?.dataset.video2 || '';
    const v3 = locationBtn?.dataset.video3 || '';
    const urls = [v1, v2, v3].filter(Boolean);
    cityVideos.forEach((iframe, idx) => {
        iframe.src = urls[idx] || urls[0] || '';
    });
    cityModal.classList.add('active');
}

function closeCityModal() {
    if (!cityModal) return;
    cityModal.classList.remove('active');
    // Limpa src para parar reprodução
    cityVideos.forEach(iframe => { iframe.src = ''; });
}

if (locationBtn) {
    locationBtn.addEventListener('click', openCityModal);
}
if (cityClose) cityClose.addEventListener('click', closeCityModal);
if (cityModal) {
    cityModal.addEventListener('click', (e) => {
        if (e.target === cityModal) closeCityModal();
    });
}
