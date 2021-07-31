
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name, email})
  })
  .then(resp => resp.json())
  .then(json => document.body.textContent += json.id + '\n')
  .catch(error => document.body.textContent += error.message + '\n');
}