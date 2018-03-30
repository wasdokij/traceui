<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>边框</h4>
    </div>
    <example-module>
      <template slot="example-demo">
        <ul class="border-list">
          <li class="sp-border">边框</li>
          <li class="sp-border-t">上边框</li>
          <li class="sp-border-b">下边框</li>
          <li class="sp-border-tb">上下边框</li>
          <li class="sp-border-l">左边框</li>
          <li class="sp-border-r">右边框</li>
        </ul>
      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;ul class=&quot;border-list&quot;&gt;
            &lt;li class=&quot;sp-border&quot;&gt;边框&lt;/li&gt;
            &lt;li class=&quot;sp-border-t&quot;&gt;上边框&lt;/li&gt;
            &lt;li class=&quot;sp-border-b&quot;&gt;下边框&lt;/li&gt;
            &lt;li class=&quot;sp-border-tb&quot;&gt;上下边框&lt;/li&gt;
            &lt;li class=&quot;sp-border-l&quot;&gt;左边框&lt;/li&gt;
            &lt;li class=&quot;sp-border-r&quot;&gt;右边框&lt;/li&gt;
          &lt;/ul&gt;
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'TextBorder',
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
  .border-list{
    > li{
      position: relative;
      margin: 5px 0;
    }
  }
</style>
