/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = {
  products: JSON.parse(localStorage.getItem('cartProducts')) || [],
  drawer: false,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@cart/NEW_PRODUCT':
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex((product) => product.id === action.productId);

        if (productIndex >= 0) {
          draft.products[productIndex].quantity += 1;
        } else {
          draft.products.push({ id: action.productId, quantity: 1 });
        }

        draft.drawer = true;

        localStorage.setItem('cartProducts', JSON.stringify(draft.products));
      });
    case '@cart/REMOVE_PRODUCT':
      return produce(state, (draft) => {
        draft.products = state.products.filter((product) => product.id !== action.productId);

        if (draft.products?.length === 0) {
          draft.drawer = false;
        }

        localStorage.setItem('cartProducts', JSON.stringify(draft.products));
      });
    case '@cart/DECREASE_PRODUCT':
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex((product) => product.id === action.productId);

        draft.products[productIndex].quantity -= 1;

        if (draft.products[productIndex].quantity === 0) {
          draft.products = state.products.filter((product) => product.id !== action.productId);
        }

        if (draft.products?.length === 0) {
          draft.drawer = false;
        }

        localStorage.setItem('cartProducts', JSON.stringify(draft.products));
      });
    case '@cart/CHANGE_DRAWER':
      return produce(state, (draft) => {
        draft.drawer = action.drawer;
      });
    default:
      return state;
  }
}
