const stopBtn = document.querySelector('#button-stop');
const startBtn = document.querySelector('#button-start');
const resetBtn = document.querySelector('#button-reset');

const appendSeconds = document.querySelector('#seconds');
const appendTens = document.querySelector('#tens');

let seconds = 0;
let tens = 0;
let interval;
// console.log(start);


startBtn.onclick = function(){
    interval = setInterval(startTimer, 10);// 10ms 에 한번씩 실행 
    /*setInterval(실행할 코드, 반복주기(ms) : 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용 */
}

stopBtn.onclick = function(){
    clearInterval(interval); // 반복 중단
}

resetBtn.onclick = function(){
    clearInterval(interval); 
    seconds = 0;
    tens = 0;
    appendSeconds.innerText = 0;
    appendTens.innerText = 0;
}

/*
appendTens가 100이 되면 appendSecounds 1을 올림 
setInterval 1000ms = 1초
10ms => appendTens += 1
*/

function startTimer(){
    tens ++;

    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerText = 0;
    }else{
        appendTens.innerText = tens;
    }
    /*
    396script.js:30 Uncaught TypeError: Cannot set properties of null (setting 'innerText') */
}
