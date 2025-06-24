//예제1
type AType<T> = T extends infer R ? R : null;
//t가 r에 할당가능하게 r을 추론한다. 

const a:AType<number> = 1; //const a: number

//예제2
type BType<T> = T extends {a: infer A; b:1} ? A :any;
//t가 함수에 할당 하는하면 a타입을, 아니면 any타입을 가진다. 
type Infered = BType<{a:'hi'; b:1}>; //type Infered = "hi"

//예제3
type CType<T> = T extends {a: infer A; b: infer B } ? A & B : any;
type Inferred2 = CType<{a: {someAProps: 1}; b: {someBProps: 2}}>
//type Inferred2 = {someAProps: 1;} & {someBProps: 2;}

//예제4
// type MyReturnType = ReturnType
//조건부타입과 infer 추론으로 만들어진 타입인 ReturnType 이다. 
// 리턴타입은 함수 T의 반환 타입으로 만들어진 타입 

type T0 = ReturnType<() => string> //T0 : string
type T1 = ReturnType<(s: string) => void> // T1 : void

function fn(str : string){
    return str;
}

type T2 = ReturnType<typeof fn> // T2 : string
// 리턴타입의 <> 안에는 반드시 함수를 작성해야한다. 