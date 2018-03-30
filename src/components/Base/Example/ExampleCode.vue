<template>
  <div class="example-code">
    <slot
      name="code">
    </slot>
    <div
      class="example-code-downup"
      @click="onDownUp"> {{down ? "展开" : "收起"}}</div>
  </div>
</template>
<script>
export default {
  name: 'ExampleCode',
  props: {
    texts: {
      type: Array
    }
  },
  data () {
    return {
      down: true
    }
  },
  created () {
  },
  methods: {
    onDownUp () {
      this.$emit('emitDownUp', this.down)
      this.down = !this.down
    }
  }
}
</script>
<style scoped lang="scss" type="text/scss">
</style>
