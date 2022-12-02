// the end of the years 
// my birthday 1/1/2003
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(()=>{
let dateNow = new Date().getTime();
let difDate = countDownDate - dateNow; 
let days =Math.floor(difDate / (  1000 * 60 * 60 * 24)) ;
let hours =Math.floor((difDate % (  1000 * 60 * 60 * 24) / (1000 * 60 * 60))) ;
let minuit =Math.floor(difDate % (  1000 * 60 * 60 ) / (1000 * 60 ));
let seconds =Math.floor(difDate % (  1000 * 60  ) / (1000));
document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML =`:`+hours;
document.querySelector(".minuits").innerHTML = `:`+minuit;
document.querySelector(".seconds").innerHTML =`:`+seconds;

if(difDate < 0 ){
clearInterval(counter);
}
}, 1000)