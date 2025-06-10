// Method -> object

// const audio = {
//     title : 'a',
//     play(){
//         console.log('play this',this);
//     }
// }
// audio.play();
// audio.stop = function(){
//     console.log('stop this',this);
// }// audio 객체에 메서드 추가 

// audio.stop();

// // function -> window object
// function playAudio(){
//     console.log(this);
// }

// playAudio();// 전역함수 호출이므로 

// 생성자 함수 constructor function =>{} 빈 객체를 가리킴
// function Audio(title){
//     this.title = title;// 빈객체의 속성(TITLE)에 title값을 저장 
//     // => title = a
//     console.log(this);//object
    
// }

// const audio = new Audio('a');

const audio = {
    title : 'audio',
    categories : ['rock','pop','hiphop'],
    displayCategories() {
        this.categories.forEach(
        function(category){console.log(`title: ${this.title},category :${category}`);  },
        {title:'audio'})
        // this.title -> window.title 이라는 속성은 없기 때문에 undefined
        /* forEach의 첫번째 매개변수 : 콜백함수
         두번째 매개변수는 thisArg 
         thisArg : 여기에 넣는 것을 콜백함수에서 this로 참조할 수 있음
         {title:'audio'} 대신 this를 사용해도 됨 저  this는 메서드 안에 존재하는 this 임!

         */
    
    }
}


//화살표 함수에서 this는 항상 상위 스코프의 this를 가리키게 된다. 
// lexical this
// const audio = {
//     title : 'audio',
//     categories : ['rock','pop','hiphop'],
//     displayCategories() {
//         this.categories.forEach((category) => {
//             console.log(this);// 이 this의 상위 스코프의 this는 
//             // 바로 윗줄의 this로 객체를 가리킨다. 
            
//         })
//     }
// }

audio.displayCategories();



