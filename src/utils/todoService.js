import tokenService from './tokenService';

const BASE_URL = '/api/todos/';

export default {
  index,
  create
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function create(todo) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

