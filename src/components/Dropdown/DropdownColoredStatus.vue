<template>
  <dropdown-status
      :options='options'
      :current='current'
      :displayChevron="true"
      :with_label="with_label"
      :color='color_attribute'
      :icon="icon"
      :btnStyle="btnStyle"
      @select='mSelect'
  />
</template>

<script>
import DropdownStatus from './DropdownStatus.vue'

export default {
  name:'DropDownColoredStatus',
  components: {
    DropdownStatus
  },
  emits: ['select'],
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      type: [Object, String],
      required: true
    },
    color_attribute: {
      type: String,
      default: 'bg_color'
    },
    icon: {
      required: false,
      default: null
    },
    with_label: {
      required: false,
      default: true
    },
    displayChevron: {
      required: false,
      default: true
    } ,
    btnStyle: {
      required: false,
      default: false
    }
  },
  methods: {
    mSelect( payload ) {
      this.$emit('select', payload)
    }
  }
}
</script>
