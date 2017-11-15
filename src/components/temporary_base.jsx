
let localSTORAGE ;
let data_base_key = 'test_data_base_q1w2e3r4';
let db_storage = localStorage.getItem(data_base_key);
let defaultValues = [
    {
        id: "0",
        name: "Иван",
        surname: "Иванов",
        patronymic: "Иванович",
        position: "Начальник",
        birthday: "03.02.75",
        phone: "8(909)234-34-34",
        status: 'работает',
        department: 'Офис'
    },
    {
        id: "1",
        name: "Михаил",
        surname: "Бздыщ",
        patronymic: "Петрович",
        position: "Менеджер",
        birthday: "23.12.75",
        phone: "8(234)456-14-45",
        status: 'работает',
        department: 'Офис'
    },
    {
        id: "2",
        name: "Маша",
        surname: "Машевна",
        patronymic: "Профирьевна",
        position: "Менеджер",
        birthday: "03.10.95",
        phone: "8(909)234-56-78",
        status: 'уволен(а)',
        department: 'Офис'
    },
    {
        id: "3",
        name: "Петр",
        surname: "Петров",
        patronymic: "Елинархович",
        position: "Кладовщик",
        birthday: "20.02.55",
        phone: "8(134)909-67-76",
        status: 'работает',
        department: 'Склад'
    },
    {
        id: "4",
        name: "Лиза",
        surname: "Лизовна",
        patronymic: "Опистровна",
        position: "Приемщик",
        birthday: "13.09.15",
        phone: "8(567)234-34-43",
        status: 'работает',
        department: 'Склад'
    },
    {
        id: "5",
        name: "Зеп",
        surname: "Браниган",
        patronymic: "Космичевич",
        position: "Приемщик",
        birthday: "01.11.01",
        phone: "8(398)093-90-23",
        status: 'уволен(а)',
        department: 'Склад'
    },
    {
        id: "6",
        name: "Рик",
        surname: "Санчос",
        patronymic: "Хосе",
        position: "Охранник",
        birthday: "04.12.25",
        phone: "8(236)676-67-67",
        status: 'работает',
        department: 'Охрана'
    },
    {
        id: "7",
        name: "Морти",
        surname:"Незнаю",
        patronymic: "Переделкин",
        position: "Охранник",
        birthday: "09.17.00",
        phone: "8(456)009-56-56",
        status: 'уволен(а)',
        department: 'Охрана'
    },
    {
        id: "8",
        name: "Азазель",
        surname:"Адов",
        patronymic: "Гиенович",
        position: "Менеджер",
        birthday: "01.02.05",
        phone: "8(781)090-01-01",
        status: 'уволен(а)',
        department: 'Офис'
    }
];
if(db_storage){
    localSTORAGE = JSON.parse(db_storage);
}else{
    let yes = confirm('Ваш localStorage, не содержит записей. Добавить значения для теста?');
    if(yes){
        localStorage.setItem(data_base_key, JSON.stringify(defaultValues));
        localSTORAGE = JSON.parse(db_storage);
    }else{
        localSTORAGE = [];
    }      
}


export default localSTORAGE;