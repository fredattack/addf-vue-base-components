<template>
  <BaseInputMasked :label="label"
                   :placeholder="placeholder"
                   :name="name"
                   :value="value"
                   :disabled="disabled"
                   :errors="errors"
                   :required="required"
                   :mask="[format]"
                   @change.self="getInputValue"

  />
</template>

<script>
import BaseInputMasked from "./BaseMaskedInput.vue";

export default {
  name: 'BaseDateInput',
  components: {BaseInputMasked},
  props: {
    errors: {},
    event: {},
    format: {type: String, required: false, default: "##/##/####"},
    required: { type: Boolean, required: false, default: false },
    getInputValue: {},
    placeholder: {},
    label: {},
    name: {},
    index: {},
    disabled: {type: Boolean, required: false, default:false},
    value: {}
  },
  data() {
    return {
      customTokens: {
        'H': {pattern: /[0-2]/},
        'h': {pattern: /[0-3]/},
        'M': {pattern: /[0-5]/},
        'm': {pattern: /[0-9]/},

      },
    }
  },
}
</script>

