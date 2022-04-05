<template>
  <span v-if='!big' class="flex-shrink-0">
    <span class='text-white rounded-md px-2 py-1' :class="colorClass">
      <font-awesome-icon v-if='this.icon' :icon="['fal', this.icon]" />
      <span v-if="content" class="capitalize-first">{{content}}</span>
    </span>
  </span>

  <div v-else :class="colorClass" class='flex text-white rounded-md px-4 py-2.5 select-none'  aria-expanded="false">
    <font-awesome-icon v-if='this.icon' :icon="['fal', this.icon]" />
    <span v-if="content" class="capitalize-first">{{content}}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    content: {type: String, required: true},
    color: {type: String, required: false, default:''},
    icon: {type: String, required: false},
    big: {type: Boolean, required: false, default: false}
  },
  computed:{
    colorClass(){
      return this.color === '' ? 'bg-theme-2' : `bg-theme-${this.color}`
    },
  }
}
</script>

