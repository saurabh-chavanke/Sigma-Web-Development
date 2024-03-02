console.log("This is a promise")

let prom1 = new Promise((resolve,reject) => {
    let a= Math.random();

    if(a<0.5){
        reject("No random number supporting you")
    }

    else{
        setTimeout(()=>{
            console.log("Yes I am done");
            resolve("SAurabh")
        },3000)
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch(err => {
    console.log(err);
})