<template>
<div :class="groupClass">
<template v-if='editionMode'>
  <div>
    <BaseEditLabel :label="label" :required="required"/>
    <div :class="cPlacement">
      <div class='form-check mr-2' v-for='(val, key) in options' :key='key'>

        <input  class='form-check-input' type='radio' :name='temp_name'
               :value='val' @change="updateInput" :checked="modelValue == val"><br>
        <label class='form-check-label capitalize-first' >
          {{ $t(`enums.yes_no.${key}`) }}
        </label>
      </div>
    </div>
  </div>
</template>

<template v-else>
  <BaseShowLabel :label="label" :required="required"/>
  <font-awesome-icon :icon='["fal","check-square"]' class='mr-2 text-blue-900 ' />{{ $t(`enums.yes_no.${modelValue}`) }}

</template>
</div>
</template>
<script>
import BaseShowLabel from "../BaseLabel/BaseShowLabel.vue";
import BaseEditLabel from "../BaseLabel/BaseEditLabel.vue";

export default {
  name: "BaseTrueFalseShowEditRadioGroup",
  components: {BaseShowLabel, BaseEditLabel},
  emits: ['update:modelValue', 'change'],
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
    editionMode: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Number,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    extra_id: {
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
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
  },
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id,
      options: {1: true, 0: false},
    }
  },
  computed:{
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    }
  },
  methods: {
    updateInput(event) {
      console.log('addf package', event.target.value === true)
      this.$emit("update:modelValue", event.target.value === 'true');
      this.$emit('change', event.target.value === true)
    }
  }
}
</script>

