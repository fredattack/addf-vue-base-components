<template>
  <main class="pos grid mt-5" :class="bodyClass">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'BasePageBody',
  props: {
    cols: {
      type: Number,
      required: false,
      default: 12
    },
    gap: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    bodyClass() {
      return [
          `grid-cols-${this.cols}`,
          `gap-${this.gap}`
      ]
    }
  }
}
</script>

<style scoped>

</style>
