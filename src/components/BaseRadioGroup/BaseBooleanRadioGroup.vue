<template>
  <div class='mt-3' :key='value'>
    <label v-if='label' class="form-label capitalize-first" >{{ label }}&nbsp;<span class="text-red-600" v-if="label && required">*</span></label>
    <div :class="cPlacement">
      <div class='form-check mr-2' v-for='(val, key) in options' :key='key'>
        <input :id='`${name}-${key}-${extra_id}`' class='form-check-input' type='radio' :name='temp_name'
               :value='val' v-model='value' :disabled="disabled">

        <label class='form-check-label capitalize-first' :for='`${name}-${key}-${extra_id}`'>
          {{ $t(`enums.yes_no.${key}`) }}
        </label>

      </div>
    </div>
  </div>
  <template v-if='errors'>
    <div v-for='(error,index) in errors' :key='index' class='form-help text-red-600'>
      {{ $t(error, {'attribute': $t('attributes.' + name)}) }}
    </div>
  </template>
</template>

<script>
export default {
  name: 'BaseBooleanRadioGroup',
  emits: ['change'],
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id,
      options: {1: true, 0: false}
    }
  },
  props: {
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: Number, required: false }, // 0 pour le mettre à non et 1 pour le mettre à oui
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false }
  },
  computed:{
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
  },
  watch: {
    value(newValue) {
      this.$emit('change', { attribute: this.name, value: newValue })
    }
  },
}
</script>

