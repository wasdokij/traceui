<template>
  <div class="wrapper-article">
    <float-layout></float-layout>
    <flex-layout></flex-layout>
    <grid-layout></grid-layout>
  </div>
</template>
<script>
import FloatLayout from './FloatLayout.vue'
import FlexLayout from './FlexLayout.vue'
import GridLayout from './GridLayout.vue'
export default {
  name: 'LayoutCOM',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {},
  components: {
    FloatLayout,
    FlexLayout,
    GridLayout
  }
}
</script>
<style scoped lang="scss" type="text/scss">
</style>
