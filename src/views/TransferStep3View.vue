<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/transfer">Перевод</router-link>
    <router-link to="/programs">Программы перевода</router-link>
    <span>Заявка на обучение</span>
  </div>
  <div class="content">
    <div class="content__row">
      <div class="content__col content__col--2">
        <h2>Заявки на обучение</h2>
        <div class="result__ok">Успешно отправлены</div>
        <div class="result__gray">Выбранная (-ые) программа (-ы):</div>
        <div class="">
          <div>
            <template v-for="(application,app_idx) in applicationsList" :key="app_idx">
              <div class="program" v-for="(program,prg_idx) in application.programs" :key="prg_idx">
                <div class="program__label color-green" v-if="application.status === 'approved'">
                  Готово к оформлению.
                  <br>
                  <br>Необходимо предоставить
                  <br>оригиналы документов
                  <br>
                  <br>тел. +7 (911) 123-45-67
                </div>
                <div class="program__label" v-else-if="application.status === 'pending'">На рассмотрении</div>
                <div class="program__label" v-else-if="application.status === 'rejected'">Отклонено</div>
                <div class="program__label" v-else-if="application.status === 'draft'">Черновик</div>

                <div class="program__title">{{ program.direction.code }} {{ program.name }}</div>
                <!--            <div class="program__date">20.10.2022, 22:50</div>-->
                <div class="program__city">{{ program.organization.short_name }} | {{ program.city }}</div>
                <div class="program__num">Заявка:
                  <router-link :to="'/personal/request/' + application.id">№{{ application.id }}</router-link>
                  от {{ dateTime(application.date) }}
                </div>
                <div class="program__form">Форма: Перевод</div>
                <div class="program__button">
                  <router-link :to="'/personal/request/' + application.id + '/' + (prg_idx + 1)" class="button button--xs">Перейти к заявке</router-link>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="content__col content__col--1">
        <div class="sticky">
          <router-link to="/personal/request" class="button button--w100" href="">Перейти к заявкам</router-link>
          <div class="result__label">Полезная информация:</div>
          <div class="result__text">Посмотрите <span class="color-lightgray">часто задаваемые вопросы</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TransferStep3View',
  components: {},
  data() {
    return {
      applicationsList: []
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
