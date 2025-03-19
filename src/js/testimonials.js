document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial-wrap');
    const testimonialsImages = document.querySelectorAll('.testimonial-img');
    
    let currentIndex = 0;
    let interval;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if ( i === index ) {
                testimonial.classList.add('active');
            }
        });

        activeImage(index);
    }

    function activeImage(index) {
        testimonialsImages.forEach((image, i) => {
            image.classList.remove('active-img');
            if ( i === index) {
                image.classList.add('active-img');
            }
            image.addEventListener('click', () => {
                showTestimonial(i);
            })
        })
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextTestimonial, 3000);
    }

    showTestimonial(currentIndex);
    startAutoSlide();
})