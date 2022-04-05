<template>

  <div :class="cGroupClass">
    <label :class="cLabelClass" class='capitalize-first'>{{ label }}&nbsp;<span class="text-red-600"
                                                                                v-if="isRequired">*</span></label>

    <multiselect :options="options"
                 :placeholder="placeholder"
                 v-model="value"
                 :searchable="searchable"
                 :label="attributeLabel"
                 :track-by="trackBy"
                 :disabled="disabled"
                 :required="required"
    />
    <div v-if="errors"  class="form-help text-red-600">
      <div v-for='(error,index) in errors' :key='index'>{{ $t(error, {'attribute': $t('attributes.' + name)}) }}</div>
    </div>
  </div>
</template>

<script>
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseSelectSimple',
  components: {
    multiselect
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    groupClass: {type: String, required: false, default: ''},
    labelClass: {type: String, required: false, default: ''},
    selectClass: {type: String, required: false, default: ''},
    errors: {
      type: Object,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    isRequired() {
      return this.required
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
  },
  watch: {
    value(newValue) {
      if (newValue != null) {
        this.$emit('setSelected', {
          value: newValue[this.trackBy],
          attribute: this.name
        });
      }
    }
  },
}
</script>

