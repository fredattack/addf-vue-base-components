<template>
  <div v-if='editionMode' class='mt-3'>
    <BaseEditLabel :label="label ? label : $t('attributes.company')" :required="required"/>
    <multiselect v-if="metadata && metadata.companies"
                 :options="metadata.companies"
                 :placeholder="label ? label : $t('attributes.company')"
                 :modelValue="cDefautlValue"
                 @update:modelValue="updateValueAction"
                 :searchable="searchable"
                 :label="attributeLabel"
                 :track-by="trackBy"
                 :required="required" />

    <template v-if="errors.company_id">
      <div v-for='(error,index) in errors.company_id' :key='index'
           class="form-help text-red-600">
        {{ $t(error, {'attribute': $t('attributes.' + name)}) }}
      </div>
    </template>
  </div>

  <div v-else class='mt-3'>
    <BaseShowLabel :label="label ? label : $t('attributes.company')" :model-value="cDisplayedValueWhenNotEditionMode"/>
  </div>

</template>

<script>
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseCompanyShowEditSelectSimple',
  components: { multiselect },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
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
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'company_id',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.companies && this.metadata.companies.find( item => item.id === this.modelValue )) return this.metadata.companies.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue",null);
      }
    }
  }
}
</script>
