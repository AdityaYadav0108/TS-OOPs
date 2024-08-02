var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.setLimbs = function (limbs) {
        this.limbs = limbs;
    };
    Animal.prototype.setCategor = function (category) {
        this.category = category;
    };
    Animal.prototype.moves = function () {
        console.log(this.name + " is moving");
    };
    Animal.prototype.makeNoise = function () {
        console.log("makes animal noises");
    };
    return Animal;
}());
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Canine.prototype.makeNoise = function () {
        _super.prototype.makeNoise.call(this);
        console.log(this.name + " Barks loudly, i am scared");
    };
    return Canine;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Canine));
var pug = new Dog();
pug.setName("Pepsi");
pug.setLimbs(4);
console.log(pug.limbs + " " + pug.name);
pug.moves();
pug.makeNoise();
