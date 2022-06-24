<template>
  <div v-if='editionMode' :class="cGroupClass" class='mt-3'>
    <div class="flex" >
    <BaseEditLabel :label="label" :required="required"/>
      <div v-if="displayTimeDifference && timeDifference" class=" ml-2 text-sm text-gray-500 capitalize-first">
        ( {{ timeDifference }} )
      </div>
    </div >
    <input :name="name"
    type="text"
    v-model="internalValue"
    @input="updateInput"
    :id="name"
    :class="[ internalValueIsAValidDate ? 'focus:border-green-300 focus:ring-green-300' : 'focus:border-red-300 focus:ring-red-300', 'border-gray-400 focus:ring-1', cInputClass]"
    :placeholder="placeholder"
    v-mask="mask"
    />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </div>
  <div v-else class='mt-3'>
      <BaseShowLabel :label="label"
                     :model-value="internalValue"
                     :additional-information="this.displayTimeDifference && timeDifference !== 'Invalid date' ? timeDifference : null"/>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import BaseEditLabel from '../BaseLabel/BaseEditLabel.vue'
import BaseShowLabel from '../BaseLabel/BaseShowLabel.vue'
import moment from 'moment'

export default {
  directives: {mask},
  name: 'BaseShowEditIsoDateInput',
  data() {
    return {
      internalValue: null,
    }
  },
  components: { BaseEditLabel, BaseShowLabel },
  props: {
    customReferenceDate: {
      type: String,
      required: false,
      default: null
    },
    customReferenceDateFormat: {
      type: String,
      required: false,
      default: 'DD/MM/YYY'
    },
    displayTimeDifference: {
      type: Boolean,
      require: false,
      default: false,
    },
    editionMode: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    mask: {
      type: Array,
      required: false,
      default() {
        return ['##/##/####']
      }
    },
    dateFormat: {
      type: String,
      required: false,
      default: 'DD/MM/YYYY'
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    cDisplayedValueWhenNotEditionMode(){
      return this.internalValueIsAValidDate ? moment(this.internalValue).format(this.dateFormat) : null
    },
    timeDifference(){
      if(this.customReferenceDate) {
        console.log('internalValue', this.internalValue)
        console.log('from', moment(this.customReferenceDate, this.customReferenceDateFormat))
        return this.internalValueIsAValidDate ? moment(this.internalValue, this.dateFormat).lang('fr').from(moment(this.customReferenceDate, this.customReferenceDateFormat)) : null
      } else {
        return this.internalValueIsAValidDate ? moment(this.internalValue, this.dateFormat).lang('fr').from(moment().startOf('day')) : null
      }
    },
    internalValueIsAValidDate(){
      let subValidation = moment(this.internalValue, this.dateFormat).format(this.dateFormat)
      
      if (subValidation === this.internalValue){
        return moment(this.internalValue, this.dateFormat).isValid()
      }
      return false
    }
  },
  watch: {
    modelValue: {
      handler(newValue){
        if(newValue){
          this.internalValue = moment(newValue).format(this.dateFormat)
        }else{
          this.internalValue = null
        }
      },
      immediate: true,
      deep:true,
    }
  },
  methods: {
    updateInput(event) {
      if (this.internalValueIsAValidDate) {
        this.$emit("update:modelValue", moment(event.target.value, this.dateFormat).format());
      }
    }
  },
}
</script>

