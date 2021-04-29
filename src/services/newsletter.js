import api from './api';

export const apiSubscribeNewsletter = (data) => (
  api.post('newsletter', data).then((response) => response.data)
);
