<template>
  <div class='flex flex-col'>
    <label v-if="label" class="form-label capitalize-first mt-3">{{ label }}&nbsp;<span class="text-red-600" v-if="required">*</span></label>
    <multiselect :options="options"
                 multiple
                 :placeholder="placeholder"
                 v-model="value"
                 :searchable="searchable"
                 :label="attributeLabel"
                 :track-by="trackBy"
                 :disabled="disabled"
                 :required="required"
    />
    <div v-if="errors" class="form-help text-red-600">
      <div v-for='(error,index) in errors' :key='index' >{{ $t(error, {'attribute': $t('attributes.' + name)}) }}</div>
    </div>
  </div>
</template>

<script>
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseSelectMultiple',
  components: {
    multiselect
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
    },
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  watch: {
    value(newValue) {
      this.$emit(`setSelected`, {
        value: newValue,
        attribute: this.name
      })
    }
  },


}
</script>

