// math 모듈

export function add(a,b){
    return a + b;
}

export function sub(a,b){
    return a-b;
}

export default function multiply(a,b){
    return a * b;
}

//CJS 
// module.exports = {
//     add,
//     sub
// } 

//ESM
// export {add, sub};