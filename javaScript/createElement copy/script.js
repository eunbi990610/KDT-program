
// element 생성
const li = document.createElement('li');

// class 추가
li.className = 'list-group-item';

// id 추가
li.id = 'new-item';

// 속성 추가
li.setAttribute('name', 'New list item')

// link element 생성하기
const link = document.createElement('a');
link.className = 'alarm-item';
link.innerHTML = '알람 설정하기';
// 생성한 li을 ul 안으로 넣기 -> ul의 자식 노드로 위치 시키기
document.querySelector('ul.list-group').appendChild(li);
li.appendChild(link);