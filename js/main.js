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

function initMap() {
    var styledMapType = new google.maps.StyledMapType(
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ]
    );
    var delhi = {lat: 28.6139, lng: 77.2090};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: delhi,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: delhi,
        map: map
    });
    map.setTilt(0);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}
