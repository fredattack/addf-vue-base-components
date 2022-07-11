<template >
  <template v-if="editionMode" >
    <div >
      <BaseEditLabel :label="label" :required="required" />
      <multiselect
        v-model="cDefaultValue"
        :options="options"
        :placeholder="placeholder"
        :searchable="searchable"
        :label="attributeLabel"
        :track-by="trackBy"
        :multiple="false"
        :required="required"
        :taggable="true"
        :select-label="$t('button.select')"
        :deselect-label="$t('button.unselect')"
        :selected-label="$t('button.selected')"
        @tag="addTag"
        @update:model-value="updateInput"
      />
    </div >
    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {attribute: $t('attributes.' + name)}) }}
    </div>
  </template>
  <template v-else >
    <BaseShowLabel :label="label" :model-value="cDefaultValue ? cDefaultValue[attributeLabel]: null"/>
  </template>
</template >

<script >
import multiselect from 'vue-multiselect'

export default {
  name: "BaseShowEditTaggableSelectSimple",
  components: {multiselect},
  props: {
    editionMode: {
      type: Boolean,
      required: true
    },
    modelValue: {
      type: Object,
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: true
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
    errors: {
      type: Array,
      required: false,
      default: null
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValueCanBeNull: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    cDefaultValue(){
      if(this.options && this.options.find(t => t.id === this.modelValue)) return this.options.find(t => t.id === this.modelValue)
      else return null
    },
  },
  methods: {
    addTag (newTag) {
      const tag = {}
      tag[this.trackBy] = 'customTag'
      tag[this.attributeLabel] = newTag
      
      this.$emit("update:modelValue", tag);
      this.$emit("change", tag);
    },
    updateInput( newValue ) {
      if(newValue){
        this.$emit("update:modelValue", newValue[this.trackBy]);
        this.$emit("change", newValue[this.trackBy]);
      } else {
        if(this.modelValueCanBeNull) {
          this.$emit("update:modelValue",null);
          this.$emit("change",null);
        }
      }
    }
  },
}
</script >
