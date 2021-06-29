window.addEventListener('load', function() {
    const trigger = document.querySelector('#js-theme-switcher');
    const element = document.querySelector('html');

    trigger.addEventListener('click', function(e) {
        e.preventDefault();

        element.classList.toggle('theme--default');
        element.classList.toggle('theme--dark');
    });
});

