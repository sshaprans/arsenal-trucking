window.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU

    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        const header = document.querySelector('.header');

        burger.classList.toggle('is-active');
        header.classList.toggle('is-active');
        document.querySelector('html').classList.toggle('scroll-hidden');
    })

    // HEADER FIXED

    let isScrolling = false;

    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const header = document.querySelector('.header');

                if (window.scrollY > 1) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }

                isScrolling = false;
            });

            isScrolling = true;
        }
    });

    // INPUT PLACEHOLDER

    const inputs = document.querySelectorAll('.input-js');

    if (inputs) {
        inputs.forEach(el => {
            el.addEventListener('input', (e) => {
                const parent = el.parentNode;
                if (e.target.value > 0) {
                    parent.querySelector('.form-control__placeholder').classList.add('hidden');
                } else {
                    parent.querySelector('.form-control__placeholder').classList.remove('hidden');
                }
            })
        })
    }

    // REVIEWS SLIDER

    const reviewSlider = document.querySelector('.reviews__slider');

    if (reviewSlider) {
        new Swiper(reviewSlider, {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.reviews__pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.reviews__arrow-next',
                prevEl: '.reviews__arrow-prev',
            },
        });
    }

    // SELECT 2

    (($) => {
        $(document).ready(function() {
            $('.blog-select').select2({
                minimumResultsForSearch: Infinity,
                selectionCssClass: 'select-custom',
                dropdownCssClass: 'select-drop-custom'
            });
        });
    })(jQuery);
})