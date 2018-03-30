<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>文字超出截断</h4>
      <p>超出截断,以省略号显示。 自定义显示长度、行数</p>
    </div>
    <example-module>
      <template slot="example-demo">
        <p class="sp-nowrap-flex">
          文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！</p>
        <p class="sp-nowrap">
          文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！</p>
        <p class="sp-nowrap-multi">
          文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏
          文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏！文字显示一行，超出部分隐藏
        </p>

      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;p class=&quot;sp-nowrap&quot;&gt;
            文字显示一行，超出部分隐藏！
          &lt;/p&gt;
        </highlight-code>
        <highlight-code lang="scss">
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'TextNowrap',
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
