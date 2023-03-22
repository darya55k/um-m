import NlpService from '../services/nlp.service'

export const nlp = {
  namespaced: true,
  actions: {
    parse({commit}, text) {
      return NlpService.parse(text).then(
        data => {
          commit('parseSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('parseFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    parseSuccess() {
    },
    parseFailure() {
    }
  }
}
