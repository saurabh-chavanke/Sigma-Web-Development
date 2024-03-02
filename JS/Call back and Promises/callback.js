
// // asynchronous nature

// console.log("saurabh")
// console.log("chavanke")

// setTimeout(() => {
//     console.log("I am in settimeout function");
// }, 3000);

// console.log("Hi I am Live in Nashik")


const fn= ()=>{
    console.log("Nothing")
}

const callback = (arg,fn) =>{
    console.log(arg);
    fn()
}


const loadscript = (src,callback) => {
    let sc =document.createElement("script");

    sc.src = src;

    sc.onload = callback("Harry",fn);
    document.head.append(sc)
}

loadscript("https://www.instagram.com/",callback)