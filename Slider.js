import {Line} from './Line.js';
import {Pointer} from './Pointer.js';


export class Slider{
    container;
    slider;
    line = new Line();
    pointer = new Pointer();

    constructor(container){
        this.container = document.querySelector(container);
        this.slider = document.createElement('div');
        this.slider.classList.add('slider');
        this.container.append(this.slider);
        this.slider.append(this.line.element);
        this.line.element.append(this.pointer.element);
    }

}