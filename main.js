const input = document.querySelector(".inputValue");
let equalPress = 0;

/**
 * en cas de click , on affiche le resultat si c'est calculable et sinon on affiche syntaxe error
 */
const onEqualClick = () => {
    equalPress = 1;
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Syntax Error";
    }
}

/**
 * en cas de click ,on efface la derniere valeur entree par l'utilisateur
 */
const deleteClick = () => {
    input.value = input.value.slice(0 ,input.value.length - 1);
}

/**
 * faire le calcul si on tape sur = || ou affiche sur l'ecran sinon
 * @param {KeyboardEvent} e
 */
const onkeydown = (e) => {
    if(e.key === "Enter")
        onEqualClick();
    else if(e.key === "Backspace")
        deleteClick();
    else if(e.key === "Delete")
        input.value = "";
    else if(["1","2","3","4","5","6","7","8","9","-","+","\\","*"].includes(e.key)){
        input.value += e.key;
    }
    
    

}

document.addEventListener("keydown", onkeydown);


// reinitialize the input when loaded
window.onload = () => {
    input.value = ""
}

// 
document.querySelectorAll(".bouton").forEach(btn => {
    btn.addEventListener("click", () => {
        if (equalPress == 1) {
            input.value = "";
            equalPress = 0;
        }
        input.value += btn.value;
    })
});

// do the calculations
document.querySelector(".equal").addEventListener("click", onEqualClick)

// Clear the input with AC button 
document.querySelector(".clear").addEventListener("click", () => {
    input.value = "";
})


// delete tle last digit with DEL button 
document.querySelector(".delete").addEventListener("click", deleteClick)