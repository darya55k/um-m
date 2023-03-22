<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <span>Перевод</span>
  </div>
  <div class="content content--60">
    <h1>Перевод</h1>
    <div class="tabs">
      <a href="#order" @click.prevent="tabActive = 'order'" :class="tabActive === 'order' ? 'tabs__link--active' : ''" class="tabs__link">Порядок участия</a>
      <a href="#documents" @click.prevent="tabActive = 'documents'" :class="tabActive === 'documents' ? 'tabs__link--active' : ''" class="tabs__link">Пакет документов</a>
      <a href="#request" @click.prevent="tabActive = 'request'" :class="tabActive === 'request' ? 'tabs__link--active' : ''" class="tabs__link">Оформить заявку</a>
      <a href="#faq" @click.prevent="tabActive = 'faq'" :class="tabActive === 'faq' ? 'tabs__link--active' : ''" class="tabs__link">FAQs</a>
    </div>
    <div class="content__row">
      <div class="content__col content__col--2">
        <div class="tab" v-if="tabActive === 'order'" :class="tabActive === 'order' ? 'tab--active' : ''" id="order">
          <h2>Порядок участия</h2>
          <div class="img-block">
            <div class="img-block__left"><img class="img-block__img" src="../assets/style/pic-1.png" alt=""></div>
            <div class="img-block__right">
              <div class="img-block__text">Позвольте себе ставить большие цели, а навыки и знания дадим мы.</div>
              <router-link class="button" to="/programs">Выбрать программу</router-link>
            </div>
          </div>
          <h2>Как перевестись</h2>
          <div class="ol">
            <div class="ol__item">Убедись, что ты соответствуешь критериям перевода</div>
            <div class="ol__item">Изучи информацию и выбери направление или подходящие программы перевода  в рамках своей образовательной программы</div>
            <div class="ol__item">Заполни заявку с учетом сроков согласования и даты начала программы</div>
            <div class="ol__item">Сравните  оценки по выбранному направлению, сравни соответсивие требованиям необходимых  программ и оценок РАНХиГС</div>
            <div class="ol__item">Узнай о результате по переводу по email указанному в профиле</div>
            <div class="ol__item">Если твоя заявка одобрена, готовся к подписанию договора и  переводу в РАНХиГС</div>
          </div>
          <h2>Как подать заявку</h2>
          <div class="text">Смотрите пошаговую инструкцию:</div>
          <div class="video">
            <img src="../assets/style/exmple-video.png" alt="">
          </div>
          <h2>Выбор программы</h2>
          <div class="text">Направления обучения</div>
          <div class="areas">
            <div class="areas__item">
              <div class="areas__title">Маркетинг</div>
              <div class="areas__list">
                <div><a href="">Копирайтер</a></div>
                <div><a href="">SMM-Маркетолог</a></div>
                <div><a href="">SEO-Специалист</a></div>
                <div><a href="">Интернет Маркетолог</a></div>
              </div>
            </div>
            <div class="areas__item">
              <div class="areas__title">Финансы</div>
              <div class="areas__list">
                <div><a href="">Бухгалтер</a></div>
                <div><a href="">Финансис</a></div>
                <div><a href="">Финсовый менеджер</a></div>
                <div><a href="">Экономист</a></div>
              </div>
            </div>
            <div class="areas__item">
              <div class="areas__title">Бизнес и управление</div>
              <div class="areas__list">
                <div><a href="">Product менеджер</a></div>
                <div><a href="">Руководитель отдела</a></div>
              </div>
            </div>
            <div class="areas__item">
              <div class="areas__title">Все программы</div>
              <div class="areas__list">
                <div><a href="">Бухгалтер</a></div>
                <div><a href="">Финансис</a></div>
                <div><a href="">Финсовый менеджер</a></div>
                <div><a href="">Экономист</a></div>
              </div>
            </div>
          </div>
          <h2>Программы</h2>
          <div class="tiles">
            <ProgramsList limit="4" />
          </div>
        </div>
        <div class="tab" v-if="tabActive === 'documents'" :class="tabActive === 'documents' ? 'tab--active' : ''" id="documents">
          <h2>Необходимые документы</h2>
          <div class="text">
            Для участия в программе перевода необходимо собрать следующий пакет документов:
          </div>
          <ul class="ul">
            <li class="ul__ico">Заявка на перевод.</li>
            <li class="ul__ico">Справка с пройденными программмами из ВУЗа в котором в настоящий момент студент проходит обучение.</li>
            <li class="ul__ico">Мотивационное письмо (например)</li>
            <li class="ul__gray">
              Объем слов;
              <br>Другие требования к оформлению.
            </li>
          </ul>
          <div class="text">
            Заявка на перевод осуществляется в строго установленные сроки.
          </div>
        </div>
        <div class="tab" v-if="tabActive === 'request'" :class="tabActive === 'request' ? 'tab--active' : ''" id="request">
          <h2>Оформить заявку</h2>
          <div class="text">Заявка на перевод осуществляется в строго установленные сроки и с соблюдением следующего порядка:</div>
          <ol class="ol-simple">
            <li>Подготовьте пакет документов</li>
            <li>Выберите программы и изучите инструкцию по заполнению</li>
            <li>Войдите/зарегистрируйтесь в свой Профиль и отправьте заявку</li>
          </ol>
          <div class="text">Перед отправкой завки важно помнить:</div>
          <ul class="ul">
            <li class="ul__attention">Заявка в системе заполняется один раз. Вы можете подать заявку больше чем на одну программу. Задвоенные заявки рассматриваться не будут.</li>
            <li class="ul__attention">Перед тем, как подтвердить заявку, рекомендуется проверить правильность заполнения всех полей.</li>
            <li class="ul__attention">Решение на заявку, отправляется только на тот адрес почты, который был указан в заявке в системе.</li>
          </ul>
        </div>
        <div class="tab" v-if="tabActive === 'faq'" :class="tabActive === 'faq' ? 'tab--active' : ''" id="faq">
          <FaqBlock :faq="faq" />
        </div>
      </div>
      <div class="content__col content__col--1 mt-100">
        <div class="sticky">
          <div class="buttons">
            <router-link class="button button--m" to="/programs">Выбрать программу</router-link>
            <!--<router-link class="button button--m button--inverse" to="/transfer-step-1">Оформить заявку</router-link>-->
          </div>
          <div class="information">
            <div class="information__title">Полезная информация:</div>
            <div class="information__text">
              <span class="information__link">Порядок отзыва заявки</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FaqBlock from "@/components/FaqBlock";
import ProgramsList from "@/components/ProgramsList";


export default {
  name: 'TransferView',
  components: {
    FaqBlock,
    ProgramsList,
  },
  data() {
    return {
      tabActive: 'order',
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
    }
  },

}
</script>
