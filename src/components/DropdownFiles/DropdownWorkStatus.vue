<template>
  <dropdown-status
      :options='options'
      :current='current'
      :displayChevron="true"
      color='bg_color'
      @select='mSelect'
  />
</template>

<script>
import DropdownStatus from './DropdownStatus.vue'

export default {
  name: 'DropdownWorkStatus',
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
    }
  },
  methods: {
    mSelect( payload ) {
      this.$emit('select', payload)
    }
  }
}
</script>
