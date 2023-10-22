let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

setInterval(()=>{
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}, 1000);



