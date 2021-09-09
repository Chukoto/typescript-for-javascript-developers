export {};

class Sorcerer {}
class Cleric {}

class Taro extends Sorcerer {}

interface Thief {
  savageStab(): void;
}

interface Warrior {
  powerSmash(): void;
}

class Jiro implements Thief, Warrior {
  savageStab(): void {
    console.log(`used skill named savageStab!`);
  }

  powerSmash(): void {
    console.log('used skill named powerSmash!');
  }
}

const jiro = new Jiro();
jiro.savageStab();
jiro.powerSmash();
