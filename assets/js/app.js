$(function(){
    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

        // Fixed Header 
        checkScroll(scrollOffset);
       
    $(window).on('scroll', function() {
        
        scrollOffset = $(this).scrollTop();
            checkScroll(scrollOffset);
            
        
    })

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass('fixed');
        } else{
            header.removeClass('fixed');

        }
    }

    // Smooth Scroll

    $('[data-scroll').on('click', function(e) {
        e.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

            $('nav a').removeClass('active')
            $(this).addClass('active')

            $('html, body').animate({
                scrollTop: blockOffset
            }, 500)
        
            $('#nav_toggle').toggleClass('active');
            $('#nav').toggleClass('active');
            $('#header').toggleClass('active');
            
    })

    // Menu nav toggle

    $('#nav_toggle').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('#header').toggleClass('active');
    })


    //Collapse

    $('[data-collapse]').on('click', function(e) {
        e.preventDefault();

        let = elemId = $(this).data('collapse');
        $(elemId).slideToggle();
        $('accordion__item').removeClass('active')
        $(this).toggleClass('active')
    })

    // Slider

    $('[data-slide').slick()
});