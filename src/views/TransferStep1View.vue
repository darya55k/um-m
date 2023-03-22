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

    <!--
    <div v-for="(application, index) in applicationsList" v-bind:key="index">
      {{ application.programs }}
    </div>
    -->

    <div class="content__row">
      <div class="content__col content__col--2">
        <form action="" class="form">
          <div class="clouds">
            <div class="cloud" v-for="(program, index) in selectedPrograms" v-bind:key="index">
              <a href="" class="cloud__close" @click.prevent="selectProgram(index, false)"></a>
              <div class="cloud__title">{{ program.direction.code }} {{ program.name }}</div>
              <div class="cloud__text">{{ program.organization.short_name }} | {{ program.city }}</div>
            </div>
          </div>
          <div class="form__block">
            <div class="title title--24 title--mb40 title--flex">
              Справки
              <details data-popover="down">
                <summary><i class="icon icon--info"></i></summary>
                <span>Сохранить в&nbsp;формате&nbsp;.pdf</span></details>
            </div>

            <div class="form__row mb-60" v-if="fields.parsed === false">
              <div class="file">
                <div class="file__body">
                  <i class="icon icon--upload"></i>
                  <div class="text text--xs text--light-grey mb-0">Перетащите или <b>Загрузите документ</b></div>
                  <input type="file" class="file__input" @change="handleFileUpload" :disabled="loading"
                         accept="application/pdf">
                </div>
              </div>
              <span v-show="error !== ''" class="error error-feedback">{{ error }}</span>
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            </div>

            <div class="form__row mb-60" v-else>
              <div class="upload">
                <img src="@/assets/style/pdf.gif" width="48" alt="">
                <a :href="fields.parsed.pdf_link" target="_blank" class="upload__name" v-if="fields.parsed.pdf_link">
                  {{ fields.parsed.pdf_creation_date }}
                </a>
                <div class="upload__name" v-else>
                  {{ fields.parsed.pdf_creation_date }}
                </div>
                <a href="" @click.prevent="resetUpload"><img src="@/assets/style/icon-uploaded.svg" alt=""></a>
              </div>
            </div>


            <div class="title title--24 title--mb40">Сведения о заявителе</div>

            <div class="form__row">
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                    Имя*
                  </span>
                  <input type="text" v-model="fields.student.first_name">
                  <span v-if="errors.student && errors.student.first_name"
                        class="error error-feedback">{{ errors.student.first_name.join('<br>') }}</span>
                </label>
              </div>
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                    Фамилия*
                  </span>
                  <input type="text" v-model="fields.student.last_name">
                  <span v-if="errors.student && errors.student.last_name"
                        class="error error-feedback">{{ errors.student.last_name.join('<br>') }}</span>
                </label>
              </div>
              <div class="form__row">
                <div class="form__grid form__grid--2 form__grid--gap20">
                  <label class="input">
                    <span class="label">
                      Отчество (при наличии)
                    </span>
                    <input type="text" v-model="fields.student.middle_name">
                    <span v-if="errors.student && errors.student.middle_name"
                          class="error error-feedback">{{ errors.student.middle_name.join('<br>') }}</span>
                  </label>
                  <label class="input input--calendar">
                    <span class="label">
                      Дата рождения
                    </span>
                    <input type="date" v-model="fields.student.date_of_birth">
                    <span v-if="errors.student && errors.student.date_of_birth"
                          class="error error-feedback">{{ errors.student.date_of_birth.join('<br>') }}</span>
                  </label>

                  <label class="input">
                    <span class="label">
                      Телефон*
                    </span>
                    <input type="tel" v-model="fields.student.phone">
                    <span v-if="errors.student && errors.student.phone"
                          class="error error-feedback">{{ errors.student.phone.join('<br>') }}</span>
                  </label>
                  <label class="input">
                    <span class="label">
                      e-mail*
                    </span>
                    <input type="email" v-model="fields.student.email">
                    <span v-if="errors.student && errors.student.email"
                          class="error error-feedback">{{ errors.student.email.join('<br>') }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения об образовании</div>

            <template v-if="fields.organizations">
              <div class="form__row" v-for="(org, org_id) in fields.organizations" :key="org_id">
                <div class="form__row">
                  <label class="input input--grow">
                    <span class="label">
                      Образовательная организация*
                    </span>
                    <input type="text" v-model="fields.organizations[org_id].name" data-required=""
                           @change="checkIsFilled"/>
                  </label>
                </div>
                <div class="form__row">
                  <label class="input input--grow">
                    <span class="label">
                      Образовательная организация (краткое наименование)*
                    </span>
                    <input type="text" v-model="fields.organizations[org_id].short_name" data-required=""
                           @change="checkIsFilled"/>
                  </label>
                </div>
                <div class="form__row">
                  <div class="form__grid form__grid--2 form__grid--gap20">
                    <label class="input input--calendar">
                      <span class="label">
                        Дата поступления
                      </span>
                      <input type="date" v-model="fields.organizations[org_id].date_start"/>
                      <!--                             :value="org && org.date_start ? org.date_start.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : ''">-->
                    </label>
                    <label class="input input--calendar">
                      <span class="label">
                        Дата окончания
                      </span>
                      <input type="date" v-model="fields.organizations[org_id].date_end"/>
                      <!--                             :value="org && org.date_end ? org.date_end.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : ''">-->
                    </label>

                    <label class="input">
                      <span class="label">
                        Образовательная программа*
                      </span>
                      <input type="text" v-model="fields.organizations[org_id].program_name" data-required=""
                             @change="checkIsFilled"/>
                    </label>

                    <label class="select">
                      <span class="label">
                        Форма обучения*
                      </span>
                      <select name="" v-model="fields.organizations[org_id].form" data-required=""
                              @change="checkIsFilled">
                        <option value=""></option>
                        <option value="full-time">Очная</option>
                        <option value="extramural">Заочная</option>
                        <option value="part-time">Очно-заочная</option>
                      </select>
                    </label>

                    <label class="select">
                      <span class="label">
                        Уровень образования*
                      </span>
                      <select name="" v-model="fields.organizations[org_id].stage" data-required=""
                              @change="checkIsFilled">
                        <option value=""></option>
                        <option value="bachelor" :selected="checkStage(org, 'бакалавриат')">Бакалавриат</option>
                        <option value="master" :selected="checkStage(org, 'магистратура')">Магистратура</option>
                        <option value="specialist" :selected="checkStage(org, 'специалитет')">Специалитет</option>
                        <option value="graduate" :selected="checkStage(org, 'аспирантура')">Аспирантура</option>
                        <option value="doctoral" :selected="checkStage(org, 'докторантура')">Докторантура</option>
                      </select>
                    </label>

                    <label class="input">
                      <span class="label">
                        Направление подготовки*
                      </span>
                      <input type="text" v-model="fields.organizations[org_id].direction" data-required=""
                             @change="checkIsFilled"/>
                    </label>

                    <!--
                    <label class="select">
                      <span class="label">
                        Государственные экзамены*
                      </span>
                      <select name="" v-model="fields.organizations[org_id].exams" data-required=""
                              @change="checkIsFilled">
                        <option value=""></option>
                        <option value="" :selected="checkExams(org, 'нет')">Нет</option>
                        <option value="5" :selected="checkExams(org, 'отлично')">Отлично</option>
                        <option value="4" :selected="checkExams(org, 'хорошо')">Хорошо</option>
                        <option value="3" :selected="checkExams(org, 'удовлетворительно')">Удовлетворительно</option>
                        <option value="2" :selected="checkExams(org, 'неудовлетворительно')">Неудовлетворительно
                        </option>
                      </select>
                    </label>
                    -->
                    <label class="select">
                      <span class="label">
                        Выпускная квалификационная работа*
                      </span>
                      <select name="" v-model="fields.organizations[org_id].final_work" data-required=""
                              @change="checkIsFilled">
                        <option value=""></option>
                        <option>Нет</option>
                        <option value="5">Отлично</option>
                        <option value="4">Хорошо</option>
                        <option value="3">Удовлетворительно</option>
                        <option value="2">Неудовлетворительно</option>
                      </select>
                    </label>
                  </div>
                </div>
                <a href="" class="button button--s mb-60" v-if="org_id >= 1"
                   @click.prevent="deleteOrg(org_id)">удалить</a>
              </div>
            </template>

            <!-- Это дисциплина, которая должна добавиться при нажатии на кнопку "Добавить дисциплину" (она такая же как сверху)
            <div class="form__row">
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                      Образовательная организация*
                  </span>
                  <input type="text">
                </label>
              </div>
              <div class="form__row">
                <div class="form__grid form__grid--2 form__grid--gap20">
                  <label class="input input--calendar">
                    <span class="label">
                       Дата поступления
                    </span>
                    <input type="text">
                  </label>
                  <label class="input input--calendar">
                    <span class="label">
                       Дата окончания
                    </span>
                    <input type="text">
                  </label>

                  <label class="select">
                    <span class="label">
                       Образовательная программа*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>
                  <label class="select">
                    <span class="label">
                       Форма обучения*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>

                  <label class="select">
                    <span class="label">
                       Уровень образования*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>
                  <label class="select">
                    <span class="label">
                       Направление подготовки*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>

                  <label class="select">
                    <span class="label">
                       Государственные экзамены*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>
                  <label class="select">
                    <span class="label">
                       Выпускная квалификационная работа*
                    </span>
                    <select name="">
                      <option value=""></option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            -->

            <div class="form__row form__row--flex">
              <button class="button button--s button--grey button--square" id="add_place" @click.prevent="pushOrg">+
              </button>
              <label for="add_place" class="label label--m0 label--s">Добавить еще одно место обучения</label>
            </div>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения о содержании и результатах освоения программ</div>
            <div class="form__row" v-if="fields.organizations">
              <div class="form__grid form__grid--5">
                <div class="label label--m0">Наименование дисциплин</div>
                <div class="label label--m0">Часы</div>
                <div class="label label--m0">з.е.</div>
                <div class="label label--m0">Форма контроля</div>
                <div class="label label--m0"></div>


                <template v-for="(subject, subject_id) in fields.subjects" :key="subject_id">
                  <label class="input" :class="fields.subjects[subject_id].name ? '': 'input--error'">
                    <input type="text" v-model="fields.subjects[subject_id].name">
                  </label>
                  <label class="input" :class="fields.subjects[subject_id].hours ? '': 'input--error'">
                    <input type="text" v-model="fields.subjects[subject_id].hours">
                  </label>
                  <label class="input" :class="fields.subjects[subject_id].credit ? '': 'input--error'">
                    <input type="text" v-model="fields.subjects[subject_id].credit">
                  </label>
                  <label class="select">
                    <select name="" id="" v-if="fields.subjects[subject_id].offset"
                            v-model="fields.subjects[subject_id].offset">
                      <option value=""></option>
                      <option value="0" :selected="subject.offset == 0">Незачтено</option>
                      <option value="1" :selected="subject.offset == 1">Зачтено</option>
                    </select>
                    <select name="" id="" v-else v-model="fields.subjects[subject_id].score">
                      <option value=""></option>
                      <option value="0" :selected="subject.score == 0">Незачтено</option>
                      <option value="1" :selected="subject.score == 1">Зачтено</option>
                      <option value="2" :selected="subject.score == 2">Неудовлетворительно</option>
                      <option value="3" :selected="subject.score == 3">Удовлетворительно</option>
                      <option value="4" :selected="subject.score == 4">Хорошо</option>
                      <option value="5" :selected="subject.score == 5">Отлично</option>
                    </select>
                  </label>

                  <a href="" @click.prevent="deleteSubject(subject_id)" class="link link--trash">
                    <img src="@/assets/style/icon-uploaded.svg" alt="">
                  </a>
                </template>

                <template v-if="false">
                  <label class="input">
                    <input type="text">
                  </label>
                  <label class="input">
                    <input type="text">
                  </label>
                  <label class="select">
                    <select name="" id="">
                      <option value=""></option>
                      <option value="">Отлично</option>
                      <option value="">Хорошо</option>
                      <option value="">Удовлетворительно</option>
                      <option value="">Неудовлетворительно</option>
                    </select>
                  </label>
                  <label class="select">
                    <select name="" id="">
                      <option value=""></option>
                      <option value="">Зачтено</option>
                      <option value="">Незачтено</option>
                    </select>
                  </label>
                </template>
              </div>
            </div>
            <div class="form__row form__row--flex">
              <button class="button button--s button--grey button--square" id="add_place2" @click.prevent="pushSubj">+
              </button>
              <label for="add_place2" class="label label--m0 label--s">Добавить дисциплину</label>
            </div>
          </div>

        </form>
      </div>
      <div class="content__col content__col--1">
        <div class="sticky">
          <div class="form">
            <div class="form__row form__row--mb15">
              <div class="buttons">
                <input type="hidden" v-model="fields.preAgree">
                <button :disabled="!checkSend" @click.prevent="goNext()" class="button button--w190 button--s">Далее
                </button>
                <span class="button button--w190 button--inverse button--s button--inverse-gray">Сохранить
                  черновик</span>
              </div>
            </div>

            <div class="form__row form__row--mb15">
              <label class="form__row form__row--flex form__row--gap8 fz-14">
                <input v-model="fields.agree1" type="checkbox" class="checkbox mr-0">
                <span>Даю согласие на обработку <a class="link link--gray" href="">персональных данных</a></span>
              </label>
            </div>
            <div class="form__row mb-30">
              <label class="form__row form__row--aifs form__row--flex form__row--gap8 fz-14">
                <input v-model="fields.agree2" type="checkbox" class="checkbox mr-0">
                <span>Даю согласие на получение информации, связанной с&nbsp;поступлением</span>
              </label>
            </div>

            <!--div class="form__row form__row--flex form__row--gap10">
              <div class="form__row form__row--flex form__row--gap8 form__row--posr mb-0">
                <i class="icon icon--save"/><a href="" class="link link--overlap link--gray">Сохранить PDF</a>
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
</template>

<script>
// import axios from "axios";
import merge from "lodash.merge";
import api from "@/services/api";
import moment from "moment";

export default {
  name: 'TransferStep1View',
  components: {},
  data() {
    return {
      applicationsList: [],
      loading: false,
      error: '',
      errors: {},
      fields: this.resetFormFields()
    };
  },
  computed: {
    checkSend() {
      return (
          this.fields.preAgree &&
          this.fields.agree1 &&
          this.fields.agree2 &&
          this.fields.student.first_name !== "" &&
          this.fields.student.last_name !== "" &&
          this.fields.student.phone !== "" &&
          this.fields.student.email !== ""
      )
    },
    selectedPrograms() {
      return this.$store.state.programs.selected_programs;
    }
  },
  mounted() {
    let self = this;
    self.redirectIfProgramsNotSelected();

    // список заявок
    // this.$store.state.auth.user.id
    self.$store.dispatch('applications/list', {created_by: this.$store.state.auth.user.id}).then(
        (response) => {
          self.applicationsList = response;
        },
        (error) => {
          console.log(error)
        }
    );
  },
  methods: {
    checkIsFilled() {
      let required = document.querySelectorAll('[data-required]'), checkIsFilled = true;
      for (let i = 0, len = required.length; i < len; i++) {
        checkIsFilled &&= (required[i].value.length > 0);
      }
      this.fields.preAgree = checkIsFilled;
      return checkIsFilled;
    },
    resetFormFields() {
      let u = this.$store.state.auth.user;

      return {
        file: '',
        preAgree: false,
        agree1: false,
        agree2: false,
        parsed: false,
        student: {
          first_name: u.first_name,
          last_name: u.last_name,
          middle_name: u.patronymic,
          phone: u.phone,
          date_of_birth: u.date_of_birth,
          email: u.email
        },
        organizations: [{}],
        subjects: [{}, {}, {}]
      }
    },
    goNext() {
      if (this.checkSend) {
        let self = this, data = {
          "student": {
            "first_name": this.fields.student.first_name,
            "patronymic": this.fields.student.middle_name,
            "last_name": this.fields.student.last_name,
            "email": this.fields.student.email,
            "phone": this.fields.student.phone,
            // "date_of_birth": this.fields.student.date_of_birth
          },
          "programs": this.selectedPrograms.map(function (p) {
            return {
              // id: '',
              organization: {
                // id: '',
                name: p.organization.name,
                short_name: p.organization.short_name
              },
              direction: {
                code: p.direction.code,
                name: p.direction.name
              },
              name: p.name,
              profile: p.profile,
              exam: self.getExam(p.exam),
              link: p.link,
              img: p.img,
              new: p.new,
              city: p.city,
              time: p.timeInt,
              start: p.start,
              place: p.place,
              form: self.getForm(p.form)
            }
          }),
          "organizations": this.fields.organizations,
          "subjects": this.fields.subjects.map(function (s) {
            let ret = {
              subject: {name: s.name}, // Наименование
              hours: s.hours, // Часы
              credit: s.credit // Зачётные единицы
            }

            if (s.offset) {
              ret.offset = s.offset; // оценка за зачёт
            } else if (s.score && parseInt(s.score, 10) < 2) {
              ret.offset = s.score;  // оценка за зачёт
            } else if (s.score) {
              ret.score = s.score; // оценка за экзамен
            }

            return ret;
          }),
          "status": "draft"
        }

        if (this.fields.student.date_of_birth) {
          data['student']['date_of_birth'] = moment(this.fields.student.date_of_birth).format('YYYY-MM-DD');
        }

        console.log(data);
        this.$store.dispatch('applications/create', data).then(
            (response) => {
              this.applicationsList = response;
              this.$router.push('/transfer-step-2');
            },
            (errors) => {
              console.log(errors);
              this.errors = errors.response.data;
            }
        );
      }
    },
    getExam(e) {
      let o = {
        'бакалавриат': 'bachelor',
        'магистратура': 'master',
        'специалитет': 'specialist',
        'аспирантура': 'graduate',
        'докторантура': 'doctoral'
      };
      e = e.toLocaleLowerCase();
      if (typeof o[e] != 'undefined') {
        return o[e];
      }
      return e;
    },
    getForm(f) {
      let o = {
        'очная': 'full-time',
        'очно-заочная': 'part-time',
        'заочная': 'extramural'
      }
      f = f.toLocaleLowerCase();
      if (typeof o[f] != 'undefined') {
        return o[f];
      }
      return f;
    },
    selectProgram(index, value) {
      this.selectedPrograms[index].selected = value;

      this.$store.dispatch('programs/storeSelected', this.selectedPrograms);

      this.redirectIfProgramsNotSelected();
    },
    redirectIfProgramsNotSelected() {
      if (typeof this.selectedPrograms[0] === 'undefined') {
        this.$router.push('/programs');
      }
    },
    deleteOrg(id) {
      this.fields.organizations.splice(id, 1);
      setTimeout(this.checkIsFilled, 100);
      // console.log(this.fields.subjects[id], this.fields)
    },
    deleteSubject(id) {
      this.fields.subjects.splice(id, 1);
      setTimeout(this.checkIsFilled, 100);
      // console.log(this.fields.subjects[id], this.fields)
    },
    handleFileUpload(event) {
      this.resetUpload();
      this.file = event.target.files[0];
      this.loading = true;

      this.fields.parsed = {}
      if (this.file) {
        // пока подставим 1.json, а потом будем использовать правильный ответ
        // axios.get('/1.json').then(
        //     response => {
        //       this.loading = false;
        //       this.fields = response.data;
        //       this.fields.parsed = {}
        //     }
        // )

        this.$store.dispatch('ocr/upload', this.file).then(
            (response) => {
              console.log('success', response.data.data);
              this.loading = false;

              this.fields.parsed = {
                pdf_creation_date: 'Справка',
                pdf_link: (api.API_URL + response.data.data.download_file).replace('/api//api/', '/api/')
              }

              this.$store.dispatch('nlp/parse', response.data.data.text).then(
                  (r) => {
                    console.log('success', r.data.data);
                    this.fields.parsed.data = r.data.data;

                    // @todo: merge???
                    merge({}, {});
                    // console.log(this.fields.subjects);
                    // this.fields = merge(this.fields, r.data.data);
                    // console.log(this.fields.subjects);
                    this.fields.subjects = r.data.data.subjects;
                  },
                  (e) => {
                    console.log('error', e);
                  }
              );
            },
            (error) => {
              console.log('error', error.response.data);
              this.loading = false;
            }
        );
      }
    },
    resetUpload() {
      this.fields = this.resetFormFields();
    },
    pushOrg() {
      this.fields.organizations.push({});
      setTimeout(this.checkIsFilled, 100);
    },
    pushSubj() {
      this.fields.subjects.push({});
      setTimeout(this.checkIsFilled, 100);
    },
    checkStage(org) {
      let args = Array.prototype.slice.call(arguments, 1);
      return org.stage ? args.indexOf(org.stage.toLowerCase()) > -1 : false
    },
    checkExams(org) {
      let args = Array.prototype.slice.call(arguments, 1);
      return org.exams ? args.indexOf(org.exams.toLowerCase()) > -1 : false
    }
  }
}
</script>
