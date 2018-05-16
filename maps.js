function initMap() {
	var fenway = {
		lat: 50.43604734,
		lng: 30.52031672
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: fenway,
		zoom: 18
	});
	var panorama = new google.maps.StreetViewPanorama(
		document.getElementById('pano'), {
			position: fenway,
			pov: {
				heading: 34,
				pitch: 10
			}
		});

	var geocoder = new google.maps.Geocoder();

	document.getElementById('submit').addEventListener('click', function() {
		geocodeAddress(geocoder, map);
	});
	map.setStreetView(panorama);
}

function geocodeAddress(geocoder, resultsMap) {
	var address = document.getElementById('address').value;

	geocoder.geocode({
		'address': address
	}, function(results, status) {
		if (status === 'OK') {
			resultsMap.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: resultsMap,
				position: results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}