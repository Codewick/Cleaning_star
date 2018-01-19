import { token } from './auth'

export function all() {
  console.log('TOKEN TO BE SENT TO SERVER: ', token())
  return fetch('/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.log(`response from backend error: ${error}`);
    })
}

export function save(employee) {
  return fetch('/employees', {
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
