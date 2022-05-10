<template>

  <fieldset>
    <legend class="block text-sm font-medium text-gray-500 capitalize" v-if="editionMode">{{ legend }}</legend>
    <!--region editionMode-->
    <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px" v-if="editionMode">
      <div class="flex ">
        <div class=" ">
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm capitalize-first"> {{ firstLabel }}  </span>
            </div>
            <input type="text" :name="firstName" :id="firstName" v-model="dFirstValue"
                   class="block w-full pl-12 mr-12 sm:text-sm border-gray-300 rounded-tl-md  focus:border-gray-300 focus:ring-0"
                   placeholder=" " @input="updateFirstValue" >
          </div>
        </div>
        <div class="">
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm capitalize-first"> {{ secondLabel }}  </span>
            </div>
            <input type="text" :name="secondName" :id="secondName" v-model="dSecondValue"
                   class="block w-full pl-12 sm:text-sm border-gray-300 rounded-tr-md focus:border-gray-300 focus:ring-0"
                   placeholder=" " aria-describedby="price-currency" @input="updateSecondValue">
          </div>
        </div>
      </div>
      <div>
          <div class="relative shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm capitalize-first"> {{ thirdLabel }}  </span>
            </div>
          <input type="text" :name="thirdName" :id="thirdName" v-model="dThirdValue"
                 class="block w-full pl-12 pr-12 sm:text-sm border-gray-300 focus:border-gray-300 focus:ring-0"
                 placeholder=" " aria-describedby="price-currency" @input="updateThirdValue">
          </div>
        </div>
    </div>
    <!--endregion-->

    <!--region affichage-->
    <div v-else class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3">
      <legend class="block text-sm font-medium text-gray-800 capitalize">{{ legend }}</legend>
      <div class="grid grid-cols-2 mt-4">
        <div class="col-span-1">
          <BaseShowLabel
              :label="`${firstLabel} (jours)`"
              :model-value="firstValue"
          />
        </div>
        <div class="col-span-1 mb-2">
          <BaseShowLabel
              :label="`${secondLabel} (jours)`"
              :model-value="secondValue"
          />
        </div>
      </div>
      <BaseShowLabel
            :label="`${thirdLabel} (€)`"
            :model-value="thirdValue"
        />
    </div>
    <!--endregion-->
  </fieldset>

</template>
<script>
export default {
  name: 'BaseShowEditTreeInput',
  props: {
    firstName: {
      type: String,
      required: true
    },
    secondName: {
      type: String,
      required: true
    },
    thirdName: {
      type: String,
      required: true
    },
    firstLabel: {
      type: String,
      required: true,
    },
    secondLabel: {
      type: String,
      required: true,
    },
    thirdLabel: {
      type: String,
      required: true,
    },
    legend: {
      type: String,
      required: false,
      default: ''
    },
    firstValue: {
      type: String,
      required: true,
    },
    secondValue: {
      type: String,
      required: true,
    },
    thirdValue: {
      type: String,
      required: true,
    },
    editionMode: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      dFirstValue: null,
      dSecondValue: null,
      dThirdValue: null,
    }
  },
  methods: {
    updateFirstValue(event){
      this.$emit("update:firstValue", event.target.value);
    },
    updateSecondValue(event){
      this.$emit("update:secondValue", event.target.value);
    },
    updateThirdValue(event){
      this.$emit("update:thirdValue", event.target.value);
    },
  },
  watch: {

    firstValue(){
      this.dFirstValue = this.firstValue
    },
    secondValue(){
      this.dSecondValue = this.secondValue
    },
    thirdValue(){
      this.dThirdValue = this.thirdValue
    },
  }
}
</script>
