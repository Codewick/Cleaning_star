import { token } from './auth'

export function all() {
  //console.log('TOKEN TO BE SENT TO SERVER: ', token())
  return fetch('/clients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    }
  })
    .then(res => res.json())
    .then(json => {
      if (Array.isArray(json)) return json
      throw "Invalid token"
    })
}

export function save(client) {
  return fetch('/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    },
    body: JSON.stringify(client)
  })
  .then(res => res.json())
  .catch(error => {
    console.log(`response from backend error: ${error}`);
  })
}
