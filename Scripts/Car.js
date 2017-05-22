var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Engine starts: " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("Engine stops: " + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.stop();
};
