document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
});

const btn  = document.querySelector('.menu-toggle');
const menu = document.querySelector('.NavBar');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');
});