
// for(let i=0; i <10; i++){
//     if(i === 3){
//         console.log('it is 3');
//         continue;
//     }
    
//     if(i === 5){
//         console.log('it is 5');
//         break;
//     }

//     console.log('Number'+i); 
// }

// const user = {
//     name : 'Han',
//     province : '경기도',
//     city : '성남시'
// }

// for(let x in user){ // user 객체의 속성의 key가 하나씩 let x의 변수로 들어가면서 반복문이 진행된다. 
//     console.log(`${x} : ${user[x]}`);
//     // 객체 속성의 value를 꺼내 쓸려면 객체[key]를 사용하면 된다. 
     
// }

// let i =0;
// while (i < 5){
//     console.log(`number ${i}`);
//     i ++;
// }

// let i =0;
// do{
//     console.log('number' + i);
//     i++
// } while(i>5);

//배열을 loop로 이용해서 컨트롤 하기 
const locations = ['서울','부산','경기도','대구'];

// for
for(let i=0;i<locations.length; i++){
    console.log(locations[i]);
}

//forEach
locations.forEach(function(location,index,array) {
    console.log(`${index} : ${location}`);
    console.log(array);
    // location : 배열 값
    // index : 배열 값의 인덱스 
    // array : 배열 전체 
});

// map
locations.map(function(location){
    console.log(location);
    // location : 배열 값
})

