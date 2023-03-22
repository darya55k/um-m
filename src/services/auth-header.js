export default function authHeader() {
  let token = '';
  try {
    token = JSON.parse(localStorage.getItem('token'));
  } catch (e) {
    localStorage.removeItem('token');
    return {};
  }
  
  if (token && token.token) {
    // return { Authorization: 'Bearer ' + user.auth_token } // for Spring Boot back-end
    return {Authorization: 'Token ' + token.token} // for back-end
  } else {
    return {}
  }
}
