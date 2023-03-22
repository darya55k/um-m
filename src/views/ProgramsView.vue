<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <span>Программы перевода</span>
  </div>
  <div class="content content--60">
    <h1 class="mb-100">Программы перевода</h1>
    <button type="reset" form="filters" class="float-right button button--s button--lightgrey">Сбросить фильтр</button>
    <h3 class="mb-40">Выберите желаемую программу для обучения</h3>
    <form action="" class="form mb-100" id="filters">
      <div class="form__block">
        <div class="form__row">
          <div class="form__grid form__grid--col4 form__grid--gap20 mb-10">
            <label class="select">
              <span class="label">Форма обучения</span>
              <select name="" v-model="filters.form.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_code) in filters.form.variants" :key="v_code" :value="v_code">{{ v }}</option>
              </select>
            </label>
            <label class="select">
              <span class="label">Уровень образования</span>
              <select name="" v-model="filters.exam.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_code) in filters.exam.variants" :key="v_code" :value="v_code">{{ v }}</option>
              </select>
            </label>
            <label class="select">
              <span class="label">Наименование профессии</span>
              <select name="" v-model="filters.direction.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_id) in filters.direction.variants" :key="v_id" :value="v.code">
                  {{ v.name }} — {{ v.code }}
                </option>
              </select>
            </label>
            <label class="select">
              <span class="label">Направленность (профиль)</span>
              <select name="" v-model="filters.profile.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_id) in filters.profile.variants" :key="v_id" :value="v">{{ v }}</option>
              </select>
            </label>
          </div>
          <div class="form__grid form__grid--col4 form__grid--gap20" v-if="!hideFilters">
            <label class="select">
              <span class="label">ВУЗ</span>
              <select name="" v-model="filters.organization.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_id) in filters.organization.variants" :key="v_id" :value="v.short_name">{{ v.name }}
                  ({{ v.short_name }})
                </option>
              </select>
            </label>
            <label class="select">
              <span class="label">Населенный пункт</span>
              <select name="" v-model="filters.city.selected">
                <option value="">Любой</option>
                <option v-for="(v,v_id) in filters.city.variants" :key="v_id" :value="v">{{ v }}</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <a href="" @click.prevent="hideFilters = !hideFilters" class="button button--lightgrey button--s">
            {{ hideFilters ? 'Все фильтры' : 'Свернуть фильтр' }}
          </a>
        </div>
      </div>
    </form>

    <h2>Программы</h2>
    <div class="content__row">
      <div class="content__col content__col--2">
        <div class="tiles">
          <template v-for="(program, index) in programs" v-bind:key="index">
            <ProgramTile
                v-if="
                (filters.form.selected === '' || filters.form.selected === program.form)
                && (filters.direction.selected === '' || filters.direction.selected === program.direction.code)
                && (filters.profile.selected === '' || filters.profile.selected === program.profile)
                && (filters.organization.selected === '' || filters.organization.selected === program.organization.short_name)
                && (filters.city.selected === '' || filters.city.selected === program.city)
                && (filters.exam.selected === '' || filters.exam.selected === program.exam)
              " v-bind="{ program: program, index: index }"
                @select-program="selectProgram"
            ></ProgramTile>
          </template>
        </div>
      </div>
      <div class="content__col content__col--1">
        <div class="sticky">
          <div class="form">
            <div class="form__row form__row--mb15">
              <div class="buttons">

                <button v-if="currentUser" @click.prevent="goNext()" :disabled="!selected"
                        class="button button--w190 button--s">Оформить заявку
                </button>
                <button v-else @click.prevent="modalShow = true" :disabled="!selected"
                        class="button button--w190 button--s">Оформить заявку
                </button>

                <span class="button button--w190 button--inverse button--s button--lightgrey">К избранному</span>
              </div>
            </div>
            <div class="result__gray">Выбранная (-ые) программа (-ы):</div>
            <div class="clouds clouds--1">
              <template v-for="(program, index) in programs" v-bind:key="index">
                <div class="cloud" v-if="program.selected">
                  <a href="" class="cloud__close" @click.prevent="selectProgram(index, false)"></a>
                  <div class="cloud__title">{{ program.direction.code }} {{ program.name }}</div>
                  <div class="cloud__text">{{ program.organization.short_name }} | {{ program.city }}</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="modalShow">
    <div class="modal">
      <div class="modal__body">
        <a href="" class="modal__close" @click.prevent="modalShow = false"><img src="@/assets/style/close.svg"
                                                                                alt=""></a>
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
</template>

<script>

//import ProgramsList from "@/components/ProgramsList";


import ProgramTile from "@/components/ProgramTile";

export default {
  name: 'ProgramsView',
  components: {
    ProgramTile
    //ProgramsList
  },
  data() {
    return {
      modalShow: false,
      selected: false,
      filters: {
        form: {selected: '', variants: {}},
        direction: {selected: '', variants: {}},
        profile: {selected: '', variants: {}},
        organization: {selected: '', variants: {}},
        city: {selected: '', variants: {}},
        exam: {selected: '', variants: {}}
      },
      hideFilters: true,
      programs: [],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    selectedPrograms() {
      return this.$store.state.programs.selected_programs;
    }
  },
  mounted() {
    this.selected = (this.selectedPrograms !== null) && (typeof this.selectedPrograms[0] !== 'undefined');
    // список программ
    this.$store.dispatch('programs/list', this.$store.state.auth.user ? this.$store.state.auth.user.id : 0).then(
        (response) => {
          this.programs = response;
          this.setSelectedAndFilters();
          this.checkSelected();
        },
        (error) => {
          console.log(error)
        }
    );
  },
  methods: {
    setSelectedAndFilters() {
      let selected = {};
      for (let program of this.selectedPrograms) {
        selected[program.id] = program.selected;
      }
      for (let i = 0, len = this.programs.length; i < len; i++) {
        let pr = this.programs[i];
        if (selected[pr.id]) {
          this.programs[i].selected = selected[pr.id];
        }

        this.filters.form.variants[pr.form] = this.getRForm(pr.form);
        this.filters.direction.variants[pr.direction.code] = pr.direction;
        this.filters.profile.variants[pr.profile] = pr.profile;
        this.filters.organization.variants[pr.organization.short_name] = pr.organization;
        this.filters.city.variants[pr.city] = pr.city;
        this.filters.exam.variants[pr.exam] = this.getRExam(pr.exam);
      }
    },
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
    selectProgram(index, value) {
      this.programs[index].selected = value;

      this.$store.dispatch('programs/storeSelected', this.programs);

      this.selected = this.checkSelected();
    },
    checkSelected() {
      let selected = false;
      for (let value of this.programs) {
        if (value.selected === true) {
          selected = true;
        }
      }
      return selected;
    },
    goNext() {
      if (this.selected) {
        this.$router.push('/transfer-step-1')
      }
    }
  }
}

</script>
