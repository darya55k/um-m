<template>
  <div class="menu">
    <ul>
      <li>
        <router-link to="/personal">Профиль</router-link>
      </li>
      <li><router-link to="/personal/favourites">Избранное</router-link></li>
      <li><a href="">Документы и справки</a>
        <ul>
          <li><a href="">Персональные данные</a></li>
          <li><a href="">Прочее</a></li>
        </ul>
      </li>
      <li><router-link to="/personal/request">Заявки</router-link>
        <ul>
          <li><router-link to="/personal/request">Все заявки</router-link></li>
          <li><a href="">Перевод</a></li>
          <li><a href="">ДВИЖ</a></li>
          <li><a href="">Черновик</a></li>
          <li><a href="">Архив</a></li>
        </ul>
      </li>
      <li><a href="">Программы</a>
        <ul>
          <li><a href="">Действующие одобрения</a></li>
          <li><a href="">Архив</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
