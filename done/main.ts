class Player {
  health: number;
  speed: number;

  greet() {
    console.log("Hello There, i am a player");
  }
}

const mario = new Player();
mario.health = 100;
mario.speed = 10;
mario.greet();
