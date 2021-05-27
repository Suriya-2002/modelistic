(function ($) {
    $(window).load(function () {
        $('#loader').fadeOut('slow', function () {
            $('#preloader').delay(300).fadeOut('slow');
        });
    });

    $('.home-particles').particleground({
        dotColor: '#fff',
        lineColor: '#777',
        particleRadius: 6,
        curveLines: true,
        density: 10000,
        proximity: 110,
    });
})(jQuery);
