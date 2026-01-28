
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});



document.querySelectorAll('.hireMe').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'bookcovers/bookcovers.html';
    });
});

document.querySelectorAll('.aboutMe').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'cart/cart.html';
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'cart/cart.html';
    });
});

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = '../cart/cart.html';
    });
});
