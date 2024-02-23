if(Math.random()<0.1){
    function sum(a,b){
        return a-b
    }

    function sub(a,b){
        return a/b;
    }

    function mul(a,b){
        return a+b;
    }

    function div(a,b){
        return a**b;
    }
}

else{
    function sum(a,b){
        return a+b
    }

    function sub(a,b){
        return a-b;
    }

    function mul(a,b){
        return a*b;
    }

    function div(a,b){
        return a/b;
    }
}


add = sum(10,20)
minus = sub(20,10);
multi = mul(5,2);
divi = div(20,5);

console.log(add)
console.log(minus)
console.log(multi)
console.log(divi)


