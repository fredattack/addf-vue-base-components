<template >
  <div :class="cGroupClass" >
    <template v-if="editionMode">
      <div class="grid grid-cols-2 gap-x-5">
        <div >
          <BaseEditLabel :label="$t('attributes.date')" />
          <input
            v-model="internalDate"
            v-mask="dateMask"
            type="text"
            :class="[
              internalDateIsAValidDate ? 'focus:border-gray-400  focus:border-blue-300 focus:ring-blue-300' : 'focus:border-red-300 focus:ring-red-300',
               'border-gray-400 focus:ring-1',
               cInputClass
               ]"
            @input="updateDateInput"
          />
        </div >
        <div class="flex gap-x-3">
          <div>
            <BaseEditLabel :label="$t('attributes.time_from')" />
            <input
              v-model="internalTimeFrom"
              v-mask="timeMask"
              type="text"
              :class="[
              internalTimeFromIsAValidTime ? 'focus:border-gray-400  focus:border-blue-300 focus:ring-blue-300' : 'focus:border-red-300 focus:ring-red-300',
               'border-gray-400 focus:ring-1',
               cInputClass
               ]"
              @input="updateTimeFromInput"
            />
          </div>
          <div>
            <BaseEditLabel :label="$t('attributes.time_to')" />
            <input
              v-model="internalTimeTo"
              v-mask="timeMask"
              type="text"
              :class="[
              internalTimeToIsAValidTime ? 'focus:border-gray-400  focus:border-blue-300 focus:ring-blue-300' : 'focus:border-red-300 focus:ring-red-300',
               'border-gray-400 focus:ring-1',
               cInputClass
               ]"
              @input="updateTimeToInput"
            />
          </div>
        </div >
      </div>
      <template v-if="internalErrors">
        <div v-for='(error,index) in displayableErrors' :key="index" class="form-help text-red-600">
          <template v-if="error === 'validation.date'">
            {{ $t(error, {attribute: $t('attributes.' + name)}) }}
          </template>
          <template v-if="error === 'validation.after'">
            {{ $t(error, {attribute: $t('attributes.' + name), date: this.internalTimeFrom}) }}
          </template>
          <template v-else>
            {{ $t(error, {attribute: $t('attributes.' + name)}) }}
          </template>
        </div>
      </template>
    </template>
    <template v-else>
      <BaseShowLabel :label="label" :model-value="displayedValueWhenNotInEditionMode"/>
    </template>
  </div>
</template >

<script >
import moment from "moment";
import _ from "lodash";

export default {
  name: "BaseShowEditIsoDateAndTimeRangeInput",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    timeToValue: {
      type: String,
      required: false,
      default: null
    },
    timeToName: {
      type: String,
      required: false,
      default: 'date_to'
    },
    dateFormat: {
      type: String,
      required: false,
      default: 'DD/MM/YYYY',
    },
    dateMask: {
      type: String,
      required: false,
      default: '##/##/####'
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
  emits: ['update:modelValue', 'update:timeToValue', 'change'],
  data() {
    return {
      internalDate: null,
      internalTimeFrom: null,
      internalTimeTo: null,
      internalErrors: null,
    }
  },
  computed: {
    displayableErrors(){
      return Object.values(this.internalErrors).flat()
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    displayedValueWhenNotInEditionMode(){
      if (this.modelValue){
        return `${this.internalDate ?  this.internalDate + ':' : ''} ${this.internalTimeFrom || ''} ${this.internalTimeTo ? '- ' + this.internalTimeTo : ''}`
      }
      return null
    },
    internalDateIsAValidDate(){
      return moment(this.internalDate, this.dateFormat).format(this.dateFormat) === this.internalDate
    },
    internalTimeFromIsAValidTime(){
      return moment(this.internalTimeFrom, this.timeFormat).format(this.timeFormat) === this.internalTimeFrom
    },
    internalTimeToIsAValidTime(){
      return moment(this.internalTimeTo, this.timeFormat).format(this.timeFormat) === this.internalTimeTo
    },
    joinedFormat(){
      return [this.dateFormat, this.timeFormat].join(' - ')
    },
    joinedDateAndTimeFrom(){
      let tempDate = null
      let tempTime = null
      
      if (!this.internalTimeFrom || this.internalTimeFrom === '' || !this.internalTimeFromIsAValidTime) {
        tempTime = this.timeMask.replaceAll('#', '0')
      } else {
        tempTime = this.internalTimeFrom
      }
      
      if(!this.internalDate || !this.internalDateIsAValidDate){
        tempDate = moment().format('DD/MM/YYYY')
      }else {
        tempDate = this.internalDate
      }
      
      return [tempDate, tempTime].join(' - ')
    },
    joinedDateAndTimeTo(){
      let tempDate = null
      let tempTime = null
      
      if (!this.internalTimeTo || this.internalTimeTo === '' || !this.internalTimeToIsAValidTime) {
        tempTime = this.timeMask.replaceAll('#', '0')
      } else {
        tempTime = this.internalTimeTo
      }
      
      if(!this.internalDate || !this.internalDateIsAValidDate){
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
          this.internalTimeFrom = moment(newValue).format(this.timeFormat)
        }
      },
      immediate: true,
      deep:true,
    },
    timeToValue: {
      handler(newValue){
        if(newValue){
          this.internalTimeTo = moment(newValue).format(this.timeFormat)
        }
      },
      immediate: true,
      deep:true,
    },
    errors:{
      handler(newValue) {
        this.internalErrors =  _.pick(newValue,[this.name, this.timeToName])
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    updateDateInput() {
      if (this.internalDateIsAValidDate){
        this.$emit('update:modelValue', moment(this.joinedDateAndTimeFrom, this.joinedFormat).format())
        if (this.internalTimeTo && this.internalTimeToIsAValidTime){
          this.$emit('update:timeToValue', moment(this.joinedDateAndTimeTo, this.joinedFormat).format())
        }
      }
    },
    updateTimeFromInput(){
      if (this.internalTimeFromIsAValidTime){
        console.log('updateTimeFromInput')
        this.$emit('update:modelValue', moment(this.joinedDateAndTimeFrom, this.joinedFormat).format())
      }
    },
    updateTimeToInput(){
      if (this.internalTimeToIsAValidTime){
        this.$emit('update:timeToValue', moment(this.joinedDateAndTimeTo, this.joinedFormat).format())
      }
    }
  },
}
</script >
