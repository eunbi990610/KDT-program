// 호출 시그니처 넣는 방법 
// //(매개변수 : 타입 ): 반환 타입 
// interface getLikeNumber{
//     (like:number) : number;
// }

// interface Post{
//     id:number,
//     title: string,
//     // getLikeNumber:(like:number) => number;// 재사용성 높이기 위해서 인터페이스 분리!
//     getLikeNumber:getLikeNumber;
// }

// const post1 : Post = {
//     id:1,
//     title: 'post 1',
//     getLikeNumber(like:number){
//         return like
//     }
// }

// post1.getLikeNumber(1);
// //This expression is not callable.
// // Type 'getLikeNumber' has no call signatures
// // 호출 시그니처가 불어와 지지 않아 오류 발생 

// 객체 인덱스 시그니처 

interface Post {
    [key:string] : unknown;
    // 속성의 키는 항상 string이고 값은 어떤 타입이 올지 모르니깐 unknown
    id:number;
    title : string;
}

const post1:Post = {
    id : 1,
    title: 'post 1', // 이 이후에 속성이 더 추가될 수도 있음 
}
post1['description'] = 'description 1';// 없는 속성이기 때문에 오류가 발생했음 
post1['pages'] = '300';


//배열 인덱스 시그니처 

interface Name {
    [item: number] : string;
}
// userNames[0]==='john';
/* 0의 부분이 인덱스 이기 때문에 아이템의 타입이 NUMBER이다. 
 배열 인덱스 시그니처는 인덱스를 기준으로 속성을 추가한다. 
*/
const userNames = ['john','kim','joe'];

