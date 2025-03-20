const statsSecction = document.querySelector('.stats-secction');
const statscounters = document.querySelectorAll('.stat-number');

// Funcion que inicia el contador
const startCounting = (counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

// Usar IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            statscounters.forEach(counter => {
                startCounting(counter)
            });
            observer.unobserve(entry.target); // Detener la observación después de activarlo
        }
    });
}, { threshold: 0.5 }); // El 50% del elemento debe estar visible

observer.observe(statsSecction);