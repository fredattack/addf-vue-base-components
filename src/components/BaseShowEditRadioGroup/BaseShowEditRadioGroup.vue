<template>
  <div :class="cGroupClass">
    <!--region mode edition-->
    <template v-if='editionMode'>
      <BaseEditLabel :label="label" :required="required"/>
      <div :class="cPlacement">
        <div class='form-check mr-2' v-for='(val, key) in options' :key='key'>
          <LabelButtonRadioWithInput
              :extra_id="extra_id"
              :attribute-label="attributeLabel"
              :is-showing-key="isShowingKey"
              :is-returning-key="isReturningKey"
              :index="key"
              :element="val"
              :model-value="modelValue"
              :default-value="defaultValue"
              :track-by="trackBy"
              :translatable="translatable"
              :translation-extention="translationExtention"
              :name="name"
              :getByKey="getByKey"
              :update-input="updateInput"
          />
        </div>
      </div>
      <template v-if='errors'>
        <div v-for='(error,index) in errors' :key='index' class='form-help text-red-600'>
          {{ $t(error, {'attribute': $t('attributes.' + name)}) }}
        </div>
      </template>
    </template>
    <!--endregion-->

    <!--region mode affichage-->
    <template v-else>
      <BaseShowLabel :label="label" :required="required" :class="cLabelClass"/>
      <div v-if="modelValue" class="capitalize-first"><font-awesome-icon :icon='["fal","check-square"]' class='mr-2 text-blue-900 ' /> {{ cGetLabel }}</div>
      <div v-else>- </div>
    </template>
    <!--endregion-->
  </div>
</template>

<script>
import LabelButtonRadioWithInput from "./components/LabelButtonRadioWithInput.vue";
export default {
  name: "BaseShowEditRadioGroup",
  components: {LabelButtonRadioWithInput},
  props:  {
    options: { type: [Array, Object], required: true },
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: [String, Number], required: false },
    translationExtention: {type: String, required: false},
    isReturningKey: { type: Boolean, required: false, default: false },
    isShowingKey: { type: Boolean, required: false, default: false },
    attributeLabel: { type: String, required: false, default: 'name' },
    trackBy: { type: String, required: false, default: null },
    translatable:{type: Boolean,required:false,default:false},
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false },
    editionMode: {},
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    getByKey: {type: Boolean, default: false},
    isNumber: {
      type: Boolean,
      default: false,
      required: false
    },

  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
    cGetLabel() {
      if(this.isShowingKey) {
        if(!this.isReturningKey) {
          return this.translatable ? this.$t(`${this.translationExtention}.${this.modelValue}`) : this.modelValue
        } else {
          return this.options[this.modelValue]
        }
      } else {
        return this.translatable ? this.$t(`${this.translationExtention}.${this.findModelValue()}`) : this.findModelValue()
      }
    }
  },
  methods: {
    findModelValue() {
      if(this.getByKey) {
        // // console.log(Object.keys(this.options).find(item => item.id === this.modelValue))
        if(this.options && Object.keys(this.options).find(item => this.options[item] === this.modelValue)) return Object.keys(this.options).find(item => this.options[item] === this.modelValue)
        return null
      } else {
        if(this.options && this.options.find(item => item.id === this.modelValue)) return this.options.find(item => item.id === this.modelValue).name
        return null
      }

    },
    updateInput(event) {
      let modelValueUpdate = this.isNumber ? Number(event.target.value) : event.target.value
      this.$emit("update:modelValue", modelValueUpdate);
      this.$emit('change', event.target.value)
    }
  },
}
</script>
