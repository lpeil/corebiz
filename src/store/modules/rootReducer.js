import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from '../../routes';

import cart from './cart/reducer';
import products from './products/reducer';

const rootReducer = combineReducers({ cart, products });

export default () => ({
  rootReducer,
  router: connectRouter(history),
});
