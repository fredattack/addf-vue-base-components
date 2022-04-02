<template>
  <div class='flex p-5' v-if='this.$slots.title || this.$slots.cta'>
    <div class='flex-1 pt-2'  v-if='this.$slots.title'>
      <slot name="title"></slot>
    </div>
    <div class='flex flex-row gap-x-3'  v-if='this.$slots.cta'>
      <slot name="cta"></slot>
    </div>
  </div>

  <div class='flex p-5'>
    <div class='flex-1'>
      <slot name="body"></slot>
    </div>
  </div>

</template>
<script>


export default {
  name: 'SettingsPageFull',

}
</script>
