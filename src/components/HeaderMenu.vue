<template>
  <div class="header">
    <div class="header__wrap">
      <div class="header__logo"></div>
      <div class="header__menu">
        <span class="header__link">О ПРОЕКТЕ</span>
        <span to="/transfer" class="header__link">ПЕРЕВОД</span>
        <span class="header__link">НАПРАВЛЕНИЯ ОБУЧЕНИЯ</span>
        <span class="header__link">УСЛОВИЯ</span>
        <span class="header__link">НОВОСТИ</span>
        <span class="header__link">FAQ</span>

        <router-link v-if="currentUser" to="/personal" class="header__link"
          >МОЕ ОБУЧЕНИЕ</router-link
        >
        <router-link v-else to="/auth" class="header__link"
          >МОЕ ОБУЧЕНИЕ</router-link
        >
      </div>

      <div class="header__auth" v-if="currentUser">
        <div class="header__name">
          <router-link to="/personal"
            >{{ currentUser.first_name }}
            {{ currentUser.last_name }}</router-link
          >
          <div class="header__profession">Студент</div>
        </div>

        <!-- <img
          class="header__avatar"
          src="../assets/style/user-empty.png"
          alt=""
        /> -->

        <a href="/logout" @click.prevent="logOut" class="header__exit">Выйти</a>
      </div>
      <div class="header__auth" v-else>
        <!-- <img
          class="header__avatar"
          src="../assets/style/user-empty.png"
          alt=""
        /> -->
        <router-link to="/auth" class="button button--s">Войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: {
    msg: String,
  },
  /* computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/auth");
    },
  }, */
};
</script>
