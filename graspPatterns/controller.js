/**
 * The Controller pattern in GRASP (General Responsibility Assignment Software Patterns) is about
 * defining a class that handles user input and manages the interaction between the user interface
 * and the rest of the system. Here's an example of implementing the Controller pattern in JavaScript.
 * Let's say we have a simple scenario where we want to build a todo list application.
 * We'll create a TodoController class that handles user interactions and manages the todo items.
 */

// Without using Controller pattern

// Model

class User {
  constructor(name) {
    this.name = name;
  }
}

// View
function renderUser(user) {
  console.log(`User: ${user.name}`);
}

// Handling user input directly in the view
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const userName = userInput.value;
  const user = new User(userName);
  renderUser(user);
});

// Now let's implement the same logic with the Controller pattern:

// Model
class User {
  constructor(name) {
    this.name = name;
  }
}

// View
class UserView {
  render(user) {
    console.log(`User: ${user.name}`);
  }
}

// Controller
class UserController {
  constructor() {
    this.userView = new UserView();
    this.userInput = document.getElementById("user-input");
    this.submitButton = document.getElementById("submit-button");
    this.submitButton.addEventListener(
      "click",
      this.handleUserInput.bind(this) // or use arrow function to preserve the context
    );
  }
  handleUserInput() {
    const userName = this.userInput.value;
    const user = new User(userName);
    this.userView.render(user);
  }
}

const userController = new UserController();

/**
 * In this example, the Controller pattern separates the concerns of user input handling and rendering.
 * The UserController class acts as an intermediary between the user input and the view rendering.
 * This improves the overall organization and maintainability of the code.
 * Using the Controller pattern helps in achieving better separation of concerns,
 * making your codebase more modular and easier to extend or modify in the future.
 */
