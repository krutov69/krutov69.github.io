$(function () {

    /*-----Скрипт для счётчика начало-------*/
    $('.count').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });

    });
    /*-------Скрипт для счётчика конец---------*/

    /*-----------------Плагин для меню--------------------*/

    $('#menu').slimmenu({
        resizeWidth: '1080',
        collapserTitle: 'Menu',
        animSpeed: 1500,
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });

    /*-----------Скрипт для кнопки наверх----------*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });

    $('.scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });



});