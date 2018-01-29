
const NEW_USER_API_URL=`${process.env.REACT_APP_API_URL}/user/new`

export function save(registration) {
  return fetch(NEW_USER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(registration)
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
