<template>
  <BaseSelectSimple v-if="metadata && metadata.languages"
                    :label="$t('attributes.language')"
                    :placeholder="$t('attributes.language')"
                    name="language"
                    :defaultValue="metadata.languages.filter(el=> el.id ===model.language)"
                    :options="metadata.languages"
                    :disabled="permission"
                    :errors="errors.language"
                    @setSelected="getInputValue"/>
</template>
<script>

export default {
  name: 'SelectLanguage',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {type: Function},
    model: {},
    permission: {}
  },
}
</script>
