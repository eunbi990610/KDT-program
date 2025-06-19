interface IUser {
    name : string;
    age : number;
    address : string;
}
// IUser 인터페이스의 키를 추출해서 타입으로 변환하려면 keyof 연산자를 사용하면 됨
type UserKeys = keyof IUser
// "name" | "age" | "address" => 이 타입으로 반환

const user = {
    name : 'john',
    age : 20,
    address : 'seoul' 
}// 객체의 속성 키들을 타입으로 바꿀려면 
// 속성들을 타입으로 변경하고 keyof 를 사용하면됨 

type UserKeys2 = keyof typeof user;


enum UserRole {
    admin,
    manager
}
type UserRoleKeys = keyof typeof UserRole
//keyof는 타입에서 키를 추출해야할 때 사용한다. 