<template>
  <div class='overflow-x-auto'>
  <table class="table">
    <thead>
    <tr>
      <th class="border-b-2 dark:border-dark-5 whitespace-nowrap " style="width: 30%">{{ $t('global.value_name') }}</th>
      <th class="border-b-2 dark:border-dark-5 whitespace-nowrap " style="width: 35%">{{ $t('global.old_value') }}</th>
      <th class="border-b-2 dark:border-dark-5 whitespace-nowrap " style="width: 35%">{{ $t('global.new_value') }}</th>
    </tr>
    </thead>
    <tbody v-if='model.old'>
      <LogTableRow v-for='(row, index) in computedRowsWhenOld' :key='index' :values="row" />
    </tbody>
    <tbody v-else>
    <LogTableRow v-for='(row, index) in computedRowsWhenNoOld' :key='index' :values="row" />
    </tbody>
  </table>
  </div>
</template>

<script>
import LogTableRow from "./LogTableRow.vue";
export default {
  name: 'LogTable',
  components: {LogTableRow},
  props:{ model: {}},
  computed:{
    listOfKeysThatAreDates(){
      return ['updated_at', 'deleted_at', 'created_at']
    },
    computedRowsWhenNoOld(){
      let rows = []
      for(let key in this.model.attributes){
        let temp = []
        if(this.model.attributes[key]){
          temp.push(this.$t(`attributes.${key}`))
          temp.push('');
          temp.push(this.model.attributes[key])
          rows.push(temp)
        }
      }
      return rows
    },
    computedRowsWhenOld(){
      let rows = []
      for(let key in this.model.attributes){
        let temp = []
        temp.push(this.$t(`attributes.${key}`))
        temp.push(this.model.old[key])
        temp.push(this.model.attributes[key])
        rows.push(temp)
      }
      return rows
    }
  }
}
</script>

