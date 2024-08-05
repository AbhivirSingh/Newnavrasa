// Dynamic typing animation

var typed = new Typed('#element', {
    strings: ['Experiences ', 'Precision'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
});

// Home page animation


document.addEventListener("DOMContentLoaded", () => {
    const i = document.querySelector('body > img:first-child');

    setTimeout(() => {
        i.style.height = '24.9vw';
        i.style.width = '20vw';
        i.style.right = '10vw';
        i.style.top = '26vh';
        i.style.borderRadius = '1rem';
    }, 1000);

    const updateStyles = (e) => {
        if (e.matches) {
            i.style.height = '180px';
            i.style.width = '150px';
            i.style.right = '5vw';
            i.style.top = '22vh';
        } else {
            i.style.height = '24.9vw';
            i.style.width = '20vw';
            i.style.right = '10vw';
            i.style.top = '26vh';
            i.style.borderRadius = '1rem';
        }
    };

    const mediaQuery = window.matchMedia('(max-width: 420px)');
    mediaQuery.addEventListener('change', updateStyles);

    // Initial check
    updateStyles(mediaQuery);
});


//Scrolling animation

AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
});