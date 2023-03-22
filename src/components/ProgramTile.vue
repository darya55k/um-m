<template>
  <div class="tile">
    <div class="tile__new" v-if="program.new">Новая</div>
    <a href="" class="tile__heart"></a>
    <div class="tile__image">
      <img v-if="['fixme', 'test', 'yandex.ru'].indexOf(program.img) < 0"
           :src="require('@/assets/style/programs/' + program.img)" alt="">
      <img v-else-if="program.direction.code === '41.03.05'"
           :src="require('@/assets/style/programs/' + 'administration-1.png')" alt="">
      <img v-else-if="program.direction.code === '38.03.01'"
           :src="require('@/assets/style/programs/' + 'economy-1.png')" alt="">
      <img v-else-if="program.direction.code === '58.03.01'"
           :src="require('@/assets/style/programs/' + 'politics-1.png')" alt="">
    </div>
    <div class="tile__block">
      <div class="tile__title">{{ program.direction.code }} {{ program.name }}</div>
      <div class="tile__city mb-20">{{ program.city }}</div>
      <div class="tile__items">
        <div class="tile__item">
          <div class="tile__icon tile__icon--year"></div>
          <div class="tile__icon-text tile__icon-text--w1">{{ getRExam(program.exam) }}</div>
        </div>
        <div class="tile__item">
          <div class="tile__icon tile__icon--users"></div>
          <div class="tile__icon-text tile__icon-text--w2">{{ program.place }}</div>
        </div>
        <div class="tile__item">
          <div class="tile__icon tile__icon--time"></div>
          <div class="tile__icon-text tile__icon-text--w3">{{ program.time }} года</div>
        </div>
        <div class="tile__item">
          <div class="tile__icon tile__icon--calendar"></div>
          <div class="tile__icon-text tile__icon-text--w1">{{ program.start }}</div>
        </div>

        <div class="tile__item">
          <div class="tile__icon tile__icon--form"></div>
          <div class="tile__icon-text tile__icon-text--w2">{{ getRForm(program.form) }}</div>
        </div>
      </div>
      <div class="tile__footer">
        <div class="tile__footer-logo"><img src="@/assets/style/logo.png" width="60" alt=""></div>
        <div class="tile__footer-buttons">
          <router-link class="button button--xs button--inverse-gray" :to="'/programs/' + program.link">
            Подробнее
          </router-link>
          <a v-if="!program.selected" href="" @click.prevent="$emit('select-program', index, true)"
             class="button button--xs">Выбрать</a>
          <a v-else href="" @click.prevent="$emit('select-program', index, false)"
             class="button button--xs button--green">Выбрано</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgramTile',
  props: {
    program: Object,
    index: Number
  },
  emits: ['select-program'],
  data() {
    return {}
  },
  methods: {
    getRExam(e) {
      let o = {
        'bachelor': 'Бакалавриат',
        'master': 'Магистратура',
        'specialist': 'Специалитет',
        'graduate': 'Аспирантура',
        'doctoral': 'Докторантура'
      };
      e = e.toLocaleLowerCase();
      if (typeof o[e] != 'undefined') {
        return o[e];
      }
      return e;
    },
    getRForm(f) {
      let o = {
        'full-time': 'Очная',
        'part-time': 'Очно-заочная',
        'extramural': 'Заочная'
      }
      f = f.toLocaleLowerCase();
      if (typeof o[f] != 'undefined') {
        return o[f];
      }
      return f;
    },
  }
}
</script>
