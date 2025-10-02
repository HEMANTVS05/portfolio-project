// Smooth nav active toggle
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('main section');

function setActive() {
    let index = sections.length;
    while (--index && window.scrollY + 120 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    const id = sections[index].id;
    const active = document.querySelector('header nav a[href="#'+id+'"]');
    if (active) active.classList.add('active');
}
setActive();
window.addEventListener('scroll', setActive);

// Smooth scroll for sticky header
document.querySelectorAll('header nav a, a.btn').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});
