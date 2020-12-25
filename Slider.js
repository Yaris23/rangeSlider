import {Line} from './Line.js';
import {Pointer} from './Pointer.js';
import {Options} from './Options.js';

export class Slider{
    container;
    slider;
    line;
    pointer;
    options;

    constructor(container, params = {}){
        // Создание слайдера на сранице
        this.line = new Line();
        this.pointer = new Pointer();
        this.options = new Options();

        this.container = document.querySelector(container);
        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.container.append(this.slider);

        this.slider.append(this.options.element);
        this.slider.append(this.line.element);
        this.line.element.append(this.pointer.element);
    
        // присвоение параметров
        this.line.min = params.min;
        this.line.max = params.max;

        console.log(this.line.min, this.line.max)
        console.log(this.line.element.offsetLeft, this.line.element.offsetTop, this.line.element.offsetWidth, this.line.element.offsetHeight)
    }

}