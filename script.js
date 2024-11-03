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
function showImage(selectedImage) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = selectedImage.src;
    
    // Remove 'active' class from all thumbnails and add it to the clicked one
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    selectedImage.classList.add('active');
}
// Select the main image and create the zoom box
const mainImage = document.getElementById('mainImage');
const zoomBox = document.createElement('div');
zoomBox.classList.add('zoom-box');
const zoomedImage = document.createElement('img');
zoomedImage.src = mainImage.src; // Use the same image source
zoomBox.appendChild(zoomedImage);
document.body.appendChild(zoomBox);

// Show zoom box and adjust its position on mouse move
mainImage.addEventListener('mousemove', (e) => {
    zoomBox.style.display = 'block';

    // Calculate cursor's position within the image
    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Position the zoomed-in image within the zoom box, centered on cursor
    zoomedImage.style.left = `-${xPercent * 1.3}%`; // Adjust for 130% zoom level
    zoomedImage.style.top = `-${yPercent * 1.3}%`;

    // Position the zoom box so the cursor stays centered within it
    zoomBox.style.left = `${e.pageX - zoomBox.offsetWidth / 2}px`;
    zoomBox.style.top = `${e.pageY - zoomBox.offsetHeight / 2}px`;
});

// Hide the zoom box when the cursor leaves the image
mainImage.addEventListener('mouseleave', () => {
    zoomBox.style.display = 'none';
});
