<template>

  <div v-if="question.type === 'input'" :class='classes'>
    <BaseInputDynamicForm
        :label="question.question"
        :placeholder="question.question"
        :name="question.name"
        :value="questionValue.value"
        :disabled="permission"
        :required="true"
        :defaultValue="defaultValue"
        @change.self="getOptionInputValue"
        :labelClass="classLabel"
        :isDefaultValue="isDefaultValue"
    />
  </div>
  <div v-if="question.type === 'input number'" :class='classes'>
    <BaseInputDynamicForm
        :label="question.question"
        :placeholder="question.question"
        :name="question.name"
        :value="questionValue.value"
        :disabled="permission"
        :required="true"
        type="number"
        :defaultValue="questionValue.value"
        @change.self="getOptionInputValue"
        :labelClass="classLabel"
        :isDefaultValue="isDefaultValue"
    />
  </div>
  <div v-else-if="question.type === 'textArea'"  :class='classes'>
    <BaseTextArea :label="question.question"
                  :placeholder="question.question"
                  :name="question.name"
                  :required='true'
                  :disabled="permission"
                  @change.self='getOptionInputValue'/>
  </div>
  <div v-else-if="question.type === 'select'" :class='classes'>
    <BaseSelectSimple :label="question.question"
                      :placeholder="question.question"
                      :name="question.name"
                      :options='question.options'
                      trackBy='name'
                      :disabled="permission"
                      :required='true'
                      @setSelected='getOptionInputValue'/>
    </div>

    <div v-else-if="question.type === 'radio'" :class='classes'>
      <BaseSimpleRadioGroup
          :key="defaultValue"
                            :name="question.name"
                            :label="question.question"
                            :isShowingKey='false'
                            :isReturningKey='true'
                            :trackBy='radioTrackBy'
                            :required='true'
                            :options="question.options"
                            :translatable='false'
                            :disabled='permission'
                            :is-vertical="vertical_align"
                            :defaultValue="defaultValue"
                            @change.self="getOptionInputValue" />
    </div>
  <div v-else-if="question.type === 'datepicker'" :class='classes'>
    <BaseSimpleDatePicker
        :key="question"
        :label="question.question"
        :defaultValue="getDate"
        :name='question.name'
        @change.self='getOptionInputValue'/>
  </div>
  <div v-else-if="question.type === 'selectAjax'" :class='classes'>
    <BaseSelectSimpleAjax
        :key="question"
        :url='question.url'
        :label="question.question"
        :name="question.name"
        :track-by="ajaxTrackBy"
        :attributeLabel="ajaxAttributeLabel"
        @selected="getOptionInputValue"
    />
  </div>
<!--  attributeLabel='title'-->
  <div v-else-if="question.type === 'SelectSettingDefaultMessage'" :class='classes'>
    <SelectSettingDefaultMessage
        v-if="question.options"
        :label="question.question"
        :placeholder="question.question"
        :name="question.name"
        :options="question.options"
        v-model="questionValue.value"
        @selected="getOptionInputValue"
        @setDelected="getOptionInputValue"
        :model="defaultValue"
        :class="classLabel"

    />
  </div>
  <div v-else-if="question.type === 'BaseBooleanRadioGroup'" :class='classes'>
    <BaseBooleanRadioGroup
                           :required="true"
                           :name="question.name"
                           :label="question.question"
                           :defaultValue="defaultValue"
                           @change='getOptionInputValue'/>
  </div>



</template>
trackBy="id"

<script>
import SelectSettingDefaultMessage from './components/SelectSettingDefaultMessage.vue'

import moment from "moment";

export default {
  name: 'DynamicFormInput',
  components: {
    SelectSettingDefaultMessage,
  },
  props: {
    ajaxTrackBy: {type: String, required: false, default: 'id'},
    ajaxAttributeLabel: {type: String, required: false, default: 'name'},
    question: {required: true},
    questionIndex: {},
    radioTrackBy:{
      default: 'name'
    },
    classLabel: {
      required: false
    },
    vertical_align: {
      required: false,
      default : true
    },
    typeInput: {
      required: false
    },
    defaultValue: {
      required: false
    },
    classes:{
      required:false,
      default:'col-start-2'
    },
    isDefaultValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      questionValue: this.question
    }
  },
  computed: {
    permission(){
      return !this.$can('manage_work')
    },

    getDate(){
      let date = new Date()
      let today = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

      return new Date(moment(today, 'DD/MM/YYYY'))
    },
  },
  methods: {
    getOptionInputValue({attribute, value}){
      this.$emit('questionValue', {attribute: attribute, value: value, index: this.questionIndex})
    },
  },
  mounted() {
    return this.questionValue.value = this.defaultValue
  }
}
</script>

