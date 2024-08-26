const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

// Crear dots
items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function goToSlide(index) {
    items[currentIndex].classList.remove('active');
    const dots = document.querySelectorAll('.dot');
    if (dots.length > 0) {
        dots[currentIndex].classList.remove('active');
    }

    currentIndex = index;

    items[currentIndex].classList.add('active');
    if (dots.length > 0) {
        dots[currentIndex].classList.add('active');
    }
}

function nextSlide() {
    goToSlide((currentIndex + 1) % items.length);
}

function prevSlide() {
    goToSlide((currentIndex - 1 + items.length) % items.length);
}

// Event listeners para las flechas
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);


setInterval(nextSlide, 5000);
