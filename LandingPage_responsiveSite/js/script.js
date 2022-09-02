const ACTIVE = 'active';
const IMAGES = document.querySelectorAll('.slider');

IMAGES[0].classList.add(ACTIVE);

function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVE}`);
    if (elm) {
        elm.classList.remove(ACTIVE);
    }
}

function addClass($event) {
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(ACTIVE);
}

IMAGES.forEach(image => {
    image.addEventListener('click' , addClass);
});

//menu bar
$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
});