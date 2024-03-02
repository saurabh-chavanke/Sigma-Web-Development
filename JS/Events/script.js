let button = document.getElementById("btn");

button.addEventListener("dblclick" ,()=>{
    document.querySelector(".box").innerHTML = "<b> Hi I am Saurabh </b>"

})

button.addEventListener("contextmenu" ,()=>{
    alert("Dont click")
})

document.addEventListener("keydown",(e)=>{
    console.log(e);
})


