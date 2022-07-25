<template>
  <div>
    <template v-if='editionMode'>
      <div>
    
        <div :class="cPlacement">
          <div class='form-check mr-4 sm:mt-0' >
            <input :id="`${name}_checkbox_input_${identifier}`"
                   class='form-check-input'
                   type='checkbox'
                   :name='name'
                   :value="modelValue"
                   @change="updateInput">
            <br>
            <label class='form-check-label capitalize-first' :for="`${name}_checkbox_input_${identifier}`">
              {{ label }}
            </label>
            
          </div>
          <template  v-if="errors"  >
            <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
              {{ $t(error, {'attribute': $t('attributes.' + name)}) }}
            </div>
          </template>
        </div>
      </div>
    </template>

    <template v-else>
      <template v-if="modelValue">
      <BaseEditLabel :label="label" :required="required" />
      <br>
        <span class="inline-block mr-3" :key="index">
        <labelWitchCheckBoxChecked
            v-if="modelValue"
            :element="modelValue"
            :translatable="translatable"
            :translation-extention="translationExtention"
        />
        </span>
      </template>
      <template v-else>
        <span> </span>
      </template>
    </template>
  </div>
</template>
<script>

import LabelWitchCheckBoxChecked from "./components/LabelWitchCheckBoxChecked.vue";

export default {
  name: "BaseSimpleShowEditCheckbox",
  components: {LabelWitchCheckBoxChecked},
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    translationExtention: {type: String, required: false},
    translatable: {type: Boolean, required: false, default: true},
    editionMode: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false
    },
    identifier: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  computed: {
    cPlacement() {
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },

  },
 
  methods: {
    updateInput(event) {
      console.log('event.target.value',event.target.value)
      this.$emit("update:modelValue", event.target.value);
    },
  },
  
}
</script>
