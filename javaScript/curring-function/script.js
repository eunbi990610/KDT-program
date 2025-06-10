// const sum = (x,y) => x + y;

// const curriedSum = x => y => x + y;

// console.log(sum(10,20)); //30
// console.log(curriedSum(10)); // y => x+y
// console.log(curriedSum(10)(20)); // 30


// const makeFood = (ingredient1) =>{
//     return (ingredient2) =>{
//         return (ingredient3) =>{
//             return `${ingredient1} ${ingredient2} ${ingredient3}`
//         }
//     }
// }

// const hamburger = makeFood('bread')('ham')('tomato');
// console.log(hamburger); //bread ham tomato

// const hamburger1 = makeFood('bread')('ham');
// console.log(hamburger1);
// /*
// (ingredient3) =>{
//             return `${ingredient1} ${ingredient2} ${ingredient3}`
//         } 
// 모든 인수가 들어오지 않으면 완성되지 않음*/

// const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
//     `${ingredient1} ${ingredient2} ${ingredient3}`;
// const newHamburger = cleanerMakeFood('bread')('ham')('tomato');
// console.log(newHamburger); //bread ham tomato

// function log(date,important,message){
//     alert(`[${date.getHours()}:${date.getMinutes()}]:[${important}] ${message}`);
// }
// // log(new Date(),'debug','some bug');

// // curring function

// function curry(f){
//     return function (a){
//         return function (b) {
//             return function (c) {
//                 return f(a,b,c);
//             }
//         }
//     }
// }
// const curriedLog = curry(log);
// curriedLog(new Date())('debug')('some bug');

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args);
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
} 

const sum = (x,y,z,j) => x + y + z + j;

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4));

