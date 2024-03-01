//? Task 1 start:

// const car = {
//   marka: "Mercedes",
//   model: "S class",
//   il: "2023",
//   reng: "Gara",

//   start() {
//     console.log("Car is running");
//   },
//   stop() {
//     console.log("Car stopped");
//     this.spped = 0;
//   },
//   accelerate() {
//     this.spped = 50;
//     return this.spped;
//   },
//   decelerate() {
//     this.spped = 20;
//     return this.spped;
//   },
// };
// car.start();
// car.stop();
// console.log(car.accelerate());
// console.log(car.decelerate());

//? Task 1 end.

//? Task 2 start:

// const user = {
//   userName: "John",
//   email: "johnwatson@gmail.com",
//   password: 5646,
// };
// Object.seal(user);
// console.log(user);
// console.log(Object.isSealed(user));
// user.age = 45;
// console.log(user);

//? Task 2 end.

// ? Task 3 start:

// const prescription = {
//   name: "John",
//   ingrident: "Vitamins",
//   instruction: "Take with food or milk",
// };
// console.log(prescription)
// Object.preventExtensions(prescription);
// prescription.age=12
// console.log(Object.isExtensible(prescription));
// console.log(prescription)

// ? Task 3 end.

// ? Task  4 start:

// const customerOrder = {
//   orderId: "12345",
//   customerName: "John Doe",
//   items: [
//     { itemId: 1, name: "T-shirt", quantity: 2, price: 20 },
//     { itemId: 2, name: "Jeans", quantity: 1, price: 50 },
//   ],
//   totalPrice: 90,
//   paymentMethod: "Credit Card",
// };
// const shippingAddress = {
//   street: "123 Main St",
//   city: "Anytown",
//   state: "CA",
//   zip: "12345",
// };

// customerOrder.items.push(shippingAddress);
// console.log(customerOrder.items);

// Object.freeze(customerOrder)
// Object.seal(customerOrder.items[0]);
// Object.seal(customerOrder.items[1]);
// Object.freeze(customerOrder.orderId);
// Object.freeze(shippingAddress);

// customerOrder.orderId = 123456;
// console.log(customerOrder.orderId);

// customerOrder.items[0].marka = "ck"; // add ede bilmirem
// customerOrder.items[0].quantity = 3; // lakin deyishe bilirem
// console.log(Object.seal(customerOrder.items[0]));

// console.log(Object.isFrozen(shippingAddress));
// console.log(Object.isSealed(customerOrder.items[0]));

// ? Task  4 end.
