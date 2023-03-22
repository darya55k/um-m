<template>
  <div class="breadcrumbs">
    <router-link to="/">Внутрироссийская академическая мобильность</router-link>
    <router-link to="/personal">Мое обучение</router-link>
    <span>Избранное </span>
  </div>
  <div class="content">
    <div class="content__row">
      <div class="content__col content__col--1">
        <LeftMenu />
      </div>
      <div class="content__col content__col--2">
        <h2>Избранное</h2>
        <div class="tiles mb-100">
          <ProgramsList v-bind="{ limit: 2, favourite: true }"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProgramsList from "@/components/ProgramsList";
import LeftMenu from "@/components/LeftMenu";

export default {
  name: 'PersonalView',
  components: {
    ProgramsList,
    LeftMenu
  },
  data() {
    return {}
  }
}
</script>
