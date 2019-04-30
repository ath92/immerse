import axios from 'axios';

export const get = (...args) => axios.get(...args);
export const post = (...args) => axios.post(...args);
export const put = (...args) => axios.put(...args);
export const httpDelete = (...args) => axios.delete(...args);