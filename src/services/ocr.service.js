import axios from 'axios'
import api from './api'
import authHeader from './auth-header'

class OcrService {
  upload(file) {
    let formData = new FormData();
    formData.append('file', file);
    
    return axios.post(api.API_URL + 'v1/ocr/upload/', formData, {
        headers: Object.assign({'Content-Type': 'multipart/form-data'}, authHeader())
      }
    );
  }
}

export default new OcrService()
