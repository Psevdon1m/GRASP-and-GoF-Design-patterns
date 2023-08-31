/**
 * The Pure Fabrication pattern suggests creating a class
 * that doesn't represent a domain concept but instead acts as a helper or
 * manager for the system. It can encapsulate complex operations or
 * provide a centralized place for certain tasks.
 * Here is an example in JavaScript that demonstrates the difference between
 * not using the Pure Fabrication pattern and using it.
 */

/**
 * Let's consider a scenario where we have a system that needs
 * to manage various calculations related to shapes.
 */

//Example without Pure Fabrication:
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
// const circleArea = circle.calculateArea();

// const rectangle = new Rectangle(4, 6);
// const rectangleArea = rectangle.calculateArea();

// console.log("Circle Area:", circleArea);
// console.log("Rectangle Area:", rectangleArea);

// Example using Pure Fabrication
/**
 * In this example, we'll introduce a pure fabrication class
 * called ShapeCalculator that centralizes the area calculation for different shapes.
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class ShapeCalculator {
  static calculateCircleArea(circle) {
    return Math.PI * circle.radius * circle.radius;
  }
  static calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
}
// Client code
const circle = new Circle(5);
const circleArea = ShapeCalculator.calculateCircleArea(circle);

const rectangle = new Rectangle(4, 6);
const rectangleArea = ShapeCalculator.calculateRectangleArea(rectangle);

console.log("Circle Area:", circleArea);
console.log("Rectangle Area:", rectangleArea);

/**
 * In the second example, the ShapeCalculator class is a pure fabrication.
 * It doesn't directly represent a shape, but it encapsulates the logic for
 * calculating areas. This pattern centralizes the calculation logic, and
 * decouples it from the individual shape classes,
 * making the code more maintainable and flexible.
 * By using the Pure Fabrication pattern, you isolate certain responsibilities
 * from domain classes, making the codebase more organized and
 * easier to extend or modify in the future.
 */
