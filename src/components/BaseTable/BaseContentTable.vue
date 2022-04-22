<template>
  <div :class="divClasses">
    <!--#region top header -->
    <div class="flex justify-end items-center">
      <!--#region searchbar -->
      <BaseSearchInput v-if="this.search"
                       @typeInput="filterList"
      />
      <!--#endregion -->

      <!--#region sync button -->
      <BaseButton color="secondary"
                  :isoutline="true"
                  icon="sync"
                  :tooltip="$t('button.refresh')"
                  @click="this.$emit('refresh-click')"
                  scopedClasses="mx-2"
                  :title="null"/>
      <!--#endregion -->

    </div>

    <!--#endregion -->
    <table class="table" :class="tableClasses">
      <!--#region header -->
      <thead>
        <tr :class="theadRowClasses">
          <BaseThComponent v-for="column in columns"
                           :key="column.field"
                           :column="column"
                           :th-classes="thClasses"
                           :currentSort="currentSort"
                           @sortColumn="handleSortColumn" />
        </tr>
      </thead>
      <!--#endregion -->
      <tbody>
        <tr @click="this.$emit('rowClick', model[redirect_to_field] )" v-for="(model,index) in filteredModels" :key="index" :class="[trClasses, generateStripedClass(index)]" >
          <td v-for="(column,index) in columns" :key="index" class="dark:border-dark-5" :class="tdClasses">
            <BaseButton v-if="column.type === 'button'"
                        :color='column.metadata.type'
                        :icon='column.metadata.icon'
                        @click.stop='this.$emit(column.metadata.method,model.id )'
                        :tooltip="$t('button.delete')"
                        :isOutline="column.metadata.outline"
                        :title="column.metadata.title"
            />

            <BaseLabel v-if="column.type === 'label' && model[column.metadata.value]"
                       :icon='column.metadata.icon'
                       :content="model[column.metadata.value]"
                       :color="model[column.metadata.color]"
            />

            <ContentTableCell v-else :model="model" :column="column"/>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from "core-js/internals/internal-state";

export default {
  name: 'BaseContentTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    rowClick:{
      type: String,
      required: false,
      default: ''
    },
    redirect_to_field:{
      type: String,
      required: false,
      default: 'id'
    },
    search:{
      type: Boolean,
      default: false
    },
    rows:{ // je pense que cette props n'est pas utilisée
      type: Array,
      required: false
    },
    modelList:{
      type: Array,
      required: true
    },
    isBordered: {
      type: Boolean,
      required: false,
      default: false
    },
    isHoverable: {
      type: Boolean,
      required: false,
      default: false
    },
    isSmallTable: {
      type: Boolean,
      required: false,
      default: false
    },
    isResponsive: {
      type: Boolean,
      required: false,
      default: false
    },
    isStriped: {
      type: Boolean,
      required: false,
      default: false
    },
    theadRowClasses: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      searchTerms: '',
      sortDirection: null,
      sortColumn: null,
      sortType: null,
      currentSort: '',
    }
  },
  computed: {
    tdClasses() {
      return this.isBordered ? 'border' : 'border-b'
    },
    thClasses() {
      return this.isBordered ? 'border' : ''
    },
    trClasses() {
      return this.isHoverable ? 'hover:bg-gray-200 dark:hover:bg-gray-600' : ''
    },
    tableClasses() {
      return this.isSmallTable ? 'table--sm' : ''
    },

    divClasses() {
      return this.isResponsive ? 'overflow-x-auto' : ''
    },

    filteredModels() {

      let copyModelList = this.modelList;

      if (this.searchTerms.length >= 1) {
        copyModelList = copyModelList.filter((model) => {
          let search = this.searchTerms.length ? this.searchTerms.toLowerCase() : '';
          let values = this.filtrableColumns;
          let flag = false
          values.forEach((val) => {
            if (model[val] && model[val].toLowerCase().indexOf(search.toLowerCase()) > -1) {
              flag = true;
              return;
            }
          })
          if (flag) return model
        });
      }

      if( this.sortDirection && this.sortColumn ){
        copyModelList = copyModelList.sort((a,b) => {
          let fa, fb
          if( this.sortType && this.sortType === 'date' ){
            fa = a[this.sortColumn] ? a[this.sortColumn]['sort_value'] : ( this.sortDirection === 'up' ? '9999999999999999' : ( this.sortDirection === 'down' ? '00000000000000000' : '' ) )
            fb = b[this.sortColumn] ? b[this.sortColumn]['sort_value'] : ( this.sortDirection === 'up' ? '9999999999999999' : ( this.sortDirection === 'down' ? '00000000000000000' : '' ) )
          } else {
            fa = a[this.sortColumn].toLowerCase()
            fb = b[this.sortColumn].toLowerCase()
          }
          if (fa < fb) {
            return this.sortDirection ==='up' ? -1 : 1
          }
          if (fa > fb) {
            return this.sortDirection ==='up' ? 1 : -1
          }
          return 0
        })
      }
      return copyModelList;

    },

    filtrableColumns() {
      return  this.columns.filter(function (column){
        return _.has(column,'searchable')
      }).map(obj => {
        return obj.field
      })
    },
  },
  methods: {
    generateStripedClass(index) {
      return this.isStriped && index % 2 !== 0 ? 'bg-gray-200 dark:bg-dark-1' : ''
    },
    mRowClick(val){
      if(this.rowClick !== ''){
        this.$emit(this.rowClick,val)
      }
    },
    filterList(terms) {
      this.searchTerms = terms
    },
    handleSortColumn({column,direction, type}){

      this.currentSort = column

      this.sortColumn = column
      this.sortDirection = direction
      this.sortType = type

    },
  }
}
</script>

