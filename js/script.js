let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal( '.logo',{delay:200, origin: 'left'});
sr.reveal('navbar',{delay:400, origin: 'top'});
sr.reveal('menu-btn',{delay:520, origin: 'right'});

sr.revseal('home -text span',{delay:600, origin: 'top'});
sr.revseal('home -text h1',{delay:680, origin: 'left'});
sr.revseal('home -text p',{delay:750, origin: 'right'});
sr.revseal('main -btn',{delay:860, origin: 'right'});

sr.revseal('share',{delay:950, origin: 'bottom'});
sr.revseal('home-img',{delay:1000, origin: 'right'});


