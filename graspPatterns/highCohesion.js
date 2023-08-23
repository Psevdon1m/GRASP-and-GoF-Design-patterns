/**
 * The High Cohesion pattern aims to ensure that a module or class has a single,
 * well-defined responsibility. This helps improve maintainability
 * and reduces the potential for bugs and errors.
 * Let's first look at an example without using the High Cohesion pattern,
 * and then check an example that follows the pattern.
 */

//Example without High Cohesion:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserManagement {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  deleteUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUserByName(name) {
    return this.users.find((user) => user.name === name);
  }

  updateUser(user, newName) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users[index].name = newName;
    }
  }

  printUserNames() {
    this.users.forEach((user) => console.log(user.name));
  }
}

/**
 * In this example, the UserManagement class has multiple responsibilities:
 * adding, deleting, updating users, searching for users by name, and printing user names.
 * This violates the principle of high cohesion,
 * as it's responsible for multiple unrelated tasks.
 */

//Example using High Cohesion:
/**
 * To apply the High Cohesion pattern, we would split the responsibilities
 * into more focused classes or modules. Here's how the code might look:
 */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }
  deleteUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user, newName) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users[index].name = newName;
    }
  }
}

class UserFinder {
  constructor(userManager) {
    this.userManager = userManager;
  }
  getUserByName(name) {
    this.userManager.users.find((user) => user.name === name);
  }
}

class UserPrinter {
  constructor(userManager) {
    this.userManager = userManager;
  }
  printUserNames() {
    this.userManager.users.forEach((user) => console.log(user.name));
  }
}

/**
 * In this example, we've split the responsibilities into four separate classes:
 * User, UserManager, UserFinder, and UserPrinter. Each class has a single responsibility,
 * leading to better cohesion and improved maintainability.
 * By adhering to the High Cohesion pattern, the code becomes more organized,
 * easier to understand, and less prone to bugs
 * that might arise from mixing different responsibilities within the same class.
 */
