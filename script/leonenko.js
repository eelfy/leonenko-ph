// SLIDER
let images = document.querySelectorAll(".slider-container img");
let current = 0;
let timer;

autoSlider();
slider();

function autoSlider() {
    timer = setTimeout(swipeLeft, 7000);
}

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[current].classList.remove('hide');


}

document.querySelector(".btn-infinity-r").addEventListener('click', () => {

    if (current - 1 == -1) {
        current = images.length - 1;

    } else {
        current--;
    }

    slider();
});

document.querySelector(".btn-infinity-l").onclick = () => {
    if (current + 1 == images.length) {
        current = 0;

    } else {
        current++;
    }

    slider();

};

function swipeLeft() {

    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
    autoSlider();
}
// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

});



// NAV burg

$("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".nav_head").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
});

// NAV BAR CLOSE IF U CLICK ON STUFF
function close() {
    $(this).removeClass("active");
    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".nav_head").classList.remove("active");
    document.querySelector(".nav-toggle").classList.remove("active");
    document.querySelector("header").classList.remove("active");
}

// document.getElementById('gallery_close').addEventListener('click', close);
// document.getElementById('form_close').addEventListener('click', close);
// document.getElementById('feedback_close').addEventListener('click', close);


// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#menu__nav li ").removeClass("active");
    $this.addClass("active");


    $("#btn__up ").removeClass("active");
    $this.addClass("active");


    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});