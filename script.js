function showNewsletterPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    popup.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        overlay.style.display = 'none';
    });
});