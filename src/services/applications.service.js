import axios from 'axios'
import api from './api'
import authHeader from './auth-header'

class ApplicationsService {
  storeApplication(data) {
    localStorage.setItem('application', JSON.stringify(data)); // последняя заявка
  }

  lastApplication() {
    try {
      return JSON.parse(localStorage.getItem('application'));
    } catch (e) {
      localStorage.removeItem('application');
      return {
        id: 0, subjects: []
      };
    }
  }

  create(data) {
    return axios
      .post(api.API_URL + 'v1/applications/create', data, {headers: authHeader()})
      .then(response => {
        if (response.data.id) {
          this.storeApplication(response.data)
        }
        return response
      })

  }

  put(id, data) {
    return axios.put(api.API_URL + 'v1/applications/update/' + id, data, {headers: authHeader()})
  }

  patch(id, data) {
    //console.log(data, 1);
    return axios.patch(api.API_URL + 'v1/applications/update/' + id, data, {headers: authHeader()})
  }

  pdf(id) {
    return axios.get(api.API_URL + 'v1/applications/pdf/' + id, {headers: authHeader(), responseType: 'blob'});
  }

  get(id) {
    return axios.get(api.API_URL + 'v1/applications/get/' + id, {headers: authHeader()});
  }

  list(data) {
    return axios.get(api.API_URL + 'v1/applications/list?' + (new URLSearchParams(data).toString())).then(response => {
      return response.data;
    });
  }

  diff(params) {
    return axios.post(api.API_URL + 'v1/applications/diff', params, {headers: authHeader()})
  }
}

export default new ApplicationsService()
