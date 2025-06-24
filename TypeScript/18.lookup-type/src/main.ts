// import {Car} from './interface';
// 브랜드 수정하는 함수
function updateCarBrand(id:Car['id'], newBrand : Car['brand']){}

type CarId = number;
interface CarBrand{
    popularity : number;
        logo : string;
        history : number;
}
function updateCarBrand2(id:CarId, newBrand :CarBrand){}

