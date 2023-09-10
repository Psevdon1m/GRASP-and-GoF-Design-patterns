/**
 * The Adapter pattern is a structural design pattern that allows
 * objects with incompatible interfaces to work together.
 * It acts as a bridge between two incompatible interfaces.
 */

// Let's create a real-world example of the Adapter pattern in JavaScript.

/**
 * Suppose you have an existing application that calculates the area of different shapes,
 * but it expects all shapes to have a common interface with a calculateArea method.
 * Now, you want to integrate a third-party library that provides geometric shapes but has a different interface.
 * You can use the Adapter pattern to make the third-party library compatible with your existing code.
 */

// Existing code that expects shapes to have a 'calculateArea' method
class ShapeCalculator {
  calculateArea(shape) {
    return shape.calculateArea();
  }
}
// Third-party library with different shape classes
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  calculateTriangleArea() {
    return 0.5 * this.base * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  calculateCircleArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Adapter for the Triangle class to make it compatible with ShapeCalculator
class TriangleAdapter {
  constructor(triangle) {
    this.triangle = triangle;
  }

  calculateArea() {
    return this.triangle.calculateTriangleArea();
  }
}

// Adapter for the Circle class to make it compatible with ShapeCalculator
class CircleAdapter {
  constructor(circle) {
    this.circle = circle;
  }

  calculateArea() {
    return this.circle.calculateCircleArea();
  }
}

//Usage
let shapeCalculator = new ShapeCalculator();
let triangle = new TriangleAdapter(new Triangle(3, 6));
let circle = new CircleAdapter(new Circle(3));

console.log(shapeCalculator.calculateArea(triangle)); // Output: Area of the triangle
console.log(shapeCalculator.calculateArea(circle)); // Output: Area of the circle

/**
 * 1) We have an existing ShapeCalculator class that expects shapes to have a calculateArea method.
 * 2) We have a third-party library with Triangle and Circle classes that have their own methods for calculating area (computeTriangleArea and computeCircleArea).
 * 3) To make the third-party shapes compatible with ShapeCalculator, we create adapter classes (TriangleAdapter and CircleAdapter) that implement the expected calculateArea method and delegate the calculation to the respective methods in the third-party classes.
 * 4) We then use these adapters to calculate the areas of the shapes with the ShapeCalculator.
 */

//The Adapter pattern allows you to integrate new functionality into existing systems without having to modify the existing code, ensuring compatibility between different interfaces.
