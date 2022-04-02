<template>
  <section>
    <header v-if="$slots.sectionTitle || ( sectionTitle && sectionTitle.length)">
      <slot name="sectionTitle">
        <h2 class="text-xl font-bold capitalize-first">{{ sectionTitle }}</h2>
      </slot>
    </header>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseCardSection',
  props: {
    sectionTitle: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
