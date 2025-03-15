const videoContainer = document.getElementById('video-container');
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cargar el iframe cuando el contenedor es visible
                videoContainer.innerHTML = `
                    <iframe 
                    width="500" 
                    height="315" 
                    src="https://www.youtube.com/embed/SSqgaFE9igo?si=LWrUKvtolvipBOwv" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                    </iframe>
                `;
                observer.disconnect(); // Dejar de observar después de cargar
            }
        });
    });

    observer.observe(videoContainer); // Observar el contenedor del video
})