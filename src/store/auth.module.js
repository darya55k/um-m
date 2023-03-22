import AuthService from '../services/auth.service'

let user = {};
try {
  user = JSON.parse(localStorage.getItem('user'));
} catch (e) {
  user = {};
}

const initialState = user
  ? {
    status: {loggedIn: true},
    user
  }
  : {
    status: {loggedIn: false},
    user: null
  }

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({commit}, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logout({commit}) {
      AuthService.logout()
      commit('logout')
    },
    register({commit}, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('registerFailure')
          return Promise.reject(error)
        }
      )
    },
    confirm({commit}, query) {
      return AuthService.confirm(query).then(
        data => {
          commit('confirmSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('confirmFailure')
          return Promise.reject(error)
        }
      )
    },
    restore({commit}, user) {
      return AuthService.restore(user).then(
        user => {
          commit('restoreSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('restoreFailure')
          return Promise.reject(error)
        }
      )
    },
    reset({commit}, query) {
      return AuthService.reset(query).then(
        data => {
          commit('resetSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('resetFailure')
          return Promise.reject(error)
        }
      )
    },
    forgot({commit}, user) {
      return AuthService.forgot(user).then(
        data => {
          commit('forgotSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('forgotFailure')
          return Promise.reject(error)
        }
      )
    },
    refreshToken({commit}, user) {
      return AuthService.refreshToken(user).then(
        user => {
          commit('refreshTokenSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('refreshTokenFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    },
    confirmSuccess(state) {
      state.status.loggedIn = false
    },
    confirmFailure(state) {
      state.status.loggedIn = false
    },
    restoreSuccess(state) {
      state.status.loggedIn = false
    },
    restoreFailure(state) {
      state.status.loggedIn = false
    },
    resetSuccess(state) {
      state.status.loggedIn = false
    },
    resetFailure(state) {
      state.status.loggedIn = false
    },
    forgotSuccess(state) {
      state.status.loggedIn = false
    },
    forgotFailure(state) {
      state.status.loggedIn = false
    },
    refreshTokenSuccess(state) {
      state.status.loggedIn = true
    },
    refreshTokenFailure(state) {
      state.status.loggedIn = false
      state.user = null
    }
  }
}
