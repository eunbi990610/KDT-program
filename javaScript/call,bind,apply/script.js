// call()

// const fullName = function(city,country){
//     console.log(this.firstName + ' ' + this.lastName, city, country);
//     // this는 함수 안에서 사용했으므로 window 객체를 참조하며
//     // this.firstNAme, this.lastName은 undefined가된다. 
// }

// const person1 = {
//     firstName : 'john',
//     lastName : 'smith'
// }

// fullName();
// fullName.call(person1,"oslo","norway"); // window 객체 대신 person1객체를 참조하게만듬!
// call메서드는 참조객체 말고 매개변수를 받아서 메서드로 전달도 가능

//apply

const fullName = function(city,country){
    console.log(this.firstName + ' ' + this.lastName, city, country);

}

const person1 = {
    firstName : 'john',
    lastName : 'smith'
}

fullName.apply(person1,["oslo",'norway']);
// call 과의 차이점
// 인수를 입력할 때 배열로 입력

//bind()
function func(language){
    if(language === 'kor'){
        console.log(`language :${this.korGreeting}`);
    }else{
        console.log(`language : ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting : '안녕',
    engGreeting : 'hello'
}

func.bind(greeting);
// 콜,어플라이 처럼 함수를 바로 실행시켜주는 것이 아니고 바인드만 시킨다. 
// func함수 this에 greeting 객체를 바인딩만 시킨다. 

// const boundFunc = func.bind(greeting);
// boundFunc('kor');
// 바인딩된 함수를 새로운 객체에 저장하고 새로운 객체를 호출해야한다. 

