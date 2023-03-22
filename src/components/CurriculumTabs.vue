<template>
  <div class="curriculum mb-100">

    <div class="curriculum__tabs">
      <template v-for="(item, index) in curriculum.tabs" v-bind:key="index">
        <a @click.prevent="curriculumTabIndex = index; curriculumTab2Index = 0" class="curriculum__tabs-link" :class="index === curriculumTabIndex ? 'curriculum__tabs-link--active': ''" href="">{{item.name}}</a>
      </template>
    </div>

    <div class="curriculum__tabs curriculum__tabs--2">
      <template v-for="(item, index) in curriculum.tabs[curriculumTabIndex].tabs" v-bind:key="index">
        <a @click.prevent="curriculumTab2Index = index" class="curriculum__tabs-link curriculum__tabs-link--2" :class="index === curriculumTab2Index ? 'curriculum__tabs-link--active': ''" href="">{{item.name}}</a>
      </template>
    </div>

    <div class="curriculum__tab">
      <div class="curriculum__items">
        <template v-for="(item, index) in curriculum.tabs[curriculumTabIndex].tabs[curriculumTab2Index].items" v-bind:key="index">
          <div class="curriculum__item">
            <div class="curriculum__item-head">
              <div class="curriculum__item-left">{{ item.time }}</div>
              <div class="curriculum__item-right">{{ item.subTitle }}</div>
            </div>
            <div class="curriculum__item-name">{{ item.title }}</div>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CurriculumTabs',
  props: {
    curriculum: Object
  },
  data() {
    return {
      curriculumTabIndex: 0,
      curriculumTab2Index: 0,
    }
  }, mounted() {
  }
}
</script>
