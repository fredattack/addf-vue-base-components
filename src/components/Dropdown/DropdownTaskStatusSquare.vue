<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="flex w-8 h-8 justify-center items-center text-white rounded-md capitalize-first"
        :class='cButtonClasses'
      >
        <font-awesome-icon :icon='["fal",icon]' v-if='icon !== null' :spin="['spinner-third','circle-notch'].includes(icon)" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute left-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-100"
      >
        <div class="px-1 py-1">
          <MenuItem v-for='item in options' :key="item" v-slot="{ active }">
            <button
              :class="[
                  active ? 'bg-gray-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-3',
                  cCurentStatut[trackBy] === item[trackBy] ? 'bg-gray-200' : ''
                ]"
              @click='mSelect( item[trackBy] )'
            >
              <span class='flex-shrink-0 w-3 h-3 rounded-full' :class='"bg-theme-" + item[color]'></span>
              <span class='flex-1 capitalize-first text-left' >{{ item[label] }}</span>
              <font-awesome-icon class='flex-shrink-0' :icon='["fal","check"]' v-if='cCurentStatut[trackBy] === item[trackBy]' />
            </button>
          </MenuItem>

        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
  name: 'DropdownTaskStatusSquare',
  emits: ['select'],
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      required: true
    },
    label: {
      required: false,
      default: 'name'
    },
    icon: {
      required: false,
      default: null
    },
    trackBy: {
      required: false,
      default: 'id'
    },
    color: {
      required: false,
      default: 'bg_color'
    },
    btnStyle: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    cCurentStatut() {
      return this.options && this.options.find( item => item.id === this.current )
    },
    cButtonColor(){
      return this.cCurentStatut && "bg-theme-" + this.cCurentStatut[this.color]
    },
    cButtonClasses(){
      return [this.cButtonColor]
    }
  },
  methods: {
    mSelect( value ) {
      this.$emit('select', {
        [this.trackBy]: value
      })
    }
  }
}
</script>
