


function createRangeSlider(startDivClass){
    let params = {
        'minRange' : 0,
        'maxRange' : 10,
    }

    let container = document.querySelector(startDivClass);

    let myRangeSlider = document.createElement('div');
    let rangeLine = document.createElement('div');
    let pointer = document.createElement('div');
    let sliderParams = document.createElement('div');

    myRangeSlider.classList.add('myRangeSlider');
    rangeLine.classList.add('rangeLine');
    pointer.classList.add('pointer');
    sliderParams.classList.add('sliderParams')

    container.append(myRangeSlider);
    myRangeSlider.append(sliderParams);
    myRangeSlider.append(rangeLine);
    rangeLine.append(pointer);

    console.log(params.minRange)
}

createRangeSlider('.container');
createRangeSlider('.container');
createRangeSlider('.container');