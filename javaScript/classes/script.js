// class Person{
//     constructor(name, email,birthday){
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//     }

//     introduce(){
//         return `hello my name is ${this.name}`;
//     }
//     static multipleNumbers(x,y){
//         return x * y;
//     }// this.name 같은 것을 사용하지 않으며 독립적인 것을 정의할 때 static을 사용하며 이 static 메서드를 사용할 때는 
//     // 인스턴스가 아닌 클래스 이름을 이용해서 사용한다. 
//     // 사용법 : 클래스명.static메서드명(매개변수)
// }

// const eunbi = new Person('eunbi','eunbiyang74@gmail.com','10-6-99');
// console.log(eunbi);
// console.log(eunbi.introduce());
// // 클래스 안에서 함수를 만들면 자동으로 프로토타입으로 저장된다. 

//상속
// class Person{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     introduce(){
//         return `hello my name is ${this.name}`;
//     }
// }

// class Client extends Person{
//     constructor(name, email,phone,address){
//         super(name,email);
//         this.phone = phone;
//         this.address = address;
//     }
// }

// const john = new Client('john','john@example.com','010-1111-1111','서울');
// console.log(john.introduce());
 
// class Car{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return `I have a ${this.carname}`
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.mod = mod;
//     }
//     show(){
//         return super.present() + `, it is a ${this.mod}`;
//     }
// }

// let mycar = new Model('ford','mustang');
// console.log(mycar.show());//I have a ford, it is a mustang 



function step1(callback){
    console.log('1단계 실행');
    callback('1단계 완료');
}
function step2(msg,callback){
    console.log('2단계 실행 : ', msg);
    callback('2단계 완료');
}
function step3(msg){
    console.log('3단계 실행 : ', msg);   
}
step1(function(step1Result){
    step2(step1Result,function(step2Result){
        step3(step2Result);
    });
});
/*
1단계 실행
2단계 실행 :  1단계 완료
3단계 실행 :  2단계 완료
*/