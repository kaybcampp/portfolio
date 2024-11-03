const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

// Show the next item by moving the first item to the end
function showNext() {
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem);
}

// Show the previous item by moving the last item to the start
function showPrevious() {
    const lastItem = carousel.lastElementChild;
    carousel.insertBefore(lastItem, carousel.firstElementChild);
}
