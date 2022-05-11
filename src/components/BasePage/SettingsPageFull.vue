<template>
<!--  <div class='flex p-5' v-if='this.$slots.title || this.$slots.cta'>-->
<!--    <div class='flex-1 pt-2'  v-if='this.$slots.title'>-->
<!--      <slot name="title"></slot>-->
<!--    </div>-->
<!--    <div class='flex flex-row gap-x-3' >-->
<!--      <slot name="cta"></slot>-->
<!--    </div>-->
<!--  </div>-->

  <div v-if='this.$slots.title || this.$slots.cta'
       class="md:w-full sm:w-2/6 md:flex sm:flex md:flex-row sm:flex-col p-5 md:justify-between sm:justify-center mx-auto text-center gap-3"
  >
    <div class="flex justify-center gap-x-3">
      <slot name="title"></slot>
    </div>
    <div v-if='this.$slots.cta'>
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
