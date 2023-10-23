let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let day = document.querySelector("#day");
let main = document.querySelector(".main");

//todo object
let images = {
    0:"Assets/1.avif",
    1:"Assets/b_1.avif",
    2:"Assets/b_2.avif",
    3:"Assets/b_3.avif",
    4:"Assets/b_4.avif",
    5:"Assets/b_5.avif",
    6:"Assets/b_6.avif",
    7:"Assets/b_7.avif",
    8:"Assets/b_8.avif",
    9:"Assets/b_9.avif",
    10:"Assets/b_10.avif",
}

setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  h = h<10 ? "0"+h : h;
  m = m<10 ? "0"+m : m;
  s = s<10 ? "0"+s : s;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

  let randomImage = Math.floor(Math.random()*10);
    console.log(images[randomImage]);
  main.style.backgroundImage = `url(${images[randomImage]})`;

  if(h>12){
    day.innerText = "PM";
  }else{
    day.innerText = "AM";
  }
}, 1000);
