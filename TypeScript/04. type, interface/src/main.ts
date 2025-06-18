// interface Animal{
//     name : string;
// }

// interface Bear extends Animal{
//     honey : boolean;
// }

// const bear1 : Animal = {
//     name : 'honey',
//     honey : true//'honey' does not exist in type 'Animal'.ts(2353)
// }

// const bear1 : Bear = {
//     name : 'honey bear',
//     honey : true
// }

// type Animal2 = {
//     name : string;
// }

// type Bear2 = Animal2 & {//인터섹션 오퍼레이터
//     honey : boolean;
// }

// const bear2 : Bear2 = {
//     name : 'honey bear',
//     honey : true
// }

// //선언 병합 declaration merging
// interface Animal{
//     name : string;
// }

// interface Animal{
//     honey : boolean;
// }
// // 두 인터페이스가 자동으로 병합이 된다. 
// const bear1: Animal = {
//      name : 'honey bear',
//     honey : true
// }

// type Animal2 = {
//     honey : true
// }//Duplicate identifier 'Animal2'.
// type Animal2 = {
//     name : string;
// }

type Animal2 = {
    honey : true
}
type Bear2 = {
    name : string;
}

type NewType = Animal2 | Bear2;
const bear2: NewType = {
     name : 'honey bear',
    honey : true
}
