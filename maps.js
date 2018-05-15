function initMap() {
	var work = {lat: 50.435932, lng: 30.5205533};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: work
	});
	var marker = new google.maps.Marker({
		position: work,
		map: map
	});
	var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: work,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
        map.setStreetView(panorama);
} 