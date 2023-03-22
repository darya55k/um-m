<template>
  <div class="auth">
    <div class="content content--0">
      <div class="mb-20"><router-link class="button button--s button--inverse" to="/">Назад</router-link></div>
      <div class="auth__body">
        <div class="auth__logo">
          <img src="../assets/style/auth-logo.png" alt="" width="250">
        </div>
        <h1 class="auth__title">РЕГИСТРАЦИЯ</h1>
        <div class="auth__form">
          <Form @submit="handleRegister" :validation-schema="schema" class="form">

            <div class="form-group">
              <div v-if="message" class="alert alert--center mb-20 alert-danger" role="alert">
                {{ message }}
              </div>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Введите почту</span>
                <Field name="email" type="email" class="modal-blue__input" id="registration__email"
                       placeholder="Введите почту"/>
                <ErrorMessage name="email" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.email" v-html="errors.email"></div>
                <div class="error-feedback" v-if="errors.username" v-html="errors.username"></div>
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Введите телефон</span>
                <Field name="phone" type="text" class="modal-blue__input" id="registration__phone"
                       placeholder="Введите телефон"/>
                <ErrorMessage name="phone" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.phone" v-html="errors.phone"></div>
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span>Имя</span>
                <Field name="first_name" type="text" class="modal-blue__input" id="registration__name" placeholder="Имя"/>
                <ErrorMessage name="first_name" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.first_name" v-html="errors.first_name"></div>
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Фамилия</span>
                <Field name="last_name" type="text" class="modal-blue__input" id="registration__last_name"
                       placeholder="Фамилия"/>
                <ErrorMessage name="last_name" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.last_name" v-html="errors.last_name"></div>
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Пароль</span>
                <Field name="password" type="password" class="modal-blue__input" id="registration__password"
                       placeholder="Пароль"/>
                <ErrorMessage name="password" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.password" v-html="errors.password"></div>
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Повторите пароль</span>
                <Field name="password_confirm" type="password" class="modal-blue__input"
                       id="registration__password_confirm"
                       placeholder="Повторите пароль"/>
                <ErrorMessage name="password_confirm" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.password_confirm" v-html="errors.password_confirm"></div>
              </label>
            </div>

            <div class="form__row form__row--mb40">
              <label class="form__row form__row--flex form__row--gap8">
                <Field name="agree" type="checkbox" class="checkbox" :value="false" id="registration__agree"/>
                Даю согласие на обработку персональных данных
                <ErrorMessage name="agree" class="error-feedback"/>
                <div class="error-feedback" v-if="errors.agree" v-html="errors.agree"></div>
              </label>
            </div>

            <div class="form__row">
              <button class="button button--s button--w100" :disabled="loading">
                <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                ></span>
                Зарегистрироваться
              </button>
            </div>

          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'RegView',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      first_name: yup
          .string()
          .required('Введите имя')
          .min(3, 'Минимум 3 символа')
          .max(20, 'Максимум 20 символов'),
      last_name: yup
          .string()
          .required('Введите фамилию')
          .min(3, 'Минимум 3 символа')
          .max(20, 'Максимум 20 символов'),
      phone: yup
          .string()
          .required('Введите номер телефона'),
      email: yup
          .string()
          .required('Введите E-mail')
          .email('E-mail невалидный')
          .max(128, 'Максимум 128 символов'),
      password: yup
          .string()
          .required('Введите пароль')
          .min(6, 'Должен быть не менее 6 символов')
          .max(40, 'Максимум 40 символов'),
      password_confirm: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
          .required('Введите подтверждение пароля')
    })
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleRegister(user) {
      this.message = ''
      this.successful = false
      this.loading = true
      this.errors = {}
      this.$store.dispatch('auth/register', user).then(
          (data) => {
            this.message = data.message
            this.successful = true
            this.loading = false
            // setTimeout(function () {
            //   location.reload()
            // }, 1000)
            this.$router.push('/successful')
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;

            this.errors = error.response.data;
            console.log(this.errors);
          }
      )
    }
  }
}
</script>
