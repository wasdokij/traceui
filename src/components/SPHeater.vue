<template>
  <div class="wrapper-header">
    <div class="wrapper-header-nav sp-justify-space">
      <div class="wrapper-header-nav-logo">logo</div>
      <ul class="wrapper-header-nav-list">
        <li>首页</li>
        <li>组件</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}
</script>
<style scoped lang="scss" type="text/scss">
  .wrapper-header {
    height: 80px;
    background-color: #fff;
    -webkit-box-shadow: 0 5px 15px -17px rgba(0, 0, 0, 0.42), 0 3px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 15px -17px rgba(0, 0, 0, 0.42), 0 3px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px -5px rgba(0, 0, 0, 0.2);
    &-nav{
      width: 90%;
      height: 80px;
      margin: 0 auto;

      &-logo{
      }
      &-list{
        display: flex;
      }
    }
  }
</style>
