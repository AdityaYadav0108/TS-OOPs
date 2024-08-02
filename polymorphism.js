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
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        console.log("the hero is attacking");
    };
    Hero.prototype.move = function () {
        console.log("the hero is moving");
    };
    Hero.prototype.eat = function () {
        console.log("the hero is eating");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrows = 10;
        return _this;
    }
    Archer.prototype.setArrows = function (arrows) {
        this.arrows = arrows;
    };
    Archer.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("shot an arrow");
        this.arrows -= 1;
    };
    return Archer;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mana = 10;
        return _this;
    }
    Mage.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Mage.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("casted a spell");
        this.mana -= 1;
    };
    return Mage;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shield = 10;
        return _this;
    }
    Knight.prototype.setShield = function (shield) {
        this.shield = shield;
    };
    Knight.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("shield was used to protect the knight");
        this.shield -= 1;
    };
    return Knight;
}(Hero));
var myArcher = new Archer();
var myMage = new Mage();
var myKnight = new Knight();
myArcher.attack();
myMage.attack();
myKnight.attack();
myArcher.attack();
