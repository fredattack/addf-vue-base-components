<template>

  <div :class="cGroupClass" >
    <template v-if='editionMode'>
      <div>
        <BaseEditLabel :label="label" :required="required"/>
        <input
            :id="id"
            :type="type"
            :min='min'
            :max='max'
            :value="modelValue"
            :placeholder="placeholder"
            @input="updateInput"
            @keydown="type === 'number' ? isNumber : {}"
            :disabled="disabled"
            class="form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
        />
      </div>
      <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
        {{ $t(error, {attribute: $t('attributes.' + name)}) }}
      </div>
    </template>

    <template v-else>
      <BaseShowLabel :label="label" :model-value="modelValue" :hideModelValue="hideModelValue"/>
    </template>
  </div>

</template>

<script>
import BaseEditLabel from '../BaseLabel/BaseEditLabel.vue'
import BaseShowLabel from '../BaseLabel/BaseShowLabel.vue'

export default {
  name: "BaseShowEditInput",
  components: {BaseEditLabel, BaseShowLabel},
  props: {
    name: {
      type: String,
      default: ''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    hideModelValue: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    type: {
      type: String,
      default: "text",
    },
    errors: {
      type: Array,
      default() {
        return []
      }
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
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float']
        return admittedTypes.indexOf(value) !== -1
      }
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  methods: {
    isNumber(event){
      if (this.type === 'number') {
        if(this.parseType === 'float'){
          if (!/\d/.test(event.key) && ![8, 9, 37, 38, 39, 40].includes(event.keyCode)) {
            return event.preventDefault();
          }
        }
        if(this.parseType === 'int'){
          if (!/\d/.test(event.key) && ![8, 9, 37, 38, 39, 40, 108, 190, 109].includes(event.keyCode)) {
            return event.preventDefault();
          }
        }
      }
    },
    restrictedRangeNumberValue(payload){
      if (this.min || this.max){
        if(this.payload < this.min){
          return this.min
        }
        if(this.payload > this.max){
          return this.max
        }
        return payload
      }
      return payload
    },
    updateInput(event){
      if(this.type === 'number'){
        switch (this.parseType) {
          case 'int':
            return this.$emit("update:modelValue", event.target.value !== '' && !isNaN(event.target.value)  ? this.restrictedRangeNumberValue(parseInt(event.target.value)) : '');
          case 'float':
            return this.$emit("update:modelValue", event.target.value !== '' && !isNaN(event.target.value) ? this.restrictedRangeNumberValue(parseFloat(event.target.value)) : '');
          default:
            return this.$emit("update:modelValue", this.max && parseInt(this.max) < event.target.value ?  parseInt(this.max) : event.target.value);
        }
      } else {
        this.$emit("update:modelValue", event.target.value);
      }
    },
  },
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>

