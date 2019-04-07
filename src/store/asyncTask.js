import axios from 'axios';
import { apiUrl } from '.././../config/';

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

const asyncTask = store => done => options => {
  const { method, url, payload } = options;

  const params = method === 'get' ? { params: payload } : payload;

  return api[method](url, params).then(
    response => done(null, response.data),
    error =>
      done(
        (error.response && error.response.data && error.response.data.message) || error.message,
        null
      )
  );
};

export default asyncTask;
