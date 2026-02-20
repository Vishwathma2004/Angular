interface Address {
    street: string;
    city: string;
    state: string;
    pincode: number;
}
class Employee { //Pascal
    #id: number;
    protected name:string;
    
    address :Address;

    get empId() : number{
        return this.#id;
    }
    set empId(id:number){
        this.#id = id;
    }
    //constructor
    constructor(id:number,name:string,address:Address){
    this.#id = id;
    this.name = name;
    this.address = address;
    }


    //class methods
    getAddressWithName():string{
        return this.name + " " + this.address;
    }
}
let john  = new Employee(1,"john",{street : "ABC",city : "Bangalore",state : "Karnataka",pincode : 560001   });
 
//without constructor

// john.id = 1;
// john.name = "John";
// john.address = "India";
console.log(john);



function getAddressWithName() {
    throw new Error("Function not implemented.");
}

