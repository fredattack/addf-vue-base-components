<template >
  <div>
    <template v-if="editionMode" >
      <div class="flex" >
        <BaseEditLabel :label="label" :required="required" />
        <div v-if="displayTimeDifference && timeDifference" class=" ml-2 text-sm text-gray-500 capitalize-first">
          ( {{ timeDifference }} )
        </div >
      </div >
      <div class="flex -space-x-px">
        <div class="w-4/6 flex-1 min-w-0">
          <input
            id="card-expiration-date"
            v-model="internalDate" v-mask="dateMask" type="text"
            name="card-expiration-date"
            class="focus:ring-blue-300  focus:border-blue-300  relative block w-full rounded-none rounded-bl-md rounded-tl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
            :placeholder="datePlaceholder || $t('global.date') "
            @input="updateInput"
          />
        </div >
        <div class=" min-w-0">
          <input
            id="card-cvc"
            v-model="internalTime" v-mask="timeMask" type="text"
            name="card-cvc"
            class="focus:ring-blue-300  focus:border-blue-300  relative block w-full rounded-none rounded-br-md rounded-tr-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
            :placeholder="timePlaceholder || $t('global.time')"
            @input="updateInput"
          />
        </div >
      </div >
      <template v-if="internalErrors">
        <div v-for='(error,index) in internalErrors' :key='index' class="form-help text-red-600">
          {{ $t(error) }}
        </div>
      </template>
      <template v-if="errors">
        <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
          {{ $t(error, {attribute: $t('attributes.' + name)}) }}
        </div>
      </template>
    </template>
    <template v-else>
      <BaseShowLabel
        :label="label"
        :model-value="displayedValueWhenNotInEditMode"
        :additional-information="displayTimeDifference ? timeDifference : null"
      />
    </template>
  </div >
</template >

<script >
import moment from "moment";

export default {
  name: "BaseShowEditIsoDateTimeInput",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    undefinedTimeValue: {
      type: Boolean,
      required: false,
      default: null,
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
    datePlaceholder: {
      type: String,
      required: false,
      default: null
    },
    timePlaceholder: {
      type: String,
      required: false,
      default: null
    },
    errors: {
      type: Array,
      required: false,
      default: null
    },
    displayTimeDifference: {
      type: Boolean,
      require: false,
      default: false,
    },
    customReferenceDate: {
      type: String,
      required: false,
      default: null
    },
    customReferenceDateFormat: {
      type: String,
      required: false,
      default: 'DD/MM/YYYY'
    }
  },
  emits: ['update:modelValue', 'update:undefinedTimeValue', 'change'],
  data() {
    return {
      internalDate: null,
      internalTime: null,
      internalUndefinedTime: null,
      internalErrors: [],
    }
  },
  computed: {
    isAValidDate() {
      const subValidation = moment(this.joinedInternalValue, this.joinedFormat).format(this.joinedFormat)
      this.internalErrors = []
      if(subValidation === this.joinedInternalValue){
        return moment(this.joinedInternalValue, this.joinedFormat).isValid()
      }
      if (!this.internalDateIsAValidDate && this.internalDate !== null && this.internalErrors.indexOf("validation.register_valid_date") === -1){
        this.internalErrors.push('validation.register_valid_date')
      }
      if (!this.internalTimeIsAValidTime && this.internalErrors.indexOf("validation.register_valid_time") === -1){
        if (!this.internalUndefinedTime) {
          this.internalErrors.push('validation.register_valid_time')
        }
      }
      return false
    },
    internalDateIsAValidDate(){
      return moment(this.internalDate, this.dateFormat).format(this.dateFormat) === this.internalDate
    },
    internalTimeIsAValidTime(){
      return moment(this.internalTime, this.timeFormat).format(this.timeFormat) === this.internalTime
    },
    joinedFormat(){
      return [this.dateFormat, this.timeFormat].join(' - ')
    },
    joinedInternalValue(){
      let temp = null
      if (!this.internalTime || this.internalTime === '') {
        temp = this.timeMask.replaceAll('#', '0')
        this.$emit('update:undefinedTimeValue', 1)
      } else {
        this.$emit('update:undefinedTimeValue', 0)
        temp = this.internalTime
      }
      return [this.internalDate, temp].join(' - ')
    },
    displayedValueWhenNotInEditMode(){
      if((!this.internalDate || this.internalDate === '') && (!this.internalTime || this.internalTime === '')){
        return null
      } else {
        if (this.internalUndefinedTime) {
          return this.internalDate
        }
        return this.joinedInternalValue
      }
    },
    timeDifference(){
      if(!this.customReferenceDate){
        if (this.isAValidDate) {
          if (this.internalUndefinedTime){
            return moment(this.internalDate, this.dateFormat).lang('fr').from(moment().startOf('day'))
          } else {
            return moment(this.joinedInternalValue, this.joinedFormat).lang('fr').from(moment())
          }
        }
        return null
      }
      if (this.isAValidDate){
        if(this.internalUndefinedTime){
          return moment(this.internalDate, this.dateFormat).lang('fr').from(moment(this.customReferenceDate, this.customReferenceDateFormat))
        } else {
          return moment(this.joinedInternalValue, this.joinedFormat).lang('fr').from(moment(this.customReferenceDate, this.customReferenceDateFormat))
        }
      }
      return null
    },
  },
  watch: {
    modelValue: {
      handler(newValue){
        if(newValue){
          this.internalDate = moment(newValue).format(this.dateFormat)
          this.internalTime = this.internalUndefinedTime ? null : moment(newValue).format(this.timeFormat)
        } else {
          this.internalDate = null
          this.internalTime = null
        }
        
      },
      immediate: true,
      deep:true,
    },
    undefinedTimeValue: {
      handler(newValue, oldValue){
        if(newValue !== oldValue){
          this.internalUndefinedTime = Boolean(newValue)
        }
      },
      immediate: true,
      deep:true,
    },
    
  },
  methods: {
    updateInput() {
      if(this.isAValidDate){
        console.log(moment(this.joinedInternalValue, this.joinedFormat).format())
        this.$emit('update:modelValue', moment(this.joinedInternalValue, this.joinedFormat).format())
        this.$emit('change', moment(this.joinedInternalValue, this.joinedFormat).format())
      }
    },
  },
}
</script >
