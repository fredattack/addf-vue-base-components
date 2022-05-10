<template>
  <div :class="cGroupClass">
    <label v-if="label"
           :for="name"
           class='capitalize-first'
           :class="cLabelClass">{{ label }}&nbsp;<span class="text-red-600" v-if="label && isRequired">*</span>
    </label>
    <input :name="name"
           :type="type"
           v-model="modelValue"
           :value="cDefaultValue"
           :id="name"
           :min='min'
           :max='max'
           :class="cInputClass"
           :placeholder="placeholder"
           :disabled="isDisabled"
           :required="isRequired"
           class='border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1'
    />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name), max: this.max, min: this.min}) }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'BaseInputDynamicForm',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea', 'number']
        return admittedTypes.indexOf(value) !== -1
      }
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float']
        return admittedTypes.indexOf(value) !== -1
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    isDefaultValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modelValue: ""
    }
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
    },
    cDefaultValue() {
      return this.isDefaultValue ? this.value : this.modelValue
    }
  },
  watch: {
    modelValue(newValue) {
      switch (this.parseType) {
        case 'int':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseInt(newValue) : '',
            attribute: this.name
          });
          break
        case 'float':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseFloat(newValue) : '',
            attribute: this.name
          });
          break
        default:
          this.$emit('change', {
            value: this.modelValue,
            attribute: this.name
          });

      }
    },

  },

}
</script>

<style scoped>
</style>
