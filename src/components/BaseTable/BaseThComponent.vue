<template>
  <th class="border-b-2 dark:border-dark-5 whitespace-nowrap capitalize-first"
      @click="sortColumn"
      :class="thClasses"
      :width="thWidth"

  >
    {{ c_title }}
    <font-awesome-icon
        v-if="column.sorter && this.sortMode !== '-'"
        :icon="['fal', sortIcon]"
        class='ml-2'
    />
  </th>
</template>
<script>
import _ from "core-js/internals/internal-state";

export default {
  name: 'BaseThComponent',
  props: {
    column: {},
    thClasses: {},
    currentSort: {},
    width: {default: ''}
  },
  data() {
    return {
      sortMode: '-'
    }
  },
  computed: {
    sortIcon() {
      if (this.sortMode !== '-') {
        return 'sort-' + this.sortMode
      }
      return null
    },
    thWidth() {
      if (_.has(this.column, 'width') && this.column.width != null) {
        return this.column.width
      }
      return this.column.type === 'button' ? '2%' : ''
    },
    c_title() {
      if (!this.column.title  ) return '';
      if (this.column.translatable) return this.$t(`attributes.${this.column.title}`)
      return this.column.title
    }
  },
  methods: {
    emitSortColumn() {
      this.$emit('sort-column', {
        column: this.column.field,
        direction: this.sortMode,
        type: this.column.type
      })
    },
    sortColumn() {

      if (this.sortMode === 'down') {
        this.sortMode = 'up'
        this.emitSortColumn();
      } else if (this.sortMode === 'up') {
        this.sortMode = 'down'
        this.emitSortColumn();
      } else {
        this.sortMode = 'up'
        this.emitSortColumn();
      }
    }
  },
  watch: {
    currentSort(newValue) {
      if (newValue !== this.column.field) {
        this.sortMode = '-'
      }
    }
  }
}
</script>
