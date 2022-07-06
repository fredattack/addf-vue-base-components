<template >
  <div :class="cGroupClass" >
    <template v-if='editionMode'>
      <div>
        <BaseEditLabel :label="label" :required="required"/>
        <input
          v-model="internalTime"
          v-mask="timeMask"
          type="text"
          class="form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
          @input="updateInput"
        />
      </div>
      <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
        {{ $t(error, {attribute: $t('attributes.' + name)}) }}
      </div>
    </template>
    
    <template v-else>
      <BaseShowLabel :label="label" :model-value="modelValue"/>
    </template>
  </div>
</template >

<script >
import moment from "moment";

export default {
  name: "BaseShowEditIsoDateToTimeInput",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    timeFormat: {
      type: String,
      required: false,
      default: 'HH:mm',
    },
    timeMask: {
      type: String,
      required: false,
      default: '##:##'
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    editionMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    errors: {
      type: Array,
      required: false,
      default: null
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      internalTime: null,
      internalDate: null,
    }
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    internalTimeIsAValidTime(){
      return moment(this.internalTime, this.timeFormat).format(this.timeFormat) === this.internalTime
    },
    joinedFormat(){
      return ['DD/MM/YYYY', this.timeFormat].join(' - ')
    },
    joinedInternalValue(){
      let tempTime = null
      let tempDate = null
      
      if (!this.internalTime || this.internalTime === '') {
        tempTime = this.timeMask.replaceAll('#', '0')
      } else {
        tempTime = this.internalTime
      }
      
      if(!this.internalDate){
        tempDate = moment().format('DD/MM/YYYY')
      }else {
        tempDate = this.internalDate
      }
      return [tempDate, tempTime].join(' - ')
    },
  },
  watch: {
    modelValue: {
      handler(newValue){
        if(newValue){
          this.internalDate = moment(newValue).format('DD/MM/YYYY')
          this.internalTime = moment(newValue).format(this.timeFormat)
        } else {
          this.internalDate = null
          this.internalTime = null
        }
      },
      immediate: true,
      deep:true,
    }
  },
  methods: {
    updateInput() {
      if (this.internalTimeIsAValidTime){
        this.$emit("update:modelValue", moment(this.joinedInternalValue, this.joinedFormat).format())
        this.$emit("change", moment(this.joinedInternalValue, this.joinedFormat).format())
      }
    }
  },
}
</script >
