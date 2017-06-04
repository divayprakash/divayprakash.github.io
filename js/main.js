wow = new WOW(
    {
        live: false
    }
)
wow.init();
$('.dynamic').hide();
$(window).on('load resize', function(){
    var width = $(window).width();
    if (width > 980) {
        $("#nav").scrollspy(
            {
                animate: true
            }
        );
        var offset = $('.content').css('padding-top');
        var hidePos = parseInt(offset, 10);
        $(window).scroll(function() {
            if ($(this).scrollTop()>hidePos)
            {
                $('.static').hide();
                $('.dynamic').show();
            }
            else
            {
                $('.static').show();
                $('.dynamic').hide();
            }
        });
    }
});
