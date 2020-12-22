export class Options {
  min;
  max;
  element;
  constructor(){
    this.element = document.createElement('div');
    this.element.classList.add('options');
  }
}