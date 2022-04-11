<template>
  <BaseSelectSimple
                    v-if="options"
                    :label="label"
                    :placeholder="placeholder"
                    name='id'
                    :defaultValue="options.filter(el=> el.id === model)"
                    :options='options'
                    :disabled="false"
                    :errors="{}"
                    :required="required"
                    @setSelected='getInputValue'
  />
</template>
<script>

export default {
  name: 'SelectSettingDefaultMessage',
  props: {
    errors: {},
    getInputValue: {},
    options: {},
    label: {},
    placeholder: {
      required: false
    },
    required:{
      default: true
    },
    model: {},

  }
}
</script>

