let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child')

console.log('list',list);
console.log('listItem', listItem);

allVal = list.childNodes; //nodeList 반환, line break 도 포함 0 
// val = document.querySelector('#body-container').childNodes;
val = list.childNodes[0].nodeName; // 노트 태그 이름
val = list.childNodes[0].nodeType; // 노트 태그 이름
/*
1 - element
2 - attribute(deprecated)
3 - text node
8 - comment node(주석) - 태그를 주석처리 했을 대 
9 - document itself
10 - doctype
*/

console.log('allVal',allVal); 

//children element nodes반환

val = list.children; //html collection 반환(line break 반환 X)

list.children[1].textContent = 'hi';
val = list.children[1];

//first child
val = list.firstChild; 
// list.firstChild === list.childNodes[0]

val = list.firstElementChild; //텍스트 노드 포함 X 

// // last child
val = list.lastChild; // 라인 브레이크-> 텍스트노드 포함 
// // list.lastChild === list.childNodes[list.childNodes.length - 1]
val = list.lastElementChild;

// //child 요소 count
val = list.childElementCount;

// // parent node 반환

val = listItem.parentNode; // tag로 출력
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//next sibling 반환
//부모의 childNodes 목록에서 지정된 노드 바로 다음에 있는
// 노드를 반환하거나 지정된 노트가 해당 목록의 마지막 노드이면 null 반환
val = listItem.nextSibling; // text 노드 포함
val = listItem.nextElementSibling; //text 노드 불포함
val = listItem.nextElementSibling.previousElementSibling;
// 영단어 sibling : 형제자매

// previou sibiling 반환
val = listItem.previousSibling;


// console.log(val);


// childNodes - for of 사용
for(let node of list.childNodes){
    console.log(node);
}

// console.log(.filter);
let arr = Array.from(list.childNodes);
console.log(arr);

arr.forEach(el =>{
    console.log(el);
    
});
