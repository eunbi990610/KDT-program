const count  =20;
let itemIndex =0;

// const observer = new IntersectionObserver(entries =>{
//     console.log('entries',entries);
//     entries.forEach(entry =>{
//         const list = document.querySelector('.list');
//         if(entry.isIntersecting){
//             for(let i=itemIndex; i<itemIndex+count; i++){
//                 let item = document.createElement('p');
//                 item.textContent = i;
//                 item.className += 'item';
//                 list.appendChild(item);
//             }
//             itemIndex = itemIndex + count;
//         }
//     })
// },{root:null, threshold:0.1});
// // let lastEl = document.querySelector('.end');
// // console.log(lastEl);

// //관찰을 계속할 타겟을 넣어줌 =>end
// observer.observe(document.querySelector('.end'));
// /*
// 이미 교차가 되어 있다면 isIntersecting :  true 로 되어 있음
// 교차 정도 : intersectionRatio 
//  */

const observer = new IntersectionObserver(entries => {
    console.log('entries',entries);
    /*
    entries : 루트 내에서의 가시성 변화를 감지할 요소
    entries 목록 : boundingClientRect, intersectionRatio,
    intersectionRect, isIntersecting, isVisible, target
    => .observe()로 지정한 요소(p.end)에 대한 정보이다. 
    */
   entries.forEach(entry => {
    const list = document.querySelector('.list');
    if(entry.isIntersecting){
        //지정한 요소가 뷰포트 또는 특정 루트요소와 교차하고 있는지를 boolean값으로 알려준다.
        //p.end가 뷰포트와 교차하고 있다면
        for(let i=itemIndex; i<itemIndex+count; i++){
            let item = document.createElement('p');
            item.textContent = i;
            item.classList += 'item';
            list.appendChild(item);            
        }//i숫자를 가진 p.item을 div.list안에 생성
        itemIndex = itemIndex + count;

    }
   })

    
},{root :null,  //root:NULL이면 현재 문서를 루트로, 그 뷰포트를 루트경계로 사용
     threshold:0.1} //isIntersecting이 true가 되려면 요소가 최소한 조금이라도 화면에 보여야하는데
     // threshold 옵션을 설정하면 화면에 얼마나 보여야 isIntersecting이 true가 되는지 조절할 수 있다. 
     // 기본값은 0
);
//IntersectionObserver() 객체를 생성한다. 
// 이 객체는 대상 요소의 가시성 비율이 설정한 역치 값을 넘어가는 것을 감지하면 지정한 콜백을 호출한다. 

observer.observe(document.querySelector('.end'));
//intersectionObserver의 주시 대상 목록에 요소를 추가한다. 

