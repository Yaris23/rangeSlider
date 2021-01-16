import {Line} from './Line.js';
import {Pointer} from './Pointer.js';
import {Options} from './Options.js';

export class Slider{
    container;
    slider;
    line;
    pointer;
    options;

    constructor(container, params){
        // Создание и размещение слайдера на сранице
        this.line = new Line(params.min, params.max, params.step);
        this.pointer = new Pointer();
        this.options = new Options();

        this.container = document.querySelector(container);
        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.container.append(this.slider);

        this.slider.append(this.options.element);
        this.slider.append(this.line.element);
        this.line.element.append(this.pointer.element);
    
    }

    writeWidth(){
        console.log(this.line.element.clientWidth)
    }
}