<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/personal">Мое обучение</router-link>
    <router-link to="/personal/request">Заявки</router-link>
    <span>Заявка на обучение</span>
  </div>
  <div class="content">

    <div class="content__row" v-if="application === null">
      <div class="content__col content__col--2">
        <div class="text">Загрузка…</div>
      </div>
    </div>

    <div class="content__row" v-else-if="application === false">
      <div class="content__col content__col--2">
        <div class="text">Заявка на перевод не найдена</div>
      </div>
    </div>

    <div class="content__row" v-else>
      <div class="content__col content__col--2">
        <div class="text">Заявка на перевод</div>
        <div class="clouds">
          <template v-for="(program,prg_id) in application.programs" :key="prg_id">
            <div class="cloud" v-if="(prg_id + 1) == $route.params.prg_id">
              <div class="cloud__title">{{ program.direction.code }} {{ program.name }}</div>
              <div class="cloud__text">{{ program.organization.short_name }} | {{ program.city }}</div>
            </div>
          </template>
        </div>

        <!-- <template v-for="(program,prg_id) in application.programs" :key="prg_id">
          <h2 class="mb-0">Программа перевода "{{ program.direction.code }} {{ program.direction.name }}"</h2>
          <div class="result__gray mb-60">{{program.organization.short_name}}</div>
        </template> -->

        <form action="" class="form">
          <div class="form__block">
            <div class="form__row">
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">Имя*</span>
                  <input disabled type="text" :value="application.student ? application.student.first_name : ''">
                </label>
              </div>
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                    Фамилия*
                  </span>
                  <input disabled type="text" :value="application.student ? application.student.last_name : ''">
                </label>
              </div>
              <div class="form__row">
                <div class="form__grid form__grid--2 form__grid--gap20">
                  <label class="input">
                    <span class="label">Отчество (при наличии)</span>
                    <input disabled type="text" :value="application.student ? application.student.middle_name : ''">
                  </label>
                  <label class="input input--calendar">
                    <span class="label">Дата рождения</span>
                    <input disabled type="text"
                           :value="application.student && application.student.date_of_birth ? application.student.date_of_birth.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1') : ''">
                  </label>
                  <label class="input">
                    <span class="label">Телефон*</span>
                    <input disabled type="tel" :value="application.student ? application.student.phone : ''">
                  </label>
                  <label class="input">
                    <span class="label">e-mail*</span>
                    <input disabled type="email" :value="application.student ? application.student.email : ''">
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения об образовании</div>

            <template v-if="application.organizations">
              <div class="form__row" v-for="(org, org_id) in application.organizations" :key="org_id">
                <div class="form__row">
                  <label class="input input--grow">
                    <span class="label">
                      Образовательная организация*
                    </span>
                    <input disabled type="text" :value="org.name"/>
                  </label>
                </div>
                <div class="form__row">
                  <label class="input input--grow">
                    <span class="label">
                      Образовательная организация (краткое наименование)*
                    </span>
                    <input disabled type="text" :value="org.short_name"/>
                  </label>
                </div>
              </div>
            </template>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения о содержании и результатах освоения программ</div>
            <div class="form__row" v-if="application.subjects">
              <div class="form__grid form__grid--5">
                <div class="label label--m0">Наименование дисциплин*</div>
                <div class="label label--m0">Часы</div>
                <div class="label label--m0">З.Е.</div>
                <div class="label label--m0">Форма контроля</div>
                <div></div>

                <template v-for="(subject, subject_id) in application.subjects" :key="subject_id">
                  <label class="input">
                    <input disabled type="text" :value="subject.subject.name">
                  </label>
                  <label class="input">
                    <input disabled type="text" :value="subject.hours">
                  </label>
                  <label class="input">
                    <input disabled type="text" :value="subject.credit">
                  </label>
                  <label class="select">
                    <select name="">
                      <option value="0" :selected="subject.score == 0">Незачтено</option>
                      <option value="1" :selected="subject.score == 1">Зачтено</option>
                      <option value="2" :selected="subject.score == 2">Неудовлетворительно</option>
                      <option value="3" :selected="subject.score == 3">Удовлетворительно</option>
                      <option value="4" :selected="subject.score == 4">Хорошо</option>
                      <option value="5" :selected="subject.score == 5">Отлично</option>
                    </select>
                  </label>
                  <div></div>

                </template>

              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="content__col content__col--1">
        <div class="sticky">
          <div class="form">
            <div class="form__row form__row--mb15">
              <div class="buttons">
                <a href="#" class="button button--w100 button--inverse button--s">Отменить заявку</a>
              </div>
            </div>

            <div class="form__row form__row--flex form__row--gap10">
              <div class="form__row form__row--flex form__row--gap8 form__row--posr mb-0">
                <i class="icon icon--save"/>
                <a href="#" @click.prevent="savePDF" target="_blank"
                   class="link link--overlap link--gray">Сохранить PDF</a>
              </div>
              <details data-popover="down">
                <summary><i class="icon icon--info"></i></summary>
                <span>Сохранить в&nbsp;формате&nbsp;.pdf</span></details>
            </div>

            <div class="text color-gray mb-30">Информация по заявке:</div>

            <div class="dl dl--w100 mb-100">
              <div class="dl__item">
                <div class="dl__dt">Регистрационный номер:</div>
                <div class="dl__dd">{{ application.id }}</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Тип заявки:</div>
                <div class="dl__dd">Перевод</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Дата подачи:</div>
                <div class="dl__dd">{{ dateTime(application.date) }}</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Статус рассмотрения:</div>

                <div class="dl__dd color-green" v-if="application.status === 'approved'">
                  Готово к оформлению.
                  <br>
                  <br>Необходимо предоставить
                  <br>оригиналы документов
                  <br>
                  <br>тел. +7 (911) 123-45-67
                </div>
                <div class="dl__dd color-orange" v-else-if="application.status === 'pending'">На рассмотрении</div>
                <div class="dl__dd color-orange" v-else-if="application.status === 'rejected'">Отклонено</div>
                <div class="dl__dd color-orange" v-else-if="application.status === 'draft'">Черновик</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'RequestByIdView',
  components: {},
  data() {
    return {
      application: null
    }
  },
  computed: {},
  mounted() {
    let self = this;
    // список заявок
    this.$store.dispatch('applications/get', self.$route.params.id).then(
        (response) => {
          if (self.$store.state.auth.user.id.toString() === response.data.created_by.toString()) {
            self.application = response.data;
          } else {
            self.application = false
          }
        },
        (error) => {
          console.log(error)
        }
    );
  },
  methods: {
    dateTime(value) {
      return moment(value).format('DD.MM.YYYY')
    },
    savePDF() {
      if (this.application.id > 0) {
        this.$store.dispatch('applications/pdf', this.application.id + '/' + this.$route.params.prg_id).then(
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
