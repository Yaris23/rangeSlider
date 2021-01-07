export class Line{
    element;
    min;
    max;
    lineStep;
    constructor(){
        this.element = document.createElement('div');
        this.element.classList.add('line');

        this.element.addEventListener('click', this.getPosition);
    }
    getPosition(){
        console.log()
    }
}