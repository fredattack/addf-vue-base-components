<template>
  <BasePageHeader v-if='this.$slots.title && this.$slots.cta'>
    <BasePageTitle>
      <slot name="title"></slot>
    </BasePageTitle>
    <BasePageHeaderActions>
    <slot name="cta"></slot>
    </BasePageHeaderActions>
  </BasePageHeader>

  <BasePageBody>
    <slot name="body"></slot>
  </BasePageBody>
</template>
<script>

import BasePageBody from './components/body/BasePageBody.vue'
import BasePageHeader from './components/header/BasePageHeader.vue'
import BasePageHeaderActions from './components/header/BasePageHeaderActions.vue'
import BasePageTitle from './components/header/BasePageTitle.vue'

export default {
  name: 'BasePageFull',
  components: {
    BasePageBody,
    BasePageHeader,
    BasePageHeaderActions,
    BasePageTitle
  }

}
</script>
