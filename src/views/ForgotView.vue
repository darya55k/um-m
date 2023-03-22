<template>
  <div class="auth">
    <div class="content content--0">
      <div class="mb-20">
        <router-link class="button button--s button--inverse" to="/">Назад</router-link>
      </div>
      <div class="auth__body">
        <div class="auth__logo">
          <img src="../assets/style/auth-logo.png" alt="" width="250">
        </div>
        <h1 class="auth__title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>
        <div class="auth__form">
          <Form @submit="handleForgot" :validation-schema="schema" class="form">

            <div class="form-group" v-if="message">
              <div class="alert alert-danger alert--center mb-10" role="alert">
                {{ errors.detail || message }}
              </div>
            </div>

            <div class="form__row form__row--mb30">
              <label class="input input--grow">
                <span class="label">Введите почту</span>
                <Field id="login__email" name="login" type="text" placeholder="Почта"/>
                <ErrorMessage name="login" class="error-feedback"/>
              </label>
            </div>

            <div class="form__row">
              <button class="button button--s button--w100" :disabled="loading">
                <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                ></span>
                <span>Восстановить пароль</span>
              </button>
            </div>

            <div class="form__row">
              <router-link class="button button--s button--w100 button--inverse" to="/reg">Зарегистрироваться
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'ForgotForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      login: yup.string().required('Введите почту или логин')
    })
    return {
      loading: false,
      message: '',
      schema
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    handleForgot(user) {
      this.loading = true;
      this.$store.dispatch('auth/forgot', user).then(
          () => {
            this.$router.push('/forgot-successful')
          },
          (error) => {
            this.loading = false
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            this.errors = error.response.data;
          }
      )
    }
  }
}
</script>

<style lang="scss">
</style>
