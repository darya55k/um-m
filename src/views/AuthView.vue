<template>
  <div class="auth">
    <div class="content content--0">
      <div class="mb-20">
        <router-link class="button button--s button--inverse" to="/"
          >Назад</router-link
        >
      </div>
      <div class="auth__body">
        <div class="auth__logo"></div>
        <h1 class="auth__title">АВТОРИЗАЦИЯ</h1>
        <div class="auth__form">
          <Form @submit="handleLogin" :validation-schema="schema" class="form">
            <div class="form-group" v-if="message">
              <div class="alert alert-danger alert--center mb-10" role="alert">
                {{ errors.detail || message }}
              </div>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Введите почту или логин</span>
                <Field
                  id="login__email"
                  name="login"
                  type="text"
                  placeholder="Почта или логин"
                />
                <ErrorMessage name="login" class="error-feedback" />
              </label>
            </div>

            <div class="form__row form__row--mb10">
              <label class="input input--grow">
                <span class="label">Введите пароль</span>
                <Field
                  id="login__password"
                  name="password"
                  type="password"
                  placeholder="Пароль"
                />
                <ErrorMessage name="password" class="error-feedback" />
              </label>
            </div>

            <div class="form__row form__row--mb40">
              <router-link class="form__link" to="/forgot"
                >Не помню логин или пароль</router-link
              >
            </div>

            <div class="form__row">
              <button class="button button--s button--w100" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Войти</span>
              </button>
            </div>

            <div class="form__row">
              <router-link
                class="button button--s button--w100 button--inverse"
                to="/reg"
                >Зарегистрироваться</router-link
              >
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { Form, Field, ErrorMessage } from "vee-validate";
//import * as yup from "yup";

export default {
  name: "LoginForm",
  components: {
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },

  data() {
    /* const yup = require("yup");
    const schema = yup.object().shape({
      login: yup.string().required("Введите почту или логин"),
      password: yup.string().required("Введите пароль"),
    });
    return {
      loading: false,
      message: "",
      schema,
    }; */
  },
  /* computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  }, */
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.errors = error.response.data;
        }
      );
    },
  },
};
</script>


