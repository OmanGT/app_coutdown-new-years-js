let day = document.getElementById('day');
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let endDate = new Date(2025, 0, 1);
let endTime = endDate.getTime();

let addZero = (num) => (num < 10 ? `0${num}` :num);

function countdown (){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remaining = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".coutdown").innerHTML = `<h1>Coutdown Has Expired</h1>`;
    }
    else{
        let daysleft = Math.floor(remaining / oneDay);
        let hrsLeft = Math.floor((remaining % oneDay) / oneHr);
        let minsLeft = Math.floor((remaining % oneHr) / oneMin);
        let secLeft = Math.floor((remaining % oneMin) / 1000);

        day.textContent = addZero(daysleft);
        hr.textContent = addZero(hrsLeft);
        min.textContent = addZero(minsLeft);
        sec.textContent = addZero(secLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();