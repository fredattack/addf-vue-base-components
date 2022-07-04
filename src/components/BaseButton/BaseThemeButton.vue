<template>
  <button
    class="w-full flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none justify-center items-center gap-x-3"
    :class="buttonClasses"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="['fal', icon]"
    />
    <template v-if="title">
      <span class="capitalize-first">{{ title }}</span>
    </template>
  </button>
</template>
<script>
export default {
  name: "BaseThemeButton",
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator: function(value) {
        const possibleTypes = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'info']
        return possibleTypes.indexOf(value) !== -1
      }
    },
    scopedClasses: {
      type: String,
      default:''
    },
    type: {
      type: String,
      default: 'button',
      required: false,
      validator: function(value) {
        return ['button','submit'].indexOf(value) !== -1
      }
    },
    cursor: {
      type: String,
      required: false,
      default: 'pointer',
      validator: (val) =>  ['pointer', 'default', 'move', 'text', 'help', 'not-allowed', 'none', 'context-menu', 'grabbing'].indexOf(val) !== -1
    },
    textColor: {type: String, required: false, default: 'white'}
  },
  computed: {
    buttonTextColorClass(){
      return this.textColor ? `text-${this.textColor}` : ''
    },
    buttonBgColorClass(){
      return this.color ? `bg-theme-${this.color}` : ''
    },
    buttonCursorClass(){
      return `cursor-${this.cursor}`
    },
    buttonClasses() {
      return [this.scopedClasses, this.buttonCursorClass, this.buttonTextColorClass, this.buttonBgColorClass].join(' ')
    }
  }
}
</script>
