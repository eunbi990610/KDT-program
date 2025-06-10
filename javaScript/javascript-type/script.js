let foo = 42;
console.log(typeof foo);//number
foo = 'bar';
console.log(typeof foo); //string
foo = true;
console.log(typeof foo); //boolean

// 원시타입
// 문자열 string
const name = 'han';
// 숫자 number
const age = 27;
// 여부 boolean
const hasJpb = false;
//null -> 명시적으로 '없다'를 표현하고 싶을 때 사용
const car = null;
// unfined -> 변수를 선언만 하고 할당은 안할 시 unfined가 할당됨!
let anything;

//참조타입
// Array 배열
const hobbies = ['walking','books'];
//Object 객체
const address = {
    province : '서울',
    city : '노원구'
}

console.log(typeof hobbies); //object -> 배열이 object의 일부이기 때문에 형을 출력시 object가 반환된다. 
// 실제 이 변수가 배열인지 확인하고 싶을 때는 
console.log(Array.isArray(hobbies)); //true
console.log(typeof address); //object
console.log(Array.isArray(address)); //false


