<template>
  <BaseSelectSimple v-if="metadata && metadata.customers"
                    :key="model[name]"
                    :label="$t('attributes.customer')"
                    :placeholder="$t('attributes.customer')"
                    :name="name"
                    :defaultValue="metadata.customers.filter(el=> el.id ===model[name])"
                    :options="metadata.customers"
                    :disabled="permission"
                    :errors="errors[name]"
                    @setSelected="getInputValue"/>
</template>
<script>

export default {
  name: 'SelectCustomer',
  props: {
    errors: {},
    model: {},
    permission: {},
    getInputValue: {},
    metadata: {type: Object},
    name: {type: String,required: false, default: 'customer_id'  }
  },

}
</script>
