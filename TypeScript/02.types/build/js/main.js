"use strict";
//boolean
let boolean;
let falseBoolean = false;
//number
let number;
let integer = 6;
let float;
//string
let string;
let firstName = 'Doe';
// Array
//한가지만 타입만 가지는 배열
let names1 = ['john', 'kim'];
let namse2 = ['john', 'kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['john', 1, 2];
let array2 = ['john', 1, 2];
// 여러 타입을 단언 X -> any
let someArray = ['john', 1, [], {}, false];
// interface, type
//읽기 전용 배열 생성(readonly키워드, ReadonlyArray타입)
let stringArray = ['a', 'b'];
let numberArray = [1, 2];
// stringArray.push('c;);//Property 'push' does not exist on type 'readonly string[]'.ts(2339)
// 읽기 전용이라 추가 불가능! 
// numberArray[1] = 3;
// tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a',1,2];// Source has 3 element(s) but target allows only 2.
// 요소 2개만 지정했는데 3개 넣어서 오류 발생!
// tuple1 = [1,'a'];// 오류 발생! 타입 안맞음!
let users;
users = [[1, 'john'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
//지정한 요소보다 더 많은 요소를 초기화 할 순 없지만, PUSh를 이용한 추가는 가능하다. 
// tuple2.push(true);// 그렇지만 지정한 타입이 아닌 것은 안됨
console.log('tuple', tuple2);
// any 
let any = 'abc';
any = 1;
any = [];
//unknown 알수 없는 타입
let unknown = 123; // 어떠한 값도 사용이 가능 
// let string1:number = unknown;// 어떤한 변수에도 할당이 불가능하다
let string2 = unknown; // 할당 가능하게 하는 방법
// object
let obj = {};
let arr = [];
// let nul: object = null;//error
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1'
    // ,description : 'description1'
};
//union
let union;
union = 'hi';
union = 1234;
// union = true;//Type 'boolean' is not assignable to type 'string | number'.ts(2322)
//function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('h1');
};
//null, undefind
// let number1: number = undefined;
// let string3:string = null;
// let object: {a:10,b:false} = undefined;
// let array:any[] = null;
// let undefind1:undefined = null;
// let null2:null = undefined;
// let void4:void = null;
//striptNullCheck가 true여서 오류가 발생함
let void2 = undefined; // void 타입에 undefined는 가능하다. 
//void
void function greeting() {
    console.log('hi');
};
// 실제로 undefined를 반환함! 하지만 undefined로 타입을 지정하면 오류가 발생함
// never : 오류를 출력하거나, 리턴 값을 절대 내보내지 않을 때
function throwError() {
    throw new Error("error");
}
;
function keepProcessing() {
    while (true) {
        console.log('hi'); // 반복문을 빠져나오지 못해 리턴 값이 없을 것을 확신
    }
}
const never = []; // 빈 배열을 타입으로 잘못 선언한 경우에도 never타입을 가진다. 
var foo = {};
foo.bar = 123;
foo.bas = 'hello';
// 컴파일러는 foo type이 속성이 없는 객체라고 가정하기 때문에 컴파일러 오류가 발생
