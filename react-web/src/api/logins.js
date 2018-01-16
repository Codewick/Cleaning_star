export function loginAPI(email,password) {
  console.log("data to be fetched on API", { email,password })
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'

    },
    body: JSON.stringify({ email, password })


  })

  .then(res => {
    console.log(res)
    return res.json()
  })




  .catch(error => { console.log(error) })

}
