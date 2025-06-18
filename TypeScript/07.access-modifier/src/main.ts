class Post{
//     id:number = 0; // public 
//     protected title : string = "" ;// 기본값을 지정해줄 수도 있음 
//     private address : string;
//     constructor(id: number, title:string, address:string) {
//         this.id = id;
//         this.title = title;
//         this.address = address; 
//         // this로 접근하는 속성들을 위한 타입을 class의 body안에 넣어줘야함 
//     }
    //  코드 간단하게 정리 

    constructor(
        public id: number =1
        , protected title:string = " ") {}

    getPost(){
        return `postId : ${this.id}, postTitle : ${this.title}`;
    }
}

const post = new Post(1, 'title 1');
console.log(post.id);
// console.log(post.title);// error 발생 

class PostB extends Post{ //PostB가 Post클래스의 하위클래스(자식클래스) 
    getPost(){
        return this.title; // 접근 제어자가 protected 라서 
        // 클래스 내 또는 상속받은 자식 클래스에서만 접근이 가능하다. 
        // return this.address;
        //Property 'address' is private and only accessible within class 'Post'
        //private는 클래스 내에서만 가능해서 자식 클래스에서도 오류 발생 
    }
}