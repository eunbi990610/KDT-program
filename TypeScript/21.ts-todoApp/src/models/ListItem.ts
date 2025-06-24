export interface IListItem {// 하나의 객체 {id, item, checked}
    id:string;
    item :string;
    checked: boolean;
}

export default class ListItem implements IListItem {
// export default : 모듈에서 기본적으로 하나만 내보내겠다. 
    constructor(
        private _id : string = '',
        private _item : string = '',
        private _checked : boolean = false
    ) {}

    get id():string {
        return this._id
    }
    set id(id:string){
        this._id = id;
    }

    get item():string {
        return this._item
    }
    set item(item:string){
        this._item = item;
    }

    get checked():boolean{
        return this._checked
    }
    set checked(checked:boolean){
        this._checked = checked;
    }
}