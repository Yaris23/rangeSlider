import {Slider} from './Slider.js';

let params = {

}

let slider = new Slider('.container');

slider.show()






// $.fn.myRangeSlider = function (options) {
//     let opt = options;
//     let rangeLine = new RangeLine(0,5);
//     rangeLine.show()
// }

// $().myRangeSlider({
//     left : 0,
//     right : 10
// });



// function createRangeSlider(startDivClass){
//     let params = {
//         'minRange' : 0,
//         'maxRange' : 10,
//     }

//     let container = document.querySelector(startDivClass);

//     let myRangeSlider = document.createElement('div');
//     let rangeLine = document.createElement('div');
//     let pointer = document.createElement('div');
//     let sliderParams = document.createElement('div');
//     let inputMinRange = document.createElement('input');
//     let inputMaxRange = document.createElement('input');

//     myRangeSlider.classList.add('myRangeSlider');
//     rangeLine.classList.add('rangeLine');
//     pointer.classList.add('pointer');
//     sliderParams.classList.add('sliderParams');
//     inputMinRange.classList.add('inputMinRange')
//     inputMaxRange.classList.add('inputMaxRange')

//     container.append(myRangeSlider);
//     myRangeSlider.append(sliderParams);
//     myRangeSlider.append(rangeLine);
//     rangeLine.append(pointer);
//     sliderParams.append(inputMinRange);
//     sliderParams.append(inputMaxRange);


//     inputMinRange.value = params.minRange;
//     inputMaxRange.value = params.maxRange;


//     console.log(params.minRange)
// }

// createRangeSlider('.container');
