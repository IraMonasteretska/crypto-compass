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
    if ($('.sorttable.t1').length) {
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


    if ($('.alsolikeslider').length > 0) {
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
    }
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
    if ($('.styledselect').length) {
        $('.styledselect').select2({
            // placeholder: "Project Type*",
            minimumResultsForSearch: Infinity,
        });
    }

    $('.selectedfilter__box .remove').click(function () {
        $(this).parent('.selectedfilter__box').remove();
    })

    $('.category-topsection__right button').click(function () {
        $('.category-topsection__right button').removeClass('active');
        $(this).addClass('active');
    })

    // filter open
    $('.filter-btn').click(function () {
        $('.category-filter').addClass('active');
    });

    $('.closefilter').click(function () {
        $('.category-filter').removeClass('active');
    });

    // category products in row
    $('.category-topsection__right button').click(function () {
        $('.category-topsection__right button').removeClass('active');
        $(this).addClass('active');
    });

    $('.inrow').click(function () {
        $('.category-products').addClass('rowsect');
    })
    $('.inbox').click(function () {
        $('.category-products').removeClass('rowsect');
    })

    // -----Product Slider------
    if ($('.productslider').length) {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 15,
            slidesPerView: 3,
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 3,
                },

            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    // product tabs
    $('.producttabs__tabbtn').click(function () {
        $('.producttabs__tabbtn').removeClass('active');
        $(this).addClass('active')
    })



    $('.producttabs__tabbtn').on('click', function () {
        // Видаляємо клас active у всіх кнопок
        $('.producttabs__tabbtn').removeClass('active');

        // Додаємо клас active до натиснутої кнопки
        $(this).addClass('active');

        // Отримуємо індекс натиснутої кнопки
        var index = $(this).index();

        // Ховаємо всі вкладки
        $('.producttabs__tab').addClass('hide');

        // Показуємо відповідну вкладку за індексом
        $('.producttabs__tab').eq(index).removeClass('hide');
    });

    // product table
    if ($('.sorttable.t2').length) {
        $('#myTable').DataTable({
            "dom": 'rt<"bottom"ipl><"clear">',
            "language": {
                "info": "Showing _START_ - _END_ out of _TOTAL_",
                "lengthMenu": "Show rows: _MENU_"
            },
            "paging": false,
            "lengthChange": true,
            "scrollX": true,
            fixedColumns: false,
            "info": false
        });
    }



})