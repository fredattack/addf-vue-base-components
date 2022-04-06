<template>
  <div>
    <template v-if='editionMode'>

      <div>
        <BaseEditLabel :label="label" :required="required"/>
        <div :class="cPlacement">
          <div class='form-check mr-4 sm:mt-0' v-for='(element, key) in options' :key='key'>

            <checkboxWithInput :attribute-label="attributeLabel"
                               :key="key"
                               :model-value="elementIsChecked(element)"
                               :name="name"
                               :track-by="trackBy"
                               :translatable="translatable"
                               :translation-extention="translationExtention"
                               :update-input="updateInput"
                               :element="element"/>
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
      <BaseEditLabel :label="label" :required="required"/>
      <br>
      <span v-for="(item, index) in modelValue" class="inline-block mr-3" :key="index">
        <labelWitchCheckBoxChecked
            v-if="getElement(item)"
            :element="getElement(item)"
            :translatable="translatable"
            :translation-extention="translationExtention"
        />
      </span>
    </template>
  </div>
</template>
<script>

import LabelWitchCheckBoxChecked from "./components/LabelWitchCheckBoxChecked.vue";
import CheckboxWithInput from "./components/CheckboxWithInput.vue";

export default {
  name: "BaseSimpleShowEditCheckboxGroup",
  components: {CheckboxWithInput, LabelWitchCheckBoxChecked},
  props: {
    options: {type: Object, required: true},
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
    attributeLabel: {type: String, required: false, default: 'name'},
    trackBy: {type: String, required: false, default: null},
    editionMode: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Array,
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
      let tempModelValue = this.modelValue

      if (Object.values(tempModelValue).indexOf(parseInt(event.target.value)) === -1) {
        tempModelValue.push(Number(event.target.value))
      } else {
        tempModelValue.splice(tempModelValue.indexOf(parseInt(event.target.value)), 1)
      }

      this.$emit("update:modelValue", tempModelValue);
    },
    getElement(item) {
      if(this.options && this.options.find(t => t.id === item)) return this.options.find(t => t.id === item)
      else return
    },
    elementIsChecked(item){
      return this.modelValue.includes(item[this.trackBy])
    }
  },
}
</script>
