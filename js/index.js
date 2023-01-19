// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  // Step 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // Step 2
  const priceValue = Number(price.innerHTML); // mine -> price.innerHTML;
  const quantityValue = Number(quantity.value); // mine -> quantity.value;

  // Step 3
  const subtotalPrice = priceValue * quantityValue;
  // Step 4
  let subtotalItself = product.querySelector('.subtotal span');
  subtotalItself.innerHTML = subtotalPrice; // mine -> subtotalItself.innerHTML = '';
  // Step 5
  // mine -> subtotalItself.append(subtotalPrice);
  return subtotalPrice; // mine -> subtotalItself;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here
  let priceEachProduct = 0;
  const productElements = document.querySelectorAll('product');
  // shall I set the subtotal back to 0, before goin on?
  for (let productElement of productElements) {
    let subtotal = updateSubtotal(productElement);
    total += subtotal;
  }
  let totalElement = document
    .getElementById('total-value')
    .querySelector('span');
  totalElement.textContent = total;
}
// loop over array of .product properties, passing in updateSubtotal function
/*   former version
  productElements.forEach(function (oneProduct) {
    priceEachProduct += updateSubtotal(oneProduct);
  });     */

for (const oneProduct of productElements) {
  priceEachProduct += updateSubtotal(oneProduct);
}

// ITERATION 3
//... your code goes here
const valueOfAll = document.querySelector('#total-value span');
valueOfAll.innerText = priceEachProduct.toFixed(2);

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(
    "tfoot .create-product input[type='text']"
  ).value;
  const productPrice = document.querySelector(
    "tfoot .create-product input[type='number']"
  ).value;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
