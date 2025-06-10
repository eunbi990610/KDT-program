// function makeIterator(numbers){
//     let nextIndex = 0;

//     //iterator을 만는 공식
//     return {
//         next : function(){
//             return nextIndex < numbers.length ?
//             {value : numbers[nextIndex++], done: false} :
//             {value : undefined, done: true}
            
//         }
//     }
// }

// // 숫자 배열 생성
// const numbersArray = [1,2,3];
// // const numbersIterator = makeIterator(numbersArray);
// //심볼을 이용해서 이터레이터 만들기 
// const numbersIterator = numbersArray[Symbol.iterator]();
// // [Symbol.iterator]() -> 객체의 기본 이터레이터를 반환하는 메서드
// // 반복가능한 값을 반복기로 생성가능
// console.log(numbersIterator.next());//{value: 3, done: false} 
// // done, value 속성을 가진 객체를 반환 
// console.log(numbersIterator.next());//{value: 3, done: false}
// console.log(numbersIterator.next());//{value: 3, done: false}
// console.log(numbersIterator.next());//{value: 3, done: true}

// const numbersIterable = [1,2,3];//배열
// const numbersNotIterable = {a:1,b:2};//객체
// // numbersIterable[Symbol.iterator]();
// console.log(typeof numbersIterable); //object
// console.log(typeof numbersNotIterable);//object

// // for(const n of numbersNotIterable){
// //     console.log(n);//Uncaught TypeError: numbersNotIterable is not iterable
// // }

// const set = new Set([1,2,3,4]);
// console.log('set',set);
// console.log(set[Symbol.iterator]());// 값을 가지므로 이터러블 한것!

// const map = new Map([['a',1],['b',2]])
// console.log('map',map);


//제너레이터 함수 생성
function* sayNumbers(){
    yield 1;
    yield 2;
    yield 3;
}
/*
yield 는 양보하다란 뜻으로 제너레이터 함수의 실행을 일시적으로 정지시킨다. 
즉, 일반 함수의 return과 매우 유사하다. 
*/

// 제너레이터 = 제너레이터함수의 반환이 제너레이터 이다. 
const number = sayNumbers();

console.log(number.next()); //{value: 1, done: false}
console.log(number.next()); //{value: 1, done: false}
console.log(number.next()); //{value: 1, done: false}
console.log(number.next()); //{value: undefined, done: true}

function* generatorFunction(){
    yield 1;
}

const generator = generatorFunction();
// generator = generator[Symbol.iterator]();
//제너레이터의 심볼 이터레이터 하는 것과 동일하다. 
//제너레이터의 이터러블에서 반환하는 이터레이터, 자기자신과 같다. 

// console.log(generator.next());//Uncaught TypeError: Assignment to constant variable.

// 제너레이터 사용법 => lazy evaluation
// lazy evaluation : 계산의 결과값이 필요할 때까지 계산을 늦춰서 필요한 데이터를 필요한 순간에 생성한다. 

function* createIds(){
    let index = 1;

    while(true){
        yield index++; 
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return(10));
//{value: 10, done: true} return -> 강제로 값 넣기 

function* generatorFunction1(){
    yield* [1,2,3,4];
    // 아래 코드와 같은 뜻!
    // yield 1; yield 2; yield 3;
}

const generator1 = generatorFunction1();
for(const number of generator1){
    console.log(number); //1 //2 //3 //4
}