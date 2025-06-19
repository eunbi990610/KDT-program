class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    drive(){
        return 'drive';
    }
    brake(){
        return 'brake!';
    }
}

interface Part{
    seats: number;
    tire : number;
}


class Ford implements Car { 
    // Car 클래스에 가지고 있는 속성이 모두 Ford에도 있어서 오류가 발생하지 않음
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 2;
    tire = 3;
    drive(){
        return 'drive';
    }
    brake(){
        return 'brake!';
    }
}

const myFordCar = new Ford();
myFordCar.color = 'blue';
myFordCar.drive();
 