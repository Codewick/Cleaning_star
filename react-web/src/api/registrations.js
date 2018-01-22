

export function save(registration) {
  return fetch('/user/new', {
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
