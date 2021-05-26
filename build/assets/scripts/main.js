$(document).ready(function () {
    $('.hero__slider').slick({
        arrows: false
    });

    $('.year__slider').slick({
        arrows: false
    });

    $('.faq .faq__btn').on('click', function() {
        $('.bg').addClass('bg--active');
        $('.popup--callback').addClass('popup--active');
    });

    $('.popup .popup__exit--orange').on('click', function() {
        $('.bg').removeClass('bg--active');
        $('.popup--callback').removeClass('popup--active');
    });

    $('.bg').on('click', function() {
        $('.bg').removeClass('bg--active');
        $('.popup--callback').removeClass('popup--active');
        $('.popup--consult').removeClass('popup--active');
    });

    $('.callback .callback__btn').on('click', function() {
        $('.bg').addClass('bg--active');
        $('.popup--consult').addClass('popup--active');
    });

    $('.popup .popup__exit--blue').on('click', function() {
        $('.bg').removeClass('bg--active');
        $('.popup--consult').removeClass('popup--active');
    });

    $('.faq__list .list__item').on('click', function(e) {
        if(this.nextElementSibling.classList.contains(('list__item-about--active'))) {
            this.nextElementSibling.classList.remove('list__item-about--active');
            this.classList.remove('list__item--active');
        } else {
            $('.list__item-about--active').removeClass('list__item-about--active');
            $('.list__item--active').removeClass('list__item--active');
            this.nextElementSibling.classList.add('list__item-about--active');
            this.classList.add('list__item--active');
        }

    });
});