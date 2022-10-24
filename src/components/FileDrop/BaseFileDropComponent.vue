<template>
  <file-pond
    name="attachments"
    ref="pond"
    instantUpload="false"
    :server="server"
    label-idle="Glissez ici vos fichiers ou <span class='filepond--label-action'>cliquez ici</span> pour selectionnez sur votre ordinateur"
    allow-multiple="true"
    accepted-file-types="
    image/jpeg, image/png,image/gif, '.docx',
    file-image, file-word,text/csv,application/vnd.ms-excel,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
    file-excel,application/vnd.ms-powerpoint,
    application/vnd.openxmlformats-officedocument.presentationml.presentation,
    file-powerpoint,file-alt
     'application/doc',
        'application/txt',
        'application/odf',
"
    @addfile="handleAddFile"
    @processfiles="afterSubmit()"
    :files="myFiles"
  />
  <div class='flex justify-end'>
    <BaseButton icon='paper-plane' :title="$t('button.send')" @click="processSubmit"/>
  </div>
</template>

<script>


import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
)

import apiClient from '@u/apiClient'

export default {
  name: 'BaseFileDropComponent',
  props: ['url'],
  emits: ['confirm-submit'],
  data: function () {
    return {
      work:{},
      myFiles: [],
    }
  },
  components: {
    FilePond,
  },
  computed:{
    server(){
     return  {
        process: (fieldName, file, metadata, load)=>{
          const formData = new FormData();
          formData.append(fieldName, file, file.name);

          apiClient.post(this.url, formData).then(response => {
            load(response.statusText)
          }).catch(() => {
          })
        },
      }
    }
  },
  methods: {
    handleProcess(){

    },
    handleAddFile(error, file) {
      this.myFiles.push(file)
    },
    processSubmit() {
      this.$refs['pond'].processFiles()
    },
    async afterSubmit(){
      this.$refs['pond'].removeFiles()
      this.$emit('confirm-submit')
    }
  },
  beforeMount() {
    this.work = this.$store.getters.getWork
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filepond--credits{
  display: none;
}
</style>
