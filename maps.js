function initMap() {
	var work = {lat: 50.435932, lng: 30.5205533};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: work
	});
	var marker = new google.maps.Marker({
		position: work,
		map: map
	});
}

var contentString = '<div id="content">Тут всё то про что должно быть рассказано</div>';

var infowindow = new google.maps.InfoWindow({
	position: work,
	map: map,
	title: 'Work (Kiev)'
});

google.maps.event.addListener(marker, 'click', function(){
	infowindow.open(map,marker);
});

var markers = []; 
var marker = new google.maps.Marker({    
	position: work
});
markers.push(marker);
markerClusterer = new MarkerClusterer(_this.map, markers, 
{ 
	maxZoom: 13,
	gridSize: 50,
	styles: null 
});