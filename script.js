const addButton = document.getElementById("add")
addButton.addEventListener("click", displayText("+")) 

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        console.log(add(num1, num2))

    } else if (operator == "-") {
        console.log(subtract(num1, num2))

    } else if (operator == "*") {
        console.log(multiply(num1, num2))

    } else if (operator == "/") {
        console.log(divide(num1, num2))
    }
}

const display = document.getElementById("display")

function displayText(character) {
    console.log(character)
}




