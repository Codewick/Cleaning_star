export function loginAPI(email,password) {
  console.log("data to be fetched on API", { email,password })
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({ email, password })


  })

  .then(res => console.log(res))




  .catch(error => { console.log(error) })

}
