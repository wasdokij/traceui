<template>
  <ul class="sp-menu">
    <li
      class="sp-menu-item"
      :class="{ 'sp-menu-item-active' : NavActive === key.path}"
      v-for="(key, index) in MenuLists"
      :key="index"
      @click="onNav(key.path)"
    >
      {{key.name}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NavigateLists',
  data () {
    return {
      NavActive: '/',
      MenuLists: [
        {
          path: '/text',
          name: 'Text'
        },
        {
          path: '/layout',
          name: 'Layout'
        },
        {
          path: '/dialog',
          name: 'Dialog'
        }
      ]
    }
  },
  created () {
  },
  watch: {
    NavActive: {
      handler (val, oldVal) {
        if (val === '/') {
          this.NavActive = '/text'
        } else {
          this.NavActive = this.$route.path
        }
      },
      immediate: true
    }
  },
  methods: {
    onNav (path) {
      this.NavActive = path
      this.$router.push({path: path})
    }
  }
}
</script>
<style scoped lang="scss" type="text/scss">
  .sp-menu{
    position: relative;
    display: block;
    width: 19.99%;
    margin: 0;
    padding: 0;
    color: #657180;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #e6e6e6;

    &-item{
      padding: 14px 24px;
      position: relative;
      cursor: pointer;
      z-index: 1;

      &-active{
        color: #09C407;
        border-right: 2px solid #09C407;
        z-index: 2;
      }
    }
  }
</style>
