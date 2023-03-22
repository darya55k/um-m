<template>

  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/programs">Сетевая программа</router-link>
    <span>Управление международными проектами и программами</span>
  </div>

  <div class="content">
    <div class="content__row content__row--center mb-100">
      <div class="content__col content__col--50">
        <div class="text--20-27-500 text--lightgrey mb-10">Бакалавриат</div>
        <h2 class="mb-10">41.03.01 Управление международными проектами и программами</h2>
        <div class="text">РАНХиГС</div>
        <div class="text text--s">Прием проводится на базе среднего общего образования, среднего профессионального образования, высшего образования на основании оцениваемых по стобалльной шкале результатов ЕГЭ и (или) вступительных испытаний, проводимых Академией самостоятельно для отдельных категорий поступающих.</div>
        <div class="buttons buttons--left">
          <span class="button button--disabled">Выбрать программу</span>
          <span class="button button--inverse button--inverse-gray">Заполнить заявку</span>
        </div>
      </div>
      <div class="content__col content__col--50">
        <img src="@/assets/style/programs/administration-1.png" alt="" class="img-100">
      </div>
    </div>

    <div class="content__row content__row--center mb-100">
      <div class="content__col content__col--50">
        <h2>О программе</h2>
        <div class="text text--s">
          Мы создаем условия, при которых каждый студент имеет опыт международной коммуникации. Наши выпускники знают не только теорию, но и практику международного сотрудничества
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
        <img src="@/assets/style/programs/administration-2.png" alt="" class="img-100">
      </div>
      <div class="content__col content__col--50">
        <div class="text text--s mb-0">
          <p class="mb-20">Преимущества программы:</p>
          <ul class="ul ul--list">
            <li>формирование глубоких знаний о регионе специализации и навыков международной проектной деятельности;</li>
            <li>обучение двум иностранным языкам, обучение на иностранных языках (с 3-го курса), государственный экзамен по языку региона специализации;</li>
            <li>раннее формирование навыков межкультурной коммуникации, совместное обучение с иностранными студентами;</li>
            <li>гарантированное обеспечение студентов местами практики, в том числе длительной преддипломной практики;</li>
            <li>возможность обучения в зарубежных университетах, программы академической студенческой мобильности (студенческих обменов), зарубежные стажировки;</li>
            <li>участие в научных исследованиях, проводимых Академией и потенциальными работодателями, возможности публикаций в научных журналах;</li>
          </ul>
          <p>* Возможен выезд за рубеж по программам академической мобильности.
            Полный перечень зарубежных партнеров можно изучить по ссылке:
            «Наши зарубежные партнеры».</p>
        </div>
      </div>
    </div>

    <h2>План программы</h2>
    <FaqBlock :faq="faq" />

    <h2>В результате вы узнаете</h2>
    <div class="grid mb-100">
      <div class="text">узнаеет теорию управления, основы разработки, организации и реализации международных проектов с учетом системы социально-экономических, правовых особенностей региона специализации</div>
      <div class="text">научитесь применять PR- инструменты, средства рекламы для продвижения международных проектов, в том числе с помощью интернет-ресурсов и цифровых технологий</div>
      <div class="text">освоите навыки международных маркетинговых исследований, анализа конкурентной среды, формирования команды международного проекта</div>
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
        <div class="dl__dd">Международняе отношения</div>
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
          q: 'По каким программам будет проходить обучение.',
          a: 'Самая объемная и насыщенная программа, которая раскрывает способы формирования умений и навыков применять современные статистические методы и технологии в области управления социально-экономическим развитием для выработки компетентных управленческих решений',
        }, {
          show: false,
          q: 'Освоите жизненный цикл тестирования ПО.',
          a: 'Самая объемная и насыщенная программа, которая раскрывает все темы. Все уроки даются последовательно и насыщенно, емко и без воды.',
        }, {
          show: false,
          q: 'Изучите функциональное и нефункциональное тестирование.',
          a: 'Самая объемная и насыщенная программа, которая раскрывает способы формирования умений и навыков применять современные статистические методы и технологии в области управления социально-экономическим развитием для выработки компетентных управленческих решений',
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
