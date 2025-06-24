"use strict";
//함수 구현 
function add(a, b) {
    return a + b;
}
console.log(add('hello', 'world')); //helloworld
console.log(add(3, 7)); //10
function saySomething(word) {
    if (typeof word === "string") {
        console.log(word);
    }
    else if (Array.isArray(word)) {
        console.log(word.join(" "));
    }
}
saySomething('hello'); // hello
saySomething(['hello', 'world']); // hello world 가 되게 하려고함 
