/**
 * The Singleton pattern is a creational design pattern that ensures a class
 * has only one instance and provides a global point of access to that instance.
 * It's commonly used when you want to restrict the instantiation of a class to a single object,
 * such as a configuration manager, a database connection, or a logger.
 */

//Here's an example of the Singleton pattern in JavaScript:

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // If the instance doesn't exist, create a new one
      this.data = [];
      Singleton.instance = this;
    }
    // If an instance already exists, return the existing instance
    return Singleton.instance;
  }
  addItem(el) {
    this.data.push(el);
  }
  getItems() {
    return this.data;
  }
}

//create instances
const singleton1 = new Singleton();
const singleton2 = new Singleton();

// Both instances are the same
console.log(singleton1 === singleton2); // Output: true

// Add items to the Singleton
singleton1.addItem("Item 1");
singleton2.addItem("Item 2");

// Both instances share the same data
console.log(singleton1.getItems()); // Output: [ 'Item 1', 'Item 2' ]
console.log(singleton2.getItems()); // Output: [ 'Item 1', 'Item 2' ]

/**
 * 1) We create a Singleton class with a private constructor that checks whether an instance already exists. If an instance doesn't exist, it creates a new one and stores it in the Singleton.instance property. If an instance exists, it returns the existing instance.
 * 2) We create two instances of the Singleton class, singleton1 and singleton2. Even though we attempt to create multiple instances, they both reference the same object due to the Singleton pattern.
 * 3) We add items to singleton1, and those items are also accessible via singleton2. This demonstrates that both instances share the same data.
 */

//The Singleton pattern ensures that there is only one instance of the class, and it provides a global point of access to that instance, making it useful for scenarios where you want to manage a single shared resource across your application.
