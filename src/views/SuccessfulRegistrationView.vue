<template>
  <div class="auth">
    <div class="auth__body">
      <div class="auth__logo">
        <img src="../assets/style/auth-logo.png" alt="" width="250">
      </div>
      <div class="auth__form">
          <div class="form__text">
            Спасибо за регистрацию!
            <br>Письмо с подтверждением выслано вам на почту.
          </div>
          <div class="form__row">
            <router-link to="/programs" class="button button--w100">К списку программ</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SuccessfulRegistrationView',
  components: {
  }
}
</script>
