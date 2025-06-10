
// // 문서가 load 될 때 이 함수를 실행
// window.onload = function(){
    
//     let text = document.getElementById("text"); //hello
//     // 아이디가 textㅇ인 요소를 return

//     text.innerText = 'html 문서가 loaded';
// }

// const aElement = document.querySelector('a');
// aElement.addEventListener('click', ()=>{
//     alert('a element clicked');
// });

// const buttonElement = document.querySelector('.btn2');
// buttonElement.addEventListener('click', (event) =>{

//     let val;
//     val = event.target;
//     val = event.type;
//     //윈도우로부터의 거리 좌표
//     val = event.clientY;
//     //요소로부터의 거리 좌표
//     val = event.offsetY;



//     console.log(val);
    
// })


// const submitBtn = document.querySelector('.submit-btn');
// const form = document.querySelector('form');
// const title = document.querySelector('h2');

// //event type 
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseover', handleEvent);
// submitBtn.addEventListener('mouseenter', handleEvent);
// submitBtn.addEventListener('mouseleave', handleEvent);
// submitBtn.addEventListener('mousemove', handleEvent);

// // submitBtn 클릭 시 handleEvent 함수 실행 

// // 브라우저 기본 동작 : 폼 버튼을 눌렀는데 넘어가는 곳이 없으면 unsubmit event가 발생
// // => 브라우저가 리프레쉬 된다.( 새로고침 된다. )
function handleEvent(e){
    //  e.preventDefault();
    if(e.type==='submit'){
        e.preventDefault(); // 기본 동작을 방지해주는 메서드     
    }
    console.log(`Event Type : ${e.type}`);
    title.textContent = e.target.value; // input 안에 작성한 내용
}


// form event
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// form.addEventListener('submit',handleEvent);
// emailInput.addEventListener('keydown',handleEvent);
// emailInput.addEventListener('keyup',handleEvent);
// emailInput.addEventListener('keypress',handleEvent); // 입력되어야 실행 
// // e.preventDefault()가 실행되면 keypress는 실행되지 않아. // 입력이 안됨
// emailInput.addEventListener('focus',handleEvent);
// emailInput.addEventListener('blur',handleEvent);
// emailInput.addEventListener('cut',handleEvent);
// emailInput.addEventListener('paste',handleEvent);
emailInput.addEventListener('input',handleEvent);
 






























