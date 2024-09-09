
let numbers = [1, 5, 3, 8, 2,4,6,7,9,26];

console.log(numbers.sort(function(a,b){return a-b}))
//==========================


let newNumbers = numbers.map(function(num ){
    return num*num
})
console.log(newNumbers)
//==========================


let num1 = numbers.reduce((largest , current)=>
    (current > largest ? current: largest), numbers[0]);
console.log(num1);
//==========================


let num2 = numbers.map((current)=>
    (current > 5 ? current:numbers[0]) // not compleate
);
console.log(num2)

//==========================

console.log(numbers.includes(3));

//==========================

let evenNumber =numbers.map( num => {
    if(num % 2==0){
        console.log(num);
    }

}
)
console.log(evenNumber);


//==========================

console.log(numbers.slice(0,4)) //not complate



//==========================
console.log(numbers.pop());
console.log(numbers);

//==========================
console.log(numbers.push(100));
console.log(numbers);

//==========================================================

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// let matchresult=names[0].find(/(\ba\S+\b)/gi) ?names:" ";
// console.log(matchresult)
console.log(names.includes("a"))

console.log(names.join("-"))



//===========================================================
let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
// console.log(fruits.includes("a"))

fruits.unshift('yellow');
console.log(fruits);


//===========================================================
let words = ['hello', 'world', 'javascript', 'array', 'function'];

console.log(words.length);

//=============================



//==================================
 function sum(num1,num2){
    return num1 + num2

 }
 console.log(sum(2,2));


 //====

 function mull(num1,num2){
    return num1 * num2

 }
 console.log(mul(2,4));


 //=====
 function div(num1,num2){
    return num1 / num2

 }
 console.log(div(4,2));

 //=========
 function remainder(num1,num2){
    return num1 % num2

 }
 console.log(remainder(14,2));
 //==========
 function sub(num1,num2){
    return num1 - num2

 }
 console.log(sub(2,2));


 //=========
 function mul(num1,num2,num3){
    return num3*(num1 + num2)

 }
 console.log(sum(2,2,5));