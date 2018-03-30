<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>Flex 网格</h4>
    </div>
    <example-module>
      <template slot="example-demo">
        <ul class="sp-row-flex">
          <li class="sp-col-1">均分</li>
          <li class="sp-col-1">均分</li>
          <li class="sp-col-1">均分</li>
          <li class="sp-col-1">均分</li>
        </ul>
        <ul class="sp-row-flex">
          <li class="sp-col-1">1/3</li>
          <li class="sp-col-2">2/3</li>
        </ul>
        <ul class="sp-row-flex">
          <li class="sp-col-1">1/4</li>
          <li class="sp-col-3">3/4</li>
        </ul>
        <ul class="sp-row-flex">
          <li class="sp-col-2">2/5</li>
          <li class="sp-col-3">3/5</li>
        </ul>
      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;ul class=&quot;sp-row-flex&quot;&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;均分&lt;/li&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;均分&lt;/li&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;均分&lt;/li&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;均分&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class=&quot;sp-row-flex&quot;&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;1/3&lt;/li&gt;
            &lt;li class=&quot;sp-col-2&quot;&gt;2/3&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class=&quot;sp-row-flex&quot;&gt;
            &lt;li class=&quot;sp-col-1&quot;&gt;1/4&lt;/li&gt;
            &lt;li class=&quot;sp-col-3&quot;&gt;3/4&lt;/li&gt;
          &lt;/ul&gt;
          &lt;ul class=&quot;sp-row-flex&quot;&gt;
            &lt;li class=&quot;sp-col-2&quot;&gt;2/5&lt;/li&gt;
            &lt;li class=&quot;sp-col-3&quot;&gt;3/5&lt;/li&gt;
          &lt;/ul&gt;
        </highlight-code>
        <highlight-code lang="scss">
          // scss Webkit内核的浏览器，必须加上-webkit前缀。
          @mixin row-flex($grow...) {
            @for $i from 1 through length($grow) {
              .sp-col-#{nth($grow, $i)}{
                flex-grow: nth($grow, $i)
              }
            }
          }
          .sp-row-flex {
            $flex: 1 2 3; // 修改删格比重
            @include row-flex($flex...)
          }
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'FlexLayout',
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
  @import '../../../assets/css/UIcss/Layout';
</style>
