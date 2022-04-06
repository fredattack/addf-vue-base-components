<template>
  <input :id="`${name}-${key}`"
         class='form-check-input'
         type='checkbox'
         :name='name'
         :value="trackBy ===null ? key : element[trackBy]"
         @change="updateInput"
         :checked="modelValue">
  <br>
  <label class='form-check-label capitalize-first' :for="`${name}-${key}`">
    {{ translatedLabel }}
  </label>
</template>
<script>
export default {
  name: 'checkboxWithInput',
  props: {
    attributeLabel: {},
    key: {},
    modelValue: {},
    name: {},
    trackBy: {},
    translatable: {},
    translationExtention: {},
    updateInput: {},
    element: {}
  },
  computed: {
    translatedLabel() {
      if (this.translatable) {
        return this.$t(`${this.translationExtention}.${this.key}`)
      } else {
        return this.element[this.attributeLabel]
      }
    }
  },
}
</script>
