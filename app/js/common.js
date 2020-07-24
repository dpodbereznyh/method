
$(document).ready(function () {

    $(".header__nav_link, .overlay__nav_arrow-footer").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 700,
            easing: "swing"
        });
        return false;
    });

    $(function () {
        $(window).scroll(function(event) {
            if($(this).scrollTop() > 110) {

                $("#navToggle").css('display', 'block');
            }
            else {
                $("#navToggle").css('display', 'none');
            }
        });

    });

    //Pagination
    (function($){
        $(window).on("load",function(){

            /* Page Scroll to id fn call */
            $(".overlay__nav__dotts_item a").mPageScroll2id({
                highlightSelector:".overlay__nav__dotts_item a",
                clickEvents:true
            });

            /* jquery.address fn */
            // $.address.change(function(event) {
            //     var hash=event.value.split("/")[1] || "#header";
            //     $.mPageScroll2id("scrollTo",hash,{
            //         clicked:$("a[href='"+hash+"']")
            //     });
            // });

            $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").click(function(e) {
                e.preventDefault();
                var href=$(this).attr("href");
                if($.address.value()==="/"+href){
                    $.address.history(false);
                    $.address.value("#");
                }else{
                    $.address.history(true);
                }
                $.address.value($(this).attr("href"));
            });

            /* demo functions */
            $("a[rel='next']").click(function(e){
                e.preventDefault();
                var to=$(this).parent(".section-scroll").next().attr("id");
                $.mPageScroll2id("scrollTo",to);
            });

        });
    })(jQuery);

    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });
    $(".overlayMenu>ul>li>a").click(function() {
        $(".navBurger").removeClass("active");
        $(".overlay").removeClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").removeClass("locked");
    });

    //Popup Form
    $(document).on( "click", ".popup-btn", function() {
        var newtitle = this.getAttribute('data-title');
        jsTitle.setAttribute('value', newtitle);
    });
    $(".popup-form").submit(function(){
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function() {
            // $(this).find("input").val("");
            $.fancybox.open({
                src: '#fancyalert',
            });
            $(".popup-form").trigger("reset");
        });
        return false;
    });

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
//     var teamSlider = new Swiper ('.team__swiper-container', {
//         slideClass: 'team__swiper-slide',
//         wrapperClass: 'team__swiper-wrapper',
//         slidesPerView: 1,
//         lazy: {
//             loadPrevNext: true,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true,
//             bulletClass: 'team__swiper_bullet',
//             bulletActiveClass: 'team__swiper_bullet-active'
//         }
//     });
//     var bLazy = new Blazy({
//         offset: 10,
//     });
});
