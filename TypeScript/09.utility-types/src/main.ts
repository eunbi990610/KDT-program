

//partial
//partial로 지정한 타입의 속성 중 아무거나 맞으면된다. 
// 완전히 비어 있는 값에도 에러가 발생하지 않음!
interface Address{
    email : string;
    address : string;
}

const me: Partial<Address> = {};
const you : Partial<Address> = {email:'eunbiyang74@gmail.com'};
const all : Address = {email:'eunbiyang74@gmail.com', address:'seoul nowon'}

// //pick
// interface Todo {
//     title : string;
//     description : string;
//     completed : boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">
// // Todo 타입에서 title, completed 만 뽑아서 새로운 타입으로 만든것!

// const todo : TodoPreview = {
//     title : "clean room",
//     completed : false
// }

// omit 생략하다 : 특정 속성만 제외 (pick과 반대)
interface Todo {
    title : string;
    description : string;
    completed : boolean;
    createdAt : number;
}

type TodoPreview = Omit<Todo,"description">;

const todo :TodoPreview  = {
    title : "clean room",
    completed : false,
    createdAt : 1223142
}

//Required

type User = {
    firstName : string,
    lastName? : string 
    // 선택적 프로퍼티 ? 
    //lastName 이 있어도 되고, 없어도 되는 선택적인 속성이다. 
}

let firstUser : User = {
    firstName : 'john'
}

// let secondUser : Required<User> = {
//     firstName : 'John' 
// }// 오류 발생 
// lastName속성이 {firstName:string} 형식에 없지만 Required<User> 형식에는 필수이다. 
// Required는 선택사항으로 만들어 놓은 속성이 있어도 모든 속성이 필수가 되게 한다. 


//record<keys, type>

interface CatInfo {
    age : number;
    breed : string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats :Record<CatName, CatInfo> = {
    miffy : {age :10, breed : 'persian'},
    boris : {age:5, breed : 'maine coon'},
    mordred :{age: 15, breed: 'british. shorthair'}
}

// returen Type<T>
type T0 = ReturnType<()=> string>
type T1 = ReturnType<(s:string)=>void>

function fn(str :string){
    return str;
}

const a:ReturnType<typeof fn> = 'hello';
// const b:ReturnType<typeof fn> = true;

class Car {
    
}