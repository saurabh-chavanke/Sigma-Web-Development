let a = prompt("Enter first number");

let b= prompt("Enter the second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a)+parseInt(b);

function main(){
let x= 1;
try {
    console.log(sum*x);
    return true;
} catch (error) {
    console.log("chavanke");
    return false
}
finally{
    console.log("bhai bhai bhai...")
}
}

let run = main()
console.log(run)