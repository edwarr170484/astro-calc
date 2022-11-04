let sign = {
    items: [
        {id: 1, name: 'Овен', element: 'Огонь', cross: 'Кардинальный', sex: 'Мужской'},
        {id: 2, name: 'Телец', element: 'Земля', cross: 'Фиксированный', sex: 'Женский'},
        {id: 3, name: 'Близнецы', element: 'Воздух', cross: 'Мутабельный', sex: 'Мужской'},
        {id: 4, name: 'Рак', element: 'Вода', cross: 'Кардинальный', sex: 'Женский'},
        {id: 5, name: 'Лев', element: 'Огонь', cross: 'Фиксированный', sex: 'Мужской'},
        {id: 6, name: 'Дева', element: 'Земля', cross: 'Мутабельный', sex: 'Женский'},
        {id: 7, name: 'Весы', element: 'Воздух', cross: 'Кардинальный', sex: 'Мужской'},
        {id: 8, name: 'Скорпион', element: 'Вода', cross: 'Фиксированный', sex: 'Женский'},
        {id: 9, name: 'Стрелец', element: 'Огонь', cross: 'Мутабельный', sex: 'Мужской'},
        {id: 10, name: 'Козерог', element: 'Земля', cross: 'Кардинальный', sex: 'Женский'},
        {id: 11, name: 'Водолей', element: 'Воздух', cross: 'Фиксированный', sex: 'Мужской'},
        {id: 12, name: 'Рыбы', element: 'Вода', cross: 'Мутабельный', sex: 'Женский'}
    ],
    getById(id){
        return sign.items.find((item) => {
            return item.id == id
        })
    },
    setSign(select, row){
        let single = sign.getById(select.val());

        $(`#planet-element-${row}`).html(single ? single.element : '');
        $(`#planet-cross-${row}`).html(single ? single.cross : '');
        $(`#planet-sex-${row}`).html(single ? single.sex : '');

        calculate();
    }
};

let planet = {
    items: [
        {id: 1, name: 'Солнце', rate: 2},
        {id: 2, name: 'Луна', rate: 2},
        {id: 3, name: 'Венера', rate: 1.5},
        {id: 4, name: 'Марс', rate: 1.5},
        {id: 5, name: 'Меркурий', rate: 1.5},
        {id: 6, name: 'Юпитер', rate: 1},
        {id: 7, name: 'Сатурн', rate: 1},
        {id: 8, name: 'Уран', rate: 1},
        {id: 9, name: 'Нептун', rate: 1},
        {id: 10, name: 'Плутон', rate: 1}
    ],
    getById(id){
        return planet.items.find((item) => {
            return item.id == id
        })
    },
};

$(document).ready(function(){
    
    let mainTableRows = [];
    let selects = [`<option value="0"></option>`];

    if(sign.items.length > 0){
        sign.items.forEach((item) => {
            selects.push(`<option value="${item.id}">${item.name}</option>`)
        });
    }

    if(planet.items.length > 0){
        planet.items.forEach((item) => {
            mainTableRows.push(`
                <tr id="planet-row-${item.id}" class="planet-row" data-planet="${item.id}">
                    <td>${item.rate}</td>
                    <td>${item.name}</td>
                    <td><select onchange="sign.setSign($(this), ${item.id})" class="form-select sign-select">${selects.join('')}</select></td>
                    <td id="planet-element-${item.id}"></td>
                    <td id="planet-cross-${item.id}"></td>
                    <td id="planet-sex-${item.id}"></td>
                </tr>
            `);
        });   
    }

    $('#main-table tbody').html(mainTableRows.join(''));
    calculate();
});

function calculate(){
    let totals = {
        elementsSum: {
            'Огонь': 0,
            'Земля': 0,
            'Воздух': 0,
            'Вода': 0
        },
        crossSum: {
            'Кардинальный': 0,
            'Мутабельный': 0,
            'Фиксированный': 0
        },
        sexSum: {
            'Мужской': 0,
            'Женский': 0
        },
        skills: {
            'Рациональность': 0,
            'Эмоциональность' : 0,
            'Kоммуникативность': 0,
            'Cамодостаточность': 0
        }
    }

    $('.planet-row').each(function(){
        let rowPlanet = planet.getById($(this).data('planet'));
        let rowSign = sign.getById($(this).find('select').val());

        if(rowSign){
            totals.elementsSum[rowSign.element] += rowPlanet.rate;
            totals.crossSum[rowSign.cross] += rowPlanet.rate;
            totals.sexSum[rowSign.sex] += rowPlanet.rate;
        }
    });

    totals.skills['Рациональность'] = totals.elementsSum['Земля'] + totals.elementsSum['Воздух'] + totals.crossSum['Фиксированный'];
    totals.skills['Эмоциональность'] = totals.elementsSum['Огонь'] + totals.elementsSum['Вода'] + totals.crossSum['Кардинальный'];
    totals.skills['Kоммуникативность'] = totals.elementsSum['Вода'] + totals.elementsSum['Воздух'] + totals.crossSum['Мутабельный']
    totals.skills['Cамодостаточность'] = totals.elementsSum['Огонь'] + totals.elementsSum['Земля'] + totals.crossSum['Фиксированный'];


    let elementsResult = `<ul class="list-group mb-2">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Огонь</div>
                                </div>
                                <span class="badge bg-primary rounded-pill">${totals.elementsSum['Огонь']}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Земля</div>
                                </div>
                                <span class="badge bg-primary rounded-pill">${totals.elementsSum['Земля']}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Воздух</div>
                                </div>
                                <span class="badge bg-primary rounded-pill">${totals.elementsSum['Воздух']}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Вода</div>
                                </div>
                                <span class="badge bg-primary rounded-pill">${totals.elementsSum['Вода']}</span>
                            </li>
                        </ul>`;
    let crossResult = `<ul class="list-group mb-2">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Кардинальный</div>
                            </div>
                            <span class="badge bg-primary rounded-pill">${totals.crossSum['Кардинальный']}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Мутабельный</div>
                            </div>
                            <span class="badge bg-primary rounded-pill">${totals.crossSum['Мутабельный']}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Фиксированный</div>
                            </div>
                            <span class="badge bg-primary rounded-pill">${totals.crossSum['Фиксированный']}</span>
                        </li>
                    </ul>`;
    let sexResult = `<ul class="list-group mb-2">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">Мужской</div>
                        </div>
                        <span class="badge bg-primary rounded-pill">${totals.sexSum['Мужской']}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">Женский</div>
                        </div>
                        <span class="badge bg-primary rounded-pill">${totals.sexSum['Женский']}</span>
                    </li>
                </ul>`;

    let skillsResult = `<ul class="list-group mb-2">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Рациональность</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">${totals.skills['Рациональность']}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Эмоциональность</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">${totals.skills['Эмоциональность']}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Kоммуникативность</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">${totals.skills['Kоммуникативность']}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Cамодостаточность</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">${totals.skills['Cамодостаточность']}</span>
                </li>
            </ul>`;

    $('#elements-result').html(elementsResult);
    $('#cross-result').html(crossResult);
    $('#sex-result').html(sexResult);
    $('#skills-result').html(skillsResult);
}