<template>
  <header-menu v-if="!$route.meta.hideHeader"/>
  {{ $route.meta.header }}
  <router-view/>
  <footer-menu v-if="!$route.meta.hideFooter"/>
  <div class="loader">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
// Header
import HeaderMenu from '@/components/HeaderMenu.vue'
// Footer
import FooterMenu from '@/components/FooterMenu.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderMenu,
    FooterMenu
  },
  created() {
    this.axios.interceptors.request.use((config) => {
      this.$store.commit('loader/loading', true);
      return config;
    }, (error) => {
      this.$store.commit('loader/loading', false);
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use((response) => {
      this.$store.commit('loader/loading', false);
      return response;
    }, (error) => {
      this.$store.commit('loader/loading', false);
      return Promise.reject(error);
    });
  }
}
</script>

<style lang="scss"></style>
