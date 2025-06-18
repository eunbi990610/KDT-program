const bodyElement = document.querySelector('body') as HTMLBodyElement;// dom요소를 반환
bodyElement.innerText = "hello";
// 타입스크립트는 없다고 생각하기 때문에 null을 반환한다. 

const bodyElement2 = document.querySelector('body');
bodyElement2!.innerText = "hello";
//! => !가 붙어 있는 변수의 타입이 undefined나 null이 절대 아니라는 느낌표 연산자

// 타입 가드 사용 방법
const bodyElement3 = document.querySelector('body');
if(bodyElement3){
    bodyElement3.innerText = "hello";
}// bodyElement3 가 존재할 때만 텍스트 넣기 
// 조심해서 사용해야함

// 타입 가드 잘못 사용 예시 
function func(arg: string | null){
    // return arg.toLowerCase(); //매개변수가 string일 때만 이 메서드를 사용가능함 
    // return (arg as string).toLowerCase(); // arg는 무조건 string 이라고 단언 
    //Uncaught TypeError: Cannot read properties of null (reading 'toLowerCase')
    //에러 발생 

    if(arg){
        return arg.toLowerCase();
    }

}

func('hello');
func(null);


