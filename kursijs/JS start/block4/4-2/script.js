document.querySelector('#alert').addEventListener('click', function() {
    console.log('click alert'), alert('Вы успешно кликнули на кнопку')
})

document.querySelector('#confirm').addEventListener('click', function() {
    var decision =  confirm('Вы уверены в том, что хотите нажать на кнопку?')

    console.log('Вы согласились?', decision)
    if (decision) {
        alert('Вы успешно кликнули на кнопку')
    }
})

document.querySelector('#prompt').addEventListener('click', function() {
   var age = prompt('Введите свой возраст', 18)

   if (age >= 18) {
       alert ('Вам есть 18 лет')
   }else {
       alert ('Вам нет 18 лет')
   }
})

console.log('console.log')
console.warn('console.warn')
console.info('console.info')
console.error('console.error')
throw new error('throw new error')