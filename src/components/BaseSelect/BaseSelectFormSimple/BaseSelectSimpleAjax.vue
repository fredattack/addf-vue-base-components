<template>
  <div :class="cGroupClass" v-if="defaultAjax">
    <label :class="cLabelClass" class='capitalize-first' v-if='label'>{{ label }}
      &nbsp;<span class="text-red-600" v-if="isRequired">*</span>
    </label>
    <multiselect
        :key="defaultValue"
        v-model="defaultValue"
        :id="name"
        :label="attributeLabel"
        :track-by="trackBy"
        placeholder="Type to search"
        open-direction="bottom"
        :options="options"
        :value="defaultAjax"
        :multiple="false"
        :searchable="true"
        :loading="loading"
        :internal-search="true"
        :clear-on-select="true"
        :close-on-select="true"
        :options-limit="300"
        :limit="10"
        :limit-text="2"
        :max-height="600"
        :show-no-results="false"
        :hide-selected="true"
        @search-change="fetchOption">
      <template v-slot:tag="{ option, remove }" >
        <span class="custom__tag">
          <span>{{ option.name }}</span>
          <span class="custom__remove" @click="remove(option)">❌</span>
        </span>
      </template>
    </multiselect>

  </div>
</template>
<script>
import apiClient from '@u/apiClient'
import multiselect from 'vue-multiselect'

export default {
  name: 'BaseSelectSimpleAjax',
  components: {multiselect},
  emits: ['update:modelValue'],
  data() {
    return {
      options: [],
      loading:false,
      defaultValue : this.defaultAjax
    }
  },
  props: {
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
    modelValue: {type: Object, required: false, default: null},
    defaultAjax: {type: Object, required: false, default() { return {} }},
    url: {},
    selectLabel: {type: String},
    name: {},
    isRequired: {type: Boolean, required: false, default: false},
    isDisabled: {type: Boolean, required: false, default: false},
    label: {type: String, required: false},
    selectedValue: null,
    groupClass:{ type: String, required: false, default:'' },
    labelClass:{ type: String, required: false, default:'' },
    fullModelResponse:{ type: Boolean, required: false, default:false },
  },
  watch: {
    defaultValue(newValue) {
      console.log('watch defaultvalue')
      if (newValue != null && newValue !== '') {
        console.log('watch defaultvalue 2')
        if(this.fullModelResponse){
          console.log('watch defaultvalue 3a')
          this.$emit('update:modelValue', newValue);
          this.$emit('workSelect',newValue);

        }else{
          console.log('watch defaultvalue 3b')
        this.$emit('update:modelValue', newValue[this.trackBy]);
          this.$emit('selected:value',newValue[this.trackBy]);
        }
      }
    },
  },
  computed:{
    cGroupClass(){
      return this.groupClass === '' ? 'mt-3' : this.groupClass
    },
    cLabelClass(){
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
  },
  methods: {
    async fetchOption(keyword) {
      if (keyword.length > 2) {
        this.loading=true
        await apiClient.get(this.url + '?terms=' + keyword)
            .then(async response => {
              this.loading=false
              this.options = response.data
            })
      }
    },

  },
}
</script>

<style>

.v-select{
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(74 85 104)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'/></svg>");
  background-size: 18px;
  background-position: center right 0.6rem;
}

.v-select .vs__dropdown-toggle{
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: #cbd5e0;
  background-repeat: no-repeat;
  padding-left: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-right: 0.75rem;
}

.v-select .vs__open-indicator{
  display: none;
}

.v-select .vs__search {
  margin-block: 5px;
}

.v-select .vs__search {
  padding: 0;
}
</style>
