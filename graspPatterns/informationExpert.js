/*The Information Expert pattern is a design principle used in Object-Oriented Programming
 * to determine which class should be responsible for a particular task or piece of information.
 * Let's consider a simple example where we need to implement a system
 * for managing a user's shopping cart. We'll create a ShoppingCart class
 * that contains a list of CartItem objects.
 */

/* ============================ Without Information Expert ============================ */

class ShopingCart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  calculateTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }
}

class CartItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const cart = new ShopingCart();
const item1 = new CartItem("iPhone", 999);
const item2 = new CartItem("Mac Book Pro 14", 1899);

cart.addItem(item1);
cart.addItem(item2);
console.log(`Total price is: $${cart.calculateTotal()}`);

/**
 * In this example, the ShoppingCart class is responsible for both maintaining the list of items
 * and calculating the total price. This violates the Information Expert pattern,
 * as the ShoppingCart class is not the most appropriate class to calculate the total price.
 */

/* ============================ With Information Expert ============================ */

class ShopingCart2 {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.getPrice();
    }
    return total;
  }
}

class CartItem2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}

const cart2 = new ShopingCart2();
const item3 = new CartItem2("iPhone", 999);
const item4 = new CartItem2("Mac Book Pro 14", 1899);

cart2.addItem(item3);
cart2.addItem(item4);
console.log(`Total price is: $${cart.calculateTotal()}`);
/**
 * In this version, we've applied the Information Expert pattern by moving the responsibility
 * for calculating the price from the ShoppingCart class to the CartItem class.
 * Now, the CartItem class is the expert regarding its own price information,
 * and the ShoppingCart class delegates the price calculation to the CartItem objects.
 * This makes the design more flexible and adheres to the principle
 * of assigning responsibilities to the most suitable classes.
 */
