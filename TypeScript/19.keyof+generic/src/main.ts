interface Person {
    name : string;
    age: number;
    address : string;
}

const person:Person = {
    name : 'john',
    age : 30,
    address :'seoul'
}

// const age = getProperty(person, 'age'); //예상 값 : 30
// const name = getProperty(person, 'name'); //예상 값 : john
// const invalid = getProperty(person, 'invalid'); //예상 값 : error

// // function getProperty(obj, key) {// 매개변수의 타입이 any를 가지므로 에러가 발생
// //     return obj[key];
// // }
// function getProperty<T, K extends keyof T>(obj:T, key:string){
//     return obj[key];
//     // obj에 뭐가 올지 몰라 unknown 형식인데 unknown 형식에 string을 넣어서 오류발생
// }

