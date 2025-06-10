// function fetchData (){// 함수
//     return new Promise((resolve, reject) =>{ // 실행 함수
//         // 비동기 요청
//         const success = true;
//         if(success){
//             resolve('성공');
//         }else{
//             reject('실패');
//         }
//     })
// }

// fetchData()
// .then((response) =>{
//     console.log(response);
// }).catch((error) =>{
//     console.log(reject);
// })

// 프로미스를 지원하기 때문에 new promise를 사용하지 않아도 된다. 
// new promise는 프로미스를 지원하지 않는 함수를 감싸기 위해서 사용
// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json1 => console.log(json1))
//     .then(()=> fetch('http://ㅈㄷㅈㄷjsonplaceholder.typicode.com/todos/2'))
//     .then(response2 => response2.json())
//     .then(json2 => console.log(json2))
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(()=>{ //비동기 처리의 결과에 상관없이 마지막에 진행되는 코드!
//         console.log('작업 끝!!!!');
//     });
    
// const promise1 = Promise.reject('failed reason');
// // const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values); //[3, 42, 'foo']
// }).catch((error) => {console.log(error);//failed reason
// })

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 50, 'one');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
// })

// await
// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json1 => console.log(json1))
//     .then(()=> fetch('http://ㅈㄷㅈㄷjsonplaceholder.typicode.com/todos/2'))
//     .then(response2 => response2.json())
//     .then(json2 => console.log(json2))
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(()=>{ //비동기 처리의 결과에 상관없이 마지막에 진행되는 코드!
//         console.log('작업 끝!!!!');
//     });

async function makeRequests(){
    try{
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    }catch(error){
        console.error(error);
    }finally{
        console.log('---모든 작업 끝---');
        
    }
} 

makeRequests();