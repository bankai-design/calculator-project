let num1 = ""
let num2 = ""
let op
let counter = 1 // checking whether it is first or second num for displayNumber function


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
        display.innerText = ""
        result = add(num1, num2)

        display.append(result)
        num1 = result
        num2 = ""
        op = null
        counter = 1

    } else if (operator == "-") {
        display.innerText = ""
        result = subtract(num1, num2)
        num1 = ""
        num2 = ""
        counter = 1
        displayNumber(result)

    } else if (operator == "*") {
        display.innerText = ""
        result = multiply(num1, num2)
        num1 = ""
        num2 = ""
        counter = 1
        displayNumber(result)

    } else if (operator == "/") {
        display.innerText = ""
        result = divide(num1, num2)
        num1 = ""
        num2 = ""
        counter = 1
        displayNumber(result)
    }
}

// displaying text on calculator
const display = document.getElementById("display")
 
// digits
const seven = document.getElementById("butt seven")
const eight = document.getElementById("butt eight")
const nine = document.getElementById("butt nine")
const four = document.getElementById("butt four")
const five = document.getElementById("butt five")
const six = document.getElementById("butt six")
const three = document.getElementById("butt three")
const two = document.getElementById("butt two")
const one = document.getElementById("butt one")
const zero = document.getElementById("butt zero")


seven.addEventListener("click", () => displayNumber(7))
eight.addEventListener("click", () => displayNumber(8))
nine.addEventListener("click", () => displayNumber(9))
four.addEventListener("click", () => displayNumber(4))
five.addEventListener("click", () => displayNumber(5))
six.addEventListener("click", () => displayNumber(6))
three.addEventListener("click", () => displayNumber(3))
two.addEventListener("click", () => displayNumber(2))
one.addEventListener("click", () => displayNumber(1))
zero.addEventListener("click", () => displayNumber(0))

const addition = document.getElementById("add")
const subtraction = document.getElementById("subtract")
const multiplication = document.getElementById("multiply")
const division = document.getElementById("divide")
const equality = document.getElementById("equal")

addition.addEventListener("click", () => displayNumber("+"))
subtraction.addEventListener("click", () => displayNumber("-"))
multiplication.addEventListener("click", () => displayNumber("*"))
division.addEventListener("click", () => displayNumber("/"))
equality.addEventListener("click", () => displayNumber("="))


function displayNumber(num) {
    if (Number.isInteger(num)) {
        if (counter == 1) {
            num1 += num // concatenates numbers instead of adding
            display.append(num)
        } else if (counter == 2) {
            num2 += num
            display.append(num)
        }
    } else { // if they press an operator
        if (num == "=") {
            operate(Number(num1), Number(num2), op)
        } else {
            op = num
            display.append(num)
            counter++
        }
    }
}