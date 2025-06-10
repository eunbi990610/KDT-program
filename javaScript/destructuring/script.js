// let obj = {
//     accessory : 'horn',
//     animal : 'horse',
//     color : 'purple',
//     hairType : 'curly'
// }

// function buildAnimal(animalData){
//     // let { accessory,animal,color,hairType} = animalData;

//     let accessory = animalData.accessory,
//     animal = animalData.animal,
//     color = animalData.color,
//     hairType = animalDate.hairType;
    
    
//     console.log(`${animal}은 ${color}색의 ${hairType}을 가지고 있다. `);
// }

// buildAnimal(obj);

// let person = {
//     name : 'maya',
//     age : 30,
//     phone : '1234-1234',
//     address : {
//         zipcode :1234,
//         street : 'rainbow',
//         number : 42
//     }
// }

// let {name,address : {zipcode, street, number}} = person;
// console.log(zipcode, street, number, name);

// let a, b, rest;
// [a,b] = [10,20];

// console.log(a);

// [a,b,c,...rest] = [10,20,30,40,50,60,70];
// console.log(c,rest);

const week = ['monday','tuesday','wednesday','thuresday','friday'];
//const day1 = week[0];
//const day2 = week[1];
//const day3 = week[2];
//const day4 = week[3];
//const day5 = week[4];

// const [day1, dya2, day3, day4, day5] = week;

// console.log(day1,day3);

// const number = [1,2,3,4,5,6];
// const [,,three,four,,] = number;
// console.log(four);

// const studentDetails = {
//     firstName :'john',
//     lastName : 'mary'
// }
// const {firstName : fName = 'not given', lastName} = studentDetails;
 
// console.log(fName);
// console.log(lastName);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [7,8,9];
// // const arrWrap = arr1.concat(arr2,arr3);
// const arrWrap = [...arr1, ...arr2, ...arr3];

// console.log(arrWrap);

// const obj1 = {
//     a:'A',
//     b:'B'
// };
// const obj2 = {
//     c:'C',
//     d:'D'
// }

// // const objWrap = {obj1, obj2};
// // console.log(objWrap); // 객체 자체가 들어감 
// /*
// {obj1: {…}, obj2: {…}}
// obj1: {a: 'A', b: 'B'}
// obj2: {c: 'C', d: 'D'}
//  */

// const objWrap = {...obj1,...obj2};
// console.log(objWrap); // 객체 자체가 아닌 각각의 값이 할당된다.
// //{a: 'A', b: 'B', c: 'C', d: 'D'}

// const arr1 = [1,2,3];
// // const arr2 = arr1.reverse();
// const arr2 = [...arr1].reverse();

// console.log(arr1); //[3,2,1]
// console.log(arr2); //[3,2,1]

// const array1 = [1,4,5,6];
// const map1 = array1.map(x => x * 2);
// console.log(map1); //[2, 8, 10, 12]

// const map2 = array1.map(function(item,index,array){
//     console.log(item,index,array,this); //(4) [1, 4, 5, 6] {a: 'a'}
//     return (item * 2)
// },{a:'a'});
// console.log(map2);//[2, 8, 10, 12]

// const map3 = array1.map((item,index,array) => {
//     console.log(item,index,array,this); //(4) [1, 4, 5, 6]
//     // 화살표 함수를 사용하면 this에 thisArg가 들어가지 않는다. 
//     return (item * 2)
// },{a:'a'});

// console.log(map3);

// const words = ['spray','limit','elite','exuberant','destruction','present'];

// const result = words.filter(word => word.length > 6);
// console.log(result);//['exuberant', 'destruction', 'present']

// const result2 = words.filter(function(word,index,array){
//     console.log(word,index,array,this);
//     return word.length > 6;
// },{a : 'a'});

// console.log(result2);//['exuberant', 'destruction', 'present']


// [0,1,2,3,4].reduce(function (accumulator,currentValue, currentIndex,array){
//     return accumulator + currentValue;
// });


const obj1 = {a:'a',b:'b'};
const obj2 = {a:'a',b:'b'};
console.log(obj1 === obj2);
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));// true

 

