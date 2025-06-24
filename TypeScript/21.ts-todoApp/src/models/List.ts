import storage from "../ustils/storage";
import type { IListItem } from "./ListItem";
import ListItem from "./ListItem";

interface IList{
    list: IListItem[];//{id, item, checked}객체들이 여러개 들어있는 배열 
    load():void;
    save():void;
    clearList():void;
    addItem(itemObj: IListItem):void;
    removeItem(id: string):void;
}

export default class List implements IList{

    static instance = new List(); // 클래스.인스턴스 로 접근

   private constructor(
    // constructor 에 private 를 붙이면 싱글톤 모델이 되므로 
    // 해당 클래스의 인스턴스를 하나만 만들수 있다. 
        private _list: IListItem[] = []
    ){ }

    get list(): IListItem[] {
        return this._list;
    }

    //로컬 스토리지에 데이터를 저장 
    load(): void{
        const storedList: string | null = localStorage.getItem('myList'); // getItem(키 이름)
        if(typeof storedList !== 'string') return;
        // 로컬스토리지에서 myList키이름의 데이터를 가지고 나온 storedList의 타입이 
        // null이라면 parsedList 실행 
        const parsedList:{
            _id:string,
            _item:string,
            _checked:boolean
        }[] = JSON.parse(storedList); 
        //JSON.parse() : 로컬스토리지에서 가져온 "문자열 데이터"를 js객체나 배열로 바꾸기 위해서 사용!

        storage.get<{
            _id:string,
            _item:string,
            _checked:boolean
        }[]>('myList')

        // listItem 인스턴스 객체를 생성 => list 인스턴스 객체에 넣어주기 
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(
                itemObj._id,
                itemObj._item,
                itemObj._checked
            )
            List.instance.addItem(newListItem);
        })
    }
    //addItem()한 데이터를 로컬 스토리지에 넣어주기 위한 코드 
    save():void {
        storage.set('myList', this._list);
        // localStorage.setItem('myList', JSON.stringify(this._list));
    }//JSON.stringify() : 배열/객체를 로컬스포티지에 넣을 때 꼭 필요!

    clearList():void{
        this._list = [];
        this.save();
    }

    addItem(itemObj: IListItem): void {
        this._list.push(itemObj);// 새로 등록한 list를 추가 
        this.save();// 변경이 될때마다 저장해줘야함
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        //삭제할 리스트의 아이디와 동일하지 않은 리스트들만 this._list에 저장 
    }



}