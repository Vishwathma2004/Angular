function add(num1 : number,num2: number):number{
    return num1+num2;
}

let sum = add(10,20);
console.log(sum);

const subtract = (num1 : number,num2:number):number=>num1-num2;
console.log(subtract(10,20));


const multiply = function(num1:number,num2 : number):number{
    return num1*num2;
}

console.log(multiply(10,20));

const multiple = function (num1 : number,num2:number):number {
    return num1*num2
};

console.log(multiple(10,20));

function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2 +num3.reduce((a,b)=>a+b,0);
}
let numbers = [30,40,50,60,70]
console.log(add2(10,20,...numbers));