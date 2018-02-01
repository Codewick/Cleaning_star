import { token } from './auth'
require('dotenv').config()
const EMPLOYEES_API_URL = `${process.env.REACT_APP_API}/employees`

export function all() {
  //console.log('TOKEN TO BE SENT TO SERVER: ', token())
  return fetch(EMPLOYEES_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    }
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
    // .then(res => res.json())
    // .then(json => {
    //   if (Array.isArray(json)) return json
    //   throw "Invalid token"
    // })
}

export function save(employee) {
  return fetch(EMPLOYEES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    },
    body: JSON.stringify(employee)
  })
  .then(res => {
    res.json()
  })
  .catch(error => {
    console.log(`response from backend error: ${error}`);
  })
}
