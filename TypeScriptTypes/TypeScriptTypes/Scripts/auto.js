var Engine = (function () {
    function Engine(horsePower, engnineType) {
        this.horsePower = horsePower;
        this.engnineType = engnineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Give engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("Engine started " + this._engine.engnineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    car.start();
};
