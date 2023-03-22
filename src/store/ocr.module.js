import OcrService from '../services/ocr.service'

export const ocr = {
  namespaced: true,
  actions: {
    upload({commit}, file) {
      return OcrService.upload(file).then(
        data => {
          commit('uploadSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('uploadFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    uploadSuccess() {
    },
    uploadFailure() {
    }
  }
}
