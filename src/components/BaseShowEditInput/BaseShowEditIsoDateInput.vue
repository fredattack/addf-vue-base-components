<template>
  <div v-if='editionMode' :class="cGroupClass" class='mt-3'>
    <BaseEditLabel :label="label" :required="required"/>
    <input :name="name"
           type="text"
           :value="internalValue"
           @input="updateInput"
           :id="name"
           :class="cInputClass"
           :placeholder="placeholder"
           v-mask="mask"
           class='border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1' />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </div>
  <div v-else class='mt-3'>
    <BaseShowLabel :label="label" :model-value="modelValue"/>
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
    isIsoDate(payload) {
      if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/.test(payload)){
        let date = new Date(payload);
        return date.toISOString() === payload;
      }
      return false;
    },
    updateInput(event) {
      if (this.isIsoDate(event.target.value)){
        this.$emit("update:modelValue", moment(event.target.value).format());
      }
    }
  },
}
</script>

