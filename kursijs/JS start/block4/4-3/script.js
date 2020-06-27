var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')

// console.log(array.join(';'))
// console.log(array.reverse())

array.splice(1, 0, '11')

var newArray= array.concat([1, 2])

/*console.log(array)
console.log(newArray)*/

var objArr = [
{name: 'Max', age:27 },
{name: 'Elena', age: 18},
{name: 'Victor', age: 20}

]

console.log(objArr)

var founperson = objArr.find(function(person){
   // console.log(person)
   return person.age === 20
})

//console.log(founperson)

var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !== 0
})
console.log(oddArray)

var numArray = array.map(function(i){
    return parseInt(i)
})
console.log(numArray)

var numArray2 = array.map(function(i){
    return i * 2
})
console.log(numArray2)