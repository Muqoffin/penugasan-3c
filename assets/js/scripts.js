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
            var typed = new Typed('#typed-slide-2', {
                stringsElement: '#typed-strings-slide-2',
                backSpeed: 40,
                typeSpeed: 40,
                loop: true
            });
            var typed = new Typed('#typed-slide-3', {
                stringsElement: '#typed-strings-slide-3',
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

// Aos js 
AOS.init();