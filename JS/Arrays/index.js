
let arr=[10,20,30,40,50]
//finding length of array
console.log(arr.length)

//used to join array element with specific symobol
console.log(arr.join("*"))

//divide the array with given condition
console.log(arr.slice(2));

//used for add new element in array
console.log(arr.splice(2,1,80,90))
console.log(arr);

//used to convert array into string with comman seprater
console.log(arr.toString())

//remove last element of an array
console.log(arr.pop())

//add element at the end of the array
arr.push(70)
console.log(arr);

//remove first element of string
arr.shift()
console.log(arr);

///add element at first in array
arr.unshift(10);
console.log(arr);

//delete an element using delete operator
delete arr[2];
console.log(arr);

//conacat the array
let arr2 = [100,110,120,130,140]
console.log(arr.concat(arr2));
console.log(arr);

//