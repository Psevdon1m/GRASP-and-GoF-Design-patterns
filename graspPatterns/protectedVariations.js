/**
 * The Protected Variations pattern is used to protect sensitive components
 * from changes in other parts of the system by introducing interfaces or wrappers.
 * Here's an example of how you might implement this pattern in JavaScript.
 */

/**
 * Let's assume we have a simple application
 * that calculates the area of different shapes:circles and rectangles.
 * We'll first implement the solution without using the Protected Variations pattern
 * and then show how the pattern can be applied.
 */

// Without Protected Variations:

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// // Client code
// const circle = new Circle(5);
// console.log("Circle Area:", circle.calculateArea());

// const rectangle = new Rectangle(4, 6);
// console.log("Rectangle Area:", rectangle.calculateArea());

/**
 *  Now, we will implement the same functionality using the Protected Variations pattern.
 * We'll introduce interfaces to isolate the sensitive components from direct interaction.
 */

class Shape {
  calculateArea() {}
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
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Client code
function calculateAndPrintArea(shape) {
  console.log("Shape Area:", shape.calculateArea());
}
const circle = new Circle(5);
calculateAndPrintArea(circle);

const rectangle = new Rectangle(4, 6);
calculateAndPrintArea(rectangle);

/**
 * In this example, the interfaces Shape, Circle, and Rectangle
 * protect the underlying implementation details of the shapes.
 * The client code interacts only with the interfaces, and
 * the actual calculations are encapsulated within the shape classes.
 * This separation of concerns makes it easier to change the shape implementations
 * without affecting the client code.
 */
