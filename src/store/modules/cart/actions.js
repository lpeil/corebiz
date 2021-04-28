export function getCartProducts(products) {
  return {
    type: '@cart/GET_PRODUCTS',
    products,
  };
}

export function newCartProduct(product) {
  return {
    type: '@cart/NEW_PRODUCT',
    product,
  };
}

export function removeCartProduct(product) {
  return {
    type: '@cart/REMOVE_PRODUCT',
    product,
  };
}
