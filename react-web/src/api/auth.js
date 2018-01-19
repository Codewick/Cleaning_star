import decodeJWT from 'jwt-decode'



function setToken(token) {
  if (token) {
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }
}

export function decodedToken() {
  if (isSignedIn()) {
    return decodeJWT(token())
  }
}

export function token() {
  return localStorage.getItem('token')
}

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
  .then(json => {
    if (json){ setToken(json['token'])}
    console.log(decodedToken())
    return json
  })
  .catch(error => { console.log(error) })
}

export function signOut() {
  setToken()
}

export function isSignedIn() {
  return !!token()
}
