/**
 * The Low Coupling pattern is about reducing the dependencies between
 * different modules or components in a system.
 * It promotes loose coupling, which makes the system
 * more flexible and easier to maintain.
 */

//Let's consider an example where we have two modules: OrderProcessor and EmailService.

// Without Low Coupling

class OrderProcessor {
  constructor() {
    this.emailService = new EmailService();
  }
  processOrder(order) {
    //Process main order logic here
    this.emailService.sendEmail(
      order.customer,
      "Your order has been processed."
    );
  }
}

class EmailService {
  sendEmail(to, message) {
    // Sending email logic here
    console.log(`Email sent to ${to}: ${message}`);
  }
}

const orderProcessor = new OrderProcessor();
orderProcessor.processOrder({ customer: "test@gmail.com" });

/**
 * In this example, OrderProcessor has a direct dependency on EmailService.
 * This tight coupling can make the code harder to maintain and test
 * since changes in EmailService could potentially affect OrderProcessor.
 */

// Using Low Coupling
// class OrderProcessor {
//   constructor(emailService) {
//     this.emailService = emailService;
//   }

//   processOrder(order) {
//     this.emailService.sendEmail(
//       order.custorme,
//       "Your order has been processed."
//     );
//   }
// }

// class EmailService {
//   sendEmail(to, message) {
//     // Sending email logic here
//     console.log(`Email sent to ${to}: ${message}`);
//   }
// }

// const emailService = new EmailService();
// const orderProcessor = new OrderProcessor(emailService);
// orderProcessor.processOrder({ customer: "example@example.com" });

/**
 * In this example, the OrderProcessor class no longer directly creates an instance of EmailService.
 * Instead, it accepts an instance of EmailService as a constructor parameter.
 *  This way, the two modules are decoupled, and you can easily swap out
 * the email service implementation without affecting the OrderProcessor.
 * By using the Low Coupling pattern, we've achieved a more flexible and maintainable design.
 * If you ever need to change or extend the email functionality,
 * you can do so without touching the OrderProcessor code.
 */
