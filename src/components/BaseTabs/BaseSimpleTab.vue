<template>
  <div v-show='cVisibility'>

    <div class="block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px md:flex sm:grid sm:grid-cols-1 md:space-x-8 sm:space-x-3 cursor-pointer" aria-label="Tabs">
          <template v-for="tab in tabs" :key="tab.label" >

            <router-link v-if='tab.gate !== false' :to="{name: tab.routeName}" :class="[this.$route.name === tab.routeName ? `border-theme-${colorWhenSelected} text-theme-${colorWhenSelected}` :
             'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium md:text-sm sm:text-xs']"
               :aria-current="tab.current ? 'page' : undefined">

              <font-awesome-icon v-if='tab.icon' :icon="['fal', tab.icon]" class='mr-2'/>
              <span class='capitalize-first'>{{ tab.label }}</span>
            </router-link>
          </template>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSimpleTab',
  props: {
    tabs: { type: Array, required: true},
    colorWhenSelected: {
      type: String,
      required: false,
      default: 'red-lighter'
    }
  },
  computed:{
    cVisibility(){
      return this.tabs.filter(tab => tab.gate !== false ).length > 1
    }
  }
}
</script>

