// (
//     function(){
//         var aName = 'Barry';
//     }
// )();

// //IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다. 
// // console.log(aName); //Uncaught ReferenceError: aName is not defined

// var result = (function (){
//     var name = 'barry';
//     return name;
// })();

// // 함수 자체가 리턴되는 것이 아니라 내부 함수가 바로 실행되어 name이 리턴된다. 
// console.log(result);//barry

// 이름없는 함수를 위해서도 사용가능 


// const score = ()=>{
//     let count = 0;
//     return {
//         current: ()=> {return count},
//         increment: ()=> {count++},
//         reset: ()=> {count = 0}
//     }
// }

// console.log(typeof score);//function
// console.log(score);

// console.log(score().current());
// score().increment();
// console.log(score().current());
// // 초기화되서 값이 똑같이 0


const score = (()=>{
    let count = 0;
    return {
        current: ()=> {return count},
        increment: ()=> {count++},
        reset: ()=> {count = 0}
    }
})()

console.log(typeof score);//function
console.log(score);

// console.log(score().current());
// score().increment();
// console.log(score().current());
// 초기화되서 값이 똑같이 0

