<template>
  <div >
    <div v-if="label" :class="cLabelClass">
      {{ label }}
    </div >
    <div class="flex" v-if="hideModelValue">
      <dd class="capitalize-first">
        {{ modelValue === null || modelValue === '' ? '-' : "**********" }}
      </dd >
    </div >
    <div class="flex" v-else>
      <dd class="capitalize-first">
        {{ modelValue === null || modelValue === '' ? '-' : modelValue }}
      </dd >
      <dd v-if="additionalInformation" class="ml-2">({{ additionalInformation }})</dd>
    </div >
  </div >
</template>
<script>

export default {
  name: 'BaseShowLabel',
  props: {
    additionalInformation: {
      type: String,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: true
    },
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
    hideModelValue: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    cLabelClass() {
      return this.labelClass === '' ? 'text-sm font-medium text-gray-500 capitalize-first' : this.labelClass
    },

  }

}
</script>

