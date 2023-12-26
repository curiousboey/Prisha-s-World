// JavaScript animation (No changes)
const cartoonImage = document.querySelector('.cartoon-image');

function scaleAnimation() {
    cartoonImage.style.transition = 'transform 0.5s';
    cartoonImage.style.transform = 'scale(1.2)';
}

function resetAnimation() {
    cartoonImage.style.transform = 'scale(1)';
}

cartoonImage.addEventListener('mouseover', scaleAnimation);
cartoonImage.addEventListener('mouseout', resetAnimation);
