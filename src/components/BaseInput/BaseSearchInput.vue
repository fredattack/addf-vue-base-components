<template>
  <div>
    <div class="relative rounded-md shadow-sm" :class="cGroupClass">
      <input type="text" name="account-number" id="account-number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" v-model="searchTerms" :placeholder="$t('global.placeholder.search')">
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <font-awesome-icon :icon="['fal', 'search']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSearchInput",
  props:{
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      searchTerms: ''
    }
  },
  computed:{
    cGroupClass() {
      return this.groupClass === '' ? 'mt-1' : this.groupClass
    },
  },
  watch: {
    searchTerms(newValue) {
      this.$emit('type-input',newValue)
    }
  },
}
</script>

