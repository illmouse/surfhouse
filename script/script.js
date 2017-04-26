
function initMap() {
    var uluru = {
        lat: 36.533913,
        lng: -120.097913
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
