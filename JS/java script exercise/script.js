
function randomcolor(){
    var val1 = Math.ceil(0+Math.random()*255);
    var val2 = Math.ceil(0+Math.random()*255);
    var val3 = Math.ceil(0+Math.random()*255);

    return `rgb(${val1},${val2},${val3})`;
}


    document.querySelectorAll(".box").forEach(e =>{
        e.style.color = randomcolor();
        e.style.backgroundColor = randomcolor();
    }) 