<template>
  <div class="wrapper-article">
    <text-border></text-border>
    <text-color></text-color>
    <text-nowrap></text-nowrap>
  </div>
</template>
<script>
import TextBorder from './TextBorder.vue'
import TextColor from './TextColor.vue'
import TextNowrap from './TextNowrap.vue'
export default {
  name: 'TextCOM',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {},
  components: {
    TextBorder,
    TextColor,
    TextNowrap
  }
}
</script>
<style scoped lang="scss" type="text/scss">
</style>
