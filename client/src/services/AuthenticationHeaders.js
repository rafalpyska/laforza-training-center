export default function authenticationHeaders() {
  let credentials = JSON.parse(localStorage.getItem('credentials'));

  if (credentials && credentials.jwt) {
    return { Authorization: 'Bearer ' + credentials.jwt };
  } else {
    return {};
  }
}