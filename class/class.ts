class Employee { //Pascal
    id!: number;
    name!:string;
    address!:string;
    //constructor
    constructor(id:number,name:string,address:string){
    this.id = id;
    this.name = name;
    this.address = address;
    }

    
    //class methods
    getAddressWithName():string{
        return this.name + " " + this.address;
    }
}
let john  = new Employee(1,"john","India");
 
//without constructor

// john.id = 1;
// john.name = "John";
// john.address = "India";
console.log(john);



function getAddressWithName() {
    throw new Error("Function not implemented.");
}

