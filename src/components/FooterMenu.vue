<template>
  <div class="footer">
    <div class="content content--footer">
      <div class="footer__content">
        <div class="footer__top">
          <h4 class="footer__title">
            Остались вопросы?
            <br>Мы вам поможем!
          </h4>

          <div class="footer__center">
            <div>
              <label>
                <input class="footer__input" type="tel" placeholder="Телефон">
              </label>
            </div>
            <label class="footer__label">
              <input type="checkbox" class="checkbox"> Даю согласие на обработку <a href="" class="footer__personal">Персональных данных</a>
            </label>
          </div>

          <button class="button button--m">Перезвоните мне</button>
        </div>

        <div class="footer__middle">
          <a href="/" class="footer__logo">
            <img src="../assets/style/logo-footer.png" alt="" width="223">
          </a>

          <nav class="footer__nav">
            <a href="" class="footer__link">О ПРОЕКТЕ</a>
            <a href="" class="footer__link">ОТЗЫВЫ</a>
            <a href="" class="footer__link">НАПРАВЛЕНИЯ</a>
            <a href="" class="footer__link">НОВОСТИ</a>
            <a href="" class="footer__link">УСЛОВИЯ</a>
            <a href="" class="footer__link">FAQ</a>
          </nav>

          <div class="footer__right">
            <a href="tel:84999569191" class="footer__tel">
              8 (499) 956-91-91
            </a>
            <div class="footer__subtel">
              по Москве и МО
            </div>
            <a href="tel:84999569191" class="footer__tel">
              8 (499) 956-91-91
            </a>
            <div class="footer__subtel">
              бесплатно по РФ
            </div>
            <a href="mailto:trudvsem@ranepa.ru" class="footer__email">
              trudvsem@ranepa.ru
            </a>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__copy">© 2022 РАНХиГС</div>
          <a href="" class="footer__link">Пользовательское соглашение</a>
          <a href="" class="footer__link">Политика конфиденциальности</a>
          <div class="footer__social">
            <a href=""><img src="../assets/style/footer-yt.svg" alt=""></a>
            <a href=""><img src="../assets/style/footer-vk.svg" alt=""></a>
            <a href=""><img src="../assets/style/footer-tg.svg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    msg: String
  }
}
</script>
