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
          <Form @submit="handleResetPassword" :validation-schema="schema" class="form">

            <div class="form-group" v-if="message">
              <div class="alert alert-danger alert--center mb-10" role="alert">
                {{ errors.detail || message }}
              </div>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Придумайте новый пароль</span>
                <Field id="password" name="password" type="password" autocomplete="new-password"/>
                <ErrorMessage name="password" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.password" v-html="errors.password.join('<br>')"></div>
              </label>
            </div>
            <div class="form__row form__row--mb30">
              <label class="input input--grow">
                <span class="label">Повторите пароль</span>
                <Field id="password_confirm" name="password_confirm" type="password" autocomplete="new-password"/>
                <ErrorMessage name="password_confirm" class="error-feedback"/>
              </label>
            </div>

            <div class="form__row">
              <button class="button button--s button--w100" :disabled="loading">
                <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                ></span>
                <span>Сохранить</span>
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
  name: 'ResetPasswordForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      password: yup
          .string()
          .required('Введите пароль')
          .min(8, 'Должен быть не менее 8 символов')
          .max(40, 'Максимум 40 символов'),
      password_confirm: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
          .required('Введите подтверждение пароля')
    })
    return {
      loading: false,
      message: '',
      errors: {},
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
    handleResetPassword(user) {
      this.loading = true

      this.$store.dispatch('auth/reset', {...this.$route.query, password: user.password}).then(
          () => {
            // @todo: нужная страница
            this.$router.push('/auth')
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
            console.log(this.errors);
          }
      )
    }
  }
}
</script>

<style lang="scss">
</style>
