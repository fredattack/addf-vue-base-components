<template>
  <div v-if="label" :class="cLabelClass">
    {{ label }}
  </div>
  <dd class="capitalize-first" v-if="hideModelValue">
    {{ modelValue === null || modelValue === '' ?  '-' : '**********'}}
  </dd>
  <dd class="capitalize-first" v-else>
    {{ modelValue === null || modelValue === '' ?  '-' : modelValue}}
  </dd>
</template>
<script>

export default {
  name: 'BaseShowLabel',
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

