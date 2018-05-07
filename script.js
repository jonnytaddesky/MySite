var Область = Array ('Город');
var Киевская = Array ('Киев', 'Ирпень', 'Буча');
var Винницкая = Array ('Винница');
var Днепропетровская = Array ('Днепр');
var Донецкая = Array ('Донецк');
var Житомирская = Array ('Житомир');
var Закарпатская = Array ('Ужгорож');
var Запорожская = Array ('Запорожье');
var ИваноФранковская = Array ('Ивано-Франковск');
var Кировоградская = Array ('Кировоград');
var Луганская = Array ('Луганск');
var Львовская = Array ('Львов');
var Николаевская = Array ('Николаев');
var Одесская = Array ('Одесса');
var Полтавская = Array ('Полтава');
var Ровенская = Array ('Ровно');
var Сумская = Array ('Суммы');
var Тернопольская = Array ('Тернополь');
var Харьковская = Array ('Харьков');
var Хмельницкая = Array ('Хмельницк');
var Черкасская = Array ('Черкассы');
var Черниговская = Array ('Чернигов');
var Черновицкая = Array ('Черновцы');

function showCity (x) {
	var mas = eval(x);
	var el = document.getElementById('names');
	
	while (el.childNodes.length > 0){
		el.removeChild(el.childNodes[el.childNodes.length - 1]);
	}

	for (var i = 0; i < mas.length; i++){
		var opt = document.createElement("option");
		opt.innerHTML = mas[i];
		el.appendChild(opt);
	}
}



