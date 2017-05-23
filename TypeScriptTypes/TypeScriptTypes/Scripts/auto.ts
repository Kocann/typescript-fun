class Engine {
    constructor(public horsePower: number,
                public engnineType: string) {}
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine){
        this.engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value:Engine) {
        if (value === undefined) throw 'Give engine!';
        this._engine = value;
    }

    start(): void {
        alert("Engine started " + this._engine.engnineType)
    }
}
window.onload = function(){
    var engine = new Engine(300,'V8');
    var car = new Car(engine);
    car.start();
}

