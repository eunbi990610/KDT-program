"use strict";
//함수 구현 
function add(a, b) {
    return a + b;
}
console.log(add('hello', 'world')); //helloworld
console.log(add(3, 7)); //10
function saySomething(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    // 조건문 밖에, 모든 조건이 해당되지 않은 경우의 return 값이 없어서 반환값 string에 오류가 발생
    // 이럴경우 해결 방법 2가지가 있음 
    //1. 그냥 에러를 던진다. 
    throw new Error('unable to say something');
}
function saySomething2(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
}
saySomething('hello'); // hello
saySomething(['hello', 'world']); // hello world 가 되게 하려고함 
