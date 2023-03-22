export const loader = {
  namespaced: true,
  state: {
    refCount: 0,
    isLoading: false
  },
  mutations: {
    loading(state, isLoading) {
      // console.log({isLoading});
      if (isLoading) {
        state.refCount++;
        state.isLoading = true;
      } else if (state.refCount > 0) {
        state.refCount--;
        state.isLoading = (state.refCount > 0);
      }

      if (state.isLoading) {
        document.body.classList.add('js--loader');
      } else {
        document.body.classList.remove('js--loader');
      }
    }
  }
}
