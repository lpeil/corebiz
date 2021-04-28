import api from './api';

export const apiGetProducts = () => (
  api.get('products').then((response) => response.data)
);
