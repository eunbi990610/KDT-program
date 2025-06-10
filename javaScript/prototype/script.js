let user = {
    name : 'john',
    age : 45,
    email : 'john@example.com'
}
console.log(user.name);
console.log(user.hasOwnProperty('email'));
// email 속성이 있다면 true 없다면 false

console.log(user);
// 모든 객체는 global object prototype을 가진다. 

// function Person(name, email, birthday){
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     console.log('diff',diff);
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
// }
// 프로토타입으로 메서드 기능 만들기 
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//         console.log('diff',diff);
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
// }// 재사용성이 높이기 위해서 프로토타입으로 생성 
function Person(name, email, birthday){
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;

}
const personsPrototype = {
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        console.log('diff',diff);
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const john = new Person('john','john@example.com','2-11-91');
const han = new Person('han','han@example.com','2-1-90');
console.log(john);
console.log(han);


