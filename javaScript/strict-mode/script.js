//  "use strict" //라는 지시자를 사용하면 느슨한 모드에서 엄격한 모드로 변경됨 => 파일 자체가 엄격한 모드가 됨 
// 특정 함수만 엄격 모드로 변경 방법 
//  function sum(a,b){
//     "use strict"
//     return a+b;
//  }

"use strict"

undefined = 8;
NaN = 10;
console.log(undefined, NaN);//undefined NaN
// strict node - script.js:10 Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'


let greeting = 'hello';
greating = 'hi';
console.log(greeting);
//느슨한 모드였으면 에러 발생하지 않고 hello가 출력됨 
console.log(greeting, window.greating);// hello hi
// 자동적으로 윈도우객체에 속성으로 할당이 되어 hi 값이 출력됨
// 엄격한 모드라면 에러 발생 Uncaught ReferenceError: greating is not defined

const obj = {};// 빈 객체 생성
Object.defineProperty(obj,"readOnly", {
    writable : false, value : 7 
})

/*Object.defineProperty(OBJ, "readOnly",{...})
=> obj 객체에 readOnly 라는 속성을 새로 정의한다. 
세번째 인자에는 속성의 동작을 설명하는 옵션 객체이다. 
obj 객체의 readOnly는 값은 7이고 값을 변경할 없다(읽기전용)*/

console.log(obj);//{readOnly: 7}
obj.readOnly = 10;
console.log(obj);//{readOnly: 7}
// strict mode => Uncaught TypeError: Cannot assign to read only property 'readOnly' of object '#<Object>' 에러 발생
// 할당할 수 없는 것에 할당을 하려고 하니깐 에러 발생

const obj ={
    get readOnly(){
        return 7;
    }// get 도 수정 불가능 
}
// console.log(obj.readOnly);
// obj.readOnly = 10;
// console.log(obj.readOnly);

function add(a,a,b){
    return a+a+b;
}
console.log(add(1,2,3));
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

"string".prop = 7;
console.log("string".prop);
//Uncaught TypeError: Cannot create property 'prop' on string 'string'

function sum(a,b){
    console.log(this);
    return a+b;
}
console.log(this);
sum(1,2);// sum() 안의 this는 unfined
sum.bind(this)(1,2);

