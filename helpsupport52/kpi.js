let foolPlan = document.getElementById('n1')
        
let completedPlan = document.getElementById('n2')

let percentCompletedPlan = document.getElementById('n3')

function resultpercen() {
    foolPlan = parseInt(n1.value)
    completedPlan = parseInt(n2.value)
    let num4 =  foolPlan / 100 
    let num5 =  foolPlan - completedPlan
    let percentCompletedPlan = 100 - (num5 / num4) 
    n3.value = percentCompletedPlan.toFixed(1) +"%"

  

    if (percentCompletedPlan >= 100 ) {let div = document.createElement('div');
    div.innerHTML = "<br><strong>План выполнен</strong>";
     document.body.append(div);
    } else {
        let div = document.createElement('div');
    div.innerHTML = "<br><strong>План не выполнен</strong> "; document.body.append(div);
    }
    
    

    console.log (foolPlan)
    console.log (completedPlan)
    console.log (num4)
}

