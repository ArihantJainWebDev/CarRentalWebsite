let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
};

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal('.text',{delay: 300, origin: 'top'});
sr.reveal('.form-container form',{delay: 200, origin: 'left'});
sr.reveal('.heading',{delay: 400, origin: 'top'});
sr.reveal('.ride-container',{delay: 250, origin: 'top'});
sr.reveal('.services-container',{delay: 250, origin: 'top'});
sr.reveal('.about-container',{delay: 250, origin: 'top'});
sr.reveal('.reviews-container',{delay: 250, origin: 'top'});
sr.reveal('.newsletter .box',{delay: 300, origin: 'bottom'});


