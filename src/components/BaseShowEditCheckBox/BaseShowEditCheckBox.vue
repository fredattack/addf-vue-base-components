<template>
  <template v-if="editionMode">
    <BaseEditLabel
      :label="label"
      :required="required"
    />
    
    <div class="mt-5 space-y-3">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="relative flex items-start"
      >
        <div class="flex items-center h-5">
          <input
            :id="trackBy ? `${name}_${option[trackBy]}_${index}` : `${name}_${option}`"
            :key="transitionData"
            v-model="transitionData"
            type="checkbox"
            :value="trackBy ? option[trackBy] : option"
            class="focus:ring-theme-primary h-4 w-4 text-green-600 border-gray-300 rounded"
          >
        </div>
        <div class="ml-3 text-sm">
          <label
            :for="trackBy ? `${name}_${option[trackBy]}_${index}` : `${name}_${option}`"
            class="cursor-pointer"
            v-html="attributeLabel ? option[attributeLabel] : option"
          />
        </div>
      </div>
    </div>
    <template v-if="errors">
      <div
        v-for="(error,index) in errors"
        :key="index"
        class="form-help text-red-600"
      >
        {{ error }}
      </div>
    </template>
  </template>
  <template v-else>
    <BaseEditLabel
      :label="label"
      :required="required"
    /><br>
    <div
      :key="transitionData"
      class="flex flex-col gap-y-3"
    >
      <div
        v-for="(val, key) in transitionData"
        :key="key"
      >
        <font-awesome-icon
          :icon="[`fas`,`check-square`]"
          class="mr-2 text-theme-secondary mt-2"
        />
        <span
          class="cursor-default select-none text-sm text-gray-900">
          {{ trackBy ? options?.find(option => option[trackBy] === val)[attributeLabel] : val }}
        </span>
      </div>
    </div>
  </template>
</template>

<script>
import BaseEditLabel from "@/components/BaseLabel/BaseEditLabel";

export default {
  name: "BaseShowEditCheckbox",
  components: { BaseEditLabel },
  props: {
    extraId: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    editionMode: {
      type: Boolean,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultValue: {
      type: Array,
      required: false,
      default: () => { return [] }
    },
    attributeLabel:{
      type: String,
      required: false,
      default:'name'
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    trackBy:{
      type:String,
      required:false,
      default:null
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      transitionData: []
    }
  },
  watch: {
    transitionData(newValue, oldValue) {
      if(newValue && newValue !== oldValue){
        this.$emit('update:modelValue', newValue)
        this.$emit("change")
      }
    }
  },
  mounted() {
    this.transitionData = this.modelValue
  },
}
</script>

