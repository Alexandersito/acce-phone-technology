window.addEventListener('load', function () {
    var header = document.querySelector('header');
    var altoHeader = document.querySelector('.alto-header');

    altoHeader.style.height = header.offsetHeight + 'px';

    window.addEventListener('scroll', function () {
        altoHeader.style.height = (header.offsetHeight - window.scrollY) + 'px';
    });
});

$(document).ready(function () {
    $('.your-slider').slick({
        autoplay: true, // Autoreproducción
        autoplaySpeed: 3000, // Velocidad de autoreproducción en milisegundos
        dots: true, // Muestra los puntos de navegación
        arrows: true, // Muestra las flechas de navegación
        infinite: true, // Bucle infinito
        speed: 500, // Velocidad de la transición en milisegundos
        slidesToShow: 1, // Cantidad de slides a mostrar
        slidesToScroll: 1 // Cantidad de slides a desplazar
    });
});

const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuMovil = document.querySelector('.menu-movil');

let menuDesplegado = false;

menuHamburguesa.addEventListener('click', function () {
    if (!menuDesplegado) {
        menuMovil.style.display = 'block';
        setTimeout(() => {
            menuMovil.classList.add('mostrar-menu');
        }, 10);
    } else {
        menuMovil.classList.remove('mostrar-menu');
        setTimeout(() => {
            menuMovil.style.display = 'none';
        }, 300);
    }
    menuDesplegado = !menuDesplegado;
});


function flipCard(element) {
    var card = element.closest('.flip-card');
    card.classList.toggle('hover');
}

$('.slider-card').slick({
    autoplay: true, // Autoreproducción
    autoplaySpeed: 3000, // Velocidad de autoreproducción en milisegundos
    dots: true, // Muestra los puntos de navegación
    arrows: true, // Muestra las flechas de navegación
    infinite: true, // Bucle infinito
    speed: 500, // Velocidad de la transición en milisegundos
    slidesToShow: 1, // Cantidad de slides a mostrar
    slidesToScroll: 1 // Cantidad de slides a desplazar
});