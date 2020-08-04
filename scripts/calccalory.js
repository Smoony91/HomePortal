

function inputAllCalorys () {
    let num1 = document.getElementById('n1')
        num1 = parseInt(n1.value)
    let num2 = document.getElementById('n2')
        num2 = parseInt(n2.value)
    let num4 =  num1 / 100 * num2
    n3.value= num4
    console.log (num1)
    console.log (num2)
    console.log (num4)
    
    }
    var i = 5
    
    function addPlus ()
    {
        var parent = document.getElementById("parent");
        var p = document.createElement("tr");
            p.innerHTML = `<br/><td><input type='text' id='n`+i+++`' placeholder='Продукт'></td>
            <br/><td><input type='text' id='n`+i+++`' placeholder='всего калорий'</td>
            <br/><td><input type='text' id='n`+i+++`' placeholder='Вес'</td>
            <br/><td><input type='text' id='n`+i+++`' placeholder='Итого'></td>`;
            
        parent.append(p);
        
    }
    // 50
    // 150
    // 50/150
    
    
