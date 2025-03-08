document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.side-projects .project-button:first-child');
    const container = document.body;

    button.addEventListener('mouseenter', () => {
        container.classList.add('is-hovered');
    });

    button.addEventListener('mouseleave', () => {
        container.classList.remove('is-hovered');
    });

    container.classList.add('reveal');
});