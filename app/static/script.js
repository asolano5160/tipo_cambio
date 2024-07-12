document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#0056b3';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#007bff';
        });
    });
});