export class Pointer {
  element;
  line;
  constructor(){
    // Создаем елемент и присваиваем класс pointer
    this.element = document.createElement('div');
    this.element.classList.add('pointer');

    // Ищем на странице элемент с классом line, добавляем элемент курсор в конец элемента line
    this.line = document.querySelector('.line');
    this.line.append(this.element);

  }

  getPosition(){

    // все координаты курсора
    let coordinates = this.element.getBoundingClientRect();

    // центральная точка курсора по оси x
    let centerX = coordinates.left + (coordinates.width / 2);
    // центральная точка курсора по оси y
    let centerY = coordinates.top + (coordinates.height / 2);

    return {centerX, centerY};
  }

  setPosition(x, y){
    // задаем елементу новую позицию
    this.element.style.left += x;
    this.element.style.top += y;
  }
}