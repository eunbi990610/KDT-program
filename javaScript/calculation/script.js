const num1 = 20;
const num2 = 10;

let val;

// 간단한 연산
val = num1+num2;//30
val = num1*num2;//200
val = num1 - num2;//10
val = num1/num2;//2 -> 나누기 몫 연산자
val = num1%num2;//0 -> 나머지 연산자

//Math object
val = Math.E;// 오일러 수 : 자연로그의 밑값
val = Math.PI;
val = Math.round(2.4);//2 : 가장 가까운 정수로 리턴
val = Math.round(2.9);//3
val = Math.ceil(2.1); //3 : 무조건 반올림
val = Math.floor(2.9); //2 : 무조건 내림 
val = Math.abs(-3);//3 :절댓값 
val = Math.abs(3);//3 : 절댓값 
val = Math.min(3,1,2,3,4,5,6,7,8);//1 : 최솟값
val = Math.max(1,2,3,4,5,6,7,8);// 8 :최댓값
val = Math.random()*5;// 랜덤 값

//1~20 숫자 사이의 값을 랜덤으로 추출하기
val = Math.floor(Math.random()*20+1);

console.log(val); 



console.log("string text line 1\n" + 'string text line 2');
//string text line 1
//string text line 2

console.log(`string text line 1
    string text line 2`);
//string text line 1
    //string text line 2

const today = new Date();

console.log("today is "+today+".");
//today is Tue May 27 2025 18:31:50 GMT+0900 (한국 표준시).
console.log(`today is ${today}.`);
//today is Tue May 27 2025 18:31:50 GMT+0900 (한국 표준시).
