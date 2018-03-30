<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>Float 网格</h4>
    </div>
    <example-module>
      <template slot="example-demo">
        <ul class="sp-row-float">
          <li class="sp-col sp-col-50">50</li>
          <li class="sp-col sp-col-50">50</li>
          <li class="sp-col sp-col-10">10</li>
          <li class="sp-col sp-col-90">90</li>
          <li class="sp-col sp-col-20">20</li>
          <li class="sp-col sp-col-80">80</li>
          <li class="sp-col sp-col-30">30</li>
          <li class="sp-col sp-col-70">70</li>
        </ul>
      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;ul class=&quot;sp-row-float&quot;&gt;
            &lt;li class=&quot;sp-col sp-col-50&quot;&gt;50&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-50&quot;&gt;50&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-10&quot;&gt;10&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-90&quot;&gt;90&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-20&quot;&gt;20&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-80&quot;&gt;80&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-30&quot;&gt;30&lt;/li&gt;
            &lt;li class=&quot;sp-col sp-col-70&quot;&gt;70&lt;/li&gt;
          &lt;/ul&gt;
        </highlight-code>
        <highlight-code lang="scss">
          // scss 根据需求修改
          @mixin row-float($width...) {
            @for $i from 1 through length($width) {
              .sp-col-#{nth($width, $i)} {
                width: nth($width, $i) + 0%
              }
            }
          }
          .sp-row-float {
            $px: 10 20 30 50 70 80 90; // 修改删格大小%
            @include row-float($px...)
          }
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'FloatLayout',
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
