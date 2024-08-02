class Animal{
  category: string;
  limbs: number;
  name: string;

  setName( name: string ){
    this.name = name;
  }
  setLimbs(limbs: number){
    this.limbs = limbs;
  }
  setCategor(category: string){
    this.category = category;
  }

  moves(){
    console.log(this.name + " is moving");
  }
  makeNoise(){
    console.log("makes animal noises");
  }
}

class Canine extends Animal{
  
  fingerCount: number;

  override makeNoise(){
    super.makeNoise();
    console.log(this.name + " Barks loudly, i am scared");
  }
}

class Dog extends Canine{}


const pug = new Dog();
pug.setName("Pepsi");
pug.setLimbs(4)

console.log(pug.limbs + " " +pug.name)
pug.moves();
pug.makeNoise();
