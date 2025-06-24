import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = ():void =>{
  console.log('init~!');

  const listInstance = List.instance;
  const ListTemplateInstance = ListTemplate.instance;

  const itemForm = document.getElementById('form') as HTMLFormElement;

  itemForm.addEventListener('submit', (event:SubmitEvent): void => {
    event.preventDefault();


    //  new item text
    const inputEl = document.getElementById('item-input') as HTMLInputElement;
    const newText = inputEl.value.trim();
    if(!newText.length) return;
    inputEl.value = " ";

    //새 item id
    const itemId = listInstance.list.length 
    ? parseInt(listInstance.list[listInstance.list.length - 1].id )+ 1
    : 1;

    //새로운 item 생성하기 
    const newItem = new ListItem(itemId.toString(),newText);
// checked는 기본값이 false이기 때문에 넣지 않아도 생성된다. 
    //list 에 new item 넣기
    listInstance.addItem(newItem);

    ListTemplateInstance.render(listInstance);

  }) 

  // 전체 없애기 
  const clearItemsEl = document.getElementById('clear-btn') as HTMLButtonElement;
  clearItemsEl.addEventListener('click', ()=>{
    listInstance.clearList();
    ListTemplateInstance.clear();
  })



  //초기 데이터를 load하기
  listInstance.load();
  //생성된 데이터를 이용해서 화면에 보여주기
  ListTemplateInstance.render(listInstance);


}
initApp(); 