type DeviceFormatter<T> = {
    [K in keyof T]? : T[K];
    //keyof T : "manutacturer" | "price"
    //T[K] => Device[manutacturer] = string
    //T[K] => Device[price] = number
    //-> DeviceFormatter = {manufacturer:string;price:number;}

}

type Device = {
    manutacturer : string;
    price : number;
}

const iphone: DeviceFormatter<Device> = {
    manutacturer : 'apple',
    price : 100
}

// 만약 객체에서 가격이나 제조사만 가지거나 둘 다 가지지 않는게 있을 경우
const priceOnly:DeviceFormatter<Device> = {price:23};
const manufacturerOnly:DeviceFormatter<Device> = {manutacturer:'apple'};
const empty:DeviceFormatter<Device> = {};

// 이걸 통과시키게 하기 
//DeviceFormatter 의 속성을 옵셔널 하게 해주면 됨
