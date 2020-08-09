let login = prompt ("Кто там?") 
if (login == 'Админ') {

    let pass = prompt ('Ведите пароль');

    if (pass === "Я главный") {
        alert ('Здравствуйте!')   
    }
    else if (pass == '' || pass == null) {
        alert ("Отменено")
    }
    else {
        alert ('Неверный пароль!')
    }
     
}
else if (login == '' || login == null) {
    alert ('отмена логина!');
 }
else  {
   alert ("Я вас не знаю!");
}
