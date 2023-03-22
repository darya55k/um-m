<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <span>Мое обучение</span>
  </div>
  <div class="content">
    <div class="content__row">
      <div class="content__col content__col--1">
        <LeftMenu/>
      </div>
      <div class="content__col content__col--2">
        <h2>Профиль</h2>

        <div class="personal mb-100">
          <div class="personal__block">
            <div class="personal__header">
              <img class="header__avatar" src="../assets/style/user-empty.png" alt="">

              <div class="header__name">
                <span>{{ currentUser.first_name }} {{ currentUser.last_name }}</span>
                <div class="header__profession">Студент</div>
              </div>
            </div>

            <div class="personal__items">
              <div class="form__row form__row--mb10">
                <label class="input" v-if="currentUser.phone">
                  <input type="text" disabled :value="currentUser.phone">
                </label>
              </div>
              <div class="form__row form__row--mb20">
                <label class="input" v-if="currentUser.email">
                  <input type="text" disabled :value="currentUser.email">
                </label>
              </div>
              <div class="personal__link">
                Редактировать профиль
              </div>
            </div>
          </div>
        </div>

        <h2>Избранное</h2>
        <div class="tiles mb-100">
          <ProgramsList v-bind="{ limit: 2, favourite: true }"/>
        </div>
        <h2>Программы</h2>
        <div class="twins twins--2">
          <div class="twin">
            <div class="twin__content">
              <div>
                <div class="twin__title">
                  Перевод
                </div>

                <div class="twin__text">
                  Программа перевода студента на&nbsp;дальнейшее обучение в&nbsp;РАНХиГС
                </div>

                <div class="twin__links">
                  <a href="#" class="twin__link">Порядок участия</a>
                  <a href="#" class="twin__link">Пакет документов</a>
                  <a href="#" class="twin__link">Оформить заявку</a>
                  <a href="#" class="twin__link">FAQ</a>
                </div>
              </div>

              <div class="twin__button">
                <router-link class="button button--s" to="/programs">Выбрать программу</router-link>
              </div>
            </div>
            <img src="../assets/style/twin-1.jpg" alt="" class="twin__img">
          </div>
        </div>
        <h2 v-if="applicationsList && isPending">На согласовании</h2>
        <div v-if="applicationsList && isPending">
          <template v-for="(application,app_idx) in applicationsList" :key="app_idx">
            <template v-for="(program,prg_idx) in application.programs" :key="prg_idx">
              <div class="program">
                <div class="program__label">На рассмотрении</div>

                <div class="program__title">{{ program.direction.code }} {{ program.name }}</div>
                <!--            <div class="program__date">20.10.2022, 22:50</div>-->
                <div class="program__city">{{ program.organization.short_name }} | {{ program.city }}</div>
                <div class="program__num">Заявка: №{{ application.id }} от {{ dateTime(application.date) }}</div>
                <div class="program__form">Форма: Перевод</div>
                <div class="program__button">
                  <router-link :to="'/personal/request/' + application.id + '/' + (prg_idx + 1)" class="button button--xs">Перейти к заявке
                  </router-link>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LeftMenu from "@/components/LeftMenu";
import ProgramsList from "@/components/ProgramsList";
import moment from "moment";

export default {
  name: 'PersonalView',
  components: {
    LeftMenu,
    ProgramsList
  },
  data() {
    return {
      applicationsList: []
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    isPending() {
      let is_pending = false;
      for (let application in this.applicationsList) {
        if (application.status === 'pending') {
          is_pending = true;
        }
      }
      return is_pending;
    }
  },
  mounted() {
    // список заявок
    this.$store.dispatch('applications/list', {created_by: this.$store.state.auth.user.id}).then(
        (response) => {
          this.applicationsList = response;
        },
        (error) => {
          console.log(error)
        }
    );
  },
  methods: {
    dateTime(value) {
      return moment(value).format('DD.MM.YYYY')
    }
  },
}
</script>
