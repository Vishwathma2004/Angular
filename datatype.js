"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lname = 'nooji';
let fname;
fname = "Hello";
console.log(fname);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
let department;
department = "IT";
department = 10;
console.log(department);
//# sourceMappingURL=datatype.js.map