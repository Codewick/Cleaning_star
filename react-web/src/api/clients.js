export function all() {
  return fetch('/clients')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}
