import axios from 'axios'
import api from './api'
import authHeader from './auth-header'

class NlpService {
  parse(text) {
    return axios.post(api.API_URL + 'v1/nlp/parse', {text: text}, {headers: authHeader()});
  }
}

export default new NlpService()
