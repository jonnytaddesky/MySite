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



