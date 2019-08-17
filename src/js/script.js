$(document).ready(function(){
    $('.carousel_about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_about carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_about carousel__arrow_right">&#8594;</button>',
    });

    $('.carousel_many').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_right">&#8594;</button>',
    });

    $('.carousel_too-many').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_left">&#8592;</button>',
        nextArrow: '<button class="carousel__arrow carousel__arrow_margin-less carousel__arrow_right">&#8594;</button>',
    });
});