<template>
  <iframe class='w-full bg-gray-200' :src='src' width='100%' @load='mResizeIframe' ref='pdfIframe'></iframe>
</template>

<script>
export default {
  name: 'IFramePdf',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    mResizeIframe() {
      let iFrame = this.$refs['pdfIframe'];
      let viewPortH = window.innerHeight;
      let calculatedHeight = viewPortH - iFrame.getBoundingClientRect().y - 45;
      iFrame.height = ( calculatedHeight > 400 ? calculatedHeight : 400 ) + 'px'
    }
  },
  created() {
    window.addEventListener("resize", this.mResizeIframe);
  },
  unmounted() {
    window.removeEventListener("resize", this.mResizeIframe);
  },
}
</script>
