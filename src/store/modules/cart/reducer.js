import produce from 'immer';

const initialState = {
  products: JSON.parse(localStorage.getItem('cartProducts')) || [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@cart/NEW_PRODUCT':
      return produce(state, (draft) => {
        draft.products.push(action.product);

        localStorage.setItem('cartProducts', JSON.stringify(draft.products));
      });
    case '@cart/REMOVE_PRODUCT':
      return produce(state, (draft) => {
        draft.products.filter((product) => product === action.product.productId);

        localStorage.setItem('cartProducts', JSON.stringify(draft.products));
      });
    default:
      return state;
  }
}
