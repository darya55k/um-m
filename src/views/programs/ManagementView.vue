<template>

  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/programs">Сетевая программа</router-link>
    <span>Государственное и муниципальное управление</span>
  </div>

  <div class="content">
    <div class="content__row content__row--center mb-100">
      <div class="content__col content__col--50">
        <div class="text--20-27-500 text--lightgrey mb-10">Бакалавриат</div>
        <h2 class="mb-10">38.03.04 Государственное и муниципальное управление</h2>
        <div class="text">РАНХиГС</div>
        <div class="text text--s">Подготовка высококвалифицированных управленцев нового поколения со знанием иностранного языка, обеспечивающих эффективное функционирование всех сфер государственного управления, в том числе сферу внешнеполитической, международной и внешнеэкономической деятельности</div>
        <div class="buttons buttons--left">
          <span class="button button--disabled">Выбрать программу</span>
          <span class="button button--inverse button--inverse-gray">Заполнить заявку</span>
        </div>
      </div>
      <div class="content__col content__col--50">
        <img src="@/assets/style/programs/management-1.png" alt="" class="img-100">
      </div>
    </div>

    <div class="content__row content__row--center mb-100">
      <div class="content__col content__col--50">
        <h2>О программе</h2>
        <div class="text text--s">
          Тестировщик проверяет работу программ и ищет в них ошибки. Он тестирует мобильные приложения, десктопные программы и веб-приложения — от него зависит итоговое качество продукта, которым будет пользоваться клиент
        </div>
      </div>
      <div class="content__col content__col--50">
        <div class="icons">
          <div class="icons__item">
            <div class="icons__value icons__value--users">15 человек</div>
            <div class="icons__name">количество мест</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--form">Очно</div>
            <div class="icons__name">форма обучения</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--start">1 сентября</div>
            <div class="icons__name">начало программы</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--lang">Русский, Английский</div>
            <div class="icons__name">язык обучения</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--days">15 дней</div>
            <div class="icons__name">до конца подачи заявки</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--document">Диплом</div>
            <div class="icons__name">документ об окончании</div>
          </div>
          <div class="icons__item">
            <div class="icons__value icons__value--time">4 года</div>
            <div class="icons__name">продолжительность</div>
          </div>
        </div>
      </div>
    </div>

    <h2>Компетенции и преимущества</h2>
    <div class="content__row content__row--center mb-100">
      <div class="content__col content__col--50">
        <img src="@/assets/style/programs/management-2.png" alt="" class="img-100">
      </div>
      <div class="content__col content__col--50">
        <div class="text text--s mb-0">
          <p class="mb-20">Прохождение практики в органах государственной и муниципальной власти, ведущих организациях частного сектора с возможностью дальнейшего трудоустройства.</p>
          <p class="mb-20">Выпускники смогут работать как в государственном, так и в частном секторе, в первую очередь, во внешнеполитической, международной и внешнеэкономической сферах деятельности.</p>
          <p class="mb-20">Потенциальные места работы:</p>
          <ul class="ul ul--list">
            <li>Департамент развития и регулирования внешнеэкономической деятельности Минэкономразвития</li>
            <li>Департамент международной кооперации и лицензирования в сфере внешней торговли Минпромторга</li>
            <li>Отдел международного сотрудничества и специальных проектов Федерального агентства по делам национальностей и др.</li>
          </ul>
        </div>
      </div>
    </div>

    <h2>План программы</h2>
    <FaqBlock :faq="faq" />

    <h2>В результате вы узнаете</h2>
    <div class="grid mb-100">
      <div class="text">Как находить баги и как устроено тестирование.</div>
      <div class="text">Из чего состоит цикл тестирования.</div>
      <div class="text">Какие задачи выполняют тестировщики.</div>
    </div>

    <h2>Перечень ключевых дисциплин</h2>
    <table class="table-v2 mb-100">
      <tr>
        <th>Обязательные дисциплины</th>
        <th>Форма контроля</th>
        <th>Академических часов</th>
        <th>Количество ЗЕТ</th>
      </tr>
      <tr>
        <td class="table-v2__td-name">Английский язык</td>
        <td>Зачет</td>
        <td>20</td>
        <td>720</td>
      </tr>
      <tr>
        <td class="table-v2__td-name">Русский язык и культура речи</td>
        <td>Экзамен</td>
        <td>Академических часов</td>
        <td>ЗЕТ</td>
      </tr>
      <tr>
        <td class="table-v2__td-name">Компьютерные технологии</td>
        <td>Экзамен</td>
        <td>Академических часов</td>
        <td>ЗЕТ</td>
      </tr>
      <tr>
        <td class="table-v2__td-name">Философия</td>
        <td>Экзамен</td>
        <td>Академических часов</td>
        <td>ЗЕТ</td>
      </tr>
      <tr>
        <td class="table-v2__td-name">Экономика базовый курс</td>
        <td>Зачет</td>
        <td>Академических часов</td>
        <td>ЗЕТ</td>
      </tr>
    </table>

    <h2>Учебный план</h2>
    <CurriculumTabs :curriculum="curriculum" />

    <h2>Где можно пройти обучение</h2>
    <div class="map mb-100">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119892.45920816272!2d37.62803071400508!3d55.72242199410446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab522f420ec37%3A0xf59f393fec7aaa2!2z0KDQkNCd0KXQuNCT0KE!5e0!3m2!1sru!2str!4v1669560869007!5m2!1sru!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <h2>Основная информация</h2>
    <div class="dl mb-100">
      <div class="dl__item">
        <div class="dl__dt">Профиль:</div>
        <div class="dl__dd">Любой</div>
      </div>
      <div class="dl__item">
        <div class="dl__dt">Возраст:</div>
        <div class="dl__dd">Любой</div>
      </div>
      <div class="dl__item">
        <div class="dl__dt">Стоимость:</div>
        <div class="dl__dd">Бесплатно</div>
      </div>
      <div class="dl__item">
        <div class="dl__dt">Сфера деятельности:</div>
        <div class="dl__dd">Информационные и коммуникационные технологии</div>
      </div>
      <div class="dl__item">
        <div class="dl__dt">Форма обучения:</div>
        <div class="dl__dd">Очно</div>
      </div>
      <div class="dl__item">
        <div class="dl__dt">Документ после обучения:</div>
        <div class="dl__dd">Диплом</div>
      </div>
    </div>

    <h2>Похожие программы</h2>
    <div class="tiles">
      <ProgramsList limit="3" />
    </div>
  </div>
</template>

<script>
import CurriculumTabs from '@/components/CurriculumTabs.vue'
import FaqBlock from '@/components/FaqBlock.vue'
import ProgramsList from "@/components/ProgramsList";

export default {
  name: 'AdministrationView',
  components: {
    CurriculumTabs,
    FaqBlock,
    ProgramsList
  },
  data() {
    return {
      faq: [
        {
          show: true,
          q: 'Узнаете о навыках и инструментах.',
          a: 'Самая объемная и насыщенная программа, которая раскрывает способы формирования умений и навыков применять современные статистические методы и технологии в области управления социально-экономическим развитием для выработки компетентных управленческих решений',
        }, {
          show: false,
          q: 'Изучение ряда дисциплин на иностранном языке',
          a: 'Студент изучает ряд дисциплин на иностранном языке (английском): Управление проектами и программами, Управление государственными и муниципальными финансами,Зарубежный опыт государственного управления',
        }, {
          show: false,
          q: 'Партнеры программы.',
          a: 'Самая объемная и насыщенная программа, которая раскрывает все темы. Все уроки даются последовательно и насыщенно, емко и без воды.',
        },
      ],
      curriculum: {
        tabs: [
          {
            name: 'Изучаемые предметы',
            tabs: [
              {
                name: 'Обязательные дисциплины',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }, {
                name: 'Дополнительные дисциплины',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }
            ]
          },
          {
            name: 'Учебный план',
            tabs: [
              {
                name: '1 курс',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '1 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '1 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '1 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '1 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }, {
                name: '2 курс',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '2 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '2 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '2 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '2 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '2 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '2 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '2 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }, {
                name: '3 курс',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '3 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '3 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },{
                    time: '36 часов',
                    subTitle: '3 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }, {
                name: '4 курс',
                items: [
                  {
                    time: '38 часов',
                    subTitle: '4 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '4 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  }, {
                    time: '38 часов',
                    subTitle: '4 курс',
                    title: 'Русский язык и культура речи'
                  }, {
                    time: '36 часов',
                    subTitle: '4 курса',
                    title: 'Элективные дисциплины по физической культуре и спорту',
                  },
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
