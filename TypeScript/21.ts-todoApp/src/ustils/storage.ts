const storage = {
    set:(key:string, value:any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get :<T>(key:string, defaultValue?: T):T => {
        // defaultValue? =>'?' 선택적 매개변수 : 이 매개변수는 넣어도 되고 안넣어도 된다. 
        const value = localStorage.getItem(key);
        return (value ? JSON.parse(value): defaultValue) as T;
    },
    remove: (key:string) =>{
        localStorage.removeItem(key);
    }
}

export default storage;