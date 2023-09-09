/**
 * The Builder pattern is a creational design pattern that separates the construction of a complex object from its representation.
 * It allows you to create an object step by step, with the ability to customize its type and content.
 * This is particularly useful when you have objects with many possible configuration options.
 */

// Here is an example of building a computer using the Builder pattern in JavaScript

//Product Computer Class
class Computer {
  constructor() {
    this.cpu = "";
    this.ram = "";
    this.storage = "";
    this.gpu = "";
  }
  describe() {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Storage ${this.storage}`);
    console.log(`GPU: ${this.gpu}`);
  }
}
// Builder interface
class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }
  buildCPU() {}
  buildGPU() {}
  buildRAM() {}
  buildStorage() {}
}

// Concrete builder for a gaming computer
class GamingComputerBuilder extends ComputerBuilder {
  buildCPU() {
    this.computer.cpu = "Intel Core i9";
  }
  buildGPU() {
    this.computer.gpu = "NVIDIA RTX 3080";
  }
  buildRAM() {
    this.computer.ram = "32 GB DDR5";
  }
  buildStorage() {
    this.computer.storage = "1 TB SSD";
  }
}
// Concrete builder for an office computer
class OfficeComputerBuilder extends ComputerBuilder {
  buildCPU() {
    this.computer.cpu = "Intel Core i5";
  }

  buildRAM() {
    this.computer.ram = "16GB DDR4";
  }

  buildStorage() {
    this.computer.storage = "512GB SSD";
  }

  buildGPU() {
    this.computer.gpu = "Integrated Graphics";
  }
}

//Director class
class ComputerDirector {
  constructor(builder) {
    this.builder = builder;
  }
  constructComputer() {
    this.builder.buildCPU();
    this.builder.buildGPU();
    this.builder.buildStorage();
    this.builder.buildRAM();
  }
  getComputer() {
    return this.builder.computer;
  }
}

//Usage
const gamingBuilder = new GamingComputerBuilder();
const gamingDirector = new ComputerDirector(gamingBuilder);
gamingDirector.constructComputer();
const gamingComputer = gamingDirector.getComputer();

console.log("Gaming Computer:");
gamingComputer.describe();

const officeBuilder = new OfficeComputerBuilder();
const officeDirector = new ComputerDirector(officeBuilder);
officeDirector.constructComputer();
const officeComputer = officeDirector.getComputer();

console.log("\nOffice Computer:");
officeComputer.describe();

/**
 * 1) We have a Computer class that represents the product we want to build.
 * 2) We define a ComputerBuilder interface with methods for building various components of the computer, such as CPU, RAM, storage, and graphics card.
 * 3) We create concrete builder classes (GamingComputerBuilder and OfficeComputerBuilder) that implement the ComputerBuilder interface to specify how each type of computer should be built.
 * 4) The ComputerDirector class orchestrates the construction process by taking a builder as input and invoking the necessary build methods.
 * 5) Finally, we create instances of the builder for gaming and office computers, use the director to construct the computers, and obtain the finished products.
 */

//This separation of concerns allows you to create complex objects with different configurations while keeping the construction logic separate from the actual product class.
