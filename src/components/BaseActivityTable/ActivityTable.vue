<template>
  <div class='overflow-x-auto'>
  <table class="table">
    <thead>
    <tr>
      <th v-for='(header, index) in headers' :key="index" class="border-b-2 dark:border-dark-5 whitespace-nowrap">{{ header }}</th>
    </tr>
    </thead>
    <tbody>
      <ActivityTableRow v-for='(activity, index) in activities' :key="index" :activity="activity" :indexValue="index"/>
    </tbody>
  </table>
  </div>
</template>

<script>
import ActivityTableRow from "./ActivityTableRow.vue";
export default {
  name: 'ActivityTable',
  components: {ActivityTableRow},
  props:{ activities: {type: Object, required: true} },
  data() {
    return {
      headers: ['', this.$t('attributes.user'), this.$t('attributes.event'), this.$t('attributes.date')],
    }
  }
}
</script>

