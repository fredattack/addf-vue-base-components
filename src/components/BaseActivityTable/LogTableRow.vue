<template>
  <tr>
   <td v-for='(value, key) in values' :key="key" class="whitespace-nowrap" :class="key === 0 ? 'font-bold capitalize-first' : ''">{{ value }}</td>
  </tr>
</template>

<script>
export default {
  name: 'LogTableRow',
  props:{ values: {}},
}
</script>

<style scoped>

</style>
