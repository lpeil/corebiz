import produce from 'immer';

const initialState = {
  products: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@cart/NEW_PRODUCT':
      return produce(state, (draft) => {
        draft.products.push(action.product);
      });
    case '@cart/REMOVE_PRODUCT':
      return produce(state, (draft) => {
        draft.products.filter((product) => product.id === action.product.id);
      });
    default:
      return state;
  }
}
