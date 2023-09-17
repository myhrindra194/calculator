const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const bouton = document.querySelectorAll(".bouton");
let equalPress = 0;


// reinitialize the input when loaded
window.onload = () => {
    input.value = ""
}

// 
bouton.forEach(btn => {
    btn.addEventListener("click", () => {
        if (equalPress == 1) {
            input.value = "" ;
            equalPress = 0;
        }
        input.value += btn.value;

    })
});


// do the calculations
equal.addEventListener("click", () => {
    equalPress = 1;
    let value = input.value;
    let solution = eval(value);
        input.value = solution;
})


// Clear the input with AC button 
clear.addEventListener("click", () => {
    input.value = "";
})


// delete tle last digit with DEL button 
deleteButton.addEventListener("click" , () => {
    input.value = (input.value).substr(0 , input.value.length-1)
})