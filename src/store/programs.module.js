import ProgramsService from "../services/programs.service";

let selected_programs = [];
try {
  selected_programs = JSON.parse(localStorage.getItem('selected_programs'));
} catch (e) {
  selected_programs = [];
}

export const programs = {
  namespaced: true,
  state: {
    selected_programs: selected_programs
  },
  actions: {
    storeSelected(context, programs) {
      const selected_programs = programs.filter(function (e) { return e.selected; });
      context.commit('UPDATE_SELECTED_PROGRAMS', selected_programs);
    },
    
    list({commit}) {
      return ProgramsService.list().then(
        data => {
          commit('listSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('listFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  
  mutations: {
    UPDATE_SELECTED_PROGRAMS(state, selected_programs) {
      state.selected_programs = selected_programs;
      localStorage.setItem('selected_programs', JSON.stringify(selected_programs));
    },
    listSuccess() {},
    listFailure() {},
  }
}
