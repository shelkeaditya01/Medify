// const car={
//     launching(){
//         console.log("launching soon");
//     }
// }

// const cars={
//     name:"A"
// }

// cars.__proto__=car;




// class ToyotaCar{
    
//     constructor(brandName,mileage){
//         console.log("creating a new car");
//         this.brandName=brandName;
//         this.mileage=mileage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

// }
// let fortuner=new ToyotaCar("Fortuner","10");

// let lexus=new ToyotaCar("Lexus","13");

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Showing data");
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("Editing data");
    }
}

let student1=new User("A","P");
let student2=new User("P","A");

let dean=new Admin("Dean","D");