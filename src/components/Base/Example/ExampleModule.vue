<template>
  <div class="example">
    <example-demo
      ref="demo">
      <slot
        name="example-demo"
        slot="demo"
      ></slot>
    </example-demo>
    <example-code
      @emitDownUp="onDownUp"
      ref="code"
      style="height: auto"
      >
      <slot
        name="example-code"
        slot="code"
      >
      </slot>
    </example-code>
  </div>
</template>
<script>
import ExampleDemo from './ExampleDemo.vue'
import ExampleCode from './ExampleCode.vue'
export default {
  name: 'ExampleModule',
  data () {
    return {
      demoDOMs: [],
      codeDOMs: []
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      let demoDOM = this.$refs.demo.$el
      let codeDOM = this.$refs.code.$el
      this.demoDOMs.push(demoDOM)
      this.codeDOMs.push(codeDOM)
      setTimeout(() => {
        codeDOM.style.height = demoDOM.clientHeight + 'px'
      }, 1)
    })
  },
  methods: {
    onDownUp (down) {
      if (down) {
        this.codeDOMs[0].style.height = this.codeDOMs[0].scrollHeight + 'px'
      } else {
        this.codeDOMs[0].style.height = this.demoDOMs[0].clientHeight + 'px'
      }
    }
  },
  components: {
    ExampleDemo,
    ExampleCode
  }
}
</script>
<style scoped lang="scss" type="text/scss">
</style>
