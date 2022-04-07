<template>
  <input
      v-if="isReturningKey"
           :id='`${name}-${index}-${extra_id}`'
           class='form-check-input'
           type='radio'
           :name='temp_name'
           :value="trackBy === null ? index : element[trackBy]"
           @change="updateInput"
           :checked="modelValue === (trackBy === null ? index : index[trackBy])"
    >
  <input
      v-else
      :id='`${name}-${index}-${extra_id}`'
      class='form-check-input'
      type='radio'
      :name='temp_name'
      :value='trackBy === null ? element : element[trackBy]'
      @change="updateInput"
      v-model='value'
      :checked="modelValue === (trackBy === null ? element : element[trackBy])"
  >
  <br>
  <label class='form-check-label capitalize-first' :for='`${name}-${index}-${extra_id}`'>
    {{ translatedLabel }}
  </label>
</template>

<script>
export default {
  name: "LabelButtonRadioWithInput",
  props: {
    extra_id: {},
    attributeLabel: {},
    isShowingKey: {},
    isReturningKey: {},
    index: {},
    modelValue: {},
    defaultValue: {},
    name: {},
    trackBy: {},
    translatable: {},
    translationExtention: {},
    updateInput: {},
    element: {},
    getByKey: {}
  },
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  computed: {
    translatedLabel() {
      if(this.isShowingKey) {
        if(this.getByKey) {
          console.log('ok', this.index)
          return this.$t(`${this.translationExtention}.${this.trackBy === null ? this.index : this.element[this.attributeLabel]}`)
        } else {
          console.log('ok', this.getByKey)
          return this.$t(`${this.translationExtention}.${this.element}`)
        }
      } else {
        if(this.translatable) {
          return this.$t(`${this.translationExtention}.${this.trackBy === null ? this.index : this.element[this.attributeLabel]}`)
        } else {
          return this.element[this.attributeLabel]
        }
      }
    }
  },
}
</script>

