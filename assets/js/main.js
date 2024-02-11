var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Planet = /** @class */ (function () {
    function Planet() {
        this.items = [
            { id: 1, name: 'Солнце', rate: 2 },
            { id: 2, name: 'Луна', rate: 2 },
            { id: 3, name: 'Венера', rate: 1.5 },
            { id: 4, name: 'Марс', rate: 1.5 },
            { id: 5, name: 'Меркурий', rate: 1.5 },
            { id: 6, name: 'Юпитер', rate: 1 },
            { id: 7, name: 'Сатурн', rate: 1 },
            { id: 8, name: 'Уран', rate: 1 },
            { id: 9, name: 'Нептун', rate: 1 },
            { id: 10, name: 'Плутон', rate: 1 }
        ];
    }
    Planet.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id == id; });
    };
    return Planet;
}());
var Sign = /** @class */ (function (_super) {
    __extends(Sign, _super);
    function Sign() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [
            { id: 1, name: 'Овен', element: 'Огонь', cross: 'Кардинальный', sex: 'Мужской' },
            { id: 2, name: 'Телец', element: 'Земля', cross: 'Фиксированный', sex: 'Женский' },
            { id: 3, name: 'Близнецы', element: 'Воздух', cross: 'Мутабельный', sex: 'Мужской' },
            { id: 4, name: 'Рак', element: 'Вода', cross: 'Кардинальный', sex: 'Женский' },
            { id: 5, name: 'Лев', element: 'Огонь', cross: 'Фиксированный', sex: 'Мужской' },
            { id: 6, name: 'Дева', element: 'Земля', cross: 'Мутабельный', sex: 'Женский' },
            { id: 7, name: 'Весы', element: 'Воздух', cross: 'Кардинальный', sex: 'Мужской' },
            { id: 8, name: 'Скорпион', element: 'Вода', cross: 'Фиксированный', sex: 'Женский' },
            { id: 9, name: 'Стрелец', element: 'Огонь', cross: 'Мутабельный', sex: 'Мужской' },
            { id: 10, name: 'Козерог', element: 'Земля', cross: 'Кардинальный', sex: 'Женский' },
            { id: 11, name: 'Водолей', element: 'Воздух', cross: 'Фиксированный', sex: 'Мужской' },
            { id: 12, name: 'Рыбы', element: 'Вода', cross: 'Мутабельный', sex: 'Женский' }
        ];
        return _this;
    }
    Sign.prototype.setSign = function (select, row) {
        var single = this.getById(select.val());
        /*$(`#planet-element-${row}`).html(single ? single.element : '');
        $(`#planet-cross-${row}`).html(single ? single.cross : '');
        $(`#planet-sex-${row}`).html(single ? single.sex : '');*/
        //calculate();
    };
    return Sign;
}(Planet));
document.addEventListener("DOMContentLoaded", function () {
    var mainTableRows = [];
    var selects = ["<option value=\"0\"></option>"];
});
