import api from './api';

const endPoint = '/students';

export default {
  get: (page: number, perPage: number, term: string) => api.get(endPoint, { params:{ page, perPage, term } }),
};
