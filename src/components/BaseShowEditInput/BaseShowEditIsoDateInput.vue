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
    :class="[ internalValueIsAFullDate ? 'focus:border-green-300 focus:ring-green-300' : 'focus:border-red-300 focus:ring-red-300', 'border-gray-400 focus:ring-1', cInputClass]"
    :placeholder="placeholder"
    v-mask="mask"
    />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </div>
  <div v-else class='mt-3'>
      <BaseShowLabel :label="label"
                     :model-value="cDisplayedValueWhenNotEditionMode"
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
      return moment(this.modelValue).format('DD/MM/YYYY') === 'Invalid date' ? null : moment(this.modelValue).format('DD/MM/YYYY')
    },
    internalValueIsAFullDate(){
      return this.isAValidDate(this.internalValue)
    },
    timeDifference(){
      if(!this.customReferenceDate){
        return moment(this.modelValue).isValid()
          ? moment(this.modelValue).lang('fr').from(moment().startOf('day'))
          : null
      }
      return moment(this.modelValue).isValid()
        ? moment(this.modelValue).lang('fr').from(moment(this.customReferenceDate, 'DD/MM/YYYY'))
        : null
    }
  },
  watch: {
    modelValue: {
      handler(newValue){
        if(newValue){
          this.internalValue = moment(newValue).format('DD/MM/YYYY')
        }
      },
      immediate: true,
      deep:true,
    }
  },
  methods: {
    isAValidDate(payload){
      return /\d{2}\/\d{2}\/\d{4}/.test(payload) && moment(payload).isValid()
    },
    updateInput(event) {
      if (this.isAValidDate(event.target.value)) {
        this.$emit("update:modelValue", moment(event.target.value).format());
      }
    }
  },
}
</script>

