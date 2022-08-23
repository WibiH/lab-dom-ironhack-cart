// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  // Step 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // Step 2
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  // Step 3
  const subtotalPrice = priceValue * quantityValue;
  // Step 4
  let subtotalItself = product.querySelector('.subtotal span');
  subtotalItself.innerHTML = '';
  // Step 5
  subtotalItself.append(subtotalPrice);
  return subtotalItself;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const everyProduct = product.getElementsByClassName('product');
  // shall I set the subtotal back to 0, before goin on?

  // loop over array of .product properties, passing in updateSubtotal function
  for (const item of everyProduct) {
    updateSubtotal(item);
    return item;
  }
  // OR everyProduct.forEach(updateSubtotal(product)); ??


  // ITERATION 3
  //... your code goes here
  // getElementsByClassName returns array -> reduce method ?!
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
