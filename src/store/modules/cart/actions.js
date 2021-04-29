export function changeDrawerCart(drawer) {
  return {
    type: '@cart/CHANGE_DRAWER',
    drawer,
  };
}

export function addCartProduct(productId) {
  return {
    type: '@cart/NEW_PRODUCT',
    productId,
  };
}

export function removeCartProduct(productId) {
  return {
    type: '@cart/REMOVE_PRODUCT',
    productId,
  };
}

export function decreaseCartProduct(productId) {
  return {
    type: '@cart/DECREASE_PRODUCT',
    productId,
  };
}
