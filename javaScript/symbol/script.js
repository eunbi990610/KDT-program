// const sym1 = Symbol();
// const sym2 = Symbol();
// const sym3 = Symbol('hi');

// console.log(sym1);//Symbol()
// console.log(sym1 === sym2);// false
// console.log(sym3.description);// hi

// const idSym = Symbol('id');
// let carA = {
//     id: 1,
//     name : 'morning',
//     brand : 'kia',
//     price : 1000,
//     [idSym] : 300
// }


// carA[idSym] = 300; //속성이 항상 유니크하게 될 수 밖에 없음! 
// 원래 있던 속성의 값을 덮어버리지 않는다. 

// carA.id = 300; // 오버라이드해버림 원래 있던 속성의 값을 바꿔버림
// console.log(carA);
// console.log(Object.getOwnPropertyNames(carA));
// //['id', 'name', 'brand', 'price'] => 심볼은 안나옴!

// for(const key in carA){
//     console.log(key);
// }
// console.log(Object.getOwnPropertySymbols(carA));//[Symbol(id)] 심볼 프로퍼티를 알 수 있음 

// const sym1 = Symbol('sym1');
// const sym2 = Symbol('sym1');
// console.log(sym1 === sym2); //false

// const sym3 = Symbol.for('sym1');
// const sym4 = Symbol.for('sym1eqw');
// console.log(sym3 === sym4); //true

// console.log(Symbol.keyFor(sym4));//sym1eqw 


// const red = Symbol('red');
// const orange = Symbol('orange');
// const yellow = Symbol('yellow');
// const blue = Symbol('blue');
// const dog = 'blue';
// // 두개의 블루가 같은 것이 될 수가 없음!

// function getImportantLevel(color){
//     switch(color){
//         case red:
//             return 'very important';
//         case orange:
//             return 'important';
//         case yellow:
//             return 'little important';
//         case blue:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
            
//     }
// }

// console.log(getImportantLevel(blue));//not important
// console.log(getImportantLevel(dog));// blue not included

class Car{
    constructor(){
        this.length = 0;
    }
    add(brand, name){
        this[brand] = name;
        this.length++;
    }
}

let myCars = new Car();

myCars.add('kia','morning');
myCars.add('hyunndai','tucson');
myCars.add('genesis','gv80');

for(const car in myCars){
    console.log(car,myCars[car]);
    /*
    length 3   // 이 결과값 없애는 법 => 심볼로 만들기 
    kia morning
    hyunndai tucson
    genesis gv80
    */   
}