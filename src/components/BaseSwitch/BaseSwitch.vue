<template>

  <div class='flex'>
    <label v-if="label" class='mb-3 text-xl mr-6'>{{ label }}</label>
    <button @click="toggleSwicth"
            type="button"
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-co  lors ease-in-out duration-200"
            :class="buttonClasses"
            role="switch"
            aria-checked="false">

      <span class="sr-only">Use setting</span>

      <span aria-hidden="true"
            class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            :class="spanClasses"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    modelValue: {
      type: [Boolean],
      default: false
    },
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isChecked: this.modelValue
    }
  },
  computed: {
    buttonClasses() {
      return this.isChecked ? 'bg-theme-primary' : 'bg-gray-200'
    },
    spanClasses() {
      return this.isChecked ? 'translate-x-5' : 'translate-x-0'
    }
  },
  mounted() {
    this.isChecked = this.modelValue
  },
  methods: {
    toggleSwicth() {
      this.isChecked = !this.isChecked
    }
  },
  watch: {
    isChecked(newValue) {
      this.$emit('update:modelValue', this.isChecked)
      this.$emit('change', {attribute: this.name, value: newValue})
    }
  }
}
</script>

