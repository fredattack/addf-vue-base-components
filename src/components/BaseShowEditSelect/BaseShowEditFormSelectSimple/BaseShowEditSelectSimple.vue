<template>
  <div v-if='editionMode' class='mt-3'>
    <BaseEditLabel :label="label" :required="required"/>
    <multiselect :options="options"
                 :placeholder="placeholder"
                 :modelValue="cDefautlValue"
                 @update:modelValue="updateValueAction"
                 :searchable="searchable"
                 :label="attributeLabel"
                 :track-by="trackBy"
                 :disabled="disabled"
                 :required="required" />
    <div v-if="errors" class="form-help text-red-600">
      <div v-for='(error,index) in errors' :key='index' >{{ $t(error, {'attribute': $t('attributes.' + name)}) }}</div>
    </div>
  </div>

  <div v-else class='mt-3'>
    <BaseShowLabel :label="label" :model-value="cDefautlValue ? cDefautlValue[attributeLabel]: null"/>
  </div>

</template>

<script>
import multiselect from 'vue-multiselect'
import BaseEditLabel from '../../BaseLabel/BaseEditLabel.vue'
import BaseShowLabel from '../../BaseLabel/BaseShowLabel.vue'

export default {
  name: 'BaseShowEditSelectSimple',
  components: {
    multiselect,
    BaseEditLabel,
    BaseShowLabel,
  },
  props: {
    editionMode: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String,
      default: "",
      require: true,
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
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
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
    errors: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
    options: {
      type: Array,
      required: true
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
    canTrackByBeNull: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    cDefautlValue(){
      if(this.options && this.options.find(option => option[this.trackBy] === this.modelValue)) return this.options.find(option => option[this.trackBy] === this.modelValue)
      else return null
    },
  },
  methods: {
    updateValueAction( newValue ) {
      if(newValue){
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        if(this.canTrackByBeNull) {
          this.$emit("update:modelValue",null);
        }
      }
    }
  },
}
</script>
