export function all() {
  return fetch('/inspections')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(inspection) {
  return fetch('/inspections', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inspection)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
