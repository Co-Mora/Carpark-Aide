const axios = require('axios');

function auth() {
  let token = localStorage.getItem('token');
  axios({
    method: 'get',
    url: 'https://sys2.parkaidemobile.com/api/auth/me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token': JSON.parse(token)
    },
  }).then(response => {
    console.log('Response;', response.status)

  })
    .catch(error => {
      if(error.message == 'Request failed with status code 500') {
        window.location.href = '/login'
      }

    });
}

module.exports = auth;
