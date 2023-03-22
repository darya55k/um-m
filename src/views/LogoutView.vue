<template>
  <div class="logout">Выход</div>
</template>

<script>
export default {
  name: 'LogoutView',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$store.dispatch('auth/logout').then(
          () => {
            this.$router.push('/')
          }
      )
    } else {
      this.$router.push('/')
    }
  },
}
</script>
