<template>
  <div>
    <div class="faq">
      <template v-for="(item, index) in faq" v-bind:key="index">
        <div class="faq-item">
          <a :class="item.show ? 'faq-q--active' : ''" @click.prevent="item.show = !item.show" href="" class="faq-q">{{ item.q }}</a>
          <div v-if="item.show" class="faq-a">{{ item.a }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqBlock',
  props: {
    faq: Array
  },
  data() {
    return {
    }
  }, mounted() {
  }
}
</script>
