/**
 * The Factory Method is a creational design pattern that provides
 * an interface for creating objects but allows subclasses
 * to alter the type of objects that will be created.
 * It's often used when you have a class that can't anticipate
 * the type of objects it needs to create, or
 * when a class wants to delegate the responsibility of object creation to its subclasses.
 */

//Here's a real-world example of the Factory Method pattern in JavaScript:

/**
 * Let's say you are developing a game where you have different types of characters,
 * such as warriors and mages. Each character type has its own set of abilities.
 * You want to create characters using a factory method pattern.
 */

// Abstract Character class
class Character {
  constructor(name) {
    this.name = name;
  }
  attack() {
    throw new Error(`Subclass must implement the attack method`);
  }
}

//Warrior Class
class Warrior extends Character {
  attack() {
    return `${this.name} slashes with a sword!`;
  }
}
//Mage Class
class Mage extends Character {
  attack() {
    return `${this.name} casts a fireball spell!`;
  }
}
// CharacterFactory interface
class CharacterFactory {
  createCharacter() {
    throw new Error("Subclass must implement the createCharacter method");
  }
}

//ConcreteFactoryWarrior
class WarriorFactory extends CharacterFactory {
  createCharacter(name) {
    return new Warrior(name);
  }
}
//ConcreteFactoryMage
class MageFactory extends CharacterFactory {
  createCharacter(name) {
    return new Mage(name);
  }
}

// Usage
const warriorFactory = new WarriorFactory();
const mageFactory = new MageFactory();

const warrior = warriorFactory.createCharacter("Aragorn");
const mage = mageFactory.createCharacter("Gendalf");

console.log(warrior.attack());
console.log(mage.attack());

//In this example:

/**
 * 1) We have an abstract Character class with a method attack().
 * 2) We have concrete classes Warrior and Mage that extend Character and implement their own attack methods.
 * 3) We have an abstract CharacterFactory class with a method createCharacter.
 * 4) We have concrete WarriorFactory and MageFactory classes that extend CharacterFactory and implement createCharacter to create instances of Warrior and Mage, respectively.
 * 5) Finally, we create characters using the respective factories, and they return the appropriate type of character object.
 */

//This way, you can easily add new character types by creating new concrete classes and factories without modifying the existing code, adhering to the open-closed principle of the SOLID principles.
