<template>
  <RadioGroup v-model="selected" :class="groupClass" :disabled='disabled' >
    <RadioGroupLabel class="sr-only">
      Server size
    </RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption as="template" v-for="option in options" :key="option" :value="option" v-slot="{ active, checked }">
        <div :class="[active ? 'ring-1 ring-offset-2 ring-indigo-500 ' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
          <div class="flex items-center">
            <div class="text-sm">
              <RadioGroupLabel as="p" class="font-medium text-gray-900">
                {{ option }}
                <font-awesome-icon :icon="['fal','check-circle']" size="2x" class='text-indigo-500' v-if="checked"/>
              </RadioGroupLabel>
            </div>
          </div>
          <div :class="[checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { ref } from 'vue'
import { RadioGroup,  RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

export default {
  name: 'BaseRadioGroup',
  props: {
    options: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    groupClass: {
      type: String,
      required: true,
    },
    disabled:{type: Boolean, required: false, default: false}
  },
  setup(props) {
    const selected = ref(props.value)
    return { selected }
  },
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  watch: {
    selected(newValue) {
      this.$emit('change',  {
        value: [newValue],
        attribute: this.name
      });
    }
  },


}
</script>
