// Kopyala butonlarına işlevsellik ekle
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.previousElementSibling.textContent.trim();
        navigator.clipboard.writeText(
            `<iframe src="${code}" width="600" height="400"></iframe>`
        );
        btn.textContent = 'Kopyalandı!';
        setTimeout(() => btn.textContent = 'Kopyala', 2000);
    });
});
