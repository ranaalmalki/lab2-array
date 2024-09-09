
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
