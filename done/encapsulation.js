var Player1 = /** @class */ (function () {
    function Player1() {
    }
    Player1.prototype.setName = function (name) {
        this.name = name;
    };
    Player1.prototype.getName = function () {
        console.log("my name is ".concat(this.name));
    };
    Player1.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("health cannot be negative");
            return;
        }
        this.health = health;
    };
    Player1.prototype.getHealth = function () {
        console.log("i have ".concat(this.health, " health left"));
    };
    Player1.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player1.prototype.getSpeed = function () {
        console.log("my speed is ".concat(this.speed));
    };
    return Player1;
}());
var mario = new Player1();
mario.setName("mario");
mario.getName();
mario.setHealth(-3);
mario.setHealth(3);
mario.getHealth();
mario.setSpeed(1);
mario.getSpeed();
