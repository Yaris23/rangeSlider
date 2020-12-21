import {Line} from './Line.js';
import {Pointer} from './Pointer.js';


export class Slider{
    container;
    slider;
    line;
    pointer;
    options;

    constructor(container){
        this.options = document.createElement('div');
        this.options.classList.add('options')
        this.line = new Line();
        this.pointer = new Pointer();
        this.container = document.querySelector(container);
        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.container.append(this.slider);
        this.slider.append(this.options);
        this.slider.append(this.line.element);
        this.line.element.append(this.pointer.element);
    }

}