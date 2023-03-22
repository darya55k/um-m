import axios from 'axios'
import api from './api'
import moment from 'moment'
import authHeader from './auth-header'

class AuthService {
  storeUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  
  setUpdateTokenAfter(token) {
    localStorage.setItem('token', JSON.stringify(token));
    
    // const token = JSON.parse(localStorage.getItem('token'))
    token._updateTokenAfter = moment(new Date()).add(23, 'h').toDate() // add time for validation token expires
    localStorage.setItem('token', JSON.stringify(token))
  }
  
  login(user) {
    return axios
      .post(api.API_URL + 'v1/accounts/login/', {
        login: user.login,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          this.setUpdateTokenAfter({token: response.data.token});
          return this.getProfile();
        }
        return {};
      })
  }
  
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  
  register(user) {
    return axios
      .post(api.API_URL + 'v1/accounts/register/', {
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        // date_of_birth: user.bday,
        phone: user.phone,
        // patronymic: user.patronymic,
        password_confirm: user.password_confirm
      })
      .then(response => {
        if (response.data.token) {
          this.storeUser(response.data)
        }
        return response
      })
  }
  
  confirm(query) {
    return axios.post(api.API_URL + 'v1/accounts/verify-registration/', query)
  }
  
  restore(user) {
    return axios
      .post(api.API_URL + 'restore', {
        email: user.email
      })
  }
  
  reset(query) {
    return axios.post(api.API_URL + 'v1/accounts/reset-password/', query).then(response => {
      return {
        response: response
      };
    })
  }
  
  forgot(user) {
    return axios
      .post(api.API_URL + 'v1/accounts/send-reset-password-link/', {
        login: user.login
      })
      .then(response => {
        return response.data;
      })
  }
  
  refreshToken() {
    return axios
      .patch(api.API_URL + 'auth/refresh_token', {}, {headers: authHeader()})
      .then(response => {
        if (response.data.token) {
          // @todo: что-то с обновлением токена
          this.setUpdateTokenAfter({token: response.data.token});
        }
        return response.data
      })
  }
  
  getProfile() {
    return axios
      .get(api.API_URL + 'v1/accounts/profile/', {headers: authHeader()})
      .then(response => {
        this.storeUser(response.data);
        return response.data;
      });
  }
}

export default new AuthService()
