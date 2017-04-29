
function initMap() {
    var uluru = {
        lat: 34.020150,
        lng: -118.490721
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}