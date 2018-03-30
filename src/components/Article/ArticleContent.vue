<template>
  <div class="sp-article">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'ArticleContent',
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}
</script>
<style scoped lang="scss" type="text/scss">
  .sp-article{
    position: relative;
    width: 83%;
    height: 100%;
    padding: 20px 25px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
