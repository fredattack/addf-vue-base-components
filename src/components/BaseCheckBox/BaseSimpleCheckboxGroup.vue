<template>
  <div class="mt-3">
    <label v-if="label" class="form-label capitalize-first" >{{ label }}</label>
    <div class="flex flex-col sm:flex-row mt-3">
      <div class="form-check mr-4 sm:mt-0" v-for="(val,key) in options" :key="key">
        <input :id="`${name}-${key}`" class="form-check-input" type="checkbox" :value="trackBy ===null ? key : val[trackBy]" v-model="value">
        <label class="form-check-label capitalize-first" :for="`${name}-${key}`">{{ this.translatable ?   $t(`${translationExtention}.${key}`) : val[attributeLabel] }}</label>
      </div>
   </div>
  </div>
  <div v-if="errors" class="form-help text-red-600">
    <div v-for='(error,index) in errors' :key='index'>{{ $t(error, {'attribute': $t('attributes.' + name)}) }}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseSimpleCheckboxGroup',
  props: {
    options: {type: Object, required: true},
    name: {type: String, required: true},
    label: {type: String, required: false},
    defaultValue: {type: Array, required: false, default() { return [] }},
    translationExtention: {type: String, required: false},
    translatable:{type: Boolean,required:false,default:true},
    attributeLabel:{type: String, required: false,default:'name'},
    errors: {
      type: Object,
      required: false
    },
    trackBy:{type:String,required:false,default:null}
  },
  data() {
    return {
      value: this.defaultValue
    }
  },
  watch:{
    value(newValue){
      if(newValue){  newValue
        this.$emit('change', {attribute: this.name, value: newValue})
      }
    }
  }
}
</script>

