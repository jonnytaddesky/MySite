function init(){
	scriptCity();
	scriptStreet();
}

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

var Город = Array ('Улица');
var Киев = Array ('Голосеевская', 'Саксаганского', 'Жилянская');
var Винница = Array ('Стрилецкая', 'Громовая', 'Богдана Ступки');
var Днепр = Array ('Короленка', 'Воскресенская', 'Глинки');
var Донецк = Array ('Кубышева', 'Корниенка', 'Лебединского');
var Житомир = Array ('Пушкинская', 'Коцюбинского', 'Гоголевская');
var Ужгород = Array ('Новака', 'Боковая', 'Швабская');
var Запорожье = Array ('Яценка', 'Верхняя', 'Скельная');
var ИваноФранковск = Array ('Вовчинецкая', 'Маланюка', 'Днистровская');
var Кировоград = Array ('Пушкина', 'Тобилевича', 'Каховская');
var Луганск = Array ('Демехина', 'Володарского', 'Шелкового');
var Львов = Array ('Костомарова', 'Палия', 'Гнатюка');
var Николаев = Array ('Николаев');
var Одесса = Array ('Одесса');
var Полтава = Array ('Полтава');
var Ровно = Array ('Ровно');
var Суммы = Array ('Суммы');
var Тернополь = Array ('Тернополь');
var Харьков = Array ('Харьков');
var Хмельницк = Array ('Хмельницк');
var Черкассы = Array ('Черкассы');
var Чернигов = Array ('Чернигов');
var Черновцы = Array ('Черновцы');

function showStreet (y) {
	var st = eval(y);
	var elem = document.getElementById('street');
	
	while (elem.childNodes.length > 0){
		elem.removeChild(elem.childNodes[elem.childNodes.length - 1]);
	}

	for (var i = 0; i < st.length; i++){
		var opto = document.createElement("option");
		opto.innerHTML = st[i];
		elem.appendChild(opto);
	}
}