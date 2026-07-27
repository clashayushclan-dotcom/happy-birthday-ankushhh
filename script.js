const startBtn = document.getElementById("startBtn");

const welcome = document.getElementById("welcome");

const countdown = document.getElementById("countdown");

const birthday = document.getElementById("birthday");

const number = document.getElementById("number");

const music = document.getElementById("music");

startBtn.onclick=function(){

music.play();

welcome.style.display="none";

countdown.style.display="flex";

let count=3;

number.innerHTML=count;

let timer=setInterval(function(){

count--;

if(count>0){

number.innerHTML=count;

}

else{

clearInterval(timer);

countdown.style.display="none";

birthday.style.display="block";

}

},1000);

}
const giftBtn=document.getElementById("giftBtn");

const giftMessage=document.getElementById("giftMessage");

giftBtn.onclick=function(){

giftMessage.style.display="block";

giftBtn.style.display="none";

}