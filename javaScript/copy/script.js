//shallow copy
const aArr = [1,2,3];

// 얕은 복사는 전개 연산자(스프레드 오퍼레이터)로 할 수 있다. 
const bArr = [...aArr, 4];
console.log('aArr',aArr);
console.log('bArr',bArr);
console.log(aArr === bArr);// false

// object.assing() 으로 하는 얕은 복사
const cArr = Object.assign([],bArr);
console.log(cArr); // [1, 2, 3, 4]
console.log(cArr === bArr);// false

// 중첩이된 배열이나 객체 nested arrays and object
cArr.push([5,6,7]);
console.log(cArr);//[1, 2, 3, 4, Array(3)]
const dArr = [...cArr,10];
console.log(dArr);//[1, 2, 3, 4, Array(3), 10]
dArr[4].push(8);
console.log(cArr);// [1, 2, 3, 4, Array(4)]
console.log(dArr);// [1, 2, 3, 4, Array(4), 10]
// dArr의 배열에 8을 추가 -> 얕은 복사를 했으니 c에는 영향이 안 갈줄 알았지만
// cArr의 배열에도 8이 추가되었다. 

//얕은 동결
const aObj = {
    'a' :'a',
    'b' :'b',
    'cObject' : {'a':1,'b':2}
}

// Object.freeze(aObject);
// aObject.a = 'C';
// console.log('a',aObject);//{a: 'a', b: 'b', cObject: {…}}

// aObject.cObject.a = 3;
// console.log('aObject',aObject); //cObject: {a: 3, b: 2}

// deep copy=> JSON.parse(JSON.stringify())로 실행
// const newAObj = JSON.parse(JSON.stringify(aObj));
const newAObj = {...aObj,cObject:{...aObj.cObject}};
// 중첩된 부분까지 얕은 복사를 해온다. 
console.log('old',aObj);
console.log('new',newAObj);
aObj.cObject.a = 3;
console.log('old',aObj);//cObject: {a: 3, b: 2}
console.log('new',newAObj);//cObject: {a: 1, b: 2}
// 복사해온 것을 수정해도 영향을 미치지 않아

//deep copy with nested spread operator

// const 
// lodash 라이브러리 -> _.cloneDeep()을 사용해서 깊은 복사함

function funcDeclaration(){
    return 'A function declaration 함수 선언문'
};

let funcExpression = function(){
    return 'A function expression 함수 표현식'
};