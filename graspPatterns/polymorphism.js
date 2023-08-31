/**
 * The "Polymorphism" pattern, promotes the use of polymorphism
 * to achieve flexible and extensible designs.
 * In this example, we'll create a simple scenario where we have
 * different shapes (e.g., Circle and Square) and we want to calculate their areas.
 */

// Without Polymorphism

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Square {
//   constructor(side) {
//     this.side = 2;
//   }

//   calculateArea() {
//     return this.side * this.side;
//   }
// }

// const circle = new Circle(5);
// const square = new Square(4);

// console.log(`Circle Area: ${circle.calculateArea()}`);
// console.log(`Square Area: ${square.calculateArea()}`);

// Using polymorphism pattern will help us make the code more flexible and extensible.
class Shape {
  calculateArea() {
    throw new Error("Subclasses must implement calculateArea");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

function printArea(shape) {
  console.log(`${shape.constructor.name} Area: ${shape.calculateArea()}`);
}

const circle = new Circle(5);
const square = new Square(4);

printArea(circle);
printArea(square);

/**
 * In the second implementation, we've introduced a common base class Shape,
 * and both Circle and Square inherit from it.
 * The calculateArea method is defined in the base class,and
 * each subclass overrides it to provide its specific area calculation.
 * The printArea function demonstrates how polymorphism allows us
 * to treat different shapes uniformly.
 * The second approach using polymorphism makes the code
 * more extensible and maintainable because
 * adding new shapes only requires defining a new class
 * that inherits from Shape and implements the calculateArea method.
 * The printArea function doesn't need to be modified to accommodate new shapes.
 */
