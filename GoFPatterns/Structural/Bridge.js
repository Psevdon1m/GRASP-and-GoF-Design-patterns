/**
 * The Bridge pattern is a structural design pattern that separates an object's abstraction
 * from its implementation so that the two can vary independently.
 * It is particularly useful when you want to avoid a permanent binding between
 * an abstraction and its implementation, allowing you to change them independently.
 */

//Here's a real-world example of the Bridge pattern in JavaScript:

//Let's say you are building a drawing application that can draw shapes (e.g., circles and squares) on different platforms (e.g., web and desktop). You want to separate the shape abstraction from its rendering implementation.

// Abstraction: Shape
class Shape {
  constructor(renderingAPI) {
    this.renderingAPI = renderingAPI;
  }

  draw() {
    throw new Error("Subclasses must implement this functionality");
  }
}

// Implementor: RenderingAPI
class RenderingAPI {
  renderCircle(radius) {
    throw new Error("Subclasses must implement this functionality");
  }

  renderSquare(side) {
    throw new Error("Subclasses must implement this functionality");
  }
}

// Concrete Implementor: WebRenderer
class WebRenderer extends RenderingAPI {
  renderCircle(radius) {
    console.log(`Drawing a circle with radius ${radius} on the web`);
  }
  renderSquare(side) {
    console.log(`Drawing a square with side ${side} on the web`);
  }
}

// Concrete Implementor: DesktopRenderer
class DesktopRenderer extends RenderingAPI {
  renderCircle(radius) {
    console.log(`Drawing a circle with radius ${radius} on the desktop`);
  }

  renderSquare(sideLength) {
    console.log(
      `Drawing a square with side length ${sideLength} on the desktop`
    );
  }
}

// Refined Abstraction: Circle
class Circle extends Shape {
  constructor(radius, renderingAPI) {
    super(renderingAPI);
    this.radius = radius;
  }

  draw() {
    return this.renderingAPI.renderCircle(this.radius);
  }
}
class Square extends Shape {
  constructor(side, renderingAPI) {
    super(renderingAPI);
    this.side = side;
  }

  draw() {
    return this.renderingAPI.renderSquare(this.side);
  }
}

//Usage
const webRenderer = new WebRenderer();
const desktopRenderer = new DesktopRenderer();

const webCircle = new Circle(5, webRenderer);
const deskSquare = new Square(10, desktopRenderer);

webCircle.draw(); //Drawing a circle with radius 5 on the web
deskSquare.draw(); //Drawing a square with side length 10 on the desktop

/**
 * 1) We have an abstraction class Shape that takes a rendering API as a parameter. It has a method draw that delegates the drawing operation to the rendering API.
 * 2) We have an implementor class RenderingAPI with methods for rendering circles and squares. This class is designed to be extended by concrete implementors.
 * 3) We have concrete implementor classes WebRenderer and DesktopRenderer, each implementing the rendering methods for their respective platforms.
 * 4) We have refined abstraction classes Circle and Square, which extend Shape and implement the draw method using their respective rendering API.
 * 5) Finally, we create instances of shapes and specify the rendering API to use, allowing us to draw shapes on different platforms without tightly coupling the shape and rendering code.
 */
