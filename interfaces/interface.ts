interface User {
  name: string;
  age: number;
  id: number;
  email: string;
}
var user: User = {
  name: "John",
  age: 30,
  id: 1,
  email: "",
};

interface Employee extends User {
    salary : number;
}
let employee: Employee = {
  name: "John",
  age: 30,
  id: 1,
  email: "",
  salary: 10000,
};