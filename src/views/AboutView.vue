<template>
  <div class="content">
    <div class="content__row">
      <div class="content__col content__col--2">

        <div class="title title--24">Заявка на перевод</div>
        <div class="title title--32 title--mb0">Программа перевода “Экономика”</div>
        <div class="title title--16 title--grey title--mb60">РАНХиГС</div>


        <form action="" class="form">

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения о заявителе</div>

            <div class="form__row">
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                      Имя*
                  </span>
                  <input type="text">
                </label>
              </div>
              <div class="form__row">
                <label class="input input--grow">
                  <span class="label">
                      Фамилия*
                  </span>
                  <input type="text">
                </label>
              </div>
              <div class="form__row">
                <div class="form__grid form__grid--2 form__grid--gap20">
                  <label class="input">
                    <span class="label">
                       Отчество (при наличии)
                    </span>
                    <input type="text">
                  </label>
                  <label class="input input--calendar">
                    <span class="label">
                       Дата рождения
                    </span>
                    <input type="text">
                  </label>

                  <label class="input">
                    <span class="label">
                       Телфон*
                    </span>
                    <input type="tel">
                  </label>
                  <label class="input">
                    <span class="label">
                       e-mail*
                    </span>
                    <input type="email">
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения об образовании</div>

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
              <button class="button button--s button--grey button--square" id="add_place">+</button>
              <label for="add_place" class="label label--m0 label--s">Добавить дисциплину</label>
            </div>
          </div>


          <div class="form__block">
            <div class="title title--24 title--mb40">Сведения о содержании и результатах освоения программ</div>
            <div class="form__row">
              <div class="form__grid form__grid--4">
                <div class="label label--m0">Наименование дисциплин*</div>
                <div class="label label--m0">Кол-во часов (з.е)</div>
                <div class="label label--m0">Оценка</div>
                <div class="label label--m0">Зачет</div>

                <label class="select">
                  <select name="" id="">
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                  </select>
                </label>
                <label class="input">
                  <input type="tel">
                </label>
                <label class="input">
                  <input type="text">
                </label>
                <label class="input">
                  <input type="text">
                </label>

                <label class="select">
                  <select name="" id="">
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                  </select>
                </label>
                <label class="input">
                  <input type="tel">
                </label>
                <label class="input">
                  <input type="text">
                </label>
                <label class="input">
                  <input type="text">
                </label>

                <label class="select">
                  <select name="" id="">
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                  </select>
                </label>
                <label class="input">
                  <input type="tel">
                </label>
                <label class="input">
                  <input type="text">
                </label>
                <label class="input">
                  <input type="text">
                </label>

                <label class="select">
                  <select name="" id="">
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                  </select>
                </label>
                <label class="input">
                  <input type="tel">
                </label>
                <label class="input">
                  <input type="text">
                </label>
                <label class="input">
                  <input type="text">
                </label>

                <label class="select">
                  <select name="" id="">
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                    <option value="">Безопасность жизнедеятельности</option>
                  </select>
                </label>
                <label class="input">
                  <input type="tel">
                </label>
                <label class="input">
                  <input type="text">
                </label>
                <label class="input">
                  <input type="text">
                </label>
              </div>
            </div>
            <div class="form__row form__row--flex">
              <button class="button button--s button--grey button--square" id="add_place">+</button>
              <label for="add_place" class="label label--m0 label--s">Добавить дисциплину</label>
            </div>
          </div>

          <div class="title title--24 title--mb40">Прикрепленные документы</div>
        </form>

      </div>
      <div class="content__col content__col--1"></div>
    </div>
  </div>

</template>
