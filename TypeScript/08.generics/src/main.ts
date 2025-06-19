// function getArrayLength(arr:number[]|string[]|boolean[]):number{
//     return arr.length;
// } // 타입이 바뀔때 마다 유니온으로 타입을 계속 추가해줘야함

// 제네릭을 이용해 더 깔끔하게 코드 정리 
// 관습적으로 'T'를 많이 사용하지만 텍스트가 달라져도 됨!
function getArrayLength<T>(arr: T[]):number{
    return arr.length;
}

const array1 = [1,2,3];
const array2 = ['a','b','c'];
const array3 = [true, false,false];

// getArrayLength(array1);
// getArrayLength(array2);
getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);


interface Vehicle<T>{
    name : string;
    color : string;
    option : T; // any를 사용하지 않고 option 속성의 타입을 정의하고 싶다면 제네릭 사용하면 된다. 
}

const car: Vehicle<{price : number}> = {
    // 제네릭 인자를 price 객체에 전달하려면 {} 안에 작성해야함 
    name : 'Car',
    color : 'red',
    option : {
        price : 1000
    }
}
const bike : Vehicle<boolean> = {
    name : 'Bike',
    color : 'green',
    option : true
}

// const makeArr = <T>(x:T) =>{// 함수이름이 없는 함수(화살표 함수)
//     return [x];
// }
// const array = makeArr<number>(5);
// const array02 = makeArr('a');

const makeArr = <X,Y>(x:X,y:Y):[X,Y] =>{
    return [x,y];
}

const array = makeArr<number,number>(4,5);
const array02 = makeArr<string, string>('a','b');
const array03 = makeArr<string, number>('a',3); 
 // 두개의 인수 중 하나는 기본값으로 타입을 지정해 놓을 수도 있다. 

 const makeArr2 = <X,Y=string>(x:X,y:Y):[X,Y] =>{
    return [x,y];
}
const array4 = makeArr2<string>('b','d');

// 제네릭과 extents와 함께 사용하기 
// const makeFullName = (obj : {firstName: string, lastName : string}) =>{
//     return {
//         ...obj,// 복붙
//         fullName : obj.firstName + " " + obj.lastName
//     }
// }
// makeFullName({firstName:"john", lastName:"Doe"})

// 제네릭과 ...를 함께 사용하기 
const makeFullName = <T extends {firstName: string, lastName : string}>(obj : T) =>{
        // firstName, lastName은 항상 존재해야한다. 
    return {
        ...obj,// 복붙
        fullName : obj.firstName + " " + obj.lastName
    }
}
makeFullName({firstName:"john", lastName:"Doe", location:'seoul'});
makeFullName({firstName:"john", lastName:"Doe", hello:'seoul', location:'dfsd'});

//리액트에서 제네릭 부분
