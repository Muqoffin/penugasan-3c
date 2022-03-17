(function() {

    'use strict';

    // lib typed start 
    var typed = function() {
            var typed = new Typed('#typed-slide-1', {
                stringsElement: '#typed-strings-slide-1',
                backSpeed: 40,
                typeSpeed: 40,
                loop: true
            });
        }
        // lib typed end 

    // Document on load.
    $(function() {
        typed();
    });
}());

// header sidebar start 
$(document).ready(function() {
        $('.btn-mobile').click(function() {
            $(this).toggleClass('fa-times');
            $('nav').toggleClass('nav-toggle');
        })

        $('nav ul li a').click(function() {
            $('.btn-mobile').removeClass('fa-times');
            $('nav').removeClass('nav-toggle');
        })
    })
    // header sidebar end 

// Aos js 
AOS.init();