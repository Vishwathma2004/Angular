let lname = 'nooji';
let fname: string ;
fname = "Hello"
console.log(fname);

enum Color {
    Red,
    Green,
    Blue
}

let c :Color =Color.Blue;


let swapNumbs : [firstNumber : number , secondNumber:number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapNumbs = swapNumbers(10,20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]); 

let department : any
department = "IT";
department = 10;
console.log(department);
