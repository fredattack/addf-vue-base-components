<template>

  <div :class="cGroupClass">
    <template v-if='editionMode'>
      <div>
        <BaseEditLabel :label="label" :required="required"/>
        <div class="mt-1 flex rounded-md shadow-sm">
          <div class="relative flex items-stretch flex-grow focus-within:z-10">
            <input :id="id"
                   :type="type"
                   :min='min'
                   :max='max'
                   :value="modelValue"
                   :placeholder="placeholder"
                   @input="updateInput"
                   class="form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
            />
          </div>
          <button type="button"
                  class="-ml-px relative inline-flex items-center space-x-2 px-4
                    py-2 font-medium text-sm rounded-r-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 content-center"
                  @click='buttonFunction'
                  :class="buttonClasses"
          >
            <font-awesome-icon v-if="buttonIcon"
                               class='h-full flex content-center item-center cursor-pointer dark:bg-dark-2 w-3'
                               :icon="['fal', buttonIcon]" size='2x'/>
            <span v-if="buttonLabel">{{ buttonLabel }}</span>
          </button>
        </div>


      </div>
      <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
        {{ $t(error, {attribute: $t('attributes.' + name)}) }}
      </div>
    </template>

    <template v-else>
      <BaseShowLabel :label="label" :model-value="modelValue"/>
    </template>
  </div>

</template>

<script>
export default {
  name: "BaseShowEditInput",
  props: {
    name: {
      type: String,
      default: ''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    type: {
      type: String,
      default: "text",
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float']
        return admittedTypes.indexOf(value) !== -1
      }
    },
    buttonLabel: {type: String, required: false, default: null},
    buttonColor: {
      type: String,
      required: false,
      default: 'primary',
      validator: function (value) {
        const possibleTypes = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'info']
        return possibleTypes.indexOf(value) !== -1
      }
    },
    isOutline: {
      type: Boolean,
      required: false,
      default: false
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false
    },
    isSoft: {
      type: Boolean,
      required: false,
      default: false
    },
    isElevated: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: function (value) {
        const possibleSizes = ['', 'small', 'medium', 'large']
        return possibleSizes.indexOf(value) !== -1
      }
    },
    buttonIcon: {type: String, required: false, default: null},
    buttonFunction: {}
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    buttonTextColorClass() {
      return this.textColor ? `text-${this.textColor}` : ''
    },
    buttonCursorClass() {
      return `cursor-${this.cursor}`
    },
    buttonRoundedClass() {
      return this.isRounded ? 'rounded-full' : ''
    },
    buttonTypeClass() {
      if (this.isOutline) {
        return `btn-outline-${this.buttonColor}`
      }
      if (this.isSoft) {
        return `btn-${this.buttonColor}-soft`
      }
      return `btn-${this.buttonColor}`
    },
    buttonSizeClass() {
      switch (this.size) {
        case 'small' :
          return 'btn-sm'
        case 'large' :
          return 'btn-lg'
        case 'medium' :
        default :
          return ''
      }
    },
    buttonElevationClass() {
      return this.isElevated ? 'shadow-md' : ''
    },
    buttonClasses() {
      return [this.buttonTypeClass, this.buttonRoundedClass, this.buttonElevationClass, this.buttonSizeClass, this.scopedClasses, this.buttonCursorClass, this.buttonTextColorClass].join(' ')
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
}
</script>
