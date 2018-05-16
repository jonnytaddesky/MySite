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

        var settings = {
 		"async": true,
  		"crossDomain": true,
  		"url": "https://eu1.locationiq.org/v1/reverse.php?key=957cabbcaddd76&lat=-37.870662&lon=144.9803321&format=json",
  		"method": "GET"
	}

	$.ajax(settings).done(function (response) {
  	console.log(response);
	});	
} 




// function findStreet(){
// 	var str = document.getElementById("geocoding-query").value;
// 	var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

// 	initMap();
// }