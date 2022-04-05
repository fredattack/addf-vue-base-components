<template>

  <div :class="cGroupClass">
    <template v-if='editionMode'>
      <BaseEditLabel :label="label" :required="required"/>
      <textarea
          :id="id"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="updateInput"
          class="form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
      />
      <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
        {{ $t(error, {attribute: $t('attributes.' + name)}) }}
      </div>
    </template>

    <template v-else>
      <BaseShowLabel :label="label" :model-value="modelValue"/>
    </template>
  </div>
</template>

<script>
import BaseEditLabel from '../BaseLabel/BaseEditLabel.vue'
import BaseShowLabel from '../BaseLabel/BaseShowLabel.vue'

export default {
  name: "BaseShowEditTextArea",
  components: {BaseShowLabel, BaseEditLabel},
  props: {
    editionMode: {
      type: Boolean,
      default: true
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
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>
