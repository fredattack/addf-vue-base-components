<template>
  <div class="flex flex-col mt-2">
    <label :for="name"
           class="form-label capitalize-first">
      {{ label }}&nbsp;<span class="text-red-600" v-if="required">*</span>
    </label>

    <textarea
      ref="ta"
      class="block w-full border rounded-md appearance-none placeholder-gray-500
             dark:bg-dark-2 dark:border-transparent
             focus:outline-none
             disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent
             border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
      v-model.trim="newValue"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      rows="4"
      :disabled='disabled'
      />

    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error,{attribute:$t('attributes.'+name)}) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: {
    name: { type: String, required: true },
    value: { type: String, required: false },
    disabled:{ type: Boolean, required: false, default:false },
    required:{ type: Boolean, required: false, default:false },
    placeholder: { type: String, required: false, default:'' },
    label: { type: String, required: false, default:'' },
    errors: { type: Object, required: false },
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('change',  {
        value: newValue,
        attribute: this.name
      });
    },
  },
  methods: {
    setTextAtPosition(text) {
      this.$refs.ta.value = this.$refs.ta.value.slice(0,this.$refs.ta.selectionStart) + text + this.$refs.ta.value.slice(this.$refs.ta.selectionStart)
    }
  },
}
</script>

