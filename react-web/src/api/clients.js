export function all() {
  return fetch('/clients')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(client) {
  return fetch('/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client)
  })
  .then(res => {
    console.log(`response from backend: ${JSON.stringify(res)}`);
    res.json()
  })
  .catch(error => {
    console.log(`response from backend error: ${error}`);
  })
}
