<template>
  <div v-if="label" class="text-sm text-gray-500 capitalize-first">
    {{ label }} <span v-if="required" class="text-red-500 capitalize">*</span>
  </div>
</template>
<script>
export default {
  name: 'BaseEditLabel',
  props: {
    label: {
      required : false,
      default:''
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    }
  },
}
</script>
