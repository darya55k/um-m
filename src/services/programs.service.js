import axios from 'axios'
import api from './api'
import authHeader from './auth-header'

class ProgramsService {
  list() {
    return axios.get(api.API_URL + 'v1/programs/').then(response => {
      return response.data;
    });
  }
  
  create(data) {
    return axios.post(api.API_URL + 'v1/programs/create', data, {headers: authHeader()})
  }
  
  get(id) {
    return axios.get(api.API_URL + 'v1/programs/' + id + '/', {headers: authHeader()});
  }
  
  put(id, data) {
    return axios.put(api.API_URL + 'v1/programs/' + id + '/', data, {headers: authHeader()})
  }
  
  patch(id, data) {
    return axios.patch(api.API_URL + 'v1/programs/' + id + '/', data, {headers: authHeader()})
  }
  
  delete(id) {
    return axios.delete(api.API_URL + 'v1/programs/' + id + '/', {headers: authHeader()})
  }
}

export default new ProgramsService()
