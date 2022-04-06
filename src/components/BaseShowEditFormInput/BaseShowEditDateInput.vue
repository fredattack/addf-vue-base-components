<template>
  <div v-if='editionMode' :class="cGroupClass" class='mt-3'>
    <BaseEditLabel :label="label" :required="required"/>
    <input :name="name"
           type="text"
           :value="modelValue"
           @input="updateInput"
           :id="name"
           :class="inputClass"
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

export default {
  directives: {mask},
  name: 'BaseShowEditDateInput',
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
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
}
</script>

