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
function progress(container, labelText, value) {
    var bar = new ProgressBar.Circle(container, {
        color: '#7212e6',
        strokeWidth: 6,
        trailWidth: 2,
        text: { value: labelText, style: { color: '#000000', position: 'absolute', left: '50%', top: '50%', padding: 0, margin: 0, transform: { prefix: true, value: 'translate(-50%, -50%)' } } }, autoStyleContainer: true
    });
    bar.set(value);
}

progress('#progress1', 'Programming', 0.85);
progress('#progress2', 'Web Dev', 0.60);
