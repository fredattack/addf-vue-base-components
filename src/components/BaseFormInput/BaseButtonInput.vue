<template>
  <div class='mt-3'>
    <label v-if='label' :for="name" class="form-label capitalize-first">
      {{ label }}&nbsp;<span class="text-red-600" v-if="isRequired">*</span>
    </label>
    <div class='relative'>
      <input
        :name='name'
        :type="type"
        :class="cInputClass"
        :min='min'
        :max='max'
        :value="value"
        v-model='newValue'
        :id='name'
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        class='border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1'/>
      <font-awesome-icon v-if='isClickable' class='absolute right-0 top-0 h-full flex item-center cursor-pointer mx-1 dark:bg-dark-2 mr-4 w-3' :icon="['fal', icon]" size='2x' @click='buttonFunction'/>
      <font-awesome-icon v-else class='absolute right-0 top-0 h-full flex item-center  mx-1 dark:bg-dark-2 mr-4 w-3' :icon="['fal', icon]" size='2x' />
    </div>

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name), max: this.max, min: this.min}) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseButtonInput',
  props: {
    isClickable: { type: Boolean, required: false, default: false},
    buttonFunction: {},
    icon: { type: String, required: true, default: 'euro' },
    name: { type: String, required: true },
    value: { type: [String, Number], required: false },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    errors: { type: Object, required: false },
    type: { type: String, required: false, default: 'text', validator: function(value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea', 'number']
        return admittedTypes.indexOf(value) !== -1
      } },
    parseType: { type: String, required: false, default: 'text', validator: function (value) {
        const admittedTypes = ['text','int','float']
        return admittedTypes.indexOf(value) !== -1
      } },
    inputClass: { type: String, required: false, default: '' },
    min: {type: Number, required: false},
    max: {type: Number, required: false},
  },
  data() {
    return {
      newValue: this.value
    }
  },
  computed: {
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  watch: {
    newValue(newValue) {
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
            value: newValue,
            attribute: this.name
          });
      }
    },
  },
}
</script>

<!--<style scoped>-->
<!--input::-webkit-outer-spin-button,-->
<!--input::-webkit-inner-spin-button {-->
<!--  -webkit-appearance: none;-->
<!--  margin: 0;-->
<!--}-->

<!--input[type=number] {-->
<!--  -moz-appearance: textfield;-->
<!--}-->
<!--</style>-->
