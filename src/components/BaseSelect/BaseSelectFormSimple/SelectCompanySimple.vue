<template>
  <BaseSelectSimple v-if="metadata && metadata.companies"
                    :label="$t('attributes.company')"
                    :placeholder="$t('attributes.company')"
                    name='company_id'
                    :defaultValue="metadata.companies.filter(el=> el.id ===model.company_id)"
                    :options='metadata.companies'
                    :disabled="permission"
                    :errors='errors.company_id'
                    @setSelected='getInputValue'/>
</template>
<script>
import BaseSelectSimple from "./BaseSelectSimple.vue";

export default {
  name: 'SelectCompanySimple',
  components: {BaseSelectSimple},
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    model: {},
    permission: {},
  },
}
</script>
