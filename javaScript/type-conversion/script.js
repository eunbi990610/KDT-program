let val;

// 함수를 사용해서 형 변환

// val = 111;
// console.log(val);
// console.log(typeof val);

// // number to string
// val = String(111);
// console.log(val);
// console.log(typeof val);

val = String(8+4);
console.log(val);
console.log(typeof val);
console.log(val.length);
// String 은 length라는 문자열의 길이를 구할 수 있는 프로퍼티 사용
// Boolean to string
val = false;
console.log(val);//false
console.log(typeof val);//boole
val = String(false);
console.log(val); //false
console.log(typeof val); //stri
// Date to string
val = new Date();
console.log(val);//Tue May 27 2025 15:45:35 GMT+0900 (한국 표준시)
console.log(typeof val);//object // date의 타입은 object
val = String(new Date());
console.log(val); //Tue May 27 2025 15:45:35 GMT+0900 (한국 표준시)
console.log(typeof val);//stri
// Array to string
val = [1,2,3,4,5];
console.log(val);//[1,2,3,4,5]
console.log(typeof val); //obje
val = String([1,2,3,4,5]);
console.log(val);//1,2,3,4,5 // 배열이 변환된 스트링 변수는 []대괄호는 없어지고 ,는 같이 출력됨 
console.log(typeof val);//string
console.log(val.length); //9 // 콤마를 포함하여 길이를 계
//toString()
val = (5).toString();
console.log(val);//5
console.log(typeof val);//string


//String to number
val = Number('1');
console.log(val);//1
console.log(typeof val);//number
val = Number(true);
console.log(val);//1
console.log(typeof val);//number
val = Number(false);
console.log(val);//0
console.log(typeof val);//number
val = Number(null);
console.log(val);//0
console.log(typeof val);//number
val = Number([1,2,3]);
console.log(val);//NaN = Not a Number : 숫자가 아님!
console.log(typeof val);//number

// 자바스크립트에서 소수의 형태는 number이다. 
val = '111.40';
console.log(val);//111.40
console.log(typeof val);//string

// 소수점 없애기!
val = parseInt(111.60);
console.log(val);//111
console.log(typeof val);//number

// 소수점 있게 변환하기
val = parseFloat(111.60);
console.log(val);//111.4
console.log(typeof val);//number
console.log("--------------");

// 자동으로 형 변환
// const val1 = 2;
// const val2 = 3;
// const sum = val1+val2;

// console.log(sum);//NaN
// console.log(typeof sum);//number

const val1 = String(2); //string
const val2 = 3.308;
const sum = val1+val2;
// string + number 시 변수 둘 중 하나가 string이면 연산값의 형은 string이되고
// string을 + 연산시 연산이 되는게 아니라 두개의 숫자가 그저 텍스트로 붙어버린다.
console.log(sum);//23.308
console.log(typeof sum);//string









