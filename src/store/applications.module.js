import ApplicationsService from '../services/applications.service'

export const applications = {
  namespaced: true,
  actions: {
    lastApplication() {
      return ApplicationsService.lastApplication();
    },

    create({commit}, data) {
      return ApplicationsService.create(data).then(
        data => {
          commit('createSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('createFailure')
          return Promise.reject(error)
        }
      )
    },

    get({commit}, id) {
      return ApplicationsService.get(id).then(
        data => {
          commit('getSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('getFailure')
          return Promise.reject(error)
        }
      )
    },

    put({commit}, id, data) {
      return ApplicationsService.put(id, data).then(
        data => {
          commit('putSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('putFailure')
          return Promise.reject(error)
        }
      )
    },

    patch({commit}, params) {
      let id = params.id;
      let data = params.data;
      //console.log(params, id, data)
      return ApplicationsService.patch(id, data).then(
        data => {
          commit('patchSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('patchFailure')
          return Promise.reject(error)
        }
      )
    },

    pdf({commit}, id) {
      return ApplicationsService.pdf(id).then(
        data => {
          commit('pdfSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('pdfFailure')
          return Promise.reject(error)
        }
      )
    },

    list({commit}, data) {
      return ApplicationsService.list(data).then(
        data => {
          commit('listSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('listFailure')
          return Promise.reject(error)
        }
      )
    },

    diff({commit}, params) {
      return ApplicationsService.diff(params).then(
        data => {
          commit('diffSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('diffFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    createSuccess() {},
    createFailure() {},
    getSuccess() {},
    getFailure() {},
    putSuccess() {},
    putFailure() {},
    patchSuccess() {},
    patchFailure() {},
    pdfSuccess() {},
    pdfFailure() {},
    listSuccess() {},
    listFailure() {},
    diffSuccess() {},
    diffFailure() {}
  }
}
