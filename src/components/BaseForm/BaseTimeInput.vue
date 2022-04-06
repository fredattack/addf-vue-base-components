<template>
  <BaseMaskedInput :label="label"
             :placeholder="placeholder"
             :name="name"
             :value="value"
             :disabled="$can('manage-work')"
             :errors="errors"
             :mask="['##:##']"
             @change.self="getInputValue"
  />
</template>
<script>
import BaseMaskedInput from './BaseMaskedInput.vue'

export default {
  name: 'BaseTimeInput',
  components: {BaseMaskedInput},
  props: {
    errors: {},
    event: {},
    getInputValue: {},
    placeholder: {},
    label: {},
    name: {},
    index: {},
    value: {}
  },

}
</script>
