<!-- boucle dans props option, affiche key, retourne value
on peux changer ce comportement avec les options isReturningKey et isShowingKey-->

<template>
  <div class='mt-3'>
    <label v-if='label' class="form-label capitalize-first" >{{ label }}&nbsp;<span class="text-red-600" v-if="label && required">*</span></label>
    <div :class="cPlacement">
      <div class='form-check mr-2' v-for='(val, key) in options' :key='key'>
        <input v-if='isReturningKey === true' :id='`${name}-${key}-${extra_id}`' class='form-check-input' type='radio' :name='temp_name'
               :value='trackBy ===null ? key : val[trackBy]' v-model='value' :disabled="disabled">
        <input v-else :id='`${name}-${key}-${extra_id}`' class='form-check-input' type='radio' :name='temp_name'
               :value='trackBy ===null ? val : val[trackBy]' v-model='value' :disabled="disabled">

        <label v-if='isShowingKey === true ' class='form-check-label capitalize-first'
               :for='`${name}-${key}-${extra_id}`'>{{ this.translatable ? $t(`${translationExtention}.${key}`) : val[attributeLabel]
          }}</label>
        <label v-else class='form-check-label capitalize-first' :for='`${name}-${key}-${extra_id}`'>
          {{ this.translatable ? $t(`${translationExtention}.${trackBy ===null ? key : val[attributeLabel]}`) : val[attributeLabel] }}</label>
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
  name: 'BaseSimpleRadioGroup',
  emits: ['change'],
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  props: {
    options: { type: [Array, Object], required: true },
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: [String, Number], required: false },
    translationExtention: {type: String, required: false},
    isReturningKey: { type: Boolean, required: false, default: false },
    isShowingKey: { type: Boolean, required: false, default: false },
    attributeLabel: { type: String, required: false, default: 'name' },
    trackBy: { type: String, required: false, default: null },
    translatable:{type: Boolean,required:false,default:true},
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
      if (newValue) {
        this.$emit('change', { attribute: this.name, value: newValue })
      }
    }
  },

}
</script>

<!--<style>-->
<!--.form-check-input[type=radio]:checked{-->
<!--  border-color: #357699 !important;-->
<!--  background-color: #357699 !important;-->
<!--  /*box-shadow: #357699 !important;*/-->
<!--}-->
<!--.form-check-input[type=radio]:focus{-->
<!--  /*border-color: #357699 !important;*/-->
<!--  /*background-color: #357699 !important;*/-->
<!--  box-shadow: #357699 !important;-->
<!--}-->
<!--</style>-->
