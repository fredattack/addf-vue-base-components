<template>
  <template v-if="editionMode" >
    <div class='mt-3' :key='internalValue'>
      <BaseEditLabel :label="label" :required="required" />
      <div :class="cPlacement">
        <div class='form-check mr-2' v-for='(val, key) in options' :key='key'>
          <input :id='`${name}-${key}-${extra_id}`' class='form-check-input' type='radio' :name='temp_name'
                 :value='val' v-model='internalValue' :disabled="disabled"
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
  <template v-else >
    <BaseShowLabel :label="label" :model-value="displaydValueWhenNotInEditMode" />
  </template>
</template>

<script>
export default {
  name: 'BaseShowEditBooleanRadioGroup',
  emits: ['change'],
  data() {
    return {
      internalValue: false,
      options: {1: true, 0: false}
    }
  },
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      required: false,
      default:null
    },
    name: { type: String, required: true },
    label: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false },
    editionMode: {
      type: Boolean,
      required: true
    },
  },
  computed:{
    temp_name(){
      return this.name + this.extra_id
    },
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
    displaydValueWhenNotInEditMode(){
      return this.$t(`enums.yes_no.${Boolean(this.internalValue)}`)
    },
  },
  watch: {
    modelValue: {
      handler(newValue) {
        this.internalValue = Boolean(newValue)
      },
      immediate: true,
      deep: true,
    },
    internalValue(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('update:modelValue', Boolean(newValue))
        this.$emit('change', Boolean(newValue))
      }
    }
  },
}
</script>

