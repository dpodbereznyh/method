
$(document).ready(function () {

    $(".header__nav_link, .overlay__nav__dotts_item a").click(function() {
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

    $(function(){
        $('.overlay__nav_arrow').click(function(){
            $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
            $('.overlay__nav_arrow').toggleClass('overlay__nav_arrow-up');
            return false;
        });
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



});
//Pagination

// screens = [
//     {name: 'header'},
//     {name: 'about'},
//     {name: 'team'},
//     {name: 'cases'},
//     {name: 'development'},
//     {name: 'promotion'},
//     {name: 'audit'},
//     {name: 'contacts'},
// ];
let paginationDotsList = document.querySelector('.overlay__nav_dots_list');
let countDotItem = document.querySelectorAll('section');
let paginationDotItem;
let active;

let items = document.querySelector('.overlay__nav_dots_list li')
for (i = 1; i <= countDotItem.length + 2; i++) {
    paginationDotItem = document.createElement('li');
    paginationDotItem.innerHTML = i;
    paginationDotsList.appendChild(paginationDotItem);
    paginationDotItem.addEventListener('click', function () {
        if (active) {
            active.classList.remove('active');
        }
        active = this;
        this.classList.add('active');
    });
};

