function createcard(title,cname,duration,views,months,thumbnail){

let viewstr;

if(views<1000){
    viewstr = views;
}

else if(views > 1000000){
    viewstr = views / 100000 + "M";
}

else{
    viewstr = views/1000 + "K";
}

let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="cap">${duration}</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <p>${cname} . ${viewstr} views . ${months} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createcard("my name is asaurabh","saurabh","31.01",700000000,2,"https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA")