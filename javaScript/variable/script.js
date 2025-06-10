// var A = 1;
// console.log(A);

// var greeting = 'hello';
// console.log(greeting); //hello

// var greeting ='hi';
// console.log(greeting); //hi

// greeting = 'how are you?';
// console.log(greeting); //how are you?

// let은 중복 선언 불가, 재할당은 가능 
// let greeting = 'hello';
// console.log(greeting); 

// greeting = 'hi';
// console.log(greeting);

// const는 재할당, 중복선언 불가능 
// const greeting = 'hi';
// console.log(greeting);

// greeting = hello;
//Uncaught ReferenceError: hello is not defined

// 함수 레벨 스코프
// function func(){
//     if(true){
//         var a = 'a';
//         console.log(a); //a
//     }
//     console.log(a); //a
// }
// func();
// console.log(a); //Uncaught ReferenceError: a is not defined

// function func(){
//     if(true){
//         let a = 'a';
//         console.log(a); //a
//         const b = 'b';
//         console.log(b); //b
//     }
//     console.log(a); //Uncaught ReferenceError: a is not defined
//     console.log(b); //Uncaught ReferenceError: b is not defined
// }

// func();


// hoisting

// console.log(greeting); //undefined
// var greeting = 'hello';

// console.log(letGreeting);
// let letGreeting = 'hello';
//script.js:57 Uncaught ReferenceError:
//Cannot access 'letGreeting' before initialization
// initialization => 초기화


func();
function func(){
    console.log('hositing test');
}