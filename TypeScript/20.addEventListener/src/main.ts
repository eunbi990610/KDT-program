document.addEventListener('click',(event) => {
    //(parameter) event: MouseEvent
})

interface MyMouseEvent{
    x: number;
    y: number;
}

interface MyKeyBoardEvent {
    key:string
}

interface MyEventObjects {
    click : MyMouseEvent;
    keypress : MyKeyBoardEvent;
}

function handleEvent<K extends keyof MyEventObjects>(
    eventName:K,//k: 클릭인지 키프레스 인지 
     callback: (e:MyEventObjects[keyof MyEventObjects]) => void
    ){
        if(eventName === 'click'){
            callback({x:0, y:0}); //MyKeyBoardEvent & MyMouseEvent 형식에 할당할 수 없습니다. 
            // ==> K -> keyof MyEventObjects 변경하여 오류 해결
        }else if(eventName === 'keypress'){
            callback({key:'enter'});
        }
}
handleEvent('click', (e)=>{});
handleEvent('keypress', (e)=>{});


