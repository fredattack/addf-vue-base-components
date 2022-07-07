<template>
  <div v-if='editionMode' class='mt-3'>
    <div>
      <BaseEditLabel :label="label" :required="required"/>
      <multiselect
        v-model="cDefaultValue"
        :options="metadata"
        :placeholder="placeholder"
        :searchable="searchable"
        :label="attributeLabel"
        :track-by="trackBy"
        :multiple="false"
        :required="required"
        :group-values="groupValues"
        :group-label="groupLabel"
        :group-select="false"
        :select-group-label="$t('button.select')"
        :deselect-group-label="$t('button.unselect')"
        :select-label="$t('button.select')"
        :deselect-label="$t('button.unselect')"
        :selected-label="$t('button.selected')"
        @update:model-value="updateInput"
      />
    </div>
    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </div>
  <div v-else class='mt-3 flex flex-col '>
    <BaseShowLabel :label="label" :required="required"/>
    <div v-if='modelValue.length >= 1'>
      <span v-for="(item, index) in modelValue" :key="index" class="inline-block mr-3">
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
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseShowEditOptionGroupedSelectSimple',
  components: { multiselect },
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
      required: false,
      default: null
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
      required: false,
      default: null
    },
    metadata: {
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
    selectClass: {
      type: String,
      required: false,
      default: ''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    groupLabel: {
      type: String,
      required: false,
      default: 'group_label'
    },
    groupValues: {
      type: String,
      required: false,
      default: 'group_values'
    },
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    rearrangedOptions(){
      if (this.metadata){
        return this.metadata.map(val => val[this.groupValues]).flat()
      } else {
        return null
      }
    },
    cDefaultValue(){
      return this.rearrangedOptions.find(option => option[this.trackBy] === this.modelValue)
    },
  },
  methods: {
    getElement(item) {
      if (this.rearrangedOptions ) {
        return this.rearrangedOptions.find(data => data[this.trackBy] === item)[this.attributeLabel]
      }
      return null
    },
    updateInput( newValue ) {
      if (newValue){
        this.$emit("update:modelValue", newValue[this.trackBy])
        this.$emit("change", newValue[this.trackBy])
      } else {
        this.$emit("update:modelValue", null)
        this.$emit("change", null)
      }
    },
  }
}
</script>
