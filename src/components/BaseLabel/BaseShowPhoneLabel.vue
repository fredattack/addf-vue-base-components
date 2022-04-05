<template>
  <label v-if="label" :class="cLabelClass">
    {{ label }}
  </label>
    <div class="mt-1.5 flex place-items-center">
      <span class="flex place-items-center"><country-flag v-if='countryValue' :country='countryValue'  size="small"/></span>
      <span class="ml-1">{{ modelValue === null || modelValue === '' ?  '-' : modelValue}}</span></div>
</template>
<script>
import CountryFlag from 'vue-country-flag-next'
export default {
  name: 'BaseShowPhoneLabel',
  components: {CountryFlag},
  props: {
    label: {},
    modelValue: {},
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    },
    countryValue: {
      type: String,
      required: false,
    }
  },
  computed: {
    cLabelClass() {
      return this.labelClass === '' ? 'text-sm font-medium text-gray-500 capitalize' : this.labelClass
    }
  }

}
</script>
