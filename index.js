// Dynamic typing animation

var typed = new Typed('#element', {
    strings: ['Lorem ipsum ', 'adipisicing elit.'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
});

// Home page animation


const i = document.querySelector('body>img:first-child');
setTimeout(() => {
    i.style.height = '50vh';
    i.style.width = '20vw';
    i.style.right = '10vw';
    i.style.top = '30vh';
    i.style.borderRadius = '1rem'
}, 1000);

//Scrolling animation

AOS.init();