"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
let sum = add(10, 20);
console.log(sum);
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(10, 20));
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(10, 20));
const multiple = function (num1, num2) {
    return num1 * num2;
};
console.log(multiple(10, 20));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [30, 40, 50, 60, 70];
console.log(add2(10, 20, ...numbers));
//# sourceMappingURL=function.js.map