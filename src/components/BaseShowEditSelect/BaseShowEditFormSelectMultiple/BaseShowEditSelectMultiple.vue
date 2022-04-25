<template>
  <div v-if='editionMode' class='mt-3'>
    <div>
      <BaseEditLabel :label="label" :required="required"/>
      <multiselect :options="metadata"
                   multiple
                   v-model="cDefaultValue"
                   :placeholder="placeholder"
                   :searchable="searchable"
                   :label="attributeLabel"
                   :track-by="trackBy"
                   :required="required"
                   @update:modelValue="updateInput"/>
    </div>
    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </div>
  <div v-else class='mt-3 flex flex-col '>
    <BaseShowLabel :label="label" :required="required"/>
    <div v-if='modelValue.length >= 1'>
      <span v-for="(item, index) in modelValue" class="inline-block mr-3" :key="index">
        <font-awesome-icon :icon='["fal","check-square"]' class='mr-1 text-blue-900 mt-2' />
        {{ getElement(item) }}
      </span>
    </div>
    <template v-else>
      {{ '-' }}
    </template>

  </div>

</template>

<script>
import BaseEditLabel from '../../BaseLabel/BaseEditLabel.vue'
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseShowEditSelectMultiple',
  components: { multiselect, BaseEditLabel},
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
    modelValue: {
      type: Array,
      default() {
        return []
      },
      require: true,
    },
    errors: {
      type: Object,
      required: false
    },
    metadata: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return []}
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
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    cDefaultValue(){
      let defaultValues = []
      for(let i in this.modelValue) {
        defaultValues.push(this.metadata.find( item => item.id === i ))
      }
      return defaultValues
    },
  },
  methods: {
    getElement(item) {
      if(this.metadata && this.metadata.find(data => data.id === item).name) return this.metadata.find(data => data.id === item).name
      else return
    },
    updateInput( newValue ) {
      let updateModelValue = []
      for(let i of newValue) {
        updateModelValue.push(i.id)
      }
      this.$emit("update:modelValue", updateModelValue);
    }
  }
}
</script>
