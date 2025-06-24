// 오타 발생 시 타입스크립트에서 알려줬으면 좋겠음
type Colors = 'red' | 'green' | 'blue';
type RGB= [red:number, green:number, blue:number];

//Record<키들, 값들>
// const palette : Record<Colors,string | RGB> = {
//     red: [255,0,0],
//     green: "#00ff00",
//     bleu : [0,0,255] // 오타 발생
// }

// satisify
const palette = {
    red: [255,0,0],
    green: "#00ff00",
    blue : [0,0,255] // 오타 발생
} satisfies Record<Colors, string | RGB >  

const redComponet = palette.red.at(0);//255
//at메서드를 사용할 수 있다는 의미는 red가 배열이라는 뜻!
//배열객체.at(index) : 배열의 인덱스 값을 찾아주는 메서드 

const greenNormalized = palette.green.toUpperCase();
// 오류발생 => RGB 타입에 toUpperCase메서드를 사용할 수 없기 때문에 
// 이런 경우 satisifies 연산자를 사용 => 오타도 잡고, green도 string으로 가져옴 