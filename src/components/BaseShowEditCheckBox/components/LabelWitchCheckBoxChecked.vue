<template>

  <font-awesome-icon :icon='["fal","check-square"]' class='mr-1 text-blue-900 mt-2'/>
  {{ translatedLabel }}

</template>
<script>
export default {
  name: 'labelWitchCheckBoxChecked',
  props: {
    element: {},
    translatable: {},
    translationExtention: {}
  },
  computed: {
    translatedLabel() {
      if (this.translatable) {
      return this.$t(`${this.translationExtention}.${this.element.name}`)
      }
      else{
        return this.element.name
      }
    }
  }
}
</script>
