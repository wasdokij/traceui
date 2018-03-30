<template>
  <article>
    <div class="wrapper-article-describe">
      <h4>Float 网格</h4>
    </div>
    <example-module>
      <template slot="example-demo">
        <ul class="sp-grids">
          <li class="sp-grids-grid">1</li>
          <li class="sp-grids-grid">2</li>
          <li class="sp-grids-grid">3</li>
          <li class="sp-grids-grid">4</li>
          <li class="sp-grids-grid">5</li>
          <li class="sp-grids-grid">6</li>
          <li class="sp-grids-grid">7</li>
          <li class="sp-grids-grid">8</li>
          <li class="sp-grids-grid">9</li>
        </ul>
      </template>
      <template slot="example-code">
        <highlight-code lang="html">
          &lt;ul class=&quot;sp-grids&quot;&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;1&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;2&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;3&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;4&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;5&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;6&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;7&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;8&lt;/li&gt;
            &lt;li class=&quot;sp-grids-grid&quot;&gt;9&lt;/li&gt;
          &lt;/ul&gt;
        </highlight-code>
      </template>
    </example-module>
  </article>
</template>
<script>
import ExampleModule from '../../Base/Example/ExampleModule.vue'
export default {
  name: 'GridLayout',
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
  .sp-grids{
    li > li{

    }
  }
</style>
