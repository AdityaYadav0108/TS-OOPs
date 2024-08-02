class Player1 {
  private name: string;
  private health: number;
  private speed: number;

  setName(name: string) {
    this.name = name;
  }
  getName() {
    console.log(`my name is ${this.name}`);
  }
  setHealth(health: number) {
    if (health < 0) {
      console.log("health cannot be negative");
      return;
    }
    this.health = health;
  }
  getHealth() {
    console.log(`i have ${this.health} health left`);
  }
  setSpeed(speed: number) {
    this.speed = speed;
  }
  getSpeed() {
    console.log(`my speed is ${this.speed}`);
  }
}

const mario = new Player1();
mario.setName("mario");
mario.getName();
mario.setHealth(-3);
mario.setHealth(3);
mario.getHealth();
mario.setSpeed(1);
mario.getSpeed();
