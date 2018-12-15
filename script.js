var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 20000);
const next = document.getElementById('next');
const previous = document.getElementById('prev');

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1)%slides.length;
    if (currentSlide > slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].className = 'slide showing';
}
function prevSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide - 1)%slides.length;
    if (currentSlide < 0) {
        currentSlide = 4;
    }
    slides[currentSlide].className = 'slide showing';
}
next.onclick = function () {
    nextSlide()
}
previous.onclick = function () {
    prevSlide()
}