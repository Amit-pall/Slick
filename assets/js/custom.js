(function ($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function () {
        init_menu_toggle();
        init_header_style();
    });

    function init_menu_toggle() {
        $(".menu-icon").click(function () {
            $(this).toggleClass("menu-icon-design");
            $(".header-menu").toggleClass("show-menu");
        });

        $(".header-menu li a").click(function () {
            $(".header-menu").removeClass("show-menu");
            $(".menu-icon").removeClass("menu-icon-design");

        });
    }

    function init_header_style() {
        var header = $(".header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 200) {
                header.addClass("header-fixed");
            } else {
                header.removeClass("header-fixed");
            }
        });
    }

   
        // showcase  area start


        
        $('.main-slider').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                   
                },

                575: {
                    items: 1,
                
                },

                768: {
                    items: 3,
                   
                },

                1000: {
                    items: 5,
                  
                }
            }
        })



        // testmonialy 

        $('.client-testimonial').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
               
                },

                575: {
                    items: 1,
           
                },

                768: {
                    items: 1,
               
                },

                1000: {
                    items: 1,
                  
                }
            }
        })




        // Back To Top


        $(".back-to-top").on("click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
            
        // popo vidoes

        $(document).ready(function() {
            $('.popup-youtube').magnificPopup({
            type: 'iframe'
          });
        });


        // popo image

        $('.zoom-icon ').magnificPopup({
            type: 'image',
            delegate: 'a',
    
  
        });
        


})(jQuery);





    // Menu Smooth-scroll

    $(function () {


    
        $(document).ready(function () {
            $(document).on("scroll", onScroll);
            
            //smoothscroll
            $('.header-menu  li a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");
                
                $('.header-menu  li a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
              
                var target = this.hash,
                    menu = target;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top+2
                }, 2000, 'swing', function () {
                    $(document).on("scroll", onScroll);
                });
            });
        });
        
        
        
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.header-menu  li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.header-menu ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }
    
    
    });





// secrnd
