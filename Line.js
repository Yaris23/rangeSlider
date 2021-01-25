export class Line{
    
    element;
    container;
    min;
    max;
    step;

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

    }

    getPosition(x,y){
        // все координаты линии
        let coordinates = this.element.getBoundingClientRect();

        // 1 процент от ширины линии
        let onePersentX = coordinates.width / 100;

        // 1 процент от высоты линии
        let onePersentY = coordinates.height / 100;

        // значение в пикселях от левой границы линии и от верхней границы элемента линии
        let pixelX = x - coordinates.left;
        let pixelY = y - coordinates.top;

        // ширина, значение в процентах клик по линии, округленные до десятой, приведенные к числу
        let persentX = (x - coordinates.left);
        persentX = +(persentX / onePersentX).toFixed(1);
        
        // высота, значение в процентах клик по линии, округленные до десятой, приведенные к числу
        let persentY = (y - coordinates.top);
        persentY = +(persentY / onePersentY).toFixed(1);

        return {pixelX, pixelY, persentX, persentY, onePersentX};
        
    }

    createScale(min = this.min, max = this.max, step = this.step){
        // массив значений шкалы линии
        let scale = [];
        // сассив значения шкалы в пикселях
        let scalePix = [];
        // координаты линии
        let coordinates = this.element.getBoundingClientRect();
        
        // заполнение массива шкалы линии значениями от (min) до (max) с учетом указанного шага (step)
        for(let i = min; i <= max; i+=step){
            scale.push(+i.toFixed(1));
        }

        // величина шага в пикселях, округленная до десятой
        let scaleStep = +(coordinates.width / (scale.length -1)).toFixed(1);

        scale.forEach((item) => {
            scalePix.push(item * scaleStep)
        })
        
        return {scale, scalePix}
    }

   
} 