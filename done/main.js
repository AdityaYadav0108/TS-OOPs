var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hello There, i am a player");
    };
    return Player;
}());
var mario = new Player();
mario.health = 100;
mario.speed = 10;
mario.greet();
