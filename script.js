document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const icon = button.querySelector('i');
        
        // Toggle the active class
        accordionItem.classList.toggle('active');

        // Toggle the icon (Caret Up / Down)
        if (accordionItem.classList.contains('active')) {
            icon.classList.replace('ph-caret-down', 'ph-caret-up');
        } else {
            icon.classList.replace('ph-caret-up', 'ph-caret-down');
        }
    });
});