<script>
function switchLang(lang) {
    document.querySelectorAll('[data-ua]').forEach(el => {
        el.style.display = lang === 'ua' ? 'block' : 'none';
    });
    document.querySelectorAll('[data-en]').forEach(el => {
        el.style.display = lang === 'en' ? 'block' : 'none';
    });

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(lang).classList.add('active');

    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'ua';
    switchLang(lang);
});
</script>
