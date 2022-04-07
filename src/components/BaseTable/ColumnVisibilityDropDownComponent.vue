<template>
  <div class="dropdown inline-block" data-placement="bottom-end">
    <button class="dropdown-toggle btn btn-primary space-x-3" aria-expanded="false">
      <span class='capitalize-first'>colonne</span>
      <font-awesome-icon :icon='["fal","chevron-down"]'></font-awesome-icon>
    </button>
    <div class="dropdown-menu">
      <div class="dropdown-menu__content box p-2">
        <div>
          <template v-for="column in columns.filter( item => item.toggleable )">
            <a href="#" @click='clickColumnVisibility(column.field)'  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
              <span class='flex-1 mr-5 whitespace-nowrap capitalize-first'>{{ $t(`attributes.${column.title}`) }}</span>
              <font-awesome-icon v-if='!column.hidden' class="flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300" :icon='["fal","check"]'></font-awesome-icon>
            </a>
          </template>
        </div>
        <div class="flex items-center mt-3 space-x-3 hidden">
          <button data-dismiss="dropdown" class="btn btn-secondary">
            apply
          </button>
          <button class="btn btn-primary">
            cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnVisibilityDropDownComponent',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data(){
    return {
      columns: this.modelValue
    }
  },
  methods: {
    clickColumnVisibility( key ){
      this.columns.map( item => {
        if( item.field === key ){
          item.hidden = !item.hidden
        }
      })
      let modelValueInJson = JSON.stringify(this.columns)
      localStorage.setItem('InvoiceColumnsVisibility', modelValueInJson)
      this.columns
      this.$emit('update:modelValue', this.columns );
    }
  }
}
</script>
