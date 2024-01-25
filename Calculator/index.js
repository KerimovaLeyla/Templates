
const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearButton = document.getElementById('clear')
const calculateButton = document.getElementById('calculate')


numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.value += number.innerText
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.value += operator.innerText
    })
})

clearButton.addEventListener('click', () => {
    display.value = ''
})

calculateButton.addEventListener('click', () => {
    display.value = eval(display.value)

    //const result = eval(display.value)

    //display.value = result
})


// function addDisplay (value) {
//     document.getElementById('display').value += value
// }

// function clearDisplay () {
//     document.getElementById('display').value = ''
// }

// function calculate () {
//     document.getElementById('display').value = eval(document.getElementById('display').value)
// }