<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>文字颜色</h4>
      <p>根据需求自行添加、删除</p>
    </div>
    <example-module>
      <template slot="example-demo">
        <div class="color-list">
          <p class="sp-color-default">默认色</p>
          <p class="sp-color-theme">主题色</p>
          <p class="sp-color-white" style="background-color: #000">白</p>
        </div>
      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;div class=&quot;color-list&quot;&gt;
            &lt;p class=&quot;sp-color-default&quot;&gt;默认色&lt;/p&gt;
            &lt;p class=&quot;sp-color-theme&quot;&gt;主题色&lt;/p&gt;
            &lt;p class=&quot;sp-color-white&quot;&gt;白&lt;/p&gt;
          &lt;/div&gt;
        </highlight-code>
        <highlight-code lang="scss">
          // scss
          @mixin color($position: #000) {
            color: $position
          }
          .sp-color {
            &-white{
              @include color(white)
            }
            &-theme {
              @include color(#09C407)
            }
            &-default {
              @include color(#000)
            }
          }
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'TextColor',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {},
  components: {
    ExampleModule
  }
}
</script>
<style scoped lang="scss" type="text/scss">
  @import '../../../assets/css/UIcss/Text';
</style>
