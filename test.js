let elem1 = document.querySelector('.div1')
let elem2 = document.querySelector('.div2')

// elem1.style.position = "absolute";
// // elem1.style.left = "50px";
// elem1.style.left = "150px";


// elem2.style.position = "absolute";
// elem2.style.top = "20px";
// elem2.style.left = "-10px";

elem1.addEventListener("click", function(event){
    console.log(event.clientX, event.clientY)
})