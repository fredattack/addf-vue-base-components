<template>
  <tr :class="trClass">
    <td>
      <BaseButton :icon='buttonIcon' :title="buttonText" @click="showActivity = !showActivity"/>
    </td>
    <td>{{c_causer_name}}</td>
    <td>{{activity.description}}</td>
    <td>{{c_activity_time}}</td>

  </tr>

  <tr v-if='showActivity' :class="trClass" >
    <td colspan='4' style='padding: 0'>
      <LogTable :model="activity.properties"/>
    </td>
  </tr>

</template>

<script>
import LogTable from "./LogTable.vue";
import moment from 'moment'
export default {
  name: 'ActivityTableRow',
  components: {LogTable},
  props:{
    activity: {type: Object, required: true },
    indexValue: {}},
  data() {
    return {
      showActivity: false,
    }
  },
  computed:{
    trClass(){
      return this.indexValue % 2 === 0 ? 'bg-gray-200 dark:bg-dark-1' : ''
    },
    buttonText(){
      return this.showActivity ? this.$t('button.reduce') : this.$t('button.show')
    },
    buttonIcon(){
      return this.showActivity ? 'minus' : 'plus'
    },
    c_activity_time(){
      return moment(this.activity.created_at).format('DD/MM/YYYY HH:mm')
    },
    c_causer_name(){
      return this.activity.causer ? this.activity.causer.full_name : this.$t('global.system')
    }
  },
}
</script>

