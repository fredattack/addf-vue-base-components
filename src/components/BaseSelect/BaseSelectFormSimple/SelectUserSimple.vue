<template>
  <BaseSelectSimple v-if="metadata && metadata.users"
                    :label="label"
                    :placeholder="label"
                    :name='name'
                    :defaultValue="metadata.users && metadata.users.filter(el=> el.id ===model[name])"
                    :options='metadata.users'
                    :disabled="permission"
                    :errors='errors[name]'
                    @setSelected='getInputValue'/>
</template>
<script>

export default {
  name: 'SelectUserSimple',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    permission: {},
    model: {},
    label: {
      type: String,
      required: false,
      default: "responsable"
    },
    name: {
      type: String,
      required: false,
      default: "responsable_id"
    }
  }
}
</script>
