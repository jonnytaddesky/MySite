function init() {
	scriptCity(x);
	scriptStreet(y);
}

var region = Array('Місто');
var kyivska = Array('Київ', 'Ірпінь', 'Буча');
var volynskaya = Array('Луцьк');
var vinnitskaya = Array('Вінниця');
var dnipropetrovska = Array('Дніпро');
var donetska = Array('Донецьк');
var zhytomurska = Array('Житомир');
var zakarpatska = Array('Ужгород');
var zaporizka = Array('Запоріжжя');
var ivanoFrankivska = Array('ІваноФранківськ');
var kropyvnutska = Array('Кропивницький');
var luhanska = Array('Луганськ');
var lvivska = Array('Львів');
var mykolaivska = Array('Миколаїв');
var odesska = Array('Одеса');
var poltavska = Array('Полтава');
var rivnenska = Array('Рівне');
var sumska = Array('Суми');
var ternopilska = Array('Тернопіль');
var harkivska = Array('Харків');
var hmelnytska = Array('Хмельницьк');
var cherkasska = Array('Черкаси');
var chernigivska = Array('Чернігів');
var chernivetska = Array('Чернівці');

function showCity(x) {
	var mas = eval(x);
	var el = document.getElementById('names');

	while (el.childNodes.length > 0) {
		el.removeChild(el.childNodes[el.childNodes.length - 1]);
	}

	for (var i = 0; i < mas.length; i++) {
		var opt = document.createElement("option");
		opt.innerHTML = mas[i];
		el.appendChild(opt);
	}
}