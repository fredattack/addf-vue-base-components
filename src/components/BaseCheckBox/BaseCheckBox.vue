<template>
  <div class="mt-3">
    <label v-if="label"  class='form-label'>{{ label }}</label><span class="text-red-600" v-if="label && required"> *</span>
    <div class="flex flex-col sm:flex-row mt-2">
      <input :id="`checkbox-${name}`" class="form-check-input" type="checkbox" :name="name" :disabled="disabled" v-model="newValue" >
    </div>
  </div>
  <template v-if="errors">
    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">{{ $t(error, {'attribute': $t('attributes.' + name)}) }}</div>
  </template>
</template>

<script>
export default {
  name: 'BaseCheckBox',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: false,
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
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('checkboxChange',  {
        value: newValue,
        attribute: this.name
      });
    }
  }
}
</script>

