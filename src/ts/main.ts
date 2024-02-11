type Item = {
    id: number,
    name: string,
    rate?: number,
    element?: string,
    cross?: string,
    sex?: string
}

class Planet {
    items: Array<Item> = [
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
    ]
    getById(id: number): Item | undefined {
        return this.items.find((item) => item.id == id)
    }
}

class Sign extends Planet {
    items: Array<Item> = [
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

    setSign(select: any, row: number): void {
        const single: Item | undefined = this.getById(select.val());

        /*$(`#planet-element-${row}`).html(single ? single.element : '');
        $(`#planet-cross-${row}`).html(single ? single.cross : '');
        $(`#planet-sex-${row}`).html(single ? single.sex : '');*/

        //calculate();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const mainTableRows: Array<string> = [];
    const selects: Array<string> = [`<option value="0"></option>`];


});