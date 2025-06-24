
// type someType = T extends U ? X : Y
type SomeType = string;
type ConditionalType = SomeType extends string ? string : null;
//type ConditionalType = string

function fn1<T>(value:T){
    const fn2 = (
        arg:T extends boolean ? 'A':'B'
    ) => {};
    return fn2;
}
const result = fn1('');// fn1<string> //const result: (arg: "B") => void
const result2 = fn1(true);//const result2: (arg: "A") => void

type StringOrNot<T> = T extends string ? string : never;
type AUnion = string | boolean | never; //type AUnion = string | boolean
// never는 어떠한 값도 가지지 않을 때 사용하므로 union 타입에 never이 있다면 자동으로 제거된다.

const A: StringOrNot<string> = 'string';

// 두번째 매개변수에 유니온 유형에서 삭제할 것을 지정하는 타입으로 
// Exclude<유니온타입, 삭제할속성>
//Exclude<T,U> = T extends U ? never : T;
type ResultType = Exclude<'a' |'b'|'c','a'|'b'>;
/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
 */

// 함수로 변경
// type AType<T> = (()=>T) extends ()=> string | number ? T:never;//type MyResult = never
// 튜플로 변경
type AType<T> = [T] extends [string | number] ? T:never;//type MyResult = never
type MyResult = AType<string | number | boolean> ;
/*
'string' extends string | number ? 'string' : never => 'string'
'number' extends string | number ? 'number' : never => 'number'
'boolean' extends string | number ? 'boolean' : never => never
 */

