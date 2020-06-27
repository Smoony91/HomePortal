const inputCalc = document.querySelector('.account')
const resulCalc = document.querySelector('.result')

function addSymToEquation(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
   resulCalc.value = eval(inputCalc.value)
   inputCalc.value = eval(inputCalc.value)
}

function reset() {
    resulCalc.value = ''
    inputCalc.value = ''
}