<template>
  <div class="modal">
    <div class="modal__body">
      <a href="" class="modal__close"><img src="@/assets/style/close.svg" alt=""></a>
      <div class="modal__logo"><img src="@/assets/style/logo.png" alt=""></div>
      <div class="modal__content">
        <div class="modal__text">Пожалуйста, авторизируйтесь для отправки заявки</div>
      </div>
      <div class="modal__buttons">
        <router-link to="/auth" class="button">Авторизоваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ModalText',
  data() {
    return {
    }
  },
}

</script>
