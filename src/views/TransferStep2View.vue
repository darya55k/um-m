<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/transfer">Перевод</router-link>
    <router-link to="/programs">Программы перевода</router-link>
    <span>Заявка на обучение</span>
  </div>
  <div class="content">
    <div class="mb-100">
      <router-link class="button button--s button--inverse" to="/programs">Назад</router-link>
    </div>
    <h2 class="mb-40">Заявка на обучение</h2>
    <div class="result__gray">Выбранная (-ые) программа (-ы):</div>
    <div class="content__row">
      <div class="content__col content__col--2">
        <div class="clouds">
          <div class="cloud" v-for="(program, index) in selectedPrograms" v-bind:key="index">
            <a href="" class="cloud__close"></a>
            <div class="cloud__title">{{ program.direction.code }} {{ program.name }}</div>
            <div class="cloud__text">{{ program.organization.short_name }} | {{ program.city }}</div>
          </div>
        </div>

        <h3>Программы с наибольшим соответствием для положительного решения по переводу</h3>
        <div class="pies">
          <div class="pies__items" v-for="(application, index) in applicationsDiffList" v-bind:key="index">
            <div class="pie pie--animate"
                 :style="'--p:'+application.compliance_probability * 100 +';--c:' + (application.compliance_probability * 100 > 50 ? '#60B56E' : (application.compliance_probability * 100 > 25 ? '#FF941A' : '#ED6C4C'))">
              <div>{{ Math.round(application.compliance_probability * 100) }}%</div>
            </div>
            <div class="pies__title">
              {{ application.program.direction.code }}
              {{ application.program.name }}
            </div>
            <div class="pies__text">
              {{ application.program.organization.short_name }} | {{ application.program.city }}
            </div>
          </div>
        </div>

        <template v-for="(application, index) in applicationsDiffList" v-bind:key="index">
          <h3 class="mt-60">
            {{ application.program.direction.code }} {{ application.program.name }}
            — Таблица соответствия требованиям {{ application.program.organization.short_name }}</h3>
          <table class="table mb-100">
            <tr>
              <th class="table__th table__th--1">№</th>
              <th class="table__th table__th--2">РАНХиГС</th>
              <th class="table__th table__th--3">Студент</th>
              <th class="table__th table__th--4">Результат</th>
            </tr>
            <tr v-for="(sub, sub_idx) in application.subject_differences" v-bind:key="sub_idx">
              <!-- .color-orange -->
              <td class="table__td">{{ sub_idx + 1 }}</td>
              <td class="table__td">
                {{ sub.subject }}
                <table class="table__inner">
                  <tr>
                    <th class="table__inner-th table__inner-th--1">з.е.</th>
                    <th class="table__inner-th table__inner-th--2">часы</th>
                    <th class="table__inner-th table__inner-th--3">тип оценки</th>
                    <th class="table__inner-th table__inner-th--4">результат</th>
                  </tr>
                  <tr>
                    <td class="table__inner-td">{{ sub.required_total.credits }}</td>
                    <td class="table__inner-td">{{ sub.required_total.hours }}(36)</td>
                    <td class="table__inner-td">
                      <template v-if="sub.required_total.score_type">
                        {{ sub.required_total.score_type === 'credit' ? 'зачет' : 'экзамен / зачёт с оценкой' }}
                      </template>
                      <template v-else>-</template>
                    </td>
                    <td class="table__inner-td">{{
                        sub.required_total.score ? codeResult(sub.required_total.score) : '-'
                      }}
                    </td>
                  </tr>
                </table>
              </td>
              <td class="table__td">
                {{ sub.subject }}
                <table class="table__inner">
                  <tr>
                    <th class="table__inner-th table__inner-th--1">з.е.</th>
                    <th class="table__inner-th table__inner-th--2">часы</th>
                    <th class="table__inner-th table__inner-th--3">тип оценки</th>
                    <th class="table__inner-th table__inner-th--4">результат</th>
                  </tr>
                  <tr>
                    <td class="table__inner-td">{{ sub.existing_total.credits }}</td>
                    <td class="table__inner-td">{{ sub.existing_total.hours }}(36)</td>
                    <td class="table__inner-td">
                      <template v-if="sub.existing_total.score_type">
                        {{ sub.existing_total.score_type === 'credit' ? 'зачет' : 'экзамен / зачёт с оценкой' }}
                      </template>
                      <template v-else>-</template>
                    </td>
                    <td class="table__inner-td">{{
                        sub.existing_total.score ? codeResult(sub.existing_total.score) : '-'
                      }}
                    </td>
                  </tr>
                </table>
              </td>
              <td class="table__td color-green">
                <template v-if="sub.diff.can_be_credited">Зачет возможен</template>
                <span class="color-orange" v-else>Академическая разница</span>
                <table class="table__inner">
                  <tr>
                    <th class="table__inner-th table__inner-th--50">з.е. разница</th>
                    <th class="table__inner-th table__inner-th--50">ак. разница(ч.)</th>
                  </tr>
                  <tr>
                    <td class="table__inner-td">{{ sub.diff.credits }}</td>
                    <td class="table__inner-td">{{ sub.diff.hours }}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="table__td table__td--center">Итог</td>
              <td class="table__td table__td--center" colspan="2">
                <!-- @todo: -->
                <template v-if="application.total_difference.can_be_credited">
                  Меньше 15 з.е перевод возможен после ликвидации академической разницы
                </template>
                <span v-else>Перевод невозможен</span>
              </td>
              <td class="table__td">
                <table class="table__inner">
                  <tr>
                    <th class="table__inner-th table__inner-th--50">з.е. разница</th>
                    <th class="table__inner-th table__inner-th--50">ак. разница(ч.)</th>
                  </tr>
                  <tr>
                    <td class="table__inner-td">{{ application.total_difference.credits }}</td>
                    <td class="table__inner-td">{{ application.total_difference.hours }}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </template>

        <!--
        <div class="text">Рекомендуемый для сдачи перечень дисциплин:</div>
        <div class="toc">
          <div class="toc__title">Теория управления</div>
          <div class="toc__dots"></div>
          <div class="toc__value">Сдать зачет с оценкой</div>
        </div>
        <div class="toc">
          <div class="toc__title">Политология</div>
          <div class="toc__dots"></div>
          <div class="toc__value">Сдать экзамен</div>
        </div>
        <div class="toc">
          <div class="toc__title">Конфликтология</div>
          <div class="toc__dots"></div>
          <div class="toc__value">Прослушать и сдать экзамен по дисциплине</div>
        </div>
        -->
      </div>
      <div class="content__col content__col--1">
        <div class="sticky">
          <div class="form">
            <div class="form__row form__row--mb15">
              <div class="buttons">
                <!--{{ currentUser }}-->

                <button v-if="currentUser" :disabled="!checkSend" @click.prevent="goNext()"
                        class="button button--w190 button--s">Отправить
                </button>
                <button v-else :disabled="!checkSend" @click.prevent="modalShow = true"
                        class="button button--w190 button--s">Отправить
                </button>
                <a href="" class="button button--w190 button--inverse button--s button--inverse-gray">Сохранить
                  черновик</a>
              </div>
            </div>

            <div class="form__row form__row--mb15">
              <label class="form__row form__row--flex form__row--gap8 fz-14">
                <input v-model="agree1" type="checkbox" class="checkbox mr-0">
                <span>Даю согласие на обработку <a class="link link--gray" href="">персональных данных</a></span>
              </label>
            </div>
            <div class="form__row mb-30">
              <label class="form__row form__row--aifs form__row--flex form__row--gap8 fz-14">
                <input v-model="agree2" type="checkbox" class="checkbox mr-0">
                <span>Даю согласие на получение информации, связанной с&nbsp;поступлением</span>
              </label>
            </div>

            <!--div class="form__row form__row--flex form__row--gap10">
              <div class="form__row form__row--flex form__row--gap8 form__row--posr mb-0">
                <i class="icon icon--save"/><a href="#" @click.prevent="savePDF" target="_blank"
                                               class="link link--overlap link--gray">Сохранить PDF</a>
              </div>
              <details data-popover="down">
                <summary><i class="icon icon--info"></i></summary>
                <span>Сохранить в&nbsp;формате&nbsp;.pdf</span></details>
            </div-->
            <div class="form__row">
              <div class="text text--s text--light-grey">Полезная информация:</div>
            </div>
            <div class="text text--xs">Посмотрите <span class="color-lightgray">часто задаваемые вопросы</span></div>
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

// import ModalText from "@/components/ModalText";

export default {
  name: 'TransferStep2View',
  data() {
    return {
      agree1: false,
      agree2: false,
      modalShow: false,
      application: {},
      applicationsDiffList: [],
    }
  },
  components: {},
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    checkSend() {
      return (
          this.agree1 && this.agree2
      )
    },
    selectedPrograms() {
      return this.$store.state.programs.selected_programs;
    }
  },
  mounted() {
    this.$store.dispatch('applications/lastApplication').then(
        application => {
          this.application = application;

          // список Aca Diff
          this.$store.dispatch('applications/diff', {
            program_ids: this.selectedPrograms.map(function (i) { return i.id}), subjects: application.subjects
          }).then(
              (response) => {
                this.applicationsDiffList = response.data.data;
              },
              (error) => {
                console.log(error)
              }
          );
        }
    )
  },
  methods: {
    codeResult(num) {
      let a = ['Незачтено', 'Зачтено', 'Неудовлетворительно', 'Удовлетворительно', 'Хорошо', 'Отлично'];
      return a[num]
    },
    goNext() {
      if (this.checkSend && this.application.id > 0) {
        this.$store.dispatch('applications/patch', {id: this.application.id, data: {status: 'pending'} } ).then(
            (response) => {
              console.log(response)
              this.$router.push('/transfer-step-3')
            },
            (errors) => {
              console.log(errors);
              this.errors = errors.response.data;
            }
        );
      }
    },
    savePDF() {
      if (this.application.id > 0) {
        this.$store.dispatch('applications/pdf', this.application.id).then(
            (response) => {
              const a = document.createElement('a');
              a.href = window.URL.createObjectURL(response.data);
              a.download = `Application${this.application.id}.pdf`;
              document.body.appendChild(a);
              a.click();
              a.remove();
            },
            (errors) => {
              console.log(errors);
              this.errors = errors.response.data;
            }
        );
      }
    }
  }
}
</script>
