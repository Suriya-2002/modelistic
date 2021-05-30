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

const dropdownOption = document.querySelector('.dropdown__selected-option');

document.querySelector('.dropdown__list').addEventListener('click', event => {
    if (event.target.classList.contains('dropdown__option')) {
        dropdownOption.innerHTML = event.target.innerHTML;
    }
});
