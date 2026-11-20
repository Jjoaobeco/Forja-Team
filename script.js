document.addEventListener('DOMContentLoaded', () => {
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