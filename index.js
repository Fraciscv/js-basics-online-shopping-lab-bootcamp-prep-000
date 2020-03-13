//Model a shopping cart full of items as an array of objects in JavaScript.
//Iterate over arrays with for loops.
//Use ES6 ${template literals} instead of "regular, " + "old " + string + " concatenation."
//Brush up on conditionals and control flow to make some Oxford comma magic happen.

var cart = [];  //global var is empty array

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  const cartItem = `${item}`;

  cart.push({itemName: cartItem, itemPrice: price});
  return `${item} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } if (cart.push())
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } if(cart.push())
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
