<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/personal">Мое обучение</router-link>
    <router-link to="/personal/request">Заявки</router-link>
    <span>Заявка на обучение</span>
  </div>
  <div class="content">
    <div class="content__row">
      <div class="content__col content__col--2">
        <div class="text">Заявка на перевод</div>
        <h2 class="mb-0">Программа перевода "38.04.01 Экономика и анализ данных"</h2>
        <div class="result__gray mb-60">РАНХиГС</div>
        <form action="" class="form">
          <div class="form__block">
            <div class="form__row">
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                    Имя*
                  </span>
                  <input disabled type="text" :value="json.user ? json.user['first-name'] : ''">
                </label>
              </div>
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                    Фамилия*
                  </span>
                  <input disabled type="text" :value="json.user && json.user['last-name'] ? json.user['last-name'] : ''">
                </label>
              </div>
              <div class="form__row">
                <div class="form__grid form__grid--2 form__grid--gap20">
                  <label class="input">
                    <span class="label">
                      Отчество (при наличии)
                    </span>
                    <input disabled type="text" :value="json.user && json.user['middle-name'] ? json.user['middle-name'] : ''">
                  </label>
                  <label class="input input--calendar">
                    <span class="label">
                      Дата рождения
                    </span>
                    <input disabled type="date"
                           :value="json.user && json.user['birthdate'] ? json.user['birthdate'].replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : ''">
                  </label>

                  <label class="input">
                    <span class="label">
                      Телфон*
                    </span>
                    <input disabled type="tel" :value="json.user && json.user['phone'] ? json.user['phone'] : ''">
                  </label>
                  <label class="input">
                    <span class="label">
                      e-mail*
                    </span>
                    <input disabled type="email" :value="json.user && json.user['email'] ? json.user['email'] : ''">
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения об образовании</div>

            <template v-if="json.organizations">
              <div class="form__row" v-for="(org, org_id) in json.organizations" :key="org_id">
                <div class="form__row">
                  <label class="input input--grow">
                    <span class="label">
                      Образовательная организация*
                    </span>
                    <input disabled type="text" :value="org.organisation"/>
                  </label>
                </div>
                <div class="form__row">
                  <div class="form__grid form__grid--2 form__grid--gap20">
                    <label class="input input--calendar">
                      <span class="label">
                        Дата поступления
                      </span>
                      <input disabled type="date"
                             :value="org && org['data-start'] ? org['data-start'].replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : ''">
                    </label>
                    <label class="input input--calendar">
                      <span class="label">
                        Дата окончания
                      </span>
                      <input disabled type="date"
                             :value="org && org['data-end'] ? org['data-end'].replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : ''">
                    </label>

                    <label class="input">
                      <span class="label">
                        Образовательная программа*
                      </span>
                      <input disabled type="text" :value="org && org['program-name'] ? org['program-name'] : ''">
                    </label>

                    <label class="select">
                      <span class="label">
                        Форма обучения*
                      </span>
                      <select name="" disabled>
                        <option value=""></option>
                        <option value="очная"
                                :selected="org.form ? ['очное', 'очная'].indexOf(org.form.toLowerCase()) > -1 : false">
                          очная
                        </option>
                        <option value="заочная"
                                :selected="org.form ? ['заочное', 'заочная'].indexOf(org.form.toLowerCase()) > -1 : false">
                          заочная
                        </option>
                        <option value="очно-заочная"
                                :selected="org.form ? ['очно-заочное', 'очно-заочная'].indexOf(org.form.toLowerCase()) > -1 : false">
                          очно-заочная
                        </option>
                      </select>
                    </label>

                    <label class="select">
                      <span class="label">
                        Уровень образования*
                      </span>
                      <select name="" disabled>
                        <option value=""></option>
                        <option value="бакалавриат"
                                :selected="org.stage ? ['бакалавриат'].indexOf(org.stage.toLowerCase()) > -1 : false">
                          бакалавриат
                        </option>
                        <option value="магистратура"
                                :selected="org.stage ? ['магистратура'].indexOf(org.stage.toLowerCase()) > -1 : false">
                          магистратура
                        </option>
                        <option value="специалитет"
                                :selected="org.stage ? ['специалитет'].indexOf(org.stage.toLowerCase()) > -1 : false">
                          специалитет
                        </option>
                      </select>
                    </label>

                    <label class="input">
                      <span class="label">
                        Направление подготовки*
                      </span>
                      <input disabled type="text" :value="org && org['direction'] ? org['direction'] : ''">
                    </label>

                    <label class="select">
                      <span class="label">
                        Государственные экзамены*
                      </span>
                      <select name="" disabled>
                        <option value=""></option>
                        <option value="Нет"
                                :selected="org.exams ? ['нет'].indexOf(org.exams.toLowerCase()) > -1 : false">Нет
                        </option>
                        <option value="Отлично"
                                :selected="org.exams ? ['отлично'].indexOf(org.exams.toLowerCase()) > -1 : false">
                          Отлично
                        </option>
                        <option value="Хорошо"
                                :selected="org.exams ? ['хорошо'].indexOf(org.exams.toLowerCase()) > -1 : false">Хорошо
                        </option>
                        <option value="Удовлетворительно"
                                :selected="org.exams ? ['удовлетворительно'].indexOf(org.exams.toLowerCase()) > -1 : false">
                          Удовлетворительно
                        </option>
                        <option value="Неудовлетворительно"
                                :selected="org.exams ? ['неудовлетворительно'].indexOf(org.exams.toLowerCase()) > -1 : false">
                          Неудовлетворительно
                        </option>
                      </select>
                    </label>
                    <label class="select">
                      <span class="label">
                        Выпускная квалификационная работа*
                      </span>
                      <select name="" disabled>
                        <option value=""></option>
                        <option value="Нет"
                                :selected="org['final-work'] ? ['нет'].indexOf(org['final-work'].toLowerCase()) > -1 : false">
                          Нет
                        </option>
                        <option value="Отлично"
                                :selected="org['final-work'] ? ['отлично'].indexOf(org['final-work'].toLowerCase()) > -1 : false">
                          Отлично
                        </option>
                        <option value="Хорошо"
                                :selected="org['final-work'] ? ['хорошо'].indexOf(org['final-work'].toLowerCase()) > -1 : false">
                          Хорошо
                        </option>
                        <option value="Удовлетворительно"
                                :selected="org['final-work'] ? ['удовлетворительно'].indexOf(org['final-work'].toLowerCase()) > -1 : false">
                          Удовлетворительно
                        </option>
                        <option value="Неудовлетворительно"
                                :selected="org['final-work'] ? ['неудовлетворительно'].indexOf(org['final-work'].toLowerCase()) > -1 : false">
                          Неудовлетворительно
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
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

          </div>


          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения о содержании и результатах освоения программ</div>
            <div class="form__row" v-if="json.organizations">
              <div class="form__grid form__grid--5">
                <div class="label label--m0">Наименование дисциплин*</div>
                <div class="label label--m0">Кол-во часов</div>
                <div class="label label--m0">З.Е.</div>
                <div class="label label--m0">Экзамен</div>
                <div class="label label--m0">Зачет (с оц.)</div>

                <template v-for="(subject, subject_id) in json.subjects" :key="subject_id">
                  <label class="input">
                    <input disabled type="text" :value="subject['name']">
                  </label>
                  <label class="input">
                    <input disabled type="text" :value="subject['hours']">
                  </label>
                  <label class="input">
                    <input disabled type="text" :value="subject['credit']">
                  </label>
                  <label class="select">
                    <select name="" disabled id="">
                      <option value=""></option>
                      <option value="Отлично"
                              :selected="subject['score'] ? ['отлично'].indexOf(subject['score'].toLowerCase()) > -1 : false">
                        Отлично
                      </option>
                      <option value="Хорошо"
                              :selected="subject['score'] ? ['хорошо'].indexOf(subject['score'].toLowerCase()) > -1 : false">
                        Хорошо
                      </option>
                      <option value="Удовлетворительно"
                              :selected="subject['score'] ? ['удовлетворительно'].indexOf(subject['score'].toLowerCase()) > -1 : false">
                        Удовлетворительно
                      </option>
                      <option value="Неудовлетворительно"
                              :selected="subject['score'] ? ['неудовлетворительно'].indexOf(subject['score'].toLowerCase()) > -1 : false">
                        Неудовлетворительно
                      </option>
                    </select>
                  </label>
                  <label class="select">
                    <select disabled name="" id="">
                      <option value=""></option>
                      <option value="Зачтено"
                              :selected="subject['offset'] ? ['зачтено'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Зачтено
                      </option>
                      <option value="Незачтено"
                              :selected="subject['offset'] ? ['незачтено'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Незачтено
                      </option>

                      <option value="Отлично"
                              :selected="subject['offset'] ? ['отлично'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Отлично
                      </option>
                      <option value="Хорошо"
                              :selected="subject['offset'] ? ['хорошо'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Хорошо
                      </option>
                      <option value="Удовлетворительно"
                              :selected="subject['offset'] ? ['удовлетворительно'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Удовлетворительно
                      </option>
                      <option value="Неудовлетворительно"
                              :selected="subject['offset'] ? ['неудовлетворительно'].indexOf(subject['offset'].toLowerCase()) > -1 : false">
                        Неудовлетворительно
                      </option>

                    </select>
                  </label>
                </template>

                <template v-if="false">
                  <label class="input">
                    <input disabled type="text">
                  </label>
                  <label class="input">
                    <input disabled type="text">
                  </label>
                  <label class="select">
                    <select name="" disabled>
                      <option value=""></option>
                      <option value="">Отлично</option>
                      <option value="">Хорошо</option>
                      <option value="">Удовлетворительно</option>
                      <option value="">Неудовлетворительно</option>
                    </select>
                  </label>
                  <label class="select">
                    <select name="" disabled>
                      <option value=""></option>
                      <option value="">Зачтено</option>
                      <option value="">Незачтено</option>
                    </select>
                  </label>
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
                <i class="icon icon--save"/><a href="/umam_za.pdf" target="_blank" class="link link--overlap link--gray">Сохранить PDF</a>
              </div>
              <details data-popover="down">
                <summary><i class="icon icon--info"></i></summary>
                <span>Сохранить в&nbsp;формате&nbsp;.pdf</span></details>
            </div>

            <div class="text color-gray mb-30">Информация по заявке:</div>

            <div class="dl dl--w100 mb-30">
              <div class="dl__item">
                <div class="dl__dt">Регистрационный номер:</div>
                <div class="dl__dd">121530</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Тип заявки:</div>
                <div class="dl__dd">Перевод</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Дата подачи:</div>
                <div class="dl__dd">01.12.2022</div>
              </div>
              <div class="dl__item">
                <div class="dl__dt">Статус рассмотрения:</div>
                <div class="dl__dd color-green">Согласовано</div>
              </div>
            </div>
            <div class="cloud cloud--red">
              Готово к оформлению.
              Необходимо предоставить
              оригиналы документов
              <br>
              <br>тел. +7 (911) 123-45-67
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'TransferStep1View',
  components: {},
  data() {
    return {
      loading: false,
      error: '',
      file: '',
      json: {organizations: [{}], subjects: [{}, {}, {}]},
      parsed: false
    }
  },
  computed: {},
  mounted() {
    axios.get('/1.json').then(
        response => {
          this.loading = false;
          this.json = response.data;
          this.parsed = {pdf_creation_date: 'Справка'};
        }
    )
  },
  methods: {
    deleteSubject(id) {
      this.json.subjects.splice(id, 1);
      // console.log(this.json.subjects[id], this.json)
    },
    handleFileUpload(event) {
      this.resetUpload();
      this.file = event.target.files[0];
      this.loading = true;

      if (this.file) {
        // пока подставим 1.json, а потом будем использовать правильный ответ
        axios.get('/1.json').then(
            response => {
              this.loading = false;
              this.json = response.data;
              this.parsed = {pdf_creation_date: 'Справка'};
            }
        )
      }
    },
    resetUpload() {
      this.file = '';
      this.error = '';
      this.json = {organizations: [{}], subjects: [{}, {}, {}]};
      this.parsed = false;
    },
    pushOrg() {
      if (!this.json.organizations) {
        this.json.organizations = [{}];
      }
      this.json.organizations.push({});
    },
    pushSubj() {
      if (!this.json.subjects) {
        this.json.subjects = [{}, {}, {}];
      }
      this.json.subjects.push({});
    }
  }
}
</script>
