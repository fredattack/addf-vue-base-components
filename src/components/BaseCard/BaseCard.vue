<template>
  <div> <!-- les classes de taille doivent être dynamiques -->
    <div class="box lg:mt-5">
      <!-- header attention faut que je vérifie quand je lui passe une icone aussi  -->
      <header class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5" v-if="$slots.header || (headerTitle && headerTitle.length)">
        <slot name="header">
          <h2 class="font-medium text-base mr-auto">
                {{ headerTitle }}
          </h2>
        </slot>
      </header>

      <!-- settings -->
      <div class="p-5">
        <slot name="default"></slot>
      </div>

      <!-- actions -->
      <footer class="flex justify-end mt-5">
        <menu class="text-right">
          <slot name="actions">
          </slot>
        </menu>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    headerTitle: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
