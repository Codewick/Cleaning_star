export function all() {
  return fetch('/employees')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}
