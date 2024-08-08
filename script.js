// script.js

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggle();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});