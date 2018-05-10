function init(){
	scriptCity(x);
	scriptStreet(y);
}

var region = Array ('Місто');
var kyivska= Array ('Київ', 'Ірпінь', 'Буча');
var volynskaya = Array('Луцьк');
var vinnitskaya = Array ('Вінниця');
var dnipropetrovska = Array ('Дніпро');
var donetska = Array ('Донецьк');
var zhytomurska = Array ('Житомир');
var zakarpatska = Array ('Ужгород');
var zaporizka = Array ('Запоріжжя');
var ivanoFrankivska = Array ('ІваноФранківськ');
var kropyvnutska = Array ('Кропивницький');
var luhanska = Array ('Луганськ');
var lvivska = Array ('Львів');
var mykolaivska = Array ('Миколаїв');
var odesska = Array ('Одеса');
var poltavska = Array ('Полтава');
var rivnenska = Array ('Рівне');
var sumska = Array ('Суми');
var ternopilska = Array ('Тернопіль');
var harkivska = Array ('Харків');
var hmelnytska = Array ('Хмельницьк');
var cherkasska = Array ('Черкаси');
var chernigivska = Array ('Чернігів');
var chernivetska = Array ('Чернівці');

function showCity (x) {
	var mas = eval(x);
	var el = document.getElementById('names');
	
	while (el.childNodes.length > 0){
		el.removeChild(el.childNodes[el.childNodes.length - 1]);
	}

	for (var i = 0; i < mas.length; i++){
		if (i == 0)
			showStreet(mas[0]);
		var opt = document.createElement("option");
		opt.innerHTML = mas[i];
		el.appendChild(opt);
	}
}

var місто = Array ('Вулиця');
var Київ = Array ('Голосіївська', 'Саксаганського', 'Жилянська');
var Луцьк = Array('Потапова', 'Вінниченка', 'Шопена');
var Вінниця = Array ('Стрілецька', 'Громова', 'Богдана Ступки');
var Дніпро = Array ('Короленка', 'Воскресінська', 'Глинки');
var Донецьк = Array ('Кубишева', 'Корнїєнка', 'Лебединського');
var Житомир = Array ('Пушкінськая', 'Коцюбинського', 'Гоголівськая');
var Ужгород = Array ('Новака', 'Бокова', 'Швабськая');
var Запоріжжя = Array ('Яценка', 'Верхня', 'Скельна');
var ІваноФранківськ = Array ('Вовчинецькая', 'Маланюка', 'Дністровськая');
var Кропивницький = Array ('Пушкіна', 'Тобілевича', 'Каховська');
var Луганськ = Array ('Дємєхіна', 'Володарського', 'Шелкового');
var Львів = Array ('Костомарова', 'Палія', 'Гнатюка');
var Миколаїв = Array ('Николаев');
var Одеса = Array ('Одесса');
var Полтава = Array ('Полтава');
var Рівне = Array ('Ровно');
var Суми = Array ('Суммы');
var Тернопіль = Array ('Тернополь');
var Харків = Array ('Харьков');
var Хмельницьк = Array ('Хмельницк');
var Черкаси = Array ('Черкассы');
var Чернігів = Array ('Чернигов');
var Чернівці = Array ('Черновцы');

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