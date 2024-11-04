const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

// Carousel navigation
function showNext() {
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem);
}

function showPrevious() {
    const lastItem = carousel.lastElementChild;
    carousel.insertBefore(lastItem, carousel.firstElementChild);
}

// Thumbnail Image Selection
function showImage(selectedImage) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = selectedImage.src;
    
    // Update 'active' class for thumbnails
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    selectedImage.classList.add('active');
}

// Zoom functionality
const mainImage = document.getElementById('mainImage');
const zoomBox = document.createElement('div');
zoomBox.classList.add('zoom-box');
const zoomedImage = document.createElement('img');
zoomedImage.src = mainImage.src; // Sync with main image
zoomBox.appendChild(zoomedImage);
document.body.appendChild(zoomBox);

// Function to center zoom box on cursor and display zoomed image
mainImage.addEventListener('mousemove', (e) => {
    zoomBox.style.display = 'block';

    // Get cursor position relative to mainImage
    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Position the zoomed image to keep the cursor centered in zoom box
    zoomedImage.style.left = `-${xPercent * 1.3}%`; // Adjust for 130% zoom
    zoomedImage.style.top = `-${yPercent * 1.3}%`;

    // Position the zoom box with cursor at its center
    zoomBox.style.left = `${e.pageX - zoomBox.offsetWidth / 2}px`;
    zoomBox.style.top = `${e.pageY - zoomBox.offsetHeight / 2}px`;
});

// Hide the zoom box when cursor leaves the main image
mainImage.addEventListener('mouseleave', () => {
    zoomBox.style.display = 'none';
});
