/**
 * The Indirection pattern is about creating an intermediate layer
 * between components to reduce direct coupling.
 * This can be achieved using interfaces or abstract classes.
 */

// Without indirection pattern
// class PaymentProcessor {
//   processPayment(amount) {
//     // main logic for processing a payment
//     console.log(`Processing payment of $${amount}`);
//   }
// }

// class Order {
//   constructor(amount) {
//     this.amount = amount;
//   }

//   checkout(paymentProcessor) {
//     paymentProcessor.processPayment(this.amount);
//     console.log("Order has been checked out.");
//   }
// }

// const order = new Order(100);
// const paymentProcessor = new PaymentProcessor();
// order.checkout(paymentProcessor);

//Now let's implement the Indirection pattern using an interface:
class PaymentService {
  processPayment(amount) {
    //main logic for processing a payment
  }
}

class PaymentProcessorA extends PaymentService {
  processPayment(amount) {
    console.log(`Processing payment using Processor A: $${amount}`);
  }
}
class PaymentProcessorB extends PaymentService {
  processPayment(amount) {
    console.log(`Processing payment using Processor B: $${amount}`);
  }
}

class OrderWithIndirection {
  constructor(amount, paymentService) {
    this.amount = amount;
    this.paymentService = paymentService;
  }

  checkout() {
    this.paymentService.processPayment(this.amount);
    console.log("Order has been checked out.");
  }
}

const orderWithIndirection = new OrderWithIndirection(
  150,
  new PaymentProcessorA()
);
orderWithIndirection.checkout();

const orderWithIndirection2 = new OrderWithIndirection(
  200,
  new PaymentProcessorB()
);
orderWithIndirection2.checkout();

/**
 * In this example, we've introduced the PaymentService interface and
 * two concrete implementations PaymentProcessorA and PaymentProcessorB.
 * The OrderWithIndirection class now takes a paymentService parameter in its constructor,
 *  allowing different payment processing strategies to be injected
 * without directly coupling the Order class to specific payment processors.
 */

/**
 * By using the Indirection pattern, the components are more decoupled,
 * and it's easier to switch or extend payment processing strategies
 * without affecting the Order class directly.
 */
