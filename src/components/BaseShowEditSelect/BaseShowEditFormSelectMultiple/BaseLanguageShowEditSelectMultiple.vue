<template>
  <div v-if='editionMode' class='mt-3'>
    <div>
      <BaseEditLabel :label="label ? label : $t('attributes.language')" :required="required"/>
      <multiselect
                   v-if="metadata && metadata.languages"
                   :options="metadata.languages"
                   multiple
                   v-model="cDefaultValue"
                   :placeholder="placeholder"
                   :searchable="searchable"
                   :label="attributeLabel"
                   :track-by="trackBy"
                   :required="required"
                   @update:modelValue="updateInput"/>
    </div>
    <template v-if="errors && errors.available_languages">
      <div v-for='(error,index) in errors.available_languages' :key='index' class="form-help text-red-600">
        {{ $t(error, {attribute: $t('attributes.' + name)}) }}
      </div>
    </template>
  </div>
  <div v-else class='mt-3 flex flex-col '>
    <BaseShowLabel :label="label ? label : $t('attributes.language')" :required="required"/>
    <div v-if='metadata && metadata.languages && modelValue.length >= 1'>
      <span v-for="(item, index) in modelValue" class="inline-block mr-3" :key="index">
        <font-awesome-icon :icon='["fal","check-square"]' class='mr-1 text-blue-900 mt-2' />
        {{  metadata.languages.find(data => data.id === item).name }}
      </span>
    </div>
    <template v-else>
      {{ '-' }}
    </template>

  </div>

</template>

<script>
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseLanguageShowEditSelectMultiple',
  components: { multiselect },
  props: {
    name: {
      type: String,
      required: false,
      default: 'available_languages',
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Array,
      default() { return [] },
      require: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    metadata: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return [] },
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
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
      for(let i of this.modelValue) {
        defaultValues.push(this.metadata.languages.find( item => item.id === i ))
      }
      return defaultValues
    },
  },
  methods: {
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
