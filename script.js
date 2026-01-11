// Hero Slideshow already handled with CSS, add lightbox functionality
const gridImages = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

gridImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = 'none';
  }
});
