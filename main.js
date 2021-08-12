
//Code to handle burger menus
document.addEventListener('DOMContentLoaded', () => {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

   if ($navbarBurgers.length > 0){
       $navbarBurgers.forEach( el => {
           el.addEventListener('click', () =>  {
               const target = el.dataset.target;
               const $target = document.getElementById(target);

               el.classList.toggle('is=active');
               $target.classList.toggle('is-active');
           })
       })
   }
});

//Code to handle scroll reveals
ScrollReveal().reveal('.membership-benefits-animation', {
    delay: 200,
    distance: '150px',
    duration: 250,
    easing: 'ease-in',
    interval: 150,
    reset: false,
    viewFactor: 0.3
});

