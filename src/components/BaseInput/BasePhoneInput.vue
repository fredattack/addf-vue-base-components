<template>
  <div class='mt-3'>
    <label :for="name" class="form-label">{{ label }}</label>
    <div class="w-full relative">
      <div class="absolute inset-y-0 left-0 w-22">
        <label class="sr-only">Country</label>
        <select :disabled="isDisabled" v-model='countryValue' :name="this.name+'_country'"
                class="block w-full border rounded-md appearance-none placeholder-gray-500
                dark:bg-dark-2 dark:border-transparent
                focus:outline-none
                disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent
                border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1">
          <option disabled selected>{{ countryPlaceholder }}</option>
          <option v-for='(model, key) in countries' :key='key' :value='model.id' :disabled="!$can('manage_content')">
            {{ model.id }}
          </option>

        </select>

      </div>
      <input type="text" :name="this.name+'_field'" :id="name"
             class="block w-full border  py-2 px-6 rounded-md appearance-none placeholder-gray-500
             dark:bg-dark-2 dark:border-transparent
             focus:outline-none
             disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent pl-24
              border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1
              "
             :disabled="isDisabled" :placeholder="numberPlaceholder" v-model='numberValue'>
    </div>
    <div v-if="errors"  class="form-help text-red-600">
      <div v-for='(error,key) in errors' :key="key">{{ $t(error[0], {attribute: $t('attributes.' + key)}) }}</div>
    </div>
  </div>
</template>

<script>

// import _ from "core-js/internals/internal-state";

export default {
  name: 'PhoneInput',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    model: {
      type:Object,
      required: false
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
    countries: {
      type: Object,
      required: true
    },
    disabled:{
      type: Boolean,
      required: false,
      default:false
    }
  },
  data() {
    return {
      numberValue: null,
      phoneErrors: null,
      countryValue: null,
      metadata: {},
    }
  },
  computed: {
    isDisabled() {
      return this.disabled;
    }
  },
  mounted() {
    this.numberValue = this.model[this.name+'_field']
    this.countryValue = this.model[this.name+'_country']
  },
  watch: {
    model(newValue){
      this.numberValue = newValue[this.name+'_field']
      this.countryValue = newValue[this.name+'_country']
    },
    numberValue(newValue){
      this.$emit('change',  {
        value: newValue,
        attribute: `${this.name}_field`
      });
    },
    countryValue(newValue){
      this.$emit('change',  {
        value: newValue,
        attribute: `${this.name}_country`
      });
    },
    // errors(newValue){
    //   this.phoneErrors =  _.pick(newValue,[`${this.name}_country`,`${this.name}_field`])
    // },
  }
}
</script>
