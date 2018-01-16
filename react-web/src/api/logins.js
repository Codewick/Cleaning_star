// const AUTH_API_URL=`${process.env.REACT_APP_URL}/auth`
//
//
// export function all(email,password) {
//   const SIGNIN_URL = $(AUTH_API_URL)/login
//   return fetch(SIGNIN_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(login)
//
//
//   })
//   .then((res) => { return res.json() })
//   .catch(error => { console.log(error) })
// }



export function all(email,password) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(email, password)


  })
  .then((resp) => {
    console.log(resp)
    return resp.json();
  }) // Transform the data into json
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
}
