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
        i.style.height = '40vw';
        i.style.width = '30vw';
        i.style.right = '10vw';
        i.style.top = '8vh';
        i.style.borderRadius = '1rem';
    }, 1000);

    const updateStyles = (e) => {
        if (e.matches) {
            i.style.height = '180px';
            i.style.width = '150px';
            i.style.right = '5vw';
            i.style.top = '22vh';
        } else {
            i.style.height = '40vw';
            i.style.width = '30vw';
            i.style.right = '10vw';
            i.style.top = '8vh';
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



// vedio scrolling effect

window.addEventListener('scroll', function () {
    const video = document.getElementById('video');
    const videoContainer = document.querySelector('.video-container');
    const containerTop = videoContainer.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > containerTop) {
        const percentage = Math.min((scrollPosition - containerTop) / window.innerHeight, 1);
        video.style.width = `${percentage * 100}vw`;
        video.style.height = `${percentage * 100}vh`;
    }
});
