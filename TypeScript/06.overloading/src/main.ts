//함수 선언
function add(a:string, b:string):string;
function add(a:number, b:number):number;
//함수 구현 
function add(a:any, b:any):any {
    return a + b;
}

console.log(add('hello','world')); //helloworld
console.log(add(3,7)); //10


function saySomething(word:string | string[]): string  {
    if(typeof word === "string"){
        return word;
    }else if(Array.isArray(word)){
        return word.join(" ");
    }
    // 조건문 밖에, 모든 조건이 해당되지 않은 경우의 return 값이 없어서 반환값 string에 오류가 발생
    // 이럴경우 해결 방법 2가지가 있음 
    //1. 그냥 에러를 던진다. 
    throw new Error('unable to say something');
    
}

// 2. 오버로딩을 이용한다.
function saySomething2(word: string ):string
function saySomething2(word: string[]) : string

function saySomething2(word:any) : any{
     if(typeof word === "string"){
        return word;
    }else if(Array.isArray(word)){
        return word.join(" ");
    }
}



saySomething('hello');// hello
saySomething(['hello','world']);// hello world 가 되게 하려고함 