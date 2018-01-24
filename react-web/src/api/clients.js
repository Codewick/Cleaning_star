import { token } from './auth'
require('dotenv').config()

const CLIENTS_API_URL=`${process.env.REACT_APP_API_URL}/clients`

export function all() {
  //console.log('TOKEN TO BE SENT TO SERVER: ', token())
  return fetch(CLIENTS_API_URL, {
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
  console.log("client data to be saved on API", { client })
  return fetch(CLIENTS_API_URL, {
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
