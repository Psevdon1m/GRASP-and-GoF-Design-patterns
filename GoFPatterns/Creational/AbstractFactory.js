/**
 * The Abstract Factory is a creational design pattern that provides an interface
 * for creating families of related or dependent objects without specifying their concrete classes.
 * It's often used when you need to ensure that the created objects work together seamlessly.
 */

//Here's a real-world example of the Abstract Factory pattern in JavaScript:

/**
 * Let's say that we are building a user interface library,
 * and you want to support different styles for your UI components, such as buttons and checkboxes.
 * You have two different styles: "Light" and "Dark." The Abstract Factory pattern can help you
 * create families of UI components with consistent styles.
 */

// Abstract Factory for creating UI components

class UIComponentFactory {
  createButton() {}
  createCheckbox() {}
}

// Concrete Factory for creating Light-themed UI components
class LightUI extends UIComponentFactory {
  createButton() {
    return new LightButton();
  }
  createCheckbox() {
    return new LightCheckbox();
  }
}
// Concrete Factory for creating Dark-themed UI components
class DarkUI extends UIComponentFactory {
  createButton() {
    return new DarkButton();
  }
  createCheckbox() {
    return new DarkCheckbox();
  }
}
// Abstract Product: Button
class Button {
  render() {}
}

// Concrete Products: LightButton
class LightButton extends Button {
  render() {
    console.log("Rendering a light button.");
  }
}
// Concrete Products:  DarkButton
class DarkButton extends Button {
  render() {
    console.log("Rendering a dark button.");
  }
}
// Abstract Product: Checkbox
class Checkbox {
  render() {}
}

// Concrete Products: LightCheckbox
class LightCheckbox extends Checkbox {
  render() {
    console.log("Rendering a light checkbox.");
  }
}
// Concrete Products: DarkCheckbox
class DarkCheckbox extends Checkbox {
  render() {
    console.log("Rendering a dark checkbox.");
  }
}

function createUI(theme) {
  let factory;
  if (theme === "Light") {
    factory = new LightUI();
  } else if (theme === "Dark") {
    factory = new DarkUI();
  }
  let button = factory.createButton();
  let checkbox = factory.createCheckbox();
  return { button, checkbox };
}

const lightUI = createUI("Light");
lightUI.button.render();
lightUI.checkbox.render();
const darkUI = createUI("Dark");
darkUI.button.render();
darkUI.checkbox.render();

/**
 * 1) We define an abstract UIComponentFactory class with methods to create UI components (buttons and checkboxes).
 * 2) We have concrete factory classes LightUIComponentFactory and DarkUIComponentFactory that implement the creation methods to produce UI components with a specific style.
 * 3) We define abstract product classes Button and Checkbox with a common render method.
 * 4) Concrete product classes LightButton, DarkButton, LightCheckbox, and DarkCheckbox implement the render method for each style.
 * 5) The createUI function takes a theme as input and creates a factory for the specified theme, which is then used to create UI components.
 */

//This ensures that the UI components are consistent with the chosen theme.
//Using the Abstract Factory pattern, you can easily extend your UI library with new styles (e.g., "Material" or "Flat") by creating new concrete factory classes and related product classes without modifying the existing code, adhering to the open-closed principle of the SOLID principles.
