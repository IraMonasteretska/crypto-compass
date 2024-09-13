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

    // category page
    $('.catfilter-box__title').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('.catfilter-box__filling').slideToggle();


    })

    $('.catfilter__showall').click(function () {
        $(this).toggleClass('rotate');
        $(this).prev('.filtercheckboxes').toggleClass('showallbox');
    })





    // ----------------------Range slider-------------------------------

    if ($('.rangeslider-wrapper').length > 0) {

        var $range = $(".js-range-slider"),
            $inputFrom = $(".js-input-from"),
            $inputTo = $(".js-input-to"),
            instance,
            min = 0,
            max = 9999,
            from = 0,
            to = 0;

        $range.ionRangeSlider({
            skin: "round",
            type: "double",
            min: min,
            max: max,
            from: 0,
            to: 9999,
            onStart: updateInputs,
            onChange: updateInputs
        });
        instance = $range.data("ionRangeSlider");

        function updateInputs(data) {
            from = data.from;
            to = data.to;

            $inputFrom.prop("value", from);
            $inputTo.prop("value", to);
        }

        $inputFrom.on("input", function () {
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > to) {
                val = to;
            }

            instance.update({
                from: val
            });
        });

        $inputTo.on("input", function () {
            var val = $(this).prop("value");

            // validate
            if (val < from) {
                val = from;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                to: val
            });
        });

    }

    // Знаходимо всі кнопки .resetfilter
    document.querySelectorAll('.resetfilter').forEach(function (button) {
        // Прив'язуємо обробник події для кожної кнопки
        button.addEventListener('click', function () {
            // Знаходимо всі чекбокси у фільтрі
            const checkboxes = document.querySelectorAll('.category-filter input[type="checkbox"]');

            // Пробігаємо по кожному чекбоксу і скидаємо його
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });

            // Очищуємо поля введення для діапазону цін
            document.querySelector('.js-input-from').value = '0';
            document.querySelector('.js-input-to').value = '9999';

            // Якщо у вас є додатковий слайдер, ви можете його також скинути
            $(".js-range-slider").data("ionRangeSlider").reset();
        });
    });



    // styled selects
    if ($('select').length) {
        $('.styledselect').select2({
            // placeholder: "Project Type*",
            minimumResultsForSearch: Infinity,
        });
    }

    $('.selectedfilter__box .remove').click(function () {
        $(this).parent('.selectedfilter__box').remove();
    })

    $('.category-topsection__right button').click(function(){
        $('.category-topsection__right button').removeClass('active');
        $(this).addClass('active');
    })


})