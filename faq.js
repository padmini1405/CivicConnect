document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const icon = button.querySelector('i');

        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            icon.classList.replace('fa-angle-down', 'fa-angle-up');
        } else {
            icon.classList.replace('fa-angle-up', 'fa-angle-down');
        }
    });
});
