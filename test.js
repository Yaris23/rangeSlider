import {Slider} from './Slider.js';
import { Line } from './Line.js';
import {Pointer} from './Pointer.js';

let params = {
  min : 0,
  max : 10,
  step : 1,
}

// let slider = new Slider('.container', params);

let line = new Line('.container', params);
let pointer = new Pointer();

// let position = line.getPosition(150,30);

// let scale = line.createScale();

// console.log(position)
// console.log(scale.scale)
// console.log(scale.scalePix)

console.log(pointer.getPosition())

pointer.setPosition(10, 10);

console.log(pointer.getPosition())
