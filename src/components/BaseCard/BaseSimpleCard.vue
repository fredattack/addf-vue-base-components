<template>
  <div :class="classes">
    <div class="box px-6 py-5">
      <header class="flex flex-col sm:flex-row items-center mb-5" :class="bordered" v-if="with_header">
        <BaseButton v-if='buttonBackLeft' icon='chevron-left' color='danger' :tooltip="$t('button.back')" class='mr-3'
                    @click="buttonBackLeftRoute !== undefined && buttonBackLeftRoute !== false ? $router.push( buttonBackLeftRoute ) : $router.go(-1)"/>
        <div class='flex-1'>
          <h2 class="text-2xl font-bold capitalize-first">{{ title }}</h2>
          <slot name="header"></slot>
        </div>
        <div>
          <slot name='cta'></slot>
        </div>
      </header>
      <div>
        <slot name="default"></slot>
      </div>
    </div>

  </div>
</template>

<script>
import BaseButton from '@c/baseComponents/button/BaseButton'

export default {
  name: 'BaseSimpleCard',
  components:{
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: { // ne sais pas a quoi ca sert
      type: String,
      required: false
    },
    borderedHeader: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      required: false
    },
    buttonBackLeft: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonBackLeftRoute: {
      type: Object,
      required: false,
      default: false
    }
  },
  computed: {
    forAttribute() { // ne sais pas a quoi ca sert
      return `forAttribute-${this.name}`
    },
    idAttribute() { // ne sais pas a quoi ca sert
      return `idAttribute-${this.name}`
    },
    copyAttribute() { // ne sais pas a quoi ca sert
      return `copy-${this.name}-button`
    },
    bordered() {
      return this.borderedHeader ? 'border-b border-gray-200 dark:border-dark-5' : ''
    },
    with_header(){
      return this.title && this.title.length
    }
  },
}
</script>

<style scoped>

</style>
