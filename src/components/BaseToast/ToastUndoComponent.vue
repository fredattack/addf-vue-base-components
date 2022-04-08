<template>
  <div id="notification-with-actions-content" class="toastify-content hidden flex "><i data-feather="hard-drive"></i>
    <div class="ml-4 mr-4">
      <div class="font-medium capitalize-first">{{ text }}</div>

      <div class="font-medium flex mt-1.5 justify-center">
        <BaseButton id="undo_btn" color='success' icon='undo-alt' buttonClasses="m-2" :isOutline="true"
                    :title="$t('attributes.undo')"/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ToastUndoComponent',
  props: {
    text: {
      type: String,
      required: true
    },
  },
}
</script>
