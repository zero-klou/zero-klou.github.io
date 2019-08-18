$(document).ready(function(){
    $('.carousel_about').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_about carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_about carousel__arrow_right">&#8594;</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.carousel_many').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_right">&#8594;</button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.carousel_too-many').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_right">&#8594;</button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('[data-modal=rights]').on('click', function(e) {
        e.preventDefault();
        $('.overlay, .popup').fadeIn();
    });

    $('.popup__close').on('click', function() {
        $('.overlay, .popup, .success').fadeOut();
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $('.overlay, .success').fadeIn();
        $('form').trigger('reset');
    });

    $('.burger').on('click', function() {
        $('.header__nav').toggleClass('header__nav-active');
        $('.burger').toggleClass('burger-active');
    });

    $('#btn-nav').on('click', function() {
        scrollTo(0, $('#contacts').offset().top);  
    });
});