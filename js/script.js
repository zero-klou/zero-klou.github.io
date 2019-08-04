//slider

$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron.png"></button>',
        dots: true
    });
    //

    //burger

    $('.header__burger').on('click', function() {
        $('.header__list-body').toggleClass('header__list-body_active')
    });
    //

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });

    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback').fadeIn();
    });

    $('[data-modal=big-txt]').on('click', function() {
        $('.overlay, #big-txt').fadeIn();
    });

    $('[data-modal=rights]').on('click', function() {
        $('.overlay, #big-txt-confidence').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #big-txt, #callback, #big-txt-confidence').fadeOut();
    });
    //

    //validate

    function validateForms(form) {
        $(form).validate({
            rules: {
                phone: "required",
            },
            messages: {
                phone: "Неправильно введен номер, введите 10 цифр без +7",
            }
        });
    } 

    validateForms('#consultation form');
    validateForms('#callback form');
    // 

    //maske

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    //

    //submit

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');
            $('#consultation, #callback').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });
    //
});