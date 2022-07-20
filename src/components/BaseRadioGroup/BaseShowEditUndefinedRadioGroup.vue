<template>
  <div >
    <template v-if="editionMode">
      <div :key='internalValue' class='mt-3'>
        <BaseEditLabel :label="label" :required="required" />
        <div :class="cPlacement">
          <div v-for='(val, key) in options' :key='key' class='form-check mr-2'>
            <input
              :id='`${name}-${key}-${extra_id}`' v-model='internalValue' class='form-check-input' type='radio'
              :name='temp_name' :value='val' :disabled="disabled"
            >
            
            <label class='form-check-label capitalize-first' :for='`${name}-${key}-${extra_id}`'>
              {{ $t(`enums.yes_no.${ key }`) }}
            </label >
          
          </div >
        </div >
      </div >
      <template v-if='errors'>
        <div v-for='(error,index) in errors' :key='index' class='form-help text-red-600'>
          {{ $t(error, { 'attribute': $t('attributes.' + name) }) }}
        </div >
      </template >
    </template >
    <template v-else>
      <BaseShowLabel :label="label" :model-value="displaydValueWhenNotInEditMode" />
    </template >
  </div >
</template>

<script>
export default {
  name: 'BaseShowEditUndefinedRadioGroup',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      required: false,
      default:null
    },
    name: { type: String, required: true },
    label: { type: String, required: false, default: null },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {type: String, required: false, default: ''},
    errors: { type: Object, required: false, default: null },
    isVertical: {type: Boolean, required: false, default: false },
    editionMode: {
      type: Boolean,
      required: true
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      internalValue: false,
      options: {1: true, 0: false, undefined: 'undefined'},
    }
  },
  computed:{
    temp_name(){
      return this.name + this.extra_id
    },
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
    displaydValueWhenNotInEditMode(){
      if(this.internalValue === 'undefined'){
        return this.$t(`enums.yes_no.undefined`)
      }
      return this.$t(`enums.yes_no.${Boolean(this.internalValue)}`)
    },
  },
  watch: {
    modelValue: {
      handler(newValue) {
        if(newValue === null || newValue === undefined){
          this.internalValue = this.options.undefined
        } else {
          this.internalValue = Boolean(newValue)
        }
      },
      immediate: true,
      deep: true,
    },
    internalValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue !== this.options.undefined){
          this.$emit('update:modelValue', Boolean(newValue))
          this.$emit('change', Boolean(newValue))
        } else {
          this.$emit('update:modelValue', null)
          this.$emit('change', null)
        }
      }
    }
  },
}
</script>
