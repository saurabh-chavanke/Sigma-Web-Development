// let obj = {
//     a : 1,
//     b : "saurabh"
// }

// console.log(obj)
// let animal = {
//     eats : true,
// }

// let rabbit  = {
//     jumps : true
// }

// rabbit.__proto__ = animal;

class Animal{
    constructor (name) {
        this.name = name;
        console.log("Object is created");
    }

    eats(){
        console.log("Kha raha hoon")
    }

    jumps(){
        console.log("Kud raha hoon")
    }
}

class lion extends Animal{

    
    constructor(name){
        super(name)
        console.log("This is Lion");
    }
}

let a = new Animal;
console.log(a);

let l = new lion("Shera")
console.log(l);