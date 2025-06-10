// let x= 0;
// const numberUp = () => x+=1;
// // 함수 외부에 있는 변수x를 변경시켰기 때문에 이 코드는 순수하지 않은 함수 impure함수이다.
// console.log(numberUp()); //1
// /*
// function => 함수 그 자체를 참조
// function() => 함수를 실행한 결과값을 반환
// */
// console.log(x);//1

//impure -> pure 함수로 변경 

// let x= 0;
// const pureNumberUp = (num) => num+=1;
// console.log(pureNumberUp(x));//1

// console.log(x);//0

const alphabetArray = ['a','b'];
const addItemToArray = (originalArray, newItem)=>{
    originalArray.push(newItem);
    return originalArray;
}

// console.log(addItemToArray(alphabetArray,'c'));
// console.log(alphabetArray); // 사이드임팩트를 주었기 때문에 alphabetArray에도 c가 추가된것

const pureAddItemToArray = (originalArray, newItem)=>{
    return [...alphabetArray,newItem];
}
console.log(pureAddItemToArray(alphabetArray,'c'));
console.log(alphabetArray);