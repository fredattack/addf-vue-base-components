<template>
  <div :class="cGroupClass">
    <!--region mode edition-->
    <template v-if='editionMode'>
      <BaseEditLabel :label="label" :required="required"/>
      <div :class="cPlacement">
        <div class='form-check mr-2' v-for='(option, index) in options' :key='index'>
  
          <input
            :id='`${name}-${index}-${extra_id}`'
            class='form-check-input'
            type='radio'
            :name='temp_name'
            :value='option[trackBy]'
            @change="updateInput"
            v-model='value'
            :checked="modelValue === option[trackBy]"
          >
          <br>
          <label class='form-check-label capitalize-first' :for='`${name}-${index}-${extra_id}`'>
            {{ option[attributeLabel] }}
          </label>
          
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
      <BaseShowLabel :label="label"/>
      <div v-if="modelValue" class="capitalize-first">
        <font-awesome-icon :icon='["fal","check-square"]' class='mr-2 text-blue-900 ' /> {{ displayedValueWhenNotInEditionMode }}
      </div>
      <div v-else>- </div>
    </template>
    <!--endregion-->
  </div>
</template>

<script>
export default {
  name: "BaseShowEditRadio",
  props:  {
    options: { type: [Array, Object], required: true },
    modelValue: {
      type: [String, Number],
      required: false,
      default: null
    },
    label: { type: String, required: false },
    name: { type: String, required: true },
    errors: { type: Object, required: false },
    attributeLabel: { type: String, required: false, default: 'name' },
    trackBy: { type: String, required: false, default: 'id' },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    isVertical: {type: Boolean, required: false, default: false },
    editionMode: {
      type: Boolean,
      required: true
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
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
    displayedValueWhenNotInEditionMode() {
      if (this.options){
        let value = this.options.find(option => option[this.trackBy] === this.modelValue)
        if (value){
          return value[this.attributeLabel]
        }
        return null
      }
      return null
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit('change', event.target.value)
    }
  },
}
</script>
