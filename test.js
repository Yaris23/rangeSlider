let rangeLine = document.querySelector('.rangeLine')
let leftPointer = document.querySelector('.leftPointer')

// elem1.style.position = "absolute";
// // elem1.style.left = "50px";
// elem1.style.left = "150px";


// elem2.style.position = "absolute";
// elem2.style.top = "20px";
// elem2.style.left = "-10px";

rangeLine.addEventListener("click", function(event){
    console.log(event.clientX, event.clientY)
})