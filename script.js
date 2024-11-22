const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});
