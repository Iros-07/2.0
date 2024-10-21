
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});
document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('light-theme');
});


// анимка
document.addEventListener("DOMContentLoaded", function() {
    const rotatingText = document.querySelector(".rotating-text");

    rotatingText.addEventListener("click", function() {
        rotatingText.style.animation = 'none';
        setTimeout(() => {
            rotatingText.style.animation = 'rotate 1s ease-in-out';
        }, 10);
    });
});



