import produce from 'immer';

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@products/SET_PRODUCTS':
      return produce(state, () => action.products);
    default:
      return state;
  }
}
