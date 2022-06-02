<template>
  <div class='mt-3'>
    <div v-if='editionMode'>
      <BaseEditLabel :label="label" :required="required"/>
      <div class="w-full relative">
        <div class="absolute inset-y-0 left-0 w-22" v-if="metadata && metadata.countries">
          <select v-model='dCountryValue' :name="this.name+'_country'" @input='updateSelectValue'
                  class="block w-full border rounded-md appearance-none placeholder-gray-500
                  dark:bg-dark-2 dark:border-transparent
                  focus:outline-none
                  disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent
                  border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1">
            <option selected>{{ countryPlaceholder }}</option>
            <option v-for='(model, index) in metadata.countries' :key='index' :value='model.id'>
              {{ `${model.id}` }}
            </option>
          </select>
        </div>
        <input type="text" :name="this.name+'_field'" :id="name"
               class="block w-full border  py-2 px-6 rounded-md appearance-none placeholder-gray-500
               dark:bg-dark-2 dark:border-transparent
               focus:outline-none
               disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent pl-24
                border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
               :placeholder="numberPlaceholder" v-model='dNumberValue' @input='updateNumberField'>
      </div>
      kkk
      {{ phoneErrors }}
      <template v-if="phoneErrors">
        <div v-for='(error,index) in phoneErrors' :key="index" class="form-help text-red-600">
          {{ $t(error[0], {attribute: $t('attributes.' + index)}) }}
        </div>
      </template>
    </div>
    <div v-else>
      <BaseShowPhoneLabel
          :label="label"
          :model-value="dNumberValue"
          :country-value="dCountryValue"
      />
    </div>
  </div>
</template>

<script>

import _ from "core-js/internals/internal-state";

export default {
  name: 'BaseShowEditPhoneInput',
  components: {
    // BaseEditLabel,
    // BaseShowPhoneLabel,
  },
  props: {
    countryValue: {
      type: String,
    },
    numberValue: {
      type: String,
    },
    editionMode: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    countryPlaceholder: {
      type: String,
      required: false
    },
    numberPlaceholder: {
      type: String,
      required: false
    },
    errors: {
      type: Object,
      required: false
    },
    metadata: {
      type: Object,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ['update:countryValue', 'update:numberValue'],
  data() {
    return {
      phoneErrors: null,
      dNumberValue: null,
      dCountryValue: null
    }
  },
  computed: {
    cDisplayedValueWhenNotEditionMode(){
      if(this.countryValue && this.numberValue){
        return `${this.countryValue} - ${this.numberValue}`
      }
      return '-'
    },
  },
  methods: {
    updateSelectValue(event){
        this.$emit("update:countryValue", event.target.value);
    },
    updateNumberField(event){
      this.$emit("update:numberValue", event.target.value);
    },
  },
  mounted() {
    this.dNumberValue = this.numberValue
    this.dCountryValue = this.countryValue
  },
  watch: {
    errors:{
      handler(newValue) {
      this.phoneErrors =  _.pick(newValue,[`${this.name}_country`,`${this.name}_field`])
      },
      deep: true,
        immediate: true,
    },
    numberValue(){
      this.dNumberValue = this.numberValue
    },
    countryValue(){
      this.dCountryValue = this.countryValue
    },
  }
}
</script>
