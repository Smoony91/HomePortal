const inputCalc = document.querySelector('.account')
const resulCalc = document.querySelector('.result')

function addSymToEquation(sym) {
    inputCalc.value = inputCalc.value + sym
}

function result() {
    
    if  (inputCalc.value !== '') { 
        resulCalc.value = eval(inputCalc.value)
        inputCalc.value = eval(inputCalc.value)
    }
   
   
}

function reset() {
    resulCalc.value = ''
    inputCalc.value = ''
}

function deleteLastSym() {

    inputCalc.value = inputCalc.value.slice(0,-1) //убираем последне элемент строки
    // var str1 = 'Приближается утро.';
    // var str2 = str1.slice(4, -2);
    
    // console.log(str2); // ВЫВОД: лижается утр
    
}

