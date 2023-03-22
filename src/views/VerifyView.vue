<template>
  <div class="auth verify-user">
    <div class="auth__body">
      <h1 class="auth__title">Подтверждение аккаунта</h1>
      <div class="auth__form">
        <div class="form">

          <div class="form__row">
            <div class="form-group" v-if="message">
              <div class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </div>

          <div class="form__row">
            <router-link class="button button--s button--w100 button--inverse" to="/">На главную</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VerifyUser',
  data() {
    return {
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/'); // на главную
    } else {
      this.$store.dispatch('auth/confirm', this.$route.query).then(
          (response) => {
            this.message =
                (response.data && response.data.detail) ||
                response.message ||
                response.toString()

            setTimeout(() => {
              this.$router.push('/');
            }, 1000);
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
          }
      )
    }
  }
}
</script>

<style lang="scss" scope>
.error-feedback {
  color: red
}

.alert-danger {
  color: red
}
</style>
