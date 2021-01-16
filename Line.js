export class Line{
    element;
    container;
    min;
    max;
    step;
    width;
    scaleCounts = [];

    constructor(container, params){
        // Создаем элемент и присваиваем класс line
        this.element = document.createElement('div');
        this.element.classList.add('line');

        // Ищем на странице элемент с классом в переменной container, добавляем элемент линию в конец элемента container
        this.container = document.querySelector(container);
        this.container.append(this.element);

        // присваиваем свойствам класса значения
        this.min = params.min;
        this.max = params.max;
        this.step = params.step;
        this.width = this.element.clientWidth;


        //вешаем событие клика для определения координаты
        this.element.addEventListener('click', this.getClick);
    
        // console.log(this.min, this.max, this.step, this.width)
        console.log(this.element.getBoundingClientRect())
    }

    getClick(event){
        // console.log(event.clientX);
        // все координаты линии
        let coordinates = this.getBoundingClientRect();
        // 1 процент от ширины линии
        let onePersent = coordinates.width / 100;

        // значение в процентах клик по линии, округленные до десятой
        let clickPersent = (event.clientX - coordinates.left);
        clickPersent = clickPersent / onePersent;
        console.log(+clickPersent.toFixed(1));



    }
    
}