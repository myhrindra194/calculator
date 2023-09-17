const input = document.querySelector(".input");
let equalPress = 0;

// reinitialize the input when loaded
window.onload = () => {
    input.value = ""
}

// 
document.querySelectorAll(".bouton").forEach(btn => {
    btn.addEventListener("click", () => {
        if (equalPress == 1) {
            input.value = "" ;
            equalPress = 0;
        }
        input.value += btn.value;
    })
});

// do the calculations
document.querySelector(".equal").addEventListener("click", () => {
    equalPress = 1;
    let value = input.value;
    let solution = eval(value);
        input.value = solution;
})

// Clear the input with AC button 
document.querySelector(".clear").addEventListener("click", () => {
    input.value = "";
})


// delete tle last digit with DEL button 
document.querySelector(".delete").addEventListener("click" , () => {
    input.value = (input.value).substr(0 , input.value.length-1)
})