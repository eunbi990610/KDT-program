// //1. 생성자에서 하마의 인스턴스만 생성될 수 있게 로직 작성 
// let instance;
// class Counter {
//     constructor(){
//         if(instance){
//             throw new Error ('하나의 인스턴스만 생성할 수 있다. ');
//         }
//         this.counter = 0;
//         instance = this;
//     }

//     getCount(){
//         return this.counter;
//     }
//     increment(){
//         return this.counter++;
//     }

//     decrement(){
//         return this.counter--;
//     }
// }

// // 2. 객체 인스턴스 생성, 두번 째 생성한 객체는 에러가 난다. 
// const singletonCounterA = new Counter();

// singletonCounterA.increment();
// singletonCounterA.increment();
// console.log(singletonCounterA.getCount); //2

// const singletonCounterB = new Counter();
// //Uncaught Error: 하나의 인스턴스만 생성할 수 있다. at new Counter

const createBook = (title,author,isbn) => ({
    title,author,isbn
});

const book1 = createBook('harry potter','jk rowling','ab123');
const book2 = createBook('moby-dick','herman melville','ef789');

console.log(book1,book2);
