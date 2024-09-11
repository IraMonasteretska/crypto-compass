$(document).ready(function () {
    // header
    const $header = $("header.header")
    let prevScroll
    let lastShowPos

    $(window).on("scroll", function () {
        const scrolled = $(window).scrollTop()

        if (scrolled > 50 && scrolled > prevScroll) {
            $header.addClass("header-out")
            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 50, 0)) {
            $header.removeClass("header-out")
        }
        prevScroll = scrolled
    })



    //  Main slider
    var swiper = new Swiper(".mainslider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },

        // breakpoints: {
        //     640: {
        //         spaceBetween: 20,
        //     },
        // },
    });

    // burger
    $('.burger').on('click', function () {
        $('.header__mobile-menu').toggleClass('active');
        $('body').toggleClass('mob-menu');
        $(this).toggleClass('on');

        $('.header__menucolumn').toggleClass('active')
    });

    // Show search field - mobile

    $('.mobsearchshow').click(function () {
        $('.header__searchbox').toggleClass('show');
    });

    // menu
    // $('header.header nav>ul>li.dropdownn-item>a').click(function (e) {
    //     e.preventDefault();
    //     $('.dropdownn-item').not($(this).parent('.dropdownn-item')).removeClass('active');
    //     $(this).parent('.dropdownn-item').toggleClass('active');

    //     $('.mmenu').not($(this).next('.mmenu')).removeClass('tets');
    //     $(this).next('.mmenu').toggleClass('tets');

    // });
    // <1200
    if ($(window).width() < 1200) {
        $('header.header nav>ul>li.dropdownn-item>a').click(function (e) {
            e.preventDefault();
            $(this).next('.mmenu').toggleClass('show');

        });
    }
    else {
        $('header.header nav>ul>li.dropdownn-item>a').click(function (e) {
            e.preventDefault();
            $('.dropdownn-item').not($(this).parent('.dropdownn-item')).removeClass('active');
            $(this).parent('.dropdownn-item').toggleClass('active');

            $('.mmenu').not($(this).next('.mmenu')).removeClass('tets');
            $(this).next('.mmenu').toggleClass('tets');

        });
    }

    // hero slider
    var swiper = new Swiper(".heroslider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

    });

    // Prices - buttons
    $('.tablesection__sortrow button').click(function () {
        $('.tablesection__sortrow button').removeClass('active');
        $(this).addClass('active');
    });

    // data tables
    if ($('.sorttable').length) {
        $('#myTable').DataTable({
            "dom": 'rt<"bottom"ipl><"clear">',
            "language": {
                "info": "Showing _START_ - _END_ out of _TOTAL_",
                "lengthMenu": "Show rows: _MENU_"
            },
            "pagingType": "simple_numbers",
            "lengthChange": true,
            "scrollX": true,
            fixedColumns: false,
        });


    }


    // fancybox
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {

        });
    }
    

    
    if ($('video').length > 0) {
        const player = new Plyr('#player');
    }

    
    // var swiper = new Swiper(".alsolikeslider", {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //     speed: 1000,
    //     loop: true,

    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false,
    //     },

    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },

    //     breakpoints: {
    //         992: {
    //             slidesPerView: 3,
    //         },

    //         767: {
    //             slidesPerView: 2,
    //         },

           
            
    //     },
    // });

    var swiper2 = null; // спочатку слайдер не ініціалізований

    function initSwiper() {
        if (window.innerWidth >= 575 && swiper2 === null) {
            swiper2 = new Swiper(".alsolikeslider", {
                spaceBetween: 20,
                speed: 1000,
                loop: true,
    
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
    
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
    
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                }
            });
        } else if (window.innerWidth < 575 && swiper2 !== null) {
            swiper2.destroy(true, true);  // Знищуємо слайдер при малих розмірах
            swiper2 = null;
        }
    }
    
    // Ініціалізація при завантаженні сторінки
    initSwiper();
    
    // Відслідковуємо зміну розміру вікна
    window.addEventListener('resize', function () {
        initSwiper();
    });


})