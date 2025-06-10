// 리스트 추가하기
const addBtn = document.querySelector('.add-button');
const todoList = document.querySelector('#simple');

addBtn.addEventListener('click',() => {
    const newList = todoList.cloneNode(true); 
    newList.removeAttribute('id');
    document.querySelector('.main').appendChild(newList);
});

// 목표 클리어
const checkboxs = document.querySelectorAll('.checkbox');

checkboxs.forEach(checkbox =>{
    checkbox.addEventListener('change', function() {
        let todoText = this.parentElement.querySelector('.todo');
        if(todoText.innerText){
            if(this.checked){
                this.parentElement.style="opacity: 0.6";
                todoText.style = "text-decoration-line: line-through";
            }else{
                this.parentElement.style="opacity: 1 ";
                todoText.style = "text-decoration-line: none";
            }
        }
    })
});



// input 포커스 스타일링  

const inputs = document.querySelectorAll('.input');
let text;

inputs.forEach(input =>{
    input.addEventListener('blur',function(){
        this.parentElement.style = 'border : none';
        this.style = "opacity:0";
        this.parentElement.querySelector('.todo').style = 'opacity:1';
    });
    //입력 
    input.addEventListener('input',function(){
        this.parentElement.querySelector('.todo').innerText = input.value;
    });
})

// 수정하기 & 입력 FOCUS
const updateIcons = document.querySelectorAll(".update-icon");
// console.log(updateIcons);

updateIcons.forEach(updateIcon => {
    updateIcon.addEventListener('click', function(){
        const grandEle = this.parentElement.parentElement;
        console.log(this);
       
        grandEle.querySelector('.input').style = "display : block";
        grandEle.querySelector('.todo').style = "display : none";
        grandEle.style = "border : 2px solid white"
    })
});

// 삭제 
const dropIcons = document.querySelectorAll('.drop-icon');
dropIcons.forEach(dropIcon => {
    dropIcon.addEventListener('click', function(){
        console.log(this.parentElement.parentElement);
        
        this.parentElement.parentElement.remove();
    })    
});

