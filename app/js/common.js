$(document).ready(function () {

// SmartMenus init
    $(function() {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            subMenusSubOffsetX: 10,
            subMenusSubOffsetY: 0
        });
    });

// SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });
//Team Swiper Slider
    var teamSlider = new Swiper ('.team__swiper-container', {
        slideClass: 'team__swiper-slide',
        wrapperClass: 'team__swiper-wrapper',
        slidesPerView: 1,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'team__swiper_bullet',
            bulletActiveClass: 'team__swiper_bullet-active'
        }
    });

    // $(document).on("click", ".jsBtn", function () {
    //     var newinput = this.getAttribute('data-input');
    //     var newtitle = this.getAttribute('data-title');
    //     jsInput.setAttribute('value', newinput);
    //     jsTitle.setAttribute('value', newtitle);
    // });

    // $(".popup-form").submit(function () {
    //     $.ajax({
    //         type: "POST",
    //         url: "send.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         // $(this).find("input").val("");
    //         parent.jQuery.fancybox.getInstance().close();
    //         $.fancybox.open({
    //             src: '#fancyalert',
    //         });
    //         $(".popup-form").trigger("reset");
    //     });
    //     return false;
    // });


    // $("#formt-questions").submit(function () {
    //     $.ajax({
    //         type: "POST",
    //         url: "send.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         // $(this).find("input").val("");
    //         $.fancybox.open({
    //             src: '#fancyalert',
    //         });
    //         $("#formt-questions").trigger("reset");
    //     });
    //     return false;
    // });


    // $("#excursion__form").submit(function () {
    //     $.ajax({
    //         type: "POST",
    //         url: "send.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         // $(this).find("input").val("");
    //         $.fancybox.open({
    //             src: '#fancyalert',
    //         });
    //         $("#excursion__form").trigger("reset");
    //     });
    //     return false;
    // });

});