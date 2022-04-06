<template>
  <div :class="cGroupClass">
    <label :for="name" :class="cLabelClass" class='capitalize-first'>
      {{ label }}&nbsp;<span class="text-red-600" v-if="isRequired">*</span>
    </label>
    <input :name="name"
           :type="type"
           v-model="newValue"
           :id="name"
           :class="cInputClass"
           :placeholder="placeholder"
           :disabled="disabled"
           :required="isRequired"
           v-mask="mask"
           class='border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1' />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>

  </div>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  directives: {mask},
  name: 'BaseInputMasked',
  props: {
    name: { type: String, required: true },
    value: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea']
        return admittedTypes.indexOf(value) !== -1
      } },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    groupClass: { type: String, required: false, default: '' },
    labelClass: { type: String, required: false, default: '' },
    mask: { type: String, required: false, default: '' },
    token: { type: Object, required: false, default() { return {} }
    },
    inputClass: { type: String, required: false, default: '' },
    errors: { type: Object, required: false },
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    isRequired() {
      return this.required
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  data() {
    return {
      newValue: this.value
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('change', {
        value: newValue,
        attribute: this.name
      });
    },
  }
}
</script>

