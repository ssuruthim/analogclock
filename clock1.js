

const clock = document.getElementById("clock");
const line = document.getElementsByClassName("lines");
const number = document.getElementsByClassName("number");
const number1 = document.getElementsByClassName("num");
const line2 = document.getElementsByClassName("lines2");

for (let i = 1; i < 60; i++) {
  var a = 6 * i;
  clock.innerHTML = clock.innerHTML + "<div class='lines'></div>";
  line[i].style.transform = `rotate(${a}deg)`;
}

for (let i = 1; i < 12; i++) {

  clock.innerHTML = clock.innerHTML + `<div class='num' ><b id='num${i}'>` + i + "</b></div>";
  number1[i].style.transform = "rotate(" + 30 * i + "deg)";
  var curN = document.getElementById(`num${i}`);
  curN.style.transform = "rotate(" + (-30 * i) + "deg)";
}

for (let i = 1; i < 12; i++) {
  var b = 30 * i;
  clock.innerHTML = clock.innerHTML + "<div class='lines2'></div>";
  line2[i].style.transform = `rotate(${b}deg)`;
}

const secHand = document.querySelector('.secHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');



function startTime()
{
 const date = new Date();
 const sd = date.getSeconds();
 const md = date.getMinutes();
 const hd = date.getHours();
 var h=((hd / 12) * 360) + ((md/60)*30) + 90;
var m=((md / 60) * 360) + ((sd/60)*6) + 90; 
var s= ((sd/60)*360)+90;
secHand.style.transform=`rotate(${s}deg)`;
minHand.style.transform=`rotate(${m}deg)`;
hourHand.style.transform=`rotate(${h}deg)`;
setInterval(startTime, 1000);
}
startTime()





