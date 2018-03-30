<template>
  <div id="app">
    <heater></heater>
    <div class="wrapper-container">
      <div class="sp-row">
        <navigate-lists></navigate-lists>
        <article-content></article-content>
      </div>
    </div>
  </div>
</template>

<script>
import Heater from './components/SPHeater.vue'
import NavigateLists from './components/Navigate/NavigateLists.vue'
import ArticleContent from './components/Article/ArticleContent.vue'
export default {
  name: 'App',
  components: {
    Heater,
    NavigateLists,
    ArticleContent
  }
}
</script>

<style>
#app {
  height: 100%;
  text-align: center;
  color: #2c3e50;
}
.wrapper-container {
  background: #fff;
  width: 90%;
  height: calc(100% - 120px);
  margin: 20px auto 20px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}
.sp-row {
  display: flex;
  height: 100%;
}
.sp-row:after, .sp-row:before {
  content: "";
  display: table;
}
</style>
