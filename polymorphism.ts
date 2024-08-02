class Hero {
  hunger: number;
  health: number;

  attack() {
    console.log("the hero is attacking");
  }
  move() {
    console.log("the hero is moving");
  }
  eat() {
    console.log("the hero is eating");
  }
}

class Archer extends Hero {
  arrows: number = 10;

  setArrows(arrows) {
    this.arrows = arrows;
  }
  attack(): void {
    super.attack();
    console.log("shot an arrow");
    this.arrows -= 1;
  }
}

class Mage extends Hero {
  mana: number = 10;

  setMana(mana) {
    this.mana = mana;
  }

  attack(): void {
    super.attack();
    console.log("casted a spell");
    this.mana -= 1;
  }
}

class Knight extends Hero {
  shield: number = 10;

  setShield(shield) {
    this.shield = shield;
  }

  attack(): void {
    super.attack();
    console.log("shield was used to protect the knight");
    this.shield -= 1;
  }
}

const myArcher: Hero = new Archer();
const myMage: Hero = new Mage();
const myKnight: Hero = new Knight();

myArcher.attack();
myMage.attack();
myKnight.attack();
myArcher.attack();
