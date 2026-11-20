document.addEventListener('DOMContentLoaded', () => {
   
   // ================= GALERIA DE TREINOS & LIGHTBOX =================
    const galleryItems = [
        {
            src: 'img/galeria/treino-geral-01.jpeg',
            category: 'equipe',
            caption: 'Turma reunida no tatame — Forja Team'
        },
        {
            src: 'img/galeria/jiu-jitsu-01.jpeg',
            category: 'jiu-jitsu',
            caption: 'Aula de Jiu-Jitsu — Instrução e disciplina no tatame'
        },
        {
            src: 'img/galeria/muay-thai-01.jpeg',
            category: 'muay-thai',
            caption: 'Treino técnico de Muay Thai / Boxe'
        },
        {
            src: 'img/galeria/muay-thai-02.jpeg',
            category: 'muay-thai',
            caption: 'Movimentação e golpes em dupla'
        },
        {
            src: 'img/galeria/treino-acompanhamento-01.jpeg',
            category: 'muay-thai',
            caption: 'Acompanhamento de perto durante o treino'
        },
        {
            src: 'img/galeria/saudacao-tatame-01.jpeg',
            category: 'equipe',
            caption: 'Respeito e união da equipe ao final do treino'
        },
        {
            src: 'img/galeria/galeria-01.jpeg',
            category: 'muay-thai',
            caption: 'Treino dinâmico com luvas e caneleiras no tatame'
        },
        {
            src: 'img/galeria/galeria-02.jpeg',
            category: 'muay-thai',
            caption: 'Acompanhamento de perto na movimentação e guarda'
        },
        {
            src: 'img/galeria/galeria-03.jpeg',
            category: 'muay-thai',
            caption: 'Instrução técnica e troca de experiência no tatame'
        },
        {
            src: 'img/galeria/galeria-04.jpeg',
            category: 'jiu-jitsu',
            caption: 'Aquecimento e preparação da turma de Jiu-Jitsu'
        },
        {
            src: 'img/galeria/galeria-05.jpeg',
            category: 'equipe',
            caption: 'Turma alinhada em frente ao painel da Forja Team'
        },
        {
            src: 'img/galeria/galeria-06.jpeg',
            category: 'equipe',
            caption: 'União e disciplina da equipe durante o treino'
        },
        {
            src: 'img/galeria/galeria-07.jpeg',
            category: 'jiu-jitsu',
            caption: 'Treino técnico de guarda e movimentação no Jiu-Jitsu'
        },
        {
            src: 'img/galeria/galeria-08.jpeg',
            category: 'jiu-jitsu',
            caption: 'Prática e supervisão técnica no tatame'
        },
        {
            src: 'img/galeria/galeria-09.jpeg',
            category: 'equipe',
            caption: 'Respeito, tradição e disciplina no tatame'
        }
    ];

    const galleryGrid = document.getElementById('gallery-grid');
    const galleryButtons = document.querySelectorAll('#gallery-filters .gallery-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentCategory = 'all';
    let visibleGalleryItems = [...galleryItems];
    let currentLightboxIndex = 0;

    function renderGallery() {
        if (!galleryGrid) return;

        visibleGalleryItems = currentCategory === 'all'
            ? [...galleryItems]
            : galleryItems.filter(item => item.category === currentCategory);

        galleryGrid.innerHTML = visibleGalleryItems.map((item, index) => `
            <figure class="gallery-item" data-index="${index}">
                <img src="${item.src}" alt="${item.caption}" loading="lazy">
                <figcaption class="gallery-caption">${item.caption}</figcaption>
            </figure>
        `).join('');

        galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
            el.addEventListener('click', () => {
                openLightbox(Number(el.getAttribute('data-index')));
            });
        });
    }

    function openLightbox(index) {
        if (!visibleGalleryItems.length) return;
        currentLightboxIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const item = visibleGalleryItems[currentLightboxIndex];
        if (!item) return;
        lightboxImg.src = item.src;
        lightboxImg.alt = item.caption;
        lightboxCaption.textContent = item.caption;
    }

    function showNextPhoto(step) {
        if (!visibleGalleryItems.length) return;
        currentLightboxIndex = (currentLightboxIndex + step + visibleGalleryItems.length) % visibleGalleryItems.length;
        updateLightbox();
    }

    galleryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderGallery();
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => showNextPhoto(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => showNextPhoto(1));

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showNextPhoto(-1);
        if (e.key === 'ArrowRight') showNextPhoto(1);
    });

    renderGallery();
   
    // Inicializa os ícones Lucide
    lucide.createIcons();

    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sistema de Filtros da Grade de Horários
    const dayButtons = document.querySelectorAll('#day-filters .filter-btn');
    const modButtons = document.querySelectorAll('#modality-filters .mod-btn');
    const dayCards = document.querySelectorAll('.day-card');

    let selectedDay = 'all';
    let selectedMod = 'all';

    function filterSchedule() {
        dayCards.forEach(card => {
            const cardDay = card.getAttribute('data-day');
            const matchesDay = (selectedDay === 'all' || cardDay === selectedDay);

            if (!matchesDay) {
                card.classList.add('hidden');
                return;
            }

            // Filtra os itens dentro do dia
            const classItems = card.querySelectorAll('.class-item');
            let visibleCount = 0;

            classItems.forEach(item => {
                const tags = item.getAttribute('data-tags').split(' ');
                const matchesMod = (selectedMod === 'all' || tags.includes(selectedMod));

                if (matchesMod) {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    item.classList.add('hidden');
                }
            });

            // Se nenhum horário daquele dia bater com a modalidade, oculta o card do dia
            if (visibleCount === 0) {
                card.classList.add('hidden');
            } else {
                card.classList.remove('hidden');
            }
        });
    }

    // Eventos dos botões de Dia
    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dayButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDay = btn.getAttribute('data-day');
            filterSchedule();
        });
    });

    // Eventos dos botões de Modalidade
    modButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMod = btn.getAttribute('data-mod');
            filterSchedule();
        });
    });
});