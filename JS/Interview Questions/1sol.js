// acording to thier lenght of name
// a = less than 6
// b= less than 8
// c = less than 12
// d = greater then 12

let arr = ['saurabh',"arun","ketan","sairaj","sanjay","narayan","chavanke","subramanyamiyer"]

const houses = [];


for (const student of arr) {
    if(student.length < 6){
        houses.push(student+" : a");
    }
    else if(student.length < 8){
        houses.push(student+" : b");
    }
    else if(student.length < 12){
        houses.push(student+" : c");
    }
    else{
        houses.push(student+" : d");
    }
    
}
console.log(houses)