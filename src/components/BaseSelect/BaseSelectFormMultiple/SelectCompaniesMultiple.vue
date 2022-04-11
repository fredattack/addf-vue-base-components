<template>
  <BaseSelectMultiple v-if="metadata.companies"
                      :label="$t('attributes.company')"
                      :placeholder="$t('attributes.company')"
                      name="companies_id"
                      :defaultValue="cDefautlValue"
                      :options="metadata.companies || []"
                      :errors="errors.companies"
                      attributeLabel="name"
                      @setSelected="handleSelected"
                      :disabled="permission"/>
</template>
<script>

export default {
  name: 'SelectCompaniesMultiple',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    defaultValue: {},
    permission: {}
  },
  computed:{
    cDefautlValue(){
      if(this.defaultValue.length > 0){
        return this.metadata.companies.filter( item => this.defaultValue.includes(item.id) )
      }
      return []
    },
  },
  methods:{
    handleSelected({attribute, value }){
      let temp = []
      value.map(el => temp.push(el.id))
      this.$emit('getSelected', {attribute: attribute, value: temp })
    }
  },
}
</script>
