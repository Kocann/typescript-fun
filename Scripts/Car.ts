class Car{
    engine:string;

    constructor(engine: string) {
        this.engine = engine;
    }

    start(){
        console.log(`Engine starts: ${this.engine}`);
    }

    stop(){
        console.log(`Engine stops: ${this.engine}`);
    }
}

window.onload = function(){
    let car = new Car("V8");
    car.start();
    car.stop();
}