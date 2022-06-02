'use strict';

var vue = require('vue');
var moment = require('moment');
var multiselect = require('vue-multiselect');
var vueTheMask = require('vue-the-mask');
var vue$1 = require('@headlessui/vue');
var apiClient = require('@u/apiClient');
var Datepicker = require('vue3-datepicker');
var locale = require('date-fns/locale');
var _ = require('lodash');
var CountryFlag = require('vue-country-flag-next');
var _$1 = require('core-js/internals/internal-state');
var vue3 = require('@tiptap/vue-3');
var tippy = require('tippy.js');
var Document = require('@tiptap/extension-document');
var Paragraph = require('@tiptap/extension-paragraph');
var Text = require('@tiptap/extension-text');
var StarterKit = require('@tiptap/starter-kit');
var Mention = require('@tiptap/extension-mention');
var vueFilePond = require('vue-filepond');
require('filepond/dist/filepond.min.css');
require('filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css');
var FilePondPluginFileValidateType = require('filepond-plugin-file-validate-type');
var FilePondPluginImagePreview = require('filepond-plugin-image-preview');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var multiselect__default = /*#__PURE__*/_interopDefaultLegacy(multiselect);
var apiClient__default = /*#__PURE__*/_interopDefaultLegacy(apiClient);
var Datepicker__default = /*#__PURE__*/_interopDefaultLegacy(Datepicker);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var CountryFlag__default = /*#__PURE__*/_interopDefaultLegacy(CountryFlag);
var ___default$1 = /*#__PURE__*/_interopDefaultLegacy(_$1);
var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);
var Document__default = /*#__PURE__*/_interopDefaultLegacy(Document);
var Paragraph__default = /*#__PURE__*/_interopDefaultLegacy(Paragraph);
var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
var Mention__default = /*#__PURE__*/_interopDefaultLegacy(Mention);
var vueFilePond__default = /*#__PURE__*/_interopDefaultLegacy(vueFilePond);
var FilePondPluginFileValidateType__default = /*#__PURE__*/_interopDefaultLegacy(FilePondPluginFileValidateType);
var FilePondPluginImagePreview__default = /*#__PURE__*/_interopDefaultLegacy(FilePondPluginImagePreview);

var script$1o = {
  name: 'LogTableRow',
  props:{ values: {}},
};

function render$1o(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("tr", null, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.values, (value, key) => {
      return (vue.openBlock(), vue.createElementBlock("td", {
        key: key,
        class: vue.normalizeClass(["whitespace-nowrap", key === 0 ? 'font-bold capitalize-first' : ''])
      }, vue.toDisplayString(value), 3 /* TEXT, CLASS */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$1o.render = render$1o;
script$1o.__file = "src/components/BaseActivityTable/LogTableRow.vue";

var script$1n = {
  name: 'LogTable',
  components: {LogTableRow: script$1o},
  props:{ model: {}},
  computed:{
    listOfKeysThatAreDates(){
      return ['updated_at', 'deleted_at', 'created_at']
    },
    computedRowsWhenNoOld(){
      let rows = [];
      for(let key in this.model.attributes){
        let temp = [];
        if(this.model.attributes[key]){
          temp.push(this.$t(`attributes.${key}`));
          temp.push('');
          temp.push(this.model.attributes[key]);
          rows.push(temp);
        }
      }
      return rows
    },
    computedRowsWhenOld(){
      let rows = [];
      for(let key in this.model.attributes){
        let temp = [];
        temp.push(this.$t(`attributes.${key}`));
        temp.push(this.model.old[key]);
        temp.push(this.model.attributes[key]);
        rows.push(temp);
      }
      return rows
    }
  }
};

const _hoisted_1$17 = { class: "overflow-x-auto" };
const _hoisted_2$X = { class: "table" };
const _hoisted_3$E = {
  class: "border-b-2 dark:border-dark-5 whitespace-nowrap",
  style: {"width":"30%"}
};
const _hoisted_4$p = {
  class: "border-b-2 dark:border-dark-5 whitespace-nowrap",
  style: {"width":"35%"}
};
const _hoisted_5$c = {
  class: "border-b-2 dark:border-dark-5 whitespace-nowrap",
  style: {"width":"35%"}
};
const _hoisted_6$7 = { key: 0 };
const _hoisted_7$6 = { key: 1 };

function render$1n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LogTableRow = vue.resolveComponent("LogTableRow");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$17, [
    vue.createElementVNode("table", _hoisted_2$X, [
      vue.createElementVNode("thead", null, [
        vue.createElementVNode("tr", null, [
          vue.createElementVNode("th", _hoisted_3$E, vue.toDisplayString(_ctx.$t('global.value_name')), 1 /* TEXT */),
          vue.createElementVNode("th", _hoisted_4$p, vue.toDisplayString(_ctx.$t('global.old_value')), 1 /* TEXT */),
          vue.createElementVNode("th", _hoisted_5$c, vue.toDisplayString(_ctx.$t('global.new_value')), 1 /* TEXT */)
        ])
      ]),
      ($props.model.old)
        ? (vue.openBlock(), vue.createElementBlock("tbody", _hoisted_6$7, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.computedRowsWhenOld, (row, index) => {
              return (vue.openBlock(), vue.createBlock(_component_LogTableRow, {
                key: index,
                values: row
              }, null, 8 /* PROPS */, ["values"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (vue.openBlock(), vue.createElementBlock("tbody", _hoisted_7$6, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.computedRowsWhenNoOld, (row, index) => {
              return (vue.openBlock(), vue.createBlock(_component_LogTableRow, {
                key: index,
                values: row
              }, null, 8 /* PROPS */, ["values"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
    ])
  ]))
}

script$1n.render = render$1n;
script$1n.__file = "src/components/BaseActivityTable/LogTable.vue";

var script$1m = {
  name: 'ActivityTableRow',
  components: {LogTable: script$1n},
  props:{
    activity: {type: Object, required: true },
    indexValue: {}},
  data() {
    return {
      showActivity: false,
    }
  },
  computed:{
    trClass(){
      return this.indexValue % 2 === 0 ? 'bg-gray-200 dark:bg-dark-1' : ''
    },
    buttonText(){
      return this.showActivity ? this.$t('button.reduce') : this.$t('button.show')
    },
    buttonIcon(){
      return this.showActivity ? 'minus' : 'plus'
    },
    c_activity_time(){
      return moment__default["default"](this.activity.created_at).format('DD/MM/YYYY HH:mm')
    },
    c_causer_name(){
      return this.activity.causer ? this.activity.causer.full_name : this.$t('global.system')
    }
  },
};

const _hoisted_1$16 = {
  colspan: "4",
  style: {"padding":"0"}
};

function render$1m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = vue.resolveComponent("BaseButton");
  const _component_LogTable = vue.resolveComponent("LogTable");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("tr", {
      class: vue.normalizeClass($options.trClass)
    }, [
      vue.createElementVNode("td", null, [
        vue.createVNode(_component_BaseButton, {
          icon: $options.buttonIcon,
          title: $options.buttonText,
          onClick: _cache[0] || (_cache[0] = $event => ($data.showActivity = !$data.showActivity))
        }, null, 8 /* PROPS */, ["icon", "title"])
      ]),
      vue.createElementVNode("td", null, vue.toDisplayString($options.c_causer_name), 1 /* TEXT */),
      vue.createElementVNode("td", null, vue.toDisplayString($props.activity.description), 1 /* TEXT */),
      vue.createElementVNode("td", null, vue.toDisplayString($options.c_activity_time), 1 /* TEXT */)
    ], 2 /* CLASS */),
    ($data.showActivity)
      ? (vue.openBlock(), vue.createElementBlock("tr", {
          key: 0,
          class: vue.normalizeClass($options.trClass)
        }, [
          vue.createElementVNode("td", _hoisted_1$16, [
            vue.createVNode(_component_LogTable, {
              model: $props.activity.properties
            }, null, 8 /* PROPS */, ["model"])
          ])
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$1m.render = render$1m;
script$1m.__file = "src/components/BaseActivityTable/ActivityTableRow.vue";

var script$1l = {
  name: 'ActivityTable',
  components: {ActivityTableRow: script$1m},
  props:{ activities: {type: Object, required: true} },
  data() {
    return {
      headers: ['', this.$t('attributes.user'), this.$t('attributes.event'), this.$t('attributes.date')],
    }
  }
};

const _hoisted_1$15 = { class: "overflow-x-auto" };
const _hoisted_2$W = { class: "table" };

function render$1l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActivityTableRow = vue.resolveComponent("ActivityTableRow");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$15, [
    vue.createElementVNode("table", _hoisted_2$W, [
      vue.createElementVNode("thead", null, [
        vue.createElementVNode("tr", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.headers, (header, index) => {
            return (vue.openBlock(), vue.createElementBlock("th", {
              key: index,
              class: "border-b-2 dark:border-dark-5 whitespace-nowrap"
            }, vue.toDisplayString(header), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]),
      vue.createElementVNode("tbody", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.activities, (activity, index) => {
          return (vue.openBlock(), vue.createBlock(_component_ActivityTableRow, {
            key: index,
            activity: activity,
            indexValue: index
          }, null, 8 /* PROPS */, ["activity", "indexValue"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

script$1l.render = render$1l;
script$1l.__file = "src/components/BaseActivityTable/ActivityTable.vue";

var script$1k = {
  name: 'BaseShowLabel',
  props: {
    label: {},
    modelValue: {},
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    cLabelClass() {
      return this.labelClass === '' ? 'text-sm font-medium text-gray-500 capitalize-first' : this.labelClass
    },

  }

};

const _hoisted_1$14 = { class: "capitalize-first" };

function render$1k(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass($options.cLabelClass)
        }, vue.toDisplayString($props.label), 3 /* TEXT, CLASS */))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("dd", _hoisted_1$14, vue.toDisplayString($props.modelValue === null || $props.modelValue === '' ?  '-' : $props.modelValue), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}

script$1k.render = render$1k;
script$1k.__file = "src/components/BaseLabel/BaseShowLabel.vue";

var script$1j = {
  name: 'BaseEditLabel',
  props: {
    label: {
      required : false,
      default:''
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    }
  },
};

const _hoisted_1$13 = {
  key: 0,
  class: "text-sm text-gray-500 capitalize-first"
};
const _hoisted_2$V = {
  key: 0,
  class: "text-red-500 capitalize"
};

function render$1j(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.label)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$13, [
        vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
        ($props.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$V, "*"))
          : vue.createCommentVNode("v-if", true)
      ]))
    : vue.createCommentVNode("v-if", true)
}

script$1j.render = render$1j;
script$1j.__file = "src/components/BaseLabel/BaseEditLabel.vue";

var script$1i = {
  name: 'BaseBankShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"], BaseShowLabel: script$1k, BaseEditLabel: script$1j},
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: 'banks_id',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.banks && this.metadata.banks.find( item => item.id === this.modelValue )) return this.metadata.banks.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      }
    }
  }
};

const _hoisted_1$12 = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$U = {
  key: 1,
  class: "mt-3"
};

function render$1i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$12, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.bank_id'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.banks)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.banks,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.bank_id'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.bank_id)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.bank_id, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$U, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.bank_id'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$1i.render = render$1i;
script$1i.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseBankShowEditSelectSimple.vue";

var script$1h = {
  name: 'BaseBooleanRadioGroup',
  emits: ['change'],
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id,
      options: {1: true, 0: false}
    }
  },
  props: {
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: Number, required: false }, // 0 pour le mettre à non et 1 pour le mettre à oui
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false }
  },
  computed:{
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
  },
  watch: {
    value(newValue) {
      this.$emit('change', { attribute: this.name, value: newValue });
    }
  },
};

const _hoisted_1$11 = {
  key: 0,
  class: "form-label capitalize-first"
};
const _hoisted_2$T = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_3$D = ["id", "name", "value", "disabled"];
const _hoisted_4$o = ["for"];

function render$1h(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    (vue.openBlock(), vue.createElementBlock("div", {
      class: "mt-3",
      key: $data.value
    }, [
      ($props.label)
        ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$11, [
            vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
            ($props.label && $props.required)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$T, "*"))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: vue.normalizeClass($options.cPlacement)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.options, (val, key) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            class: "form-check mr-2",
            key: key
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              id: `${$props.name}-${key}-${$props.extra_id}`,
              class: "form-check-input",
              type: "radio",
              name: $data.temp_name,
              value: val,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.value) = $event)),
              disabled: $props.disabled
            }, null, 8 /* PROPS */, _hoisted_3$D), [
              [vue.vModelRadio, $data.value]
            ]),
            vue.createElementVNode("label", {
              class: "form-check-label capitalize-first",
              for: `${$props.name}-${key}-${$props.extra_id}`
            }, vue.toDisplayString(_ctx.$t(`enums.yes_no.${key}`)), 9 /* TEXT, PROPS */, _hoisted_4$o)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */)
    ])),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$1h.render = render$1h;
script$1h.__file = "src/components/BaseRadioGroup/BaseBooleanRadioGroup.vue";

var script$1g = {
  name: 'BaseButton',
  props: {
    tooltip: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    linkTarget: {
      type: Object,
      required: false,
      default: function() {
        return {}
      }
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator: function(value) {
        const possibleTypes = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'info'];
        return possibleTypes.indexOf(value) !== -1
      }
    },
    isOutline: {
      type: Boolean,
      required: false,
      default: false
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false
    },
    isSoft: {
      type: Boolean,
      required: false,
      default: false
    },
    isElevated: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: function(value) {
        const possibleSizes = ['', 'small', 'medium', 'large'];
        return possibleSizes.indexOf(value) !== -1
      }
    },
    scopedClasses: {
      type: String,
      default:''
    },
    type: {
      type: String,
      default: 'button',
      required: false,
      validator: function(value) {
        return ['button','submit'].indexOf(value) !== -1
      }
    },
    cursor: {
      type: String,
      required: false,
      default: 'pointer',
      validator: (val) =>  ['pointer', 'default', 'move', 'text', 'help', 'not-allowed', 'none', 'context-menu', 'grabbing'].indexOf(val) !== -1
    },
    textColor: {type: String, required: false}
  },
  computed: {
    buttonTextColorClass(){
      return this.textColor ? `text-${this.textColor}` : ''
    },
    buttonCursorClass(){
      return `cursor-${this.cursor}`
    },
    buttonRoundedClass() {
      return this.isRounded ? 'rounded-full' : ''
    },
    buttonTypeClass() {
      if (this.isOutline) {
        return `btn-outline-${this.color}`
      }
      if (this.isSoft) {
        return `btn-${this.color}-soft`
      }
      return `btn-${this.color}`
    },
    buttonSizeClass() {
      switch (this.size) {
        case 'small' :
          return 'btn-sm'
        case 'large' :
          return 'btn-lg'
        case 'medium' :
        default :
          return ''
      }
    },
    buttonElevationClass() {
      return this.isElevated ? 'shadow-md' : ''
    },
    buttonClasses() {
      return [this.buttonTypeClass, this.buttonRoundedClass, this.buttonElevationClass, this.buttonSizeClass,this.scopedClasses, this.buttonCursorClass, this.buttonTextColorClass].join(' ')
    }
  }

};

const _hoisted_1$10 = { key: 0 };
const _hoisted_2$S = {
  key: 1,
  class: "inline-block capitalize-first"
};
const _hoisted_3$C = { key: 1 };

function render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_Tippy = vue.resolveComponent("Tippy");

  return (!$props.tooltip)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$10, [
        vue.createElementVNode("button", {
          type: "button",
          class: vue.normalizeClass(["btn flex space-x-2", $options.buttonClasses]),
          "aria-expanded": "false"
        }, [
          (this.icon)
            ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                key: 0,
                icon: ['fal', this.icon]
              }, null, 8 /* PROPS */, ["icon"]))
            : vue.createCommentVNode("v-if", true),
          (this.title)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$S, vue.toDisplayString(this.title), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$C, [
        vue.createVNode(_component_Tippy, {
          tag: "a",
          href: "javascript:;",
          class: vue.normalizeClass(["tooltip btn flex focus:", $options.buttonClasses]),
          content: $props.tooltip
        }, {
          default: vue.withCtx(() => [
            (this.icon)
              ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                  key: 0,
                  icon: ['fal', this.icon]
                }, null, 8 /* PROPS */, ["icon"]))
              : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("span", null, vue.toDisplayString($props.title), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["class", "content"])
      ]))
}

script$1g.render = render$1g;
script$1g.__scopeId = "data-v-d498a3a2";
script$1g.__file = "src/components/BaseButton/BaseButton.vue";

var script$1f = {
  name: 'BaseButtonInput',
  props: {
    isClickable: { type: Boolean, required: false, default: false},
    buttonFunction: {},
    icon: { type: String, required: true, default: 'euro' },
    name: { type: String, required: true },
    value: { type: [String, Number], required: false },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    errors: { type: Object, required: false },
    type: { type: String, required: false, default: 'text', validator: function(value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea', 'number'];
        return admittedTypes.indexOf(value) !== -1
      } },
    parseType: { type: String, required: false, default: 'text', validator: function (value) {
        const admittedTypes = ['text','int','float'];
        return admittedTypes.indexOf(value) !== -1
      } },
    inputClass: { type: String, required: false, default: '' },
    min: {type: Number, required: false},
    max: {type: Number, required: false},
  },
  data() {
    return {
      newValue: this.value
    }
  },
  computed: {
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  watch: {
    newValue(newValue) {
      switch (this.parseType) {
        case 'int':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseInt(newValue) : '',
            attribute: this.name
          });
          break
        case 'float':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseFloat(newValue) : '',
            attribute: this.name
          });
          break
        default:
          this.$emit('change', {
            value: newValue,
            attribute: this.name
          });
      }
    },
  },
};

const _hoisted_1$$ = { class: "mt-3" };
const _hoisted_2$R = ["for"];
const _hoisted_3$B = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_4$n = { class: "relative" };
const _hoisted_5$b = ["name", "type", "min", "max", "value", "id", "placeholder", "disabled", "required"];

function render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$$, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          for: $props.name,
          class: "form-label capitalize-first"
        }, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          (_ctx.isRequired)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$B, "*"))
            : vue.createCommentVNode("v-if", true)
        ], 8 /* PROPS */, _hoisted_2$R))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_4$n, [
      vue.withDirectives(vue.createElementVNode("input", {
        name: $props.name,
        type: $props.type,
        class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
        min: $props.min,
        max: $props.max,
        value: $props.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.newValue) = $event)),
        id: $props.name,
        placeholder: $props.placeholder,
        disabled: $props.disabled,
        required: $props.required
      }, null, 10 /* CLASS, PROPS */, _hoisted_5$b), [
        [vue.vModelDynamic, $data.newValue]
      ]),
      ($props.isClickable)
        ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
            key: 0,
            class: "absolute right-0 top-0 h-full flex item-center cursor-pointer mx-1 dark:bg-dark-2 mr-4 w-3",
            icon: ['fal', $props.icon],
            size: "2x",
            onClick: $props.buttonFunction
          }, null, 8 /* PROPS */, ["icon", "onClick"]))
        : (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
            key: 1,
            class: "absolute right-0 top-0 h-full flex item-center mx-1 dark:bg-dark-2 mr-4 w-3",
            icon: ['fal', $props.icon],
            size: "2x"
          }, null, 8 /* PROPS */, ["icon"]))
    ]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name), max: this.max, min: this.min})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ]))
}

script$1f.render = render$1f;
script$1f.__file = "src/components/BaseInput/BaseButtonInput.vue";

var script$1e = {
  name: 'BaseCard',
  props: {
    headerTitle: {
      type: String,
      required: false
    }
  }
};

const _hoisted_1$_ = { class: "box lg:mt-5" };
const _hoisted_2$Q = {
  key: 0,
  class: "flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
};
const _hoisted_3$A = { class: "font-medium text-base mr-auto" };
const _hoisted_4$m = { class: "p-5" };
const _hoisted_5$a = { class: "flex justify-end mt-5" };
const _hoisted_6$6 = { class: "text-right" };

function render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createCommentVNode(" les classes de taille doivent être dynamiques "),
    vue.createElementVNode("div", _hoisted_1$_, [
      vue.createCommentVNode(" header attention faut que je vérifie quand je lui passe une icone aussi  "),
      (_ctx.$slots.header || ($props.headerTitle && $props.headerTitle.length))
        ? (vue.openBlock(), vue.createElementBlock("header", _hoisted_2$Q, [
            vue.renderSlot(_ctx.$slots, "header", {}, () => [
              vue.createElementVNode("h2", _hoisted_3$A, vue.toDisplayString($props.headerTitle), 1 /* TEXT */)
            ])
          ]))
        : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" settings "),
      vue.createElementVNode("div", _hoisted_4$m, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      vue.createCommentVNode(" actions "),
      vue.createElementVNode("footer", _hoisted_5$a, [
        vue.createElementVNode("menu", _hoisted_6$6, [
          vue.renderSlot(_ctx.$slots, "actions")
        ])
      ])
    ])
  ]))
}

script$1e.render = render$1e;
script$1e.__file = "src/components/BaseCard/BaseCard.vue";

var script$1d = {
  name: 'BaseCardSection',
  props: {
    sectionTitle: {
      type: String,
      required: false
    }
  }
};

const _hoisted_1$Z = { key: 0 };
const _hoisted_2$P = { class: "text-xl font-bold capitalize-first" };

function render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", null, [
    (_ctx.$slots.sectionTitle || ( $props.sectionTitle && $props.sectionTitle.length))
      ? (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$Z, [
          vue.renderSlot(_ctx.$slots, "sectionTitle", {}, () => [
            vue.createElementVNode("h2", _hoisted_2$P, vue.toDisplayString($props.sectionTitle), 1 /* TEXT */)
          ])
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$1d.render = render$1d;
script$1d.__file = "src/components/BaseCard/BaseCardSection.vue";

var script$1c = {
  name: 'BaseCheckBox',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('checkboxChange',  {
        value: newValue,
        attribute: this.name
      });
    }
  }
};

const _hoisted_1$Y = { class: "mt-3" };
const _hoisted_2$O = {
  key: 0,
  class: "form-label"
};
const _hoisted_3$z = {
  key: 1,
  class: "text-red-600"
};
const _hoisted_4$l = { class: "flex flex-col sm:flex-row mt-2" };
const _hoisted_5$9 = ["id", "name", "disabled"];

function render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$Y, [
      ($props.label)
        ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_2$O, vue.toDisplayString($props.label), 1 /* TEXT */))
        : vue.createCommentVNode("v-if", true),
      ($props.label && $props.required)
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$z, " *"))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_4$l, [
        vue.withDirectives(vue.createElementVNode("input", {
          id: `checkbox-${$props.name}`,
          class: "form-check-input",
          type: "checkbox",
          name: $props.name,
          disabled: $props.disabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.newValue) = $event))
        }, null, 8 /* PROPS */, _hoisted_5$9), [
          [vue.vModelCheckbox, $data.newValue]
        ])
      ])
    ]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$1c.render = render$1c;
script$1c.__file = "src/components/BaseCheckBox/BaseCheckBox.vue";

var script$1b = {
  name: 'BaseCompanyShowEditSelectMultiple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    name: {
      type: String,
      required: false,
      default: 'companies',
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Array,
      default() { return [] },
      require: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    metadata: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return [] },
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    cDefaultValue(){
      let defaultValues = [];
      for(let i of this.modelValue) {
        defaultValues.push(this.metadata.companies.find( item => item.id === i ));
      }
      return defaultValues
    },
  },
  methods: {
    updateInput( newValue ) {
      let updateModelValue = [];
      for(let i of newValue) {
        updateModelValue.push(i.id);
      }
      this.$emit("update:modelValue", updateModelValue);
    }
  }
};

const _hoisted_1$X = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$N = {
  key: 1,
  class: "mt-3 flex flex-col"
};
const _hoisted_3$y = { key: 0 };
const _hoisted_4$k = /*#__PURE__*/vue.createTextVNode(/*#__PURE__*/vue.toDisplayString('-'));

function render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$X, [
        vue.createElementVNode("div", null, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label ? $props.label : _ctx.$t('attributes.companies'),
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          ($props.metadata && $props.metadata.companies)
            ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
                key: 0,
                options: $props.metadata.companies,
                multiple: "",
                modelValue: $options.cDefaultValue,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = $event => (($options.cDefaultValue) = $event)),
                  $options.updateInput
                ],
                placeholder: $props.placeholder,
                searchable: $props.searchable,
                label: $props.attributeLabel,
                "track-by": $props.trackBy,
                required: $props.required
              }, null, 8 /* PROPS */, ["options", "modelValue", "placeholder", "searchable", "label", "track-by", "required", "onUpdate:modelValue"]))
            : vue.createCommentVNode("v-if", true)
        ]),
        ($props.errors && $props.errors.companies_id)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors.companies_id, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$N, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.companies'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.companies && $props.modelValue.length >= 1)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$y, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("span", {
                  class: "inline-block mr-3",
                  key: index
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ["fal","check-square"],
                    class: "mr-1 text-blue-900 mt-2"
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString($props.metadata.companies.find(data => data.id === item).name), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_4$k
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]))
}

script$1b.render = render$1b;
script$1b.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectMultiple/BaseCompanyShowEditSelectMultiple.vue";

var script$1a = {
  name: 'BaseCompanyShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'company_id',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.companies && this.metadata.companies.find( item => item.id === this.modelValue )) return this.metadata.companies.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue",null);
      }
    }
  }
};

const _hoisted_1$W = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$M = {
  key: 1,
  class: "mt-3"
};

function render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$W, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.company'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.companies)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.companies,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.company'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.company_id)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.company_id, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$M, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.company'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$1a.render = render$1a;
script$1a.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseCompanyShowEditSelectSimple.vue";

var script$19 = {
  name: 'BaseCountryShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}}
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'country',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}}
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.countries && this.metadata.countries.find( item => item.id === this.modelValue )) return this.metadata.countries.find( item => item.id === this.modelValue )
      else return null
    },

  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue", null);
      }
    }
  }
};

const _hoisted_1$V = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$L = {
  key: 1,
  class: "mt-3"
};

function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$V, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.country'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.countries)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.countries,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.country'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.country)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.country, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$L, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.country'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$19.render = render$19;
script$19.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseCountryShowEditSelectSimple.vue";

var script$18 = {
  name: 'BaseCustomerShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}}
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'customer_id',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}}
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.customers && this.metadata.customers.find( item => item.id === this.modelValue )) return this.metadata.customers.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue",null);
      }
    }
  }
};

const _hoisted_1$U = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$K = {
  key: 1,
  class: "mt-3"
};

function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$U, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.customer'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.customers)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.customers,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.customer'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.customer_id)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.customer_id, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$K, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.customer'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$18.render = render$18;
script$18.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseCustomerShowEditSelectSimple.vue";

var script$17 = {
  directives: {mask: vueTheMask.mask},
  name: 'BaseMaskedInput',
  props: {
    name: { type: String, required: true },
    value: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea'];
        return admittedTypes.indexOf(value) !== -1
      } },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    groupClass: { type: String, required: false, default: '' },
    labelClass: { type: String, required: false, default: '' },
    mask: { type: String, required: false, default: '' },
    token: { type: Object, required: false, default() { return {} }
    },
    inputClass: { type: String, required: false, default: '' },
    errors: { type: Object, required: false },
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    isRequired() {
      return this.required
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  data() {
    return {
      newValue: this.value
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('change', {
        value: newValue,
        attribute: this.name
      });
    },
  }
};

const _hoisted_1$T = ["for"];
const _hoisted_2$J = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_3$x = ["name", "type", "id", "placeholder", "disabled", "required"];

function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_mask = vue.resolveDirective("mask");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    vue.createElementVNode("label", {
      for: $props.name,
      class: vue.normalizeClass([$options.cLabelClass, "capitalize-first"])
    }, [
      vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
      ($options.isRequired)
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$J, "*"))
        : vue.createCommentVNode("v-if", true)
    ], 10 /* CLASS, PROPS */, _hoisted_1$T),
    vue.withDirectives(vue.createElementVNode("input", {
      name: $props.name,
      type: $props.type,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.newValue) = $event)),
      id: $props.name,
      class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      required: $options.isRequired
    }, null, 10 /* CLASS, PROPS */, _hoisted_3$x), [
      [vue.vModelDynamic, $data.newValue],
      [_directive_mask, $props.mask]
    ]),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "form-help text-red-600"
      }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$17.render = render$17;
script$17.__file = "src/components/BaseInput/BaseMaskedInput.vue";

var script$16 = {
  name: 'BaseDateInput',
  components: {BaseInputMasked: script$17},
  props: {
    errors: {},
    event: {},
    format: {type: String, required: false, default: "##/##/####"},
    required: { type: Boolean, required: false, default: false },
    getInputValue: {},
    placeholder: {},
    label: {},
    name: {},
    index: {},
    disabled: {type: Boolean, required: false, default:false},
    value: {}
  },
  data() {
    return {
      customTokens: {
        'H': {pattern: /[0-2]/},
        'h': {pattern: /[0-3]/},
        'M': {pattern: /[0-5]/},
        'm': {pattern: /[0-9]/},

      },
    }
  },
};

function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseInputMasked = vue.resolveComponent("BaseInputMasked");

  return (vue.openBlock(), vue.createBlock(_component_BaseInputMasked, {
    label: $props.label,
    placeholder: $props.placeholder,
    name: $props.name,
    value: $props.value,
    disabled: $props.disabled,
    errors: $props.errors,
    required: $props.required,
    mask: [$props.format],
    onChange: vue.withModifiers($props.getInputValue, ["self"])
  }, null, 8 /* PROPS */, ["label", "placeholder", "name", "value", "disabled", "errors", "required", "mask", "onChange"]))
}

script$16.render = render$16;
script$16.__file = "src/components/BaseInput/BaseDateInput.vue";

var script$15 = {
  name: 'BaseDocShowEditSelectMultiple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    name: {
      type: String,
      required: false,
      default: 'available_docs',
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Array,
      default() { return [] },
      require: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    metadata: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return [] },
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    cDefaultValue(){
      let defaultValues = [];
      for(let i of this.modelValue) {
        defaultValues.push(this.metadata.doc_types.find( item => item.id === i ));
      }
      return defaultValues
    },
  },
  methods: {
    updateInput( newValue ) {
      let updateModelValue = [];
      for(let i of newValue) {
        updateModelValue.push(i.id);
      }
      this.$emit("update:modelValue", updateModelValue);
    }
  }
};

const _hoisted_1$S = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$I = {
  key: 1,
  class: "mt-3 flex flex-col"
};
const _hoisted_3$w = { key: 0 };
const _hoisted_4$j = /*#__PURE__*/vue.createTextVNode(/*#__PURE__*/vue.toDisplayString('-'));

function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$S, [
        vue.createElementVNode("div", null, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label ? $props.label : _ctx.$t('attributes.available_docs'),
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          ($props.metadata && $props.metadata.doc_types)
            ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
                key: 0,
                options: $props.metadata.doc_types,
                multiple: "",
                modelValue: $options.cDefaultValue,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = $event => (($options.cDefaultValue) = $event)),
                  $options.updateInput
                ],
                placeholder: $props.placeholder,
                searchable: $props.searchable,
                label: $props.attributeLabel,
                "track-by": $props.trackBy,
                required: $props.required
              }, null, 8 /* PROPS */, ["options", "modelValue", "placeholder", "searchable", "label", "track-by", "required", "onUpdate:modelValue"]))
            : vue.createCommentVNode("v-if", true)
        ]),
        ($props.errors && $props.errors.available_docs)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors.available_docs, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$I, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.available_docs'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.doc_types && $props.modelValue.length >= 1)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$w, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("span", {
                  class: "inline-block mr-3 capitalize-first",
                  key: index
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ["fal","check-square"],
                    class: "mr-1 text-blue-900 mt-2"
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString($props.metadata.doc_types.find(data => data.id === item).name), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_4$j
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]))
}

script$15.render = render$15;
script$15.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectMultiple/BaseDocShowEditSelectMultiple.vue";

var script$14 = {
  name: 'BaseEventTypeShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'event_type',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.event_types && this.metadata.event_types.find( item => item.id === this.modelValue )) return this.metadata.event_types.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      }
    }
  }
};

const _hoisted_1$R = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$H = {
  key: 1,
  class: "mt-3"
};

function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$R, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.event_type'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.event_types)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.event_types,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.event_type'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.event_type)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.event_type, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$H, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.event_type'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$14.render = render$14;
script$14.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseEventTypeShowEditSelectSimple.vue";

var script$13 = {

  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: false
    },
    defaultValue: {},
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea', 'number'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  methods: {
    updateInput(event){
      if(this.type === 'number'){
        let newValue;
        switch (this.parseType) {
          case 'int':
            newValue = event.target.value !== '' && !isNaN(event.target.value)  ? parseInt(event.target.value) : '';
            break
          case 'float':
            newValue = event.target.value !== '' && !isNaN(event.target.value) ? parseFloat(event.target.value) : '';
            break
          default:
            newValue = this.max && parseInt(this.max) < event.target.value ?  parseInt(this.max) : event.target.value;
        }
            this.$emit("update:modelValue", newValue);
      } else {
        this.$emit("update:modelValue", event.target.value);
      }
    },

  },
  watch: {
    modelValue(newValue) {
      this.$emit('input',  {
        value: newValue,
        attribute: this.name
      });
    }
  }
};

const _hoisted_1$Q = ["for"];
const _hoisted_2$G = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_3$v = ["name", "type", "value", "id", "min", "max", "placeholder", "disabled", "required"];

function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          for: $props.name,
          class: vue.normalizeClass(["capitalize-first", $options.cLabelClass])
        }, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          ($props.label && $props.required)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$G, "*"))
            : vue.createCommentVNode("v-if", true)
        ], 10 /* CLASS, PROPS */, _hoisted_1$Q))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("input", {
      name: $props.name,
      type: $props.type,
      value: $props.modelValue,
      id: $props.name,
      min: $props.min,
      max: $props.max,
      class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      required: $props.required,
      onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args)))
    }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_3$v),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "form-help text-red-600"
      }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name), max: this.max, min: this.min})), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$13.render = render$13;
script$13.__file = "src/components/BaseInput/BaseInput.vue";

var script$12 = {
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
};

const _hoisted_1$P = {
  key: 0,
  class: "flex-shrink-0"
};
const _hoisted_2$F = {
  key: 1,
  class: "capitalize-first"
};
const _hoisted_3$u = {
  key: 1,
  class: "capitalize-first"
};

function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (!$props.big)
    ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$P, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["text-white rounded-md px-2 py-1", $options.colorClass])
        }, [
          (this.icon)
            ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                key: 0,
                icon: ['fal', this.icon]
              }, null, 8 /* PROPS */, ["icon"]))
            : vue.createCommentVNode("v-if", true),
          ($props.content)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$F, vue.toDisplayString($props.content), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: vue.normalizeClass([$options.colorClass, "flex text-white rounded-md px-4 py-2.5 select-none"]),
        "aria-expanded": "false"
      }, [
        (this.icon)
          ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
              key: 0,
              icon: ['fal', this.icon]
            }, null, 8 /* PROPS */, ["icon"]))
          : vue.createCommentVNode("v-if", true),
        ($props.content)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$u, vue.toDisplayString($props.content), 1 /* TEXT */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */))
}

script$12.render = render$12;
script$12.__file = "src/components/BaseLabel/BaseLabel.vue";

var script$11 = {
  name: 'BaseLanguageShowEditSelectMultiple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    name: {
      type: String,
      required: false,
      default: 'available_languages',
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Array,
      default() { return [] },
      require: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    metadata: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return [] },
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    cDefaultValue(){
      let defaultValues = [];
      for(let i of this.modelValue) {
        defaultValues.push(this.metadata.languages.find( item => item.id === i ));
      }
      return defaultValues
    },
  },
  methods: {
    updateInput( newValue ) {
      let updateModelValue = [];
      for(let i of newValue) {
        updateModelValue.push(i.id);
      }
      this.$emit("update:modelValue", updateModelValue);
    }
  }
};

const _hoisted_1$O = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$E = {
  key: 1,
  class: "mt-3 flex flex-col"
};
const _hoisted_3$t = { key: 0 };
const _hoisted_4$i = /*#__PURE__*/vue.createTextVNode(/*#__PURE__*/vue.toDisplayString('-'));

function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$O, [
        vue.createElementVNode("div", null, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label ? $props.label : _ctx.$t('attributes.language'),
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          ($props.metadata && $props.metadata.languages)
            ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
                key: 0,
                options: $props.metadata.languages,
                multiple: "",
                modelValue: $options.cDefaultValue,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = $event => (($options.cDefaultValue) = $event)),
                  $options.updateInput
                ],
                placeholder: $props.placeholder,
                searchable: $props.searchable,
                label: $props.attributeLabel,
                "track-by": $props.trackBy,
                required: $props.required
              }, null, 8 /* PROPS */, ["options", "modelValue", "placeholder", "searchable", "label", "track-by", "required", "onUpdate:modelValue"]))
            : vue.createCommentVNode("v-if", true)
        ]),
        ($props.errors && $props.errors.available_languages)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors.available_languages, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$E, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.language'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.languages && $props.modelValue.length >= 1)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$t, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("span", {
                  class: "inline-block mr-3",
                  key: index
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ["fal","check-square"],
                    class: "mr-1 text-blue-900 mt-2"
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString($props.metadata.languages.find(data => data.id === item).name), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_4$i
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]))
}

script$11.render = render$11;
script$11.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectMultiple/BaseLanguageShowEditSelectMultiple.vue";

var script$10 = {
  name: 'BaseLanguageShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'language',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.languages && this.metadata.languages.find( item => item.id === this.modelValue )) return this.metadata.languages.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      }
    }
  }
};

const _hoisted_1$N = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$D = {
  key: 1,
  class: "mt-3"
};

function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$N, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.language'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.languages)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.languages,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.language'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.language)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.language, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$D, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.language'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$10.render = render$10;
script$10.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseLanguageShowEditSelectSimple.vue";

var script$$ = {
  name: 'BasePageBody',
  props: {
    cols: {
      type: Number,
      required: false,
      default: 12
    },
    gap: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    bodyClass() {
      return [
          `grid-cols-${this.cols}`,
          `gap-${this.gap}`
      ]
    }
  }
};

function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("main", {
    class: vue.normalizeClass(["pos grid mt-5", $options.bodyClass])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$$.render = render$$;
script$$.__file = "src/components/BasePage/components/body/BasePageBody.vue";

var script$_ = {
  name: 'BasePageHeader'
};

const _hoisted_1$M = { class: "flex flex-col sm:flex-row items-center mt-8" };

function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$M, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$_.render = render$_;
script$_.__file = "src/components/BasePage/components/header/BasePageHeader.vue";

var script$Z = {
  name: 'BasePageHeaderActions'
};

const _hoisted_1$L = { class: "flex flex-row md:flex-row flex-1 justify-end mt-4 sm:mt-0" };

function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$L, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$Z.render = render$Z;
script$Z.__file = "src/components/BasePage/components/header/BasePageHeaderActions.vue";

var script$Y = {
  name: 'BasePageTitle'

};

const _hoisted_1$K = { class: "w-full md:w-auto text-lg font-medium mr-auto flex-1 text-center sm:text-left" };

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("h2", _hoisted_1$K, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$Y.render = render$Y;
script$Y.__file = "src/components/BasePage/components/header/BasePageTitle.vue";

var script$X = {
  name: 'BasePageFull',
  components: {
    BasePageBody: script$$,
    BasePageHeader: script$_,
    BasePageHeaderActions: script$Z,
    BasePageTitle: script$Y
  }

};

function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasePageTitle = vue.resolveComponent("BasePageTitle");
  const _component_BasePageHeaderActions = vue.resolveComponent("BasePageHeaderActions");
  const _component_BasePageHeader = vue.resolveComponent("BasePageHeader");
  const _component_BasePageBody = vue.resolveComponent("BasePageBody");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    (this.$slots.title && this.$slots.cta)
      ? (vue.openBlock(), vue.createBlock(_component_BasePageHeader, { key: 0 }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_BasePageTitle, null, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "title")
              ]),
              _: 3 /* FORWARDED */
            }),
            vue.createVNode(_component_BasePageHeaderActions, null, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "cta")
              ]),
              _: 3 /* FORWARDED */
            })
          ]),
          _: 3 /* FORWARDED */
        }))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode(_component_BasePageBody, null, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "body")
      ]),
      _: 3 /* FORWARDED */
    })
  ], 64 /* STABLE_FRAGMENT */))
}

script$X.render = render$X;
script$X.__file = "src/components/BasePage/BasePageFull.vue";

// import _ from "core-js/internals/internal-state";

var script$W = {
  name: 'PhoneInput',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    model: {
      type:Object,
      required: false
    },
    countryPlaceholder: {
      type: String,
      required: false
    },
    numberPlaceholder: {
      type: String,
      required: false
    },
    errors: {
      type: Object,
      required: false
    },
    countries: {
      type: Object,
      required: true
    },
    disabled:{
      type: Boolean,
      required: false,
      default:false
    }
  },
  data() {
    return {
      numberValue: null,
      phoneErrors: null,
      countryValue: null,
      metadata: {},
    }
  },
  computed: {
    isDisabled() {
      return this.disabled;
    }
  },
  mounted() {
    this.numberValue = this.model[this.name+'_field'];
    this.countryValue = this.model[this.name+'_country'];
  },
  watch: {
    model(newValue){
      this.numberValue = newValue[this.name+'_field'];
      this.countryValue = newValue[this.name+'_country'];
    },
    numberValue(newValue){
      this.$emit('change',  {
        value: newValue,
        attribute: `${this.name}_field`
      });
    },
    countryValue(newValue){
      this.$emit('change',  {
        value: newValue,
        attribute: `${this.name}_country`
      });
    },
    // errors(newValue){
    //   this.phoneErrors =  _.pick(newValue,[`${this.name}_country`,`${this.name}_field`])
    // },
  }
};

const _hoisted_1$J = { class: "mt-3" };
const _hoisted_2$C = ["for"];
const _hoisted_3$s = { class: "w-full relative" };
const _hoisted_4$h = { class: "absolute inset-y-0 left-0 w-22" };
const _hoisted_5$8 = /*#__PURE__*/vue.createElementVNode("label", { class: "sr-only" }, "Country", -1 /* HOISTED */);
const _hoisted_6$5 = ["disabled", "name"];
const _hoisted_7$5 = {
  disabled: "",
  selected: ""
};
const _hoisted_8$4 = ["value", "disabled"];
const _hoisted_9$2 = ["name", "id", "disabled", "placeholder"];
const _hoisted_10$1 = {
  key: 0,
  class: "form-help text-red-600"
};

function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$J, [
    vue.createElementVNode("label", {
      for: $props.name,
      class: "form-label"
    }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_2$C),
    vue.createElementVNode("div", _hoisted_3$s, [
      vue.createElementVNode("div", _hoisted_4$h, [
        _hoisted_5$8,
        vue.withDirectives(vue.createElementVNode("select", {
          disabled: $options.isDisabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.countryValue) = $event)),
          name: this.name+'_country',
          class: "block w-full border rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
        }, [
          vue.createElementVNode("option", _hoisted_7$5, vue.toDisplayString($props.countryPlaceholder), 1 /* TEXT */),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.countries, (model, key) => {
            return (vue.openBlock(), vue.createElementBlock("option", {
              key: key,
              value: model.id,
              disabled: !_ctx.$can('manage_content')
            }, vue.toDisplayString(model.id), 9 /* TEXT, PROPS */, _hoisted_8$4))
          }), 128 /* KEYED_FRAGMENT */))
        ], 8 /* PROPS */, _hoisted_6$5), [
          [vue.vModelSelect, $data.countryValue]
        ])
      ]),
      vue.withDirectives(vue.createElementVNode("input", {
        type: "text",
        name: this.name+'_field',
        id: $props.name,
        class: "block w-full border py-2 px-6 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent pl-24 border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1",
        disabled: $options.isDisabled,
        placeholder: $props.numberPlaceholder,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.numberValue) = $event))
      }, null, 8 /* PROPS */, _hoisted_9$2), [
        [vue.vModelText, $data.numberValue]
      ])
    ]),
    ($props.errors)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10$1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, key) => {
            return (vue.openBlock(), vue.createElementBlock("div", { key: key }, vue.toDisplayString(_ctx.$t(error[0], {attribute: _ctx.$t('attributes.' + key)})), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}

script$W.render = render$W;
script$W.__file = "src/components/BaseInput/BasePhoneInput.vue";

var script$V = {
  name: 'BaseRadioGroup',
  props: {
    options: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    groupClass: {
      type: String,
      required: true,
    },
    disabled:{type: Boolean, required: false, default: false}
  },
  setup(props) {
    const selected = vue.ref(props.value);
    return { selected }
  },
  components: {
    RadioGroup: vue$1.RadioGroup,
    RadioGroupLabel: vue$1.RadioGroupLabel,
    RadioGroupOption: vue$1.RadioGroupOption,
  },
  watch: {
    selected(newValue) {
      this.$emit('change',  {
        value: [newValue],
        attribute: this.name
      });
    }
  },


};

const _hoisted_1$I = /*#__PURE__*/vue.createTextVNode(" Server size ");
const _hoisted_2$B = { class: "space-y-4" };
const _hoisted_3$r = { class: "flex items-center" };
const _hoisted_4$g = { class: "text-sm" };

function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RadioGroupLabel = vue.resolveComponent("RadioGroupLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_RadioGroupOption = vue.resolveComponent("RadioGroupOption");
  const _component_RadioGroup = vue.resolveComponent("RadioGroup");

  return (vue.openBlock(), vue.createBlock(_component_RadioGroup, {
    modelValue: $setup.selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.selected) = $event)),
    class: vue.normalizeClass($props.groupClass),
    disabled: $props.disabled
  }, {
    default: vue.withCtx(() => [
      vue.createVNode(_component_RadioGroupLabel, { class: "sr-only" }, {
        default: vue.withCtx(() => [
          _hoisted_1$I
        ]),
        _: 1 /* STABLE */
      }),
      vue.createElementVNode("div", _hoisted_2$B, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
          return (vue.openBlock(), vue.createBlock(_component_RadioGroupOption, {
            as: "template",
            key: option,
            value: option
          }, {
            default: vue.withCtx(({ active, checked }) => [
              vue.createElementVNode("div", {
                class: vue.normalizeClass([active ? 'ring-1 ring-offset-2 ring-indigo-500 ' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'])
              }, [
                vue.createElementVNode("div", _hoisted_3$r, [
                  vue.createElementVNode("div", _hoisted_4$g, [
                    vue.createVNode(_component_RadioGroupLabel, {
                      as: "p",
                      class: "font-medium text-gray-900"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(option) + " ", 1 /* TEXT */),
                        checked
                          ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                              key: 0,
                              icon: ['fal','check-circle'],
                              size: "2x",
                              class: "text-indigo-500"
                            }))
                          : vue.createCommentVNode("v-if", true)
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */)
                  ])
                ]),
                vue.createElementVNode("div", {
                  class: vue.normalizeClass([checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']),
                  "aria-hidden": "true"
                }, null, 2 /* CLASS */)
              ], 2 /* CLASS */)
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "class", "disabled"]))
}

script$V.render = render$V;
script$V.__file = "src/components/BaseRadioGroup/BaseRadioGroup.vue";

var script$U = {
  name: "BaseSearchInput",
  props:{
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      searchTerms: ''
    }
  },
  computed:{
    cGroupClass() {
      return this.groupClass === '' ? 'mt-1' : this.groupClass
    },
  },
  watch: {
    searchTerms(newValue) {
      this.$emit('type-input',newValue);
    }
  },
};

const _hoisted_1$H = ["placeholder"];
const _hoisted_2$A = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" };

function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(["relative rounded-md shadow-sm", $options.cGroupClass])
    }, [
      vue.withDirectives(vue.createElementVNode("input", {
        type: "text",
        name: "account-number",
        id: "account-number",
        class: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.searchTerms) = $event)),
        placeholder: _ctx.$t('global.placeholder.search')
      }, null, 8 /* PROPS */, _hoisted_1$H), [
        [vue.vModelText, $data.searchTerms]
      ]),
      vue.createElementVNode("div", _hoisted_2$A, [
        vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'search'] })
      ])
    ], 2 /* CLASS */)
  ]))
}

script$U.render = render$U;
script$U.__file = "src/components/BaseInput/BaseSearchInput.vue";

var script$T = {
  name: 'BaseSelectMultiple',
  components: {
    multiselect: multiselect__default["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    errors: {
      type: Object,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  watch: {
    value(newValue) {
      this.$emit(`setSelected`, {
        value: newValue,
        attribute: this.name
      });
    }
  },


};

const _hoisted_1$G = { class: "flex flex-col" };
const _hoisted_2$z = {
  key: 0,
  class: "form-label capitalize-first mt-3"
};
const _hoisted_3$q = {
  key: 0,
  class: "text-red-600"
};

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multiselect = vue.resolveComponent("multiselect");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$G, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_2$z, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          ($props.required)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$q, "*"))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode(_component_multiselect, {
      options: $props.options,
      multiple: "",
      placeholder: $props.placeholder,
      modelValue: $data.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.value) = $event)),
      searchable: $props.searchable,
      label: $props.attributeLabel,
      "track-by": $props.trackBy,
      disabled: $props.disabled,
      required: $props.required
    }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "searchable", "label", "track-by", "disabled", "required"]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ]))
}

script$T.render = render$T;
script$T.__file = "src/components/BaseSelect/BaseSelectFormMultiple/BaseSelectMultiple.vue";

var script$S = {
  name: 'BaseSelectSimple',
  components: {
    multiselect: multiselect__default["default"]
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    groupClass: {type: String, required: false, default: ''},
    labelClass: {type: String, required: false, default: ''},
    selectClass: {type: String, required: false, default: ''},
    errors: {
      type: Object,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    isRequired() {
      return this.required
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
  },
  watch: {
    value(newValue) {
      if (newValue != null) {
        this.$emit('setSelected', {
          value: newValue[this.trackBy],
          attribute: this.name
        });
      }
    }
  },
};

const _hoisted_1$F = {
  key: 0,
  class: "text-red-600"
};

function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multiselect = vue.resolveComponent("multiselect");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    vue.createElementVNode("label", {
      class: vue.normalizeClass([$options.cLabelClass, "capitalize-first"])
    }, [
      vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
      ($options.isRequired)
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$F, "*"))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */),
    vue.createVNode(_component_multiselect, {
      options: $props.options,
      placeholder: $props.placeholder,
      modelValue: $data.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.value) = $event)),
      searchable: $props.searchable,
      label: $props.attributeLabel,
      "track-by": $props.trackBy,
      disabled: $props.disabled,
      required: $props.required
    }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "searchable", "label", "track-by", "disabled", "required"]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$S.render = render$S;
script$S.__file = "src/components/BaseSelect/BaseSelectFormSimple/BaseSelectSimple.vue";

var script$R = {
  name: 'BaseSelectSimpleAjax',
  components: {multiselect: multiselect__default["default"]},
  emits: ['update:modelValue'],
  data() {
    return {
      options: [],
      loading:false,
      defaultValue : this.defaultAjax
    }
  },
  props: {
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    modelValue: {type: Object, required: false, default: null},
    defaultAjax: {type: Object, required: false, default() { return {} }},
    url: {},
    name: {},
    isRequired: {type: Boolean, required: false, default: false},
    label: {type: String, required: false},
    groupClass:{ type: String, required: false, default:'' },
    labelClass:{ type: String, required: false, default:'' },
    fullModelResponse:{ type: Boolean, required: false, default:false },
    errors: { type: Object, required: false },
  },
  computed:{
    cGroupClass(){
      return this.groupClass === '' ? 'mt-3' : this.groupClass
    },
    cLabelClass(){
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
  },
  methods: {
    async fetchOption(keyword) {
      if (keyword.length > 2) {
        this.loading=true;
        await apiClient__default["default"].get(this.url + '?terms=' + keyword)
            .then(async response => {
              this.loading=false;
              this.options = response.data;
            });
      }
    },

  },
  watch: {
    defaultValue(newValue) {
      if (newValue != null && newValue !== '') {
        if(this.fullModelResponse){
          this.$emit('update:modelValue', newValue);
          this.$emit('workSelect',newValue);

        }else {
        this.$emit('update:modelValue', newValue[this.trackBy]);
          this.$emit('selected', {attribute: this.name || 'selectAjax' ,value: newValue[this.trackBy]});
        }
      }
    },
  },
};

const _hoisted_1$E = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_2$y = { class: "custom__tag" };
const _hoisted_3$p = ["onClick"];

function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multiselect = vue.resolveComponent("multiselect");

  return ($props.defaultAjax)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass($options.cGroupClass)
      }, [
        ($props.label)
          ? (vue.openBlock(), vue.createElementBlock("label", {
              key: 0,
              class: vue.normalizeClass([$options.cLabelClass, "capitalize-first"])
            }, [
              vue.createTextVNode(vue.toDisplayString($props.label) + "  ", 1 /* TEXT */),
              ($props.isRequired)
                ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$E, "*"))
                : vue.createCommentVNode("v-if", true)
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (vue.openBlock(), vue.createBlock(_component_multiselect, {
          key: $data.defaultValue,
          modelValue: $data.defaultValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.defaultValue) = $event)),
          id: $props.name,
          label: $props.attributeLabel,
          "track-by": $props.trackBy,
          placeholder: "Type to search",
          "open-direction": "bottom",
          options: $data.options,
          value: $props.defaultAjax,
          multiple: false,
          searchable: true,
          loading: $data.loading,
          "internal-search": true,
          "clear-on-select": true,
          "close-on-select": true,
          "options-limit": 300,
          limit: 10,
          "limit-text": 2,
          "max-height": 600,
          "show-no-results": false,
          "hide-selected": true,
          onSearchChange: $options.fetchOption
        }, {
          tag: vue.withCtx(({ option, remove }) => [
            vue.createElementVNode("span", _hoisted_2$y, [
              vue.createElementVNode("span", null, vue.toDisplayString(option.name), 1 /* TEXT */),
              vue.createElementVNode("span", {
                class: "custom__remove",
                onClick: $event => (remove(option))
              }, "❌", 8 /* PROPS */, _hoisted_3$p)
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["modelValue", "id", "label", "track-by", "options", "value", "loading", "onSearchChange"])),
        ($props.errors)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */))
    : vue.createCommentVNode("v-if", true)
}

script$R.render = render$R;
script$R.__file = "src/components/BaseSelect/BaseSelectFormSimple/BaseSelectSimpleAjax.vue";

var script$Q = {
  directives: {mask: vueTheMask.mask},
  name: 'BaseShowEditDateInput',
  components: { BaseEditLabel: script$1j, BaseShowLabel: script$1k },
  props: {
    editionMode: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    mask: {
      type: Array,
      required: false,
      default() {
        return ['##/##/####']
      }
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
};

const _hoisted_1$D = ["name", "value", "id", "placeholder"];
const _hoisted_2$x = {
  key: 1,
  class: "mt-3"
};

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _directive_mask = vue.resolveDirective("mask");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass([$options.cGroupClass, "mt-3"])
      }, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label,
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        vue.withDirectives(vue.createElementVNode("input", {
          name: $props.name,
          type: "text",
          value: $props.modelValue,
          onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
          id: $props.name,
          class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
          placeholder: $props.placeholder
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1$D), [
          [_directive_mask, $props.mask]
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$x, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label,
          "model-value": $props.modelValue
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$Q.render = render$Q;
script$Q.__file = "src/components/BaseShowEditInput/BaseShowEditDateInput.vue";

var script$P = {
  name: 'BaseShowEditDatePicker',
  components:{
    Datepicker: Datepicker__default["default"],
    BaseEditLabel: script$1j,
    BaseShowLabel: script$1k,
  },
  props:{
    editionMode: {
      type: Boolean,
      required: true,
    },
    modelValue: {},
    label: {
      type: String,
      require: false
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    canTypeDateManually: {
      type: Boolean,
      required: false,
      default: false
    },
    clearButtonVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    viewType: {
      type: String,
      required: false,
      default: 'day',
      validator: function(value) {
        const admittedTypes = ['day', 'month', 'year', 'time'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    monthFormat: {
      type: String,
      required: false,
      default: 'LLLL yyyy'
    },
    weekFormat: {
      type: String,
      required: false,
      default: 'EE'
    },
    startingDayOfTheWeek: {
      type: Number,
      required: false,
      default: 1
    },
    format: {
      type: String,
      required: false,
      default:'dd/MM/yyyy'
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
  },
  data() {
    return {
      locale: locale.fr,
      style: {
        "--vdp-bg-color": "#ffffff",
        "--vdp-text-color": "#424242",
        "--vdp-box-shadow": "0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",
        "--vdp-border-radius": "8px",
        "--vdp-heading-size": "2.5em",
        "--vdp-heading-weight": "bold",
        "--vdp-heading-hover-color": "#eeeeee",
        "--vdp-arrow-color": "currentColor",
        "--vdp-elem-color": "currentColor",
        "--vdp-disabled-color": "#d5d9e0",
        "--vdp-hover-color": "#ffffff",
        "--vdp-hover-bg-color": "#a30800",
        "--vdp-selected-color": "#ffffff",
        "--vdp-selected-bg-color": "#a30800",
        "--vdp-elem-font-size": "0.8em",
        "--vdp-elem-border-radius": "3px",
        "--vdp-divider-color": "#d5d9e0"
      },
    }
  },
  computed:{
    cInputClass(){
      return this.disabled ? 'w-full border shadow-sm py-2 px-3 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1' + 'bg-gray-100 cursor-not-allowed dark:bg-dark-2 dark:border-transparent bg-gray-100'
        : 'w-full border shadow-sm py-2 px-3 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1'
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass(){
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
    cInjectedValue(){
      return new Date(moment__default["default"](this.modelValue, 'DD/MM/YYYY'))
    },
    cDisplayedValueWhenNotEditionMode(){
      if(this.modelValue){
        return this.modelValue
      }
      return '-'
    },
  },
  methods: {
    updateValueAction( newValue ) {
      this.$emit("update:modelValue", moment__default["default"](newValue).format('DD/MM/YYYY'));
    },
  },
};

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_datepicker = vue.resolveComponent("datepicker");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass($options.cGroupClass)
      }, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label,
          class: "cLabelClass",
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        vue.createVNode(_component_datepicker, {
          modelValue: $options.cInjectedValue,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = $event => (($options.cInjectedValue) = $event)),
            $options.updateValueAction
          ],
          monthHeadingFormat: $props.monthFormat,
          weekdayFormat: $props.weekFormat,
          inputFormat: $props.format,
          weekStartsOn: $props.startingDayOfTheWeek,
          clearable: $props.clearButtonVisible,
          typeable: $props.canTypeDateManually,
          startingView: $props.viewType,
          style: vue.normalizeStyle($data.style),
          locale: $data.locale,
          class: vue.normalizeClass($options.cInputClass)
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "monthHeadingFormat", "weekdayFormat", "inputFormat", "weekStartsOn", "clearable", "typeable", "startingView", "style", "locale", "class"]),
        ($props.errors)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */))
    : (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: vue.normalizeClass($options.cGroupClass)
      }, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label,
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ], 2 /* CLASS */))
}

script$P.render = render$P;
script$P.__file = "src/components/BaseShowEditDatePicker/BaseShowEditDatePicker.vue";

var script$O = {
  name: "BaseShowEditInput",
  components: {BaseEditLabel: script$1j, BaseShowLabel: script$1k},
  props: {
    name: {
      type: String,
      default: ''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    type: {
      type: String,
      default: "text",
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
};

const _hoisted_1$C = ["id", "type", "min", "max", "value", "placeholder", "disabled"];

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("div", null, [
            vue.createVNode(_component_BaseEditLabel, {
              label: $props.label,
              required: $props.required
            }, null, 8 /* PROPS */, ["label", "required"]),
            vue.createElementVNode("input", {
              id: $props.id,
              type: $props.type,
              min: $props.min,
              max: $props.max,
              value: $props.modelValue,
              placeholder: $props.placeholder,
              onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
              disabled: $props.disabled,
              class: "form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$C)
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
            return (vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "form-help text-red-600"
            }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : (vue.openBlock(), vue.createBlock(_component_BaseShowLabel, {
          key: 1,
          label: $props.label,
          "model-value": $props.modelValue
        }, null, 8 /* PROPS */, ["label", "model-value"]))
  ], 2 /* CLASS */))
}

script$O.render = render$O;
script$O.__file = "src/components/BaseShowEditInput/BaseShowEditInput.vue";

var script$N = {
  name: 'BaseShowEditPhoneInput',
  components: {
    // BaseEditLabel,
    // BaseShowPhoneLabel,
  },
  props: {
    countryValue: {
      type: String,
    },
    numberValue: {
      type: String,
    },
    editionMode: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    countryPlaceholder: {
      type: String,
      required: false
    },
    numberPlaceholder: {
      type: String,
      required: false
    },
    errors: {
      type: Object,
      required: false
    },
    metadata: {
      type: Object,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ['update:countryValue', 'update:numberValue'],
  data() {
    return {
      phoneErrors: null,
      dNumberValue: null,
      dCountryValue: null
    }
  },
  computed: {
    cDisplayedValueWhenNotEditionMode(){
      if(this.countryValue && this.numberValue){
        return `${this.countryValue} - ${this.numberValue}`
      }
      return '-'
    },
  },
  methods: {
    updateSelectValue(event){
        this.$emit("update:countryValue", event.target.value);
    },
    updateNumberField(event){
      this.$emit("update:numberValue", event.target.value);
    },
  },
  mounted() {
    this.dNumberValue = this.numberValue;
    this.dCountryValue = this.countryValue;
  },
  watch: {
    errors:{
      handler(newValue) {
      this.phoneErrors =  ___default["default"].pick(newValue,[`${this.name}_country`,`${this.name}_field`]);
      },
      deep: true,
        immediate: true,
    },
    numberValue(){
      this.dNumberValue = this.numberValue;
    },
    countryValue(){
      this.dCountryValue = this.countryValue;
    },
  }
};

const _hoisted_1$B = { class: "mt-3" };
const _hoisted_2$w = { key: 0 };
const _hoisted_3$o = { class: "w-full relative" };
const _hoisted_4$f = {
  key: 0,
  class: "absolute inset-y-0 left-0 w-22"
};
const _hoisted_5$7 = ["name"];
const _hoisted_6$4 = { selected: "" };
const _hoisted_7$4 = ["value"];
const _hoisted_8$3 = ["name", "id", "placeholder"];
const _hoisted_9$1 = { key: 1 };

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowPhoneLabel = vue.resolveComponent("BaseShowPhoneLabel");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$B, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$w, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createElementVNode("div", _hoisted_3$o, [
            ($props.metadata && $props.metadata.countries)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$f, [
                  vue.withDirectives(vue.createElementVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.dCountryValue) = $event)),
                    name: this.name+'_country',
                    onInput: _cache[1] || (_cache[1] = (...args) => ($options.updateSelectValue && $options.updateSelectValue(...args))),
                    class: "block w-full border rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
                  }, [
                    vue.createElementVNode("option", _hoisted_6$4, vue.toDisplayString($props.countryPlaceholder), 1 /* TEXT */),
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.metadata.countries, (model, index) => {
                      return (vue.openBlock(), vue.createElementBlock("option", {
                        key: index,
                        value: model.id
                      }, vue.toDisplayString(`${model.id}`), 9 /* TEXT, PROPS */, _hoisted_7$4))
                    }), 128 /* KEYED_FRAGMENT */))
                  ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$7), [
                    [vue.vModelSelect, $data.dCountryValue]
                  ])
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              name: this.name+'_field',
              id: $props.name,
              class: "block w-full border py-2 px-6 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent pl-24 border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1",
              placeholder: $props.numberPlaceholder,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.dNumberValue) = $event)),
              onInput: _cache[3] || (_cache[3] = (...args) => ($options.updateNumberField && $options.updateNumberField(...args)))
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_8$3), [
              [vue.vModelText, $data.dNumberValue]
            ])
          ]),
          ($data.phoneErrors)
            ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.phoneErrors, (error, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "form-help text-red-600"
                }, vue.toDisplayString(_ctx.$t(error[0], {attribute: _ctx.$t('attributes.' + index)})), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$1, [
          vue.createVNode(_component_BaseShowPhoneLabel, {
            label: $props.label,
            "model-value": $data.dNumberValue,
            "country-value": $data.dCountryValue
          }, null, 8 /* PROPS */, ["label", "model-value", "country-value"])
        ]))
  ]))
}

script$N.render = render$N;
script$N.__file = "src/components/BaseShowEditInput/BaseShowEditPhoneInput.vue";

var script$M = {
  name: "LabelButtonRadioWithInput",
  props: {
    extra_id: {},
    attributeLabel: {},
    isShowingKey: {},
    isReturningKey: {},
    index: {},
    modelValue: {},
    defaultValue: {},
    name: {},
    trackBy: {},
    translatable: {},
    translationExtention: {},
    updateInput: {},
    element: {},
    getByKey: {}
  },
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  computed: {
    translatedLabel() {
      if(this.isShowingKey) {
        if(this.getByKey) {
          return this.$t(`${this.translationExtention}.${this.trackBy === null ? this.index : this.element[this.attributeLabel]}`)
        } else {
          return this.translatable ? this.$t(`${this.translationExtention}.${this.element}`) : this.element
        }
      } else {
        if(this.translatable) {
          return this.$t(`${this.translationExtention}.${this.trackBy === null ? this.index : this.element[this.attributeLabel]}`)
        } else {
          return this.element[this.attributeLabel]
        }
      }
    }
  },
};

const _hoisted_1$A = ["id", "name", "value", "checked"];
const _hoisted_2$v = ["id", "name", "value", "checked"];
const _hoisted_3$n = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_4$e = ["for"];

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    ($props.isReturningKey)
      ? (vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          id: `${$props.name}-${$props.index}-${$props.extra_id}`,
          class: "form-check-input",
          type: "radio",
          name: $data.temp_name,
          value: $props.trackBy === null ? $props.index : $props.element[$props.trackBy],
          onChange: _cache[0] || (_cache[0] = (...args) => ($props.updateInput && $props.updateInput(...args))),
          checked: $props.modelValue === ($props.trackBy === null ? $props.index : $props.index[$props.trackBy])
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$A))
      : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 1,
          id: `${$props.name}-${$props.index}-${$props.extra_id}`,
          class: "form-check-input",
          type: "radio",
          name: $data.temp_name,
          value: $props.trackBy === null ? $props.element : $props.element[$props.trackBy],
          onChange: _cache[1] || (_cache[1] = (...args) => ($props.updateInput && $props.updateInput(...args))),
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.value) = $event)),
          checked: $props.modelValue === ($props.trackBy === null ? $props.element : $props.element[$props.trackBy])
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$v)), [
          [vue.vModelRadio, $data.value]
        ]),
    _hoisted_3$n,
    vue.createElementVNode("label", {
      class: "form-check-label capitalize-first",
      for: `${$props.name}-${$props.index}-${$props.extra_id}`
    }, vue.toDisplayString($options.translatedLabel), 9 /* TEXT, PROPS */, _hoisted_4$e)
  ], 64 /* STABLE_FRAGMENT */))
}

script$M.render = render$M;
script$M.__file = "src/components/BaseShowEditRadioGroup/components/LabelButtonRadioWithInput.vue";

var script$L = {
  name: "BaseShowEditRadioGroup",
  components: {LabelButtonRadioWithInput: script$M},
  props:  {
    options: { type: [Array, Object], required: true },
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: [String, Number], required: false },
    translationExtention: {type: String, required: false},
    isReturningKey: { type: Boolean, required: false, default: false },
    isShowingKey: { type: Boolean, required: false, default: false },
    attributeLabel: { type: String, required: false, default: 'name' },
    trackBy: { type: String, required: false, default: null },
    translatable:{type: Boolean,required:false,default:false},
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false },
    editionMode: {},
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    getByKey: {type: Boolean, default: false},
    isNumber: {
      type: Boolean,
      default: false,
      required: false
    },

  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
    cGetLabel() {
      if(this.isShowingKey) {
        if(!this.isReturningKey) {
          return this.translatable ? this.$t(`${this.translationExtention}.${this.modelValue}`) : this.modelValue
        } else {
          return this.options ? this.options[this.modelValue] : ''
        }
      } else {
        return this.translatable ? this.$t(`${this.translationExtention}.${this.findModelValue()}`) : this.findModelValue()
      }
    }
  },
  methods: {
    findModelValue() {
      if(this.getByKey) {
        // // console.log(Object.keys(this.options).find(item => item.id === this.modelValue))
        if(this.options && Object.keys(this.options).find(item => this.options[item] === this.modelValue)) return Object.keys(this.options).find(item => this.options[item] === this.modelValue)
        return null
      } else {
        if(this.options && this.options.find(item => item.id === this.modelValue)) return this.options.find(item => item.id === this.modelValue).name
        return null
      }

    },
    updateInput(event) {
      let modelValueUpdate = this.isNumber ? Number(event.target.value) : event.target.value;
      this.$emit("update:modelValue", modelValueUpdate);
      this.$emit('change', event.target.value);
    }
  },
};

const _hoisted_1$z = {
  key: 0,
  class: "capitalize-first"
};
const _hoisted_2$u = { key: 1 };

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_LabelButtonRadioWithInput = vue.resolveComponent("LabelButtonRadioWithInput");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    vue.createCommentVNode("region mode edition"),
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass($options.cPlacement)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (val, key) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                class: "form-check mr-2",
                key: key
              }, [
                vue.createVNode(_component_LabelButtonRadioWithInput, {
                  extra_id: $props.extra_id,
                  "attribute-label": $props.attributeLabel,
                  "is-showing-key": $props.isShowingKey,
                  "is-returning-key": $props.isReturningKey,
                  index: key,
                  element: val,
                  "model-value": $props.modelValue,
                  "default-value": $props.defaultValue,
                  "track-by": $props.trackBy,
                  translatable: $props.translatable,
                  "translation-extention": $props.translationExtention,
                  name: $props.name,
                  getByKey: $props.getByKey,
                  "update-input": $options.updateInput
                }, null, 8 /* PROPS */, ["extra_id", "attribute-label", "is-showing-key", "is-returning-key", "index", "element", "model-value", "default-value", "track-by", "translatable", "translation-extention", "name", "getByKey", "update-input"])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 2 /* CLASS */),
          ($props.errors)
            ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "form-help text-red-600"
                }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createCommentVNode("endregion"),
          vue.createCommentVNode("region mode affichage"),
          vue.createVNode(_component_BaseShowLabel, {
            label: $props.label,
            required: $props.required,
            class: vue.normalizeClass(_ctx.cLabelClass)
          }, null, 8 /* PROPS */, ["label", "required", "class"]),
          ($props.modelValue)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, [
                vue.createVNode(_component_font_awesome_icon, {
                  icon: ["fal","check-square"],
                  class: "mr-2 text-blue-900"
                }),
                vue.createTextVNode(" " + vue.toDisplayString($options.cGetLabel), 1 /* TEXT */)
              ]))
            : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$u, "- "))
        ], 64 /* STABLE_FRAGMENT */)),
    vue.createCommentVNode("endregion")
  ], 2 /* CLASS */))
}

script$L.render = render$L;
script$L.__file = "src/components/BaseShowEditRadioGroup/BaseShowEditRadioGroup.vue";

var script$K = {
  name: 'BaseShowEditSelectAjax',
  components: {multiselect: multiselect__default["default"]},
  props: {
    editionMode: { type: Boolean, required: true },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    modelValue: {type: Object, required: false, default: null},
    defaultAjax: {type: Object, required: false, default() { return {}}},
    url: {},
    name: {},
    label: {type: String, required: false},
    groupClass:{ type: String, required: false, default:'' },
    labelClass:{ type: String, required: false, default:'' },
    fullModelResponse:{ type: Boolean, required: false, default:false },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [],
      loading:false,
      defaultValue : this.defaultAjax
    }
  },
  watch: {
    defaultValue(newValue) {
      if (newValue != null && newValue !== '') {
        if(this.fullModelResponse){
          this.$emit('update:modelValue', newValue);
          this.$emit('workSelect',newValue);

        }else {
        this.$emit('update:modelValue', newValue[this.trackBy]);
          this.$emit('selected:value',newValue[this.trackBy]);
        }
      }
    },
  },
  computed:{
    cDisplayedValueWhenNotEditionMode(){
      return this.defaultValue.title ? this.defaultValue.title : '-'
    },
    cGroupClass(){
      return this.groupClass === '' ? 'mt-3' : this.groupClass
    },
  },
  methods: {
    async fetchOption(keyword) {
      if (keyword.length > 2) {
        this.loading=true;
        await apiClient__default["default"].get(this.url + '?terms=' + keyword)
            .then(async response => {
              this.loading=false;
              this.options = response.data;
            });
      }
    },

  },
};

const _hoisted_1$y = { key: 0 };
const _hoisted_2$t = { class: "text-sm font-medium text-gray-500 capitalize-first mt-3" };
const _hoisted_3$m = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_4$d = { class: "custom__tag" };
const _hoisted_5$6 = ["onClick"];
const _hoisted_6$3 = { key: 1 };
const _hoisted_7$3 = { class: "text-sm font-medium text-gray-500 capitalize-first pt-1" };
const _hoisted_8$2 = { class: "mt-1 text-sm text-gray-900" };

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multiselect = vue.resolveComponent("multiselect");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, [
        ($props.defaultAjax)
          ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass($options.cGroupClass)
            }, [
              vue.createElementVNode("label", _hoisted_2$t, [
                vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
                (_ctx.required)
                  ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$m, "*"))
                  : vue.createCommentVNode("v-if", true)
              ]),
              (vue.openBlock(), vue.createBlock(_component_multiselect, {
                key: $data.defaultValue,
                modelValue: $data.defaultValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.defaultValue) = $event)),
                id: $props.name,
                label: $props.attributeLabel,
                "track-by": $props.trackBy,
                placeholder: "Type to search",
                "open-direction": "bottom",
                options: $data.options,
                value: $props.defaultAjax,
                multiple: false,
                searchable: true,
                loading: $data.loading,
                "internal-search": true,
                "clear-on-select": true,
                "close-on-select": true,
                "options-limit": 300,
                limit: 10,
                "limit-text": 2,
                "max-height": 600,
                "show-no-results": false,
                "hide-selected": true,
                onSearchChange: $options.fetchOption
              }, {
                tag: vue.withCtx(({ option, remove }) => [
                  vue.createElementVNode("span", _hoisted_4$d, [
                    vue.createElementVNode("span", null, vue.toDisplayString(option.name), 1 /* TEXT */),
                    vue.createElementVNode("span", {
                      class: "custom__remove",
                      onClick: $event => (remove(option))
                    }, "❌", 8 /* PROPS */, _hoisted_5$6)
                  ])
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["modelValue", "id", "label", "track-by", "options", "value", "loading", "onSearchChange"]))
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, [
        vue.createElementVNode("dt", _hoisted_7$3, vue.toDisplayString($props.label), 1 /* TEXT */),
        vue.createElementVNode("dd", _hoisted_8$2, vue.toDisplayString($options.cDisplayedValueWhenNotEditionMode), 1 /* TEXT */)
      ]))
}

script$K.render = render$K;
script$K.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseShowEditSelectAjax.vue";

var script$J = {
  name: 'BaseShowEditSelectMultiple',
  components: { multiselect: multiselect__default["default"], BaseEditLabel: script$1j},
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    modelValue: {
      type: Array,
      default() {
        return []
      },
      require: true,
    },
    errors: {
      type: Object,
      required: false
    },
    metadata: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array,
      required: false,
      default() { return []}
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    cDefaultValue(){
      let defaultValues = [];
      for(let i in this.modelValue) {
        defaultValues.push(this.metadata.find( item => item.id === i ));
      }
      return defaultValues
    },
  },
  methods: {
    getElement(item) {
      if (this.metadata && this.metadata.find(data => data.id === item).name) {
        return this.metadata.find(data => data.id === item).name
      }
      return null
    },
    updateInput( newValue ) {
      let updateModelValue = [];
      for(let i of newValue) {
        updateModelValue.push(i.id);
      }
      this.$emit("update:modelValue", updateModelValue);
    }
  }
};

const _hoisted_1$x = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$s = {
  key: 1,
  class: "mt-3 flex flex-col"
};
const _hoisted_3$l = { key: 0 };
const _hoisted_4$c = /*#__PURE__*/vue.createTextVNode(/*#__PURE__*/vue.toDisplayString('-'));

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$x, [
        vue.createElementVNode("div", null, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createVNode(_component_multiselect, {
            options: $props.metadata,
            multiple: "",
            modelValue: $options.cDefaultValue,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = $event => (($options.cDefaultValue) = $event)),
              $options.updateInput
            ],
            placeholder: $props.placeholder,
            searchable: $props.searchable,
            label: $props.attributeLabel,
            "track-by": $props.trackBy,
            required: $props.required
          }, null, 8 /* PROPS */, ["options", "modelValue", "placeholder", "searchable", "label", "track-by", "required", "onUpdate:modelValue"])
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$s, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label,
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.modelValue.length >= 1)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$l, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("span", {
                  class: "inline-block mr-3",
                  key: index
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ["fal","check-square"],
                    class: "mr-1 text-blue-900 mt-2"
                  }),
                  vue.createTextVNode(" " + vue.toDisplayString($options.getElement(item)), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_4$c
            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      ]))
}

script$J.render = render$J;
script$J.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectMultiple/BaseShowEditSelectMultiple.vue";

var script$I = {
  name: 'BaseShowEditSelectSimple',
  components: {
    multiselect: multiselect__default["default"],
    BaseEditLabel: script$1j,
    BaseShowLabel: script$1k,
  },
  props: {
    editionMode: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String,
      default: "",
      require: true,
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name'
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    groupClass:{
      type: String,
      required: false,
      default:''
    },
    labelClass:{
      type: String,
      required: false,
      default:''
    },
    selectClass:{
      type: String,
      required: false,
      default:''
    },
    errors: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    cDefautlValue(){
      if(this.options && this.options.find(t => t.id === this.modelValue)) return this.options.find(t => t.id === this.modelValue)
      else return null
    },
  },
  methods: {
    updateValueAction( newValue ) {
      if(newValue){
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue",null);
      }
    }
  },
};

const _hoisted_1$w = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$r = {
  key: 0,
  class: "form-help text-red-600"
};
const _hoisted_3$k = {
  key: 1,
  class: "mt-3"
};

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$w, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label,
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        vue.createVNode(_component_multiselect, {
          options: $props.options,
          placeholder: $props.placeholder,
          modelValue: $options.cDefautlValue,
          "onUpdate:modelValue": $options.updateValueAction,
          searchable: $props.searchable,
          label: $props.attributeLabel,
          "track-by": $props.trackBy,
          disabled: $props.disabled,
          required: $props.required
        }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "disabled", "required"]),
        ($props.errors)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$r, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", { key: index }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$k, [
        ($options.cDefautlValue)
          ? (vue.openBlock(), vue.createBlock(_component_BaseShowLabel, {
              key: 0,
              label: $props.label,
              "model-value": $options.cDefautlValue.name
            }, null, 8 /* PROPS */, ["label", "model-value"]))
          : vue.createCommentVNode("v-if", true)
      ]))
}

script$I.render = render$I;
script$I.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseShowEditSelectSimple.vue";

var script$H = {
  name: "BaseShowEditTextArea",
  components: {BaseShowLabel: script$1k, BaseEditLabel: script$1j},
  props: {
    editionMode: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};

const _hoisted_1$v = ["id", "value", "placeholder", "disabled"];

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createElementVNode("textarea", {
            id: $props.id,
            value: $props.modelValue,
            placeholder: $props.placeholder,
            disabled: $props.disabled,
            onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
            class: "form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$v),
          ($props.errors)
            ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "form-help text-red-600"
                }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + _ctx.name)})), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            : vue.createCommentVNode("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
      : (vue.openBlock(), vue.createBlock(_component_BaseShowLabel, {
          key: 1,
          label: $props.label,
          "model-value": $props.modelValue
        }, null, 8 /* PROPS */, ["label", "model-value"]))
  ], 2 /* CLASS */))
}

script$H.render = render$H;
script$H.__file = "src/components/BaseShowEditInput/BaseShowEditTextArea.vue";

var script$G = {

  directives: {mask: vueTheMask.mask},
  name: 'BaseShowEditTimeInput',
  components: { BaseEditLabel: script$1j, BaseShowLabel: script$1k },
  props: {
    editionMode: {type: Boolean, required: true},
    name: { type: String, required: true },
    required: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    groupClass: { type: String, required: false, default: '' },
    mask: { type: String, required: false, default: '##:##' },
    inputClass: { type: String, required: false, default: '' },
    errors: { type: Object, required: false },
    modelValue: { type: [String, Number], default: "", require: true, },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
};

const _hoisted_1$u = ["name", "value", "id", "placeholder"];
const _hoisted_2$q = { key: 1 };

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _directive_mask = vue.resolveDirective("mask");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass($options.cGroupClass)
      }, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label,
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        vue.withDirectives(vue.createElementVNode("input", {
          name: $props.name,
          type: "text",
          value: $props.modelValue,
          onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
          id: $props.name,
          class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
          placeholder: $props.placeholder
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1$u), [
          [_directive_mask, $props.mask]
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$q, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label,
          "model-value": $props.modelValue
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$G.render = render$G;
script$G.__file = "src/components/BaseShowEditInput/BaseShowEditTimeInput.vue";

var script$F = {
  name: 'BaseShowPhoneLabel',
  components: {CountryFlag: CountryFlag__default["default"]},
  props: {
    label: {},
    modelValue: {},
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    },
    countryValue: {
      type: String,
      required: false,
    }
  },
  computed: {
    cLabelClass() {
      return this.labelClass === '' ? 'text-sm font-medium text-gray-500 capitalize' : this.labelClass
    }
  }

};

const _hoisted_1$t = { class: "mt-1.5 flex place-items-center" };
const _hoisted_2$p = { class: "flex place-items-center" };
const _hoisted_3$j = { class: "ml-1" };

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_country_flag = vue.resolveComponent("country-flag");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          class: vue.normalizeClass($options.cLabelClass)
        }, vue.toDisplayString($props.label), 3 /* TEXT, CLASS */))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_1$t, [
      vue.createElementVNode("span", _hoisted_2$p, [
        ($props.countryValue)
          ? (vue.openBlock(), vue.createBlock(_component_country_flag, {
              key: 0,
              country: $props.countryValue,
              size: "small"
            }, null, 8 /* PROPS */, ["country"]))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("span", _hoisted_3$j, vue.toDisplayString($props.modelValue === null || $props.modelValue === '' ?  '-' : $props.modelValue), 1 /* TEXT */)
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$F.render = render$F;
script$F.__file = "src/components/BaseLabel/BaseShowPhoneLabel.vue";

var script$E = {
  name: 'BaseSimpleCard',
  components:{
    BaseButton: script$1g
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
      type: Boolean,
      required: false,
      default: false,
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
};

const _hoisted_1$s = { class: "box px-6 py-5" };
const _hoisted_2$o = { class: "flex-1" };
const _hoisted_3$i = { class: "text-2xl font-bold capitalize-first" };

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = vue.resolveComponent("BaseButton");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($props.classes)
  }, [
    vue.createElementVNode("div", _hoisted_1$s, [
      ($options.with_header)
        ? (vue.openBlock(), vue.createElementBlock("header", {
            key: 0,
            class: vue.normalizeClass(["flex flex-col sm:flex-row items-center mb-5", $options.bordered])
          }, [
            ($props.buttonBackLeft)
              ? (vue.openBlock(), vue.createBlock(_component_BaseButton, {
                  key: 0,
                  icon: "chevron-left",
                  color: "danger",
                  tooltip: _ctx.$t('button.back'),
                  class: "mr-3",
                  onClick: _cache[0] || (_cache[0] = $event => ($props.buttonBackLeftRoute !== undefined && $props.buttonBackLeftRoute !== false ? _ctx.$router.push( $props.buttonBackLeftRoute ) : _ctx.$router.go(-1)))
                }, null, 8 /* PROPS */, ["tooltip"]))
              : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_2$o, [
              vue.createElementVNode("h2", _hoisted_3$i, vue.toDisplayString($props.title), 1 /* TEXT */),
              vue.renderSlot(_ctx.$slots, "header")
            ]),
            vue.createElementVNode("div", null, [
              vue.renderSlot(_ctx.$slots, "cta")
            ])
          ], 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", null, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ])
  ], 2 /* CLASS */))
}

script$E.render = render$E;
script$E.__file = "src/components/BaseCard/BaseSimpleCard.vue";

var script$D = {
  name: 'BaseSimpleCheckboxGroup',
  props: {
    options: {type: Object, required: true},
    name: {type: String, required: true},
    label: {type: String, required: false},
    defaultValue: {type: Array, required: false, default() { return [] }},
    translationExtention: {type: String, required: false},
    translatable:{type: Boolean,required:false,default:true},
    attributeLabel:{type: String, required: false,default:'name'},
    errors: {
      type: Object,
      required: false
    },
    trackBy:{type:String,required:false,default:null}
  },
  data() {
    return {
      value: this.defaultValue
    }
  },
  watch:{
    value(newValue){
      if(newValue){        this.$emit('change', {attribute: this.name, value: newValue});
      }
    }
  }
};

const _hoisted_1$r = { class: "mt-3" };
const _hoisted_2$n = {
  key: 0,
  class: "form-label capitalize-first"
};
const _hoisted_3$h = { class: "flex flex-col sm:flex-row mt-3" };
const _hoisted_4$b = ["id", "value"];
const _hoisted_5$5 = ["for"];

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$r, [
      ($props.label)
        ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_2$n, vue.toDisplayString($props.label), 1 /* TEXT */))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_3$h, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (val, key) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            class: "form-check mr-4 sm:mt-0",
            key: key
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              id: `${$props.name}-${key}`,
              class: "form-check-input",
              type: "checkbox",
              value: $props.trackBy ===null ? key : val[$props.trackBy],
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.value) = $event))
            }, null, 8 /* PROPS */, _hoisted_4$b), [
              [vue.vModelCheckbox, $data.value]
            ]),
            vue.createElementVNode("label", {
              class: "form-check-label capitalize-first",
              for: `${$props.name}-${key}`
            }, vue.toDisplayString(this.translatable ?   _ctx.$t(`${$props.translationExtention}.${key}`) : val[$props.attributeLabel]), 9 /* TEXT, PROPS */, _hoisted_5$5)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$D.render = render$D;
script$D.__file = "src/components/BaseCheckBox/BaseSimpleCheckboxGroup.vue";

var script$C = {
  name: 'BaseSimpleDatePicker',
  components:{ Datepicker: Datepicker__default["default"] },
  props:{
    defaultValue: {},
    label: {type: String, require: false},
    name: {type: String, required: true},
    required: {type: Boolean, required: false},
    disabled: { type: Boolean, required: false, default: false},
    canTypeDateManually: {type: Boolean, required: false, default: false},
    clearButtonVisible: {type: Boolean, required: false, default: false},
    viewType: {type: String, required: false, default: 'day', validator: function(value) {
        const admittedTypes = ['day', 'month', 'year', 'time'];
        return admittedTypes.indexOf(value) !== -1
      } },
    monthFormat: {type: String, required: false, default: 'LLLL yyyy'},
    weekFormat: {type: String, required: false, default: 'EE'},
    startingDayOfTheWeek: {type: Number, required: false, default: 1},
    format: {type: String, required: false, default:'dd/MM/yyyy'},
    groupClass: {type: String, required: false, default: ''},
    labelClass: {type: String, required: false, default: ''},
    errors: { type: Object, required: false },
  },
  data() {
    return {
      value: this.defaultValue,
      locale: locale.fr,
      style: {
        "--vdp-bg-color": "#ffffff",
        "--vdp-text-color": "#424242",
        "--vdp-box-shadow": "0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",
        "--vdp-border-radius": "8px",
        "--vdp-heading-size": "2.5em",
        "--vdp-heading-weight": "bold",
        "--vdp-heading-hover-color": "#eeeeee",
        "--vdp-arrow-color": "currentColor",
        "--vdp-elem-color": "currentColor",
        "--vdp-disabled-color": "#d5d9e0",
        "--vdp-hover-color": "#ffffff",
        "--vdp-hover-bg-color": "#a30800",
        "--vdp-selected-color": "#ffffff",
        "--vdp-selected-bg-color": "#a30800",
        "--vdp-elem-font-size": "0.8em",
        "--vdp-elem-border-radius": "3px",
        "--vdp-divider-color": "#d5d9e0"
      },
    }
  },
  computed:{
    cInputDesabled(){
      return 'bg-gray-100 cursor-not-allowed dark:bg-dark-2 dark:border-transparent'
    },
      cInputClass(){
      return this.disabled ? 'w-full border shadow-sm py-2 px-3 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1' + 'bg-gray-100 cursor-not-allowed dark:bg-dark-2 dark:border-transparent bg-gray-100'
        : 'w-full border shadow-sm py-2 px-3 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1'
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass(){
      return this.labelClass === '' ? 'form-label' : this.labelClass
    }
  },
  watch: {
    value(newValue) {
      this.$emit('change', {attribute: this.name, value: moment__default["default"](newValue).format('DD/MM/YYYY')});
    }
  }
};

const _hoisted_1$q = ["for"];
const _hoisted_2$m = {
  key: 0,
  class: "text-red-600"
};

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_datepicker = vue.resolveComponent("datepicker");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          for: $props.name,
          class: vue.normalizeClass(["capitalize-first", $options.cLabelClass])
        }, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          ($props.label && $props.required)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$m, "*"))
            : vue.createCommentVNode("v-if", true)
        ], 10 /* CLASS, PROPS */, _hoisted_1$q))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode(_component_datepicker, {
      modelValue: $data.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.value) = $event)),
      monthHeadingFormat: $props.monthFormat,
      weekdayFormat: $props.weekFormat,
      inputFormat: $props.format,
      weekStartsOn: $props.startingDayOfTheWeek,
      clearable: $props.clearButtonVisible,
      disabled: $props.disabled,
      typeable: $props.canTypeDateManually,
      startingView: $props.viewType,
      style: vue.normalizeStyle($data.style),
      locale: $data.locale,
      class: vue.normalizeClass($options.cInputClass)
    }, null, 8 /* PROPS */, ["modelValue", "monthHeadingFormat", "weekdayFormat", "inputFormat", "weekStartsOn", "clearable", "disabled", "typeable", "startingView", "style", "locale", "class"]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$C.render = render$C;
script$C.__file = "src/components/BaseDatepicker/BaseSimpleDatePicker.vue";

var script$B = {
  name: 'BaseSimpleRadioGroup',
  emits: ['change'],
  data() {
    return {
      valueChecked: this.defaultValue,
      temp_name: this.name + this.extra_id
    }
  },
  props: {
    options: { type: [Array, Object], required: true },
    name: { type: String, required: true },
    label: { type: String, required: false },
    defaultValue: { type: [String, Number], required: false },
    translationExtention: {type: String, required: false},
    isReturningKey: { type: Boolean, required: false, default: false },
    isShowingKey: { type: Boolean, required: false, default: false },
    attributeLabel: { type: String, required: false, default: 'name' },
    trackBy: { type: String, required: false, default: null },
    translatable:{type: Boolean,required:false,default:true},
    disabled: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    extra_id: {required: false, default: ''},
    errors: { type: Object, required: false },
    isVertical: {type: Boolean, required: false, default: false }

  },
  computed:{
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },
  },
  watch: {
    valueChecked(newValue) {
      if (newValue) {
        this.valueChecked = newValue;
        this.$emit('change', { attribute: this.name, value: newValue });
      }
    }
  },

};

const _hoisted_1$p = { class: "mt-3" };
const _hoisted_2$l = {
  key: 0,
  class: "form-label capitalize-first"
};
const _hoisted_3$g = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_4$a = ["id", "name", "value", "disabled"];
const _hoisted_5$4 = ["id", "value", "disabled", "name"];
const _hoisted_6$2 = ["for"];
const _hoisted_7$2 = ["for"];

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$p, [
      ($props.label)
        ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_2$l, [
            vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
            ($props.label && $props.required)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$g, "*"))
              : vue.createCommentVNode("v-if", true)
          ]))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: vue.normalizeClass($options.cPlacement)
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (val, key) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            class: "form-check mr-2 mt-2",
            key: key
          }, [
            ($props.isReturningKey === true)
              ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 0,
                  id: `${$props.name}-${key}-${$props.extra_id || ""}`,
                  class: "form-check-input",
                  type: "radio",
                  name: $data.temp_name,
                  value: $props.trackBy ===null ? key : val[$props.trackBy],
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.valueChecked) = $event)),
                  disabled: $props.disabled
                }, null, 8 /* PROPS */, _hoisted_4$a)), [
                  [vue.vModelRadio, $data.valueChecked]
                ])
              : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 1,
                  id: `${$props.name}-${key}-${$props.extra_id || ""}`,
                  class: "form-check-input",
                  type: "radio",
                  value: $props.trackBy ===null ? val : val[$props.trackBy],
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.valueChecked) = $event)),
                  disabled: $props.disabled,
                  name: $data.temp_name
                }, null, 8 /* PROPS */, _hoisted_5$4)), [
                  [vue.vModelRadio, $data.valueChecked]
                ]),
            ($props.isShowingKey === true )
              ? (vue.openBlock(), vue.createElementBlock("label", {
                  key: 2,
                  class: "form-check-label capitalize-first",
                  for: `${$props.name}-${key}-${$props.extra_id || ""}`
                }, vue.toDisplayString(this.translatable ? _ctx.$t(`${$props.translationExtention}.${key}`) : val[$props.attributeLabel]), 9 /* TEXT, PROPS */, _hoisted_6$2))
              : (vue.openBlock(), vue.createElementBlock("label", {
                  key: 3,
                  class: "form-check-label capitalize-first",
                  for: `${$props.name}-${key}-${$props.extra_id || ""}`
                }, vue.toDisplayString(this.translatable ? _ctx.$t(`${$props.translationExtention}.${$props.trackBy ===null ? key : val[$props.attributeLabel]}`) : val[$props.attributeLabel]), 9 /* TEXT, PROPS */, _hoisted_7$2))
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */)
    ]),
    ($props.errors)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$B.render = render$B;
script$B.__file = "src/components/BaseRadioGroup/BaseSimpleRadioGroup.vue";

var script$A = {
  name: 'labelWitchCheckBoxChecked',
  props: {
    element: {},
    translatable: {},
    translationExtention: {}
  },
  computed: {
    translatedLabel() {
      if (this.translatable) {
      return this.$t(`${this.translationExtention}.${this.element.name}`)
      }
      else {
        return this.element.name
      }
    }
  }
};

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createVNode(_component_font_awesome_icon, {
      icon: ["fal","check-square"],
      class: "mr-1 text-blue-900 mt-2"
    }),
    vue.createTextVNode(" " + vue.toDisplayString($options.translatedLabel), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}

script$A.render = render$A;
script$A.__file = "src/components/BaseShowEditCheckBox/components/LabelWitchCheckBoxChecked.vue";

var script$z = {
  name: 'checkboxWithInput',
  props: {
    attributeLabel: {},
    key: {},
    modelValue: {},
    name: {},
    trackBy: {},
    translatable: {},
    translationExtention: {},
    updateInput: {},
    element: {}
  },
  computed: {
    translatedLabel() {
      if (this.translatable) {
        return this.$t(`${this.translationExtention}.${this.key}`)
      } else {
        return this.element[this.attributeLabel]
      }
    }
  },
};

const _hoisted_1$o = ["id", "name", "value", "checked"];
const _hoisted_2$k = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_3$f = ["for"];

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("input", {
      id: `${$props.name}-${$props.key}`,
      class: "form-check-input",
      type: "checkbox",
      name: $props.name,
      value: $props.trackBy ===null ? $props.key : $props.element[$props.trackBy],
      onChange: _cache[0] || (_cache[0] = (...args) => ($props.updateInput && $props.updateInput(...args))),
      checked: $props.modelValue
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$o),
    _hoisted_2$k,
    vue.createElementVNode("label", {
      class: "form-check-label capitalize-first",
      for: `${$props.name}-${$props.key}`
    }, vue.toDisplayString($options.translatedLabel), 9 /* TEXT, PROPS */, _hoisted_3$f)
  ], 64 /* STABLE_FRAGMENT */))
}

script$z.render = render$z;
script$z.__file = "src/components/BaseShowEditCheckBox/components/CheckboxWithInput.vue";

var script$y = {
  name: "BaseSimpleShowEditCheckboxGroup",
  components: {CheckboxWithInput: script$z, LabelWitchCheckBoxChecked: script$A},
  props: {
    options: {type: Object, required: true},
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    translationExtention: {type: String, required: false},
    translatable: {type: Boolean, required: false, default: true},
    attributeLabel: {type: String, required: false, default: 'name'},
    trackBy: {type: String, required: false, default: null},
    editionMode: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false
    },
  },
  data() {
    return {
      value: this.defaultValue,
    }
  },
  computed: {
    cPlacement() {
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    },

  },
  methods: {
    updateInput(event) {
      let tempModelValue = this.modelValue;

      if (Object.values(tempModelValue).indexOf(parseInt(event.target.value)) === -1) {
        tempModelValue.push(Number(event.target.value));
      } else {
        tempModelValue.splice(tempModelValue.indexOf(parseInt(event.target.value)), 1);
      }

      this.$emit("update:modelValue", tempModelValue);
    },
    getElement(item) {
      if(this.options && this.options.find(t => t.id === item)) return this.options.find(t => t.id === item)
      else return
    },
    elementIsChecked(item){
      return this.modelValue.includes(item[this.trackBy])
    }
  },
};

const _hoisted_1$n = { key: 0 };
const _hoisted_2$j = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_3$e = { key: 1 };

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_checkboxWithInput = vue.resolveComponent("checkboxWithInput");
  const _component_labelWitchCheckBoxChecked = vue.resolveComponent("labelWitchCheckBoxChecked");

  return (vue.openBlock(), vue.createElementBlock("div", null, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
          ($props.options.length > 0)
            ? (vue.openBlock(), vue.createBlock(_component_BaseEditLabel, {
                key: 0,
                label: $props.label,
                required: $props.required
              }, null, 8 /* PROPS */, ["label", "required"]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", {
            class: vue.normalizeClass($options.cPlacement)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (element, key) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                class: "form-check mr-4 sm:mt-0",
                key: key
              }, [
                (vue.openBlock(), vue.createBlock(_component_checkboxWithInput, {
                  "attribute-label": $props.attributeLabel,
                  key: key,
                  "model-value": $options.elementIsChecked(element),
                  name: $props.name,
                  "track-by": $props.trackBy,
                  translatable: $props.translatable,
                  "translation-extention": $props.translationExtention,
                  "update-input": $options.updateInput,
                  element: element
                }, null, 8 /* PROPS */, ["attribute-label", "model-value", "name", "track-by", "translatable", "translation-extention", "update-input", "element"]))
              ]))
            }), 128 /* KEYED_FRAGMENT */)),
            ($props.errors)
              ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.errors, (error, index) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    key: index,
                    class: "form-help text-red-600"
                  }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              : vue.createCommentVNode("v-if", true)
          ], 2 /* CLASS */)
        ]))
      : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          ($props.options.length > 0)
            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                ($props.modelValue.length > 0)
                  ? (vue.openBlock(), vue.createBlock(_component_BaseEditLabel, {
                      key: 0,
                      label: $props.label,
                      required: $props.required
                    }, null, 8 /* PROPS */, ["label", "required"]))
                  : vue.createCommentVNode("v-if", true),
                _hoisted_2$j,
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, (item, index) => {
                  return (vue.openBlock(), vue.createElementBlock("span", {
                    class: "inline-block mr-3",
                    key: index
                  }, [
                    ($options.getElement(item))
                      ? (vue.openBlock(), vue.createBlock(_component_labelWitchCheckBoxChecked, {
                          key: 0,
                          element: $options.getElement(item),
                          translatable: $props.translatable,
                          "translation-extention": $props.translationExtention
                        }, null, 8 /* PROPS */, ["element", "translatable", "translation-extention"]))
                      : vue.createCommentVNode("v-if", true)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ], 64 /* STABLE_FRAGMENT */))
            : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$e))
        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
  ]))
}

script$y.render = render$y;
script$y.__file = "src/components/BaseShowEditCheckBox/BaseSimpleShowEditCheckboxGroup.vue";

var script$x = {
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
};

const _hoisted_1$m = { class: "block" };
const _hoisted_2$i = { class: "border-b border-gray-200" };
const _hoisted_3$d = {
  class: "-mb-px grid grid cols-1 sm:grid-cols 2 space-x-3 md:flex md:space-x-8 ursor-pointer",
  "aria-label": "Tabs"
};
const _hoisted_4$9 = { class: "capitalize-first" };

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_router_link = vue.resolveComponent("router-link");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("div", _hoisted_1$m, [
      vue.createElementVNode("div", _hoisted_2$i, [
        vue.createElementVNode("nav", _hoisted_3$d, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.tabs, (tab) => {
            return (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
              key: tab.label
            }, [
              (tab.gate !== false)
                ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                    key: 0,
                    to: {name: tab.routeName},
                    class: vue.normalizeClass([this.$route.name === tab.routeName ? `border-theme-${$props.colorWhenSelected} text-theme-${$props.colorWhenSelected}` :
             'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium md:text-sm sm:text-xs']),
                    "aria-current": tab.current ? 'page' : undefined
                  }, {
                    default: vue.withCtx(() => [
                      (tab.icon)
                        ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                            key: 0,
                            icon: ['fal', tab.icon],
                            class: "mr-2"
                          }, null, 8 /* PROPS */, ["icon"]))
                        : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("span", _hoisted_4$9, vue.toDisplayString(tab.label), 1 /* TEXT */)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to", "class", "aria-current"]))
                : vue.createCommentVNode("v-if", true)
            ], 64 /* STABLE_FRAGMENT */))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ])
  ], 512 /* NEED_PATCH */)), [
    [vue.vShow, $options.cVisibility]
  ])
}

script$x.render = render$x;
script$x.__file = "src/components/BaseTabs/BaseSimpleTab.vue";

var script$w = {
  name: 'BaseSwitch',
  props: {
    modelValue: {
      type: [Boolean],
      default: false
    },
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isChecked: this.modelValue
    }
  },
  computed: {
    buttonClasses() {
      return this.isChecked ? 'bg-theme-primary' : 'bg-gray-200'
    },
    spanClasses() {
      return this.isChecked ? 'translate-x-5' : 'translate-x-0'
    }
  },
  mounted() {
    this.isChecked = this.modelValue;
  },
  methods: {
    toggleSwicth() {
      this.isChecked = !this.isChecked;
    }
  },
  watch: {
    isChecked(newValue) {
      this.$emit('update:modelValue', this.isChecked);
      this.$emit('change', {attribute: this.name, value: newValue});
    }
  }
};

const _hoisted_1$l = { class: "flex" };
const _hoisted_2$h = {
  key: 0,
  class: "mb-3 text-xl mr-6"
};
const _hoisted_3$c = /*#__PURE__*/vue.createElementVNode("span", { class: "sr-only" }, "Use setting", -1 /* HOISTED */);

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$l, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_2$h, vue.toDisplayString($props.label), 1 /* TEXT */))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleSwicth && $options.toggleSwicth(...args))),
      type: "button",
      class: vue.normalizeClass(["relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-co lors ease-in-out duration-200", $options.buttonClasses]),
      role: "switch",
      "aria-checked": "false"
    }, [
      _hoisted_3$c,
      vue.createElementVNode("span", {
        "aria-hidden": "true",
        class: vue.normalizeClass(["pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200", $options.spanClasses])
      }, null, 2 /* CLASS */)
    ], 2 /* CLASS */)
  ]))
}

script$w.render = render$w;
script$w.__file = "src/components/BaseSwitch/BaseSwitch.vue";

var script$v = {
  name: 'BaseTable',
  props: {
    titles: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    isBordered: {
      type: Boolean,
      required: false,
      default: false
    },
    isHoverable: {
      type: Boolean,
      required: false,
      default: false
    },
    isSmallTable: {
      type: Boolean,
      required: false,
      default: false
    },
    isResponsive: {
      type: Boolean,
      required: false,
      default: false
    },
    isStriped: {
      type: Boolean,
      required: false,
      default: false
    },
    theadRowClasses: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    tdClasses() {
      return this.isBordered ? 'border' : 'border-b'
    },
    thClasses() {
      return this.isBordered ? 'border' : ''
    },
    trClasses() {
      return this.isHoverable ? 'hover:bg-gray-200 dark:hover:bg-gray-600' : ''
    },
    tableClasses() {
      return this.isSmallTable ? 'table--sm' : ''
    },
    divClasses() {
      return this.isResponsive ? 'overflow-x-auto' : ''
    }
  },
  methods: {
    generateStripedClass(index) {
      return this.isStriped && index % 2 !== 0 ? 'bg-gray-200 dark:bg-dark-1' : ''
    }
  }
};

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.divClasses)
  }, [
    vue.createElementVNode("table", {
      class: vue.normalizeClass(["table", $options.tableClasses])
    }, [
      vue.createElementVNode("thead", null, [
        vue.createElementVNode("tr", {
          class: vue.normalizeClass($props.theadRowClasses)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titles, (title) => {
            return (vue.openBlock(), vue.createElementBlock("th", {
              key: title,
              class: vue.normalizeClass(["border-b-2 dark:border-dark-5 whitespace-nowrap", $options.thClasses])
            }, vue.toDisplayString(title), 3 /* TEXT, CLASS */))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ]),
      vue.createElementVNode("tbody", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rows, (row, index) => {
          return (vue.openBlock(), vue.createElementBlock("tr", {
            key: row,
            class: vue.normalizeClass([$options.trClasses, $options.generateStripedClass(index)])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (column) => {
              return (vue.openBlock(), vue.createElementBlock("td", {
                key: column,
                class: vue.normalizeClass(["dark:border-dark-5", $options.tdClasses])
              }, vue.toDisplayString(column), 3 /* TEXT, CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ], 2 /* CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$v.render = render$v;
script$v.__file = "src/components/BaseTable/BaseTable.vue";

var script$u = {
  name: 'BaseTextArea',
  props: {
    name: { type: String, required: true },
    value: { type: String, required: false },
    disabled:{ type: Boolean, required: false, default:false },
    required:{ type: Boolean, required: false, default:false },
    placeholder: { type: String, required: false, default:'' },
    label: { type: String, required: false, default:'' },
    errors: { type: Object, required: false },
  },
  data() {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue(newValue) {
      this.$emit('change',  {
        value: newValue,
        attribute: this.name
      });
    },
  },
  methods: {
    setTextAtPosition(text) {
      this.$refs.ta.value = this.$refs.ta.value.slice(0,this.$refs.ta.selectionStart) + text + this.$refs.ta.value.slice(this.$refs.ta.selectionStart);
    }
  },
};

const _hoisted_1$k = { class: "flex flex-col mt-2" };
const _hoisted_2$g = ["for"];
const _hoisted_3$b = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_4$8 = ["placeholder", "name", "id", "disabled"];

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k, [
    vue.createElementVNode("label", {
      for: $props.name,
      class: "form-label capitalize-first"
    }, [
      vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
      ($props.required)
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$b, "*"))
        : vue.createCommentVNode("v-if", true)
    ], 8 /* PROPS */, _hoisted_2$g),
    vue.withDirectives(vue.createElementVNode("textarea", {
      ref: "ta",
      class: "block w-full border rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed disabled:dark:bg-dark-2 disabled:dark:border-transparent border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.newValue) = $event)),
      placeholder: $props.placeholder,
      name: $props.name,
      id: $props.name,
      rows: "4",
      disabled: $props.disabled
    }, null, 8 /* PROPS */, _hoisted_4$8), [
      [
        vue.vModelText,
        $data.newValue,
        void 0,
        { trim: true }
      ]
    ]),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "form-help text-red-600"
      }, vue.toDisplayString(_ctx.$t(error,{attribute:_ctx.$t('attributes.'+$props.name)})), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$u.render = render$u;
script$u.__file = "src/components/BaseInput/BaseTextArea.vue";

var script$t = {
  name: 'BaseThComponent',
  props: {
    column: {},
    thClasses: {},
    currentSort: {},
    width: {default: ''}
  },
  data() {
    return {
      sortMode: '-'
    }
  },
  computed: {
    sortIcon() {
      if (this.sortMode !== '-') {
        return 'sort-' + this.sortMode
      }
      return null
    },
    thWidth() {
      if (___default$1["default"].has(this.column, 'width') && this.column.width != null) {
        return this.column.width
      }
      return this.column.type === 'button' ? '2%' : ''
    },
    c_title() {
      if (!this.column.title  ) return '';
      if (this.column.translatable) return this.$t(`attributes.${this.column.title}`)
      return this.column.title
    }
  },
  methods: {
    emitSortColumn() {
      this.$emit('sort-column', {
        column: this.column.field,
        direction: this.sortMode,
        type: this.column.type
      });
    },
    sortColumn() {

      if (this.sortMode === 'down') {
        this.sortMode = 'up';
        this.emitSortColumn();
      } else if (this.sortMode === 'up') {
        this.sortMode = 'down';
        this.emitSortColumn();
      } else {
        this.sortMode = 'up';
        this.emitSortColumn();
      }
    }
  },
  watch: {
    currentSort(newValue) {
      if (newValue !== this.column.field) {
        this.sortMode = '-';
      }
    }
  }
};

const _hoisted_1$j = ["width"];

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("th", {
    class: vue.normalizeClass(["border-b-2 dark:border-dark-5 whitespace-nowrap capitalize-first", $props.thClasses]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.sortColumn && $options.sortColumn(...args))),
    width: $options.thWidth
  }, [
    vue.createTextVNode(vue.toDisplayString($options.c_title) + " ", 1 /* TEXT */),
    ($props.column.sorter && this.sortMode !== '-')
      ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
          key: 0,
          icon: ['fal', $options.sortIcon],
          class: "ml-2"
        }, null, 8 /* PROPS */, ["icon"]))
      : vue.createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1$j))
}

script$t.render = render$t;
script$t.__file = "src/components/BaseTable/BaseThComponent.vue";

var script$s = {
  name: 'BaseTimeInput',
  components: {BaseMaskedInput: script$17},
  props: {
    errors: {},
    event: {},
    getInputValue: {},
    placeholder: {},
    label: {},
    name: {},
    index: {},
    value: {}
  },

};

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseMaskedInput = vue.resolveComponent("BaseMaskedInput");

  return (vue.openBlock(), vue.createBlock(_component_BaseMaskedInput, {
    label: $props.label,
    placeholder: $props.placeholder,
    name: $props.name,
    value: $props.value,
    disabled: _ctx.$can('manage-work'),
    errors: $props.errors,
    mask: ['##:##'],
    onChange: vue.withModifiers($props.getInputValue, ["self"])
  }, null, 8 /* PROPS */, ["label", "placeholder", "name", "value", "disabled", "errors", "onChange"]))
}

script$s.render = render$s;
script$s.__file = "src/components/BaseInput/BaseTimeInput.vue";

var script$r = {
  name: "BaseTrueFalseShowEditRadioGroup",
  components: {BaseShowLabel: script$1k, BaseEditLabel: script$1j},
  emits: ['update:modelValue', 'change'],
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: Number,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    extra_id: {
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      value: this.defaultValue,
      temp_name: this.name + this.extra_id,
      options: {1: true, 0: false},
    }
  },
  computed:{
    cPlacement(){
      return this.isVertical ? '' : 'flex flex-col sm:flex-row mt-2'
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value === 'true');
      this.$emit('change', event.target.value);
    }
  }
};

const _hoisted_1$i = { key: 0 };
const _hoisted_2$f = ["name", "value", "checked"];
const _hoisted_3$a = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_4$7 = { class: "form-check-label capitalize-first" };

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($props.groupClass)
  }, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass($options.cPlacement)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.options, (val, key) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                class: "form-check mr-2",
                key: key
              }, [
                vue.createElementVNode("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: $data.temp_name,
                  value: val,
                  onChange: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
                  checked: $props.modelValue == val
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$f),
                _hoisted_3$a,
                vue.createElementVNode("label", _hoisted_4$7, vue.toDisplayString(_ctx.$t(`enums.yes_no.${key}`)), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 2 /* CLASS */)
        ]))
      : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createVNode(_component_BaseShowLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.createVNode(_component_font_awesome_icon, {
            icon: ["fal","check-square"],
            class: "mr-2 text-blue-900"
          }),
          vue.createTextVNode(vue.toDisplayString(_ctx.$t(`enums.yes_no.${$props.modelValue}`)), 1 /* TEXT */)
        ], 64 /* STABLE_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$r.render = render$r;
script$r.__file = "src/components/BaseShowEditRadioGroup/BaseTrueFalseShowEditRadioGroup.vue";

var script$q = {
  name: 'BaseUserShowEditSelectSimple',
  components: { multiselect: multiselect__default["default"] },
  props: {
    editionMode: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Object,
      required: false,
      default() {return {}},
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id',
    },
    attributeLabel: {
      type: String,
      required: false,
      default: 'name',
    },
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: 'user_id',
    },
    errors: {
      type: Object,
      required: false,
      default() {return {}},
    },
    metadata: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cDisplayedValueWhenNotEditionMode() {
      if (this.cDefautlValue) {
        if (this.attributeLabel){
          return this.cDefautlValue[this.attributeLabel]
        } else {
          return this.cDefautlValue
        }
      } else {
        return '-'
      }
    },
    cDefautlValue(){
      if(this.metadata && this.metadata.users && this.metadata.users.find( item => item.id === this.modelValue )) return this.metadata.users.find( item => item.id === this.modelValue )
      else return null
    },
  },
  methods: {
    updateValueAction(newValue) {
      if(newValue != null) {
        this.$emit("update:modelValue", newValue[this.trackBy]);
      } else {
        this.$emit("update:modelValue", null);
      }
    }
  }
};

const _hoisted_1$h = {
  key: 0,
  class: "mt-3"
};
const _hoisted_2$e = {
  key: 1,
  class: "mt-3"
};

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_multiselect = vue.resolveComponent("multiselect");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return ($props.editionMode)
    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, [
        vue.createVNode(_component_BaseEditLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.user'),
          required: $props.required
        }, null, 8 /* PROPS */, ["label", "required"]),
        ($props.metadata && $props.metadata.users)
          ? (vue.openBlock(), vue.createBlock(_component_multiselect, {
              key: 0,
              options: $props.metadata.users,
              placeholder: $props.label ? $props.label : _ctx.$t('attributes.user'),
              modelValue: $options.cDefautlValue,
              "onUpdate:modelValue": $options.updateValueAction,
              searchable: $props.searchable,
              label: $props.attributeLabel,
              "track-by": $props.trackBy,
              required: $props.required
            }, null, 8 /* PROPS */, ["options", "placeholder", "modelValue", "onUpdate:modelValue", "searchable", "label", "track-by", "required"]))
          : vue.createCommentVNode("v-if", true),
        ($props.errors && $props.errors.user_id)
          ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList($props.errors.user_id, (error, index) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: "form-help text-red-600"
              }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : vue.createCommentVNode("v-if", true)
      ]))
    : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$e, [
        vue.createVNode(_component_BaseShowLabel, {
          label: $props.label ? $props.label : _ctx.$t('attributes.user'),
          "model-value": $options.cDisplayedValueWhenNotEditionMode
        }, null, 8 /* PROPS */, ["label", "model-value"])
      ]))
}

script$q.render = render$q;
script$q.__file = "src/components/BaseShowEditSelect/BaseShowEditFormSelectSimple/BaseUserShowEditSelectSimple.vue";

var script$p = {
  name: 'ColumnVisibilityDropDownComponent',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data(){
    return {
      columns: this.modelValue
    }
  },
  methods: {
    clickColumnVisibility( key ){
      this.columns.map( item => {
        if( item.field === key ){
          item.hidden = !item.hidden;
        }
      });
      let modelValueInJson = JSON.stringify(this.columns);
      localStorage.setItem('InvoiceColumnsVisibility', modelValueInJson);
      this.columns;
      this.$emit('update:modelValue', this.columns );
    }
  }
};

const _hoisted_1$g = {
  class: "dropdown inline-block",
  "data-placement": "bottom-end"
};
const _hoisted_2$d = {
  class: "dropdown-toggle btn btn-primary space-x-3",
  "aria-expanded": "false"
};
const _hoisted_3$9 = /*#__PURE__*/vue.createElementVNode("span", { class: "capitalize-first" }, "colonne", -1 /* HOISTED */);
const _hoisted_4$6 = { class: "dropdown-menu" };
const _hoisted_5$3 = { class: "dropdown-menu__content box p-2" };
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = { class: "flex-1 mr-5 whitespace-nowrap capitalize-first" };
const _hoisted_8$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "flex items-center mt-3 space-x-3 hidden" }, [
  /*#__PURE__*/vue.createElementVNode("button", {
    "data-dismiss": "dropdown",
    class: "btn btn-secondary"
  }, " apply "),
  /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary" }, " cancel ")
], -1 /* HOISTED */);

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
    vue.createElementVNode("button", _hoisted_2$d, [
      _hoisted_3$9,
      vue.createVNode(_component_font_awesome_icon, { icon: ["fal","chevron-down"] })
    ]),
    vue.createElementVNode("div", _hoisted_4$6, [
      vue.createElementVNode("div", _hoisted_5$3, [
        vue.createElementVNode("div", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.columns.filter( item => item.toggleable ), (column) => {
            return (vue.openBlock(), vue.createElementBlock("a", {
              href: "#",
              onClick: $event => ($options.clickColumnVisibility(column.field)),
              class: "flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
            }, [
              vue.createElementVNode("span", _hoisted_7$1, vue.toDisplayString(_ctx.$t(`attributes.${column.title}`)), 1 /* TEXT */),
              (!column.hidden)
                ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                    key: 0,
                    class: "flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
                    icon: ["fal","check"]
                  }))
                : vue.createCommentVNode("v-if", true)
            ], 8 /* PROPS */, _hoisted_6$1))
          }), 256 /* UNKEYED_FRAGMENT */))
        ]),
        _hoisted_8$1
      ])
    ])
  ]))
}

script$p.render = render$p;
script$p.__file = "src/components/BaseTable/ColumnVisibilityDropDownComponent.vue";

var script$o = {
  name: 'ContentTableCell',
  props: {
    column: {},
    model: {},
  },
  computed:{
   cellValue(){
     if( this.column.type === 'date' && this.model[this.column.field] ){
       return this.model[this.column.field]['label']
     }
      return  this.model[this.column.field]
    }
  },


};

const _hoisted_1$f = ["innerHTML"];

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("span", { innerHTML: $options.cellValue }, null, 8 /* PROPS */, _hoisted_1$f))
}

script$o.render = render$o;
script$o.__file = "src/components/BaseTable/ContentTableCell.vue";

var script$n = {
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
      iFrame.height = ( calculatedHeight > 400 ? calculatedHeight : 400 ) + 'px';
    }
  },
  created() {
    window.addEventListener("resize", this.mResizeIframe);
  },
  unmounted() {
    window.removeEventListener("resize", this.mResizeIframe);
  },
};

const _hoisted_1$e = ["src"];

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("iframe", {
    class: "w-full bg-gray-200",
    src: $props.src,
    width: "100%",
    onLoad: _cache[0] || (_cache[0] = (...args) => ($options.mResizeIframe && $options.mResizeIframe(...args))),
    ref: "pdfIframe"
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$e))
}

script$n.render = render$n;
script$n.__file = "src/components/BaseIFramePDF/IFramePdf.vue";

var script$m = {
  name: 'SettingsPageFull',

};

const _hoisted_1$d = {
  key: 0,
  class: "md:w-full sm:w-2/6 md:flex sm:flex md:flex-row sm:flex-col p-5 md:justify-between sm:justify-center mx-auto text-center gap-3"
};
const _hoisted_2$c = { class: "flex justify-center gap-x-3" };
const _hoisted_3$8 = {
  key: 0,
  class: "flex justify-center"
};
const _hoisted_4$5 = { class: "flex p-5" };
const _hoisted_5$2 = { class: "flex-1" };

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode("  <div class='flex p-5' v-if='this.$slots.title || this.$slots.cta'>"),
    vue.createCommentVNode("    <div class='flex-1 pt-2'  v-if='this.$slots.title'>"),
    vue.createCommentVNode("      <slot name=\"title\"></slot>"),
    vue.createCommentVNode("    </div>"),
    vue.createCommentVNode("    <div class='flex flex-row gap-x-3' >"),
    vue.createCommentVNode("      <slot name=\"cta\"></slot>"),
    vue.createCommentVNode("    </div>"),
    vue.createCommentVNode("  </div>"),
    (this.$slots.title || this.$slots.cta)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
          vue.createElementVNode("div", _hoisted_2$c, [
            vue.renderSlot(_ctx.$slots, "title")
          ]),
          (this.$slots.cta)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$8, [
                vue.renderSlot(_ctx.$slots, "cta")
              ]))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_4$5, [
      vue.createElementVNode("div", _hoisted_5$2, [
        vue.renderSlot(_ctx.$slots, "body")
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$m.render = render$m;
script$m.__file = "src/components/BasePage/SettingsPageFull.vue";

var script$l = {
  name: 'ToastUndoComponent',
  props: {
    text: {
      type: String,
      required: true
    },
  },
};

const _hoisted_1$c = {
  id: "notification-with-actions-content",
  class: "toastify-content hidden flex"
};
const _hoisted_2$b = /*#__PURE__*/vue.createElementVNode("i", { "data-feather": "hard-drive" }, null, -1 /* HOISTED */);
const _hoisted_3$7 = { class: "ml-4 mr-4" };
const _hoisted_4$4 = { class: "font-medium capitalize-first" };
const _hoisted_5$1 = { class: "font-medium flex mt-1.5 justify-center" };

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseButton = vue.resolveComponent("BaseButton");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
    _hoisted_2$b,
    vue.createElementVNode("div", _hoisted_3$7, [
      vue.createElementVNode("div", _hoisted_4$4, vue.toDisplayString($props.text), 1 /* TEXT */),
      vue.createElementVNode("div", _hoisted_5$1, [
        vue.createVNode(_component_BaseButton, {
          id: "undo_btn",
          color: "success",
          icon: "undo-alt",
          buttonClasses: "m-2",
          isOutline: true,
          title: _ctx.$t('attributes.undo')
        }, null, 8 /* PROPS */, ["title"])
      ])
    ])
  ]))
}

script$l.render = render$l;
script$l.__file = "src/components/BaseToast/ToastUndoComponent.vue";

var script$k = {
  name: 'SelectCompaniesMultiple',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    defaultValue: {},
    permission: {}
  },
  computed:{
    cDefautlValue(){
      if(this.defaultValue.length > 0){
        return this.metadata.companies.filter( item => this.defaultValue.includes(item.id) )
      }
      return []
    },
  },
  methods:{
    handleSelected({attribute, value }){
      let temp = [];
      value.map(el => temp.push(el.id));
      this.$emit('getSelected', {attribute: attribute, value: temp });
    }
  },
};

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectMultiple = vue.resolveComponent("BaseSelectMultiple");

  return ($props.metadata.companies)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectMultiple, {
        key: 0,
        label: _ctx.$t('attributes.company'),
        placeholder: _ctx.$t('attributes.company'),
        name: "companies_id",
        defaultValue: $options.cDefautlValue,
        options: $props.metadata.companies || [],
        errors: $props.errors.companies,
        attributeLabel: "name",
        onSetSelected: $options.handleSelected,
        disabled: $props.permission
      }, null, 8 /* PROPS */, ["label", "placeholder", "defaultValue", "options", "errors", "onSetSelected", "disabled"]))
    : vue.createCommentVNode("v-if", true)
}

script$k.render = render$k;
script$k.__file = "src/components/BaseSelect/BaseSelectFormMultiple/SelectCompaniesMultiple.vue";

var script$j = {
  name: 'SelectCompanySimple',
  components: {BaseSelectSimple: script$S},
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    model: {},
    permission: {},
  },
};

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");

  return ($props.metadata && $props.metadata.companies)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectSimple, {
        key: 0,
        label: _ctx.$t('attributes.company'),
        placeholder: _ctx.$t('attributes.company'),
        name: "company_id",
        defaultValue: $props.metadata.companies.filter(el=> el.id ===$props.model.company_id),
        options: $props.metadata.companies,
        disabled: $props.permission,
        errors: $props.errors.company_id,
        onSetSelected: $props.getInputValue
      }, null, 8 /* PROPS */, ["label", "placeholder", "defaultValue", "options", "disabled", "errors", "onSetSelected"]))
    : vue.createCommentVNode("v-if", true)
}

script$j.render = render$j;
script$j.__file = "src/components/BaseSelect/BaseSelectFormSimple/SelectCompanySimple.vue";

var script$i = {
  name: 'SelectCustomer',
  props: {
    errors: {},
    model: {},
    permission: {},
    getInputValue: {},
    metadata: {type: Object},
    name: {type: String,required: false, default: 'customer_id'  }
  },

};

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");

  return ($props.metadata && $props.metadata.customers)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectSimple, {
        key: $props.model[$props.name],
        label: _ctx.$t('attributes.customer'),
        placeholder: _ctx.$t('attributes.customer'),
        name: $props.name,
        defaultValue: $props.metadata.customers.filter(el=> el.id ===$props.model[$props.name]),
        options: $props.metadata.customers,
        disabled: $props.permission,
        errors: $props.errors[$props.name],
        onSetSelected: $props.getInputValue
      }, null, 8 /* PROPS */, ["label", "placeholder", "name", "defaultValue", "options", "disabled", "errors", "onSetSelected"]))
    : vue.createCommentVNode("v-if", true)
}

script$i.render = render$i;
script$i.__file = "src/components/BaseSelect/BaseSelectFormSimple/SelectCustomer.vue";

var script$h = {
  name: 'SelectLanguage',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {type: Function},
    model: {},
    permission: {}
  },
};

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");

  return ($props.metadata && $props.metadata.languages)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectSimple, {
        key: 0,
        label: _ctx.$t('attributes.language'),
        placeholder: _ctx.$t('attributes.language'),
        name: "language",
        defaultValue: $props.metadata.languages.filter(el=> el.id ===$props.model.language),
        options: $props.metadata.languages,
        disabled: $props.permission,
        errors: $props.errors.language,
        onSetSelected: $props.getInputValue
      }, null, 8 /* PROPS */, ["label", "placeholder", "defaultValue", "options", "disabled", "errors", "onSetSelected"]))
    : vue.createCommentVNode("v-if", true)
}

script$h.render = render$h;
script$h.__file = "src/components/BaseSelect/BaseSelectFormSimple/SelectLanguage.vue";

var script$g = {
  name: 'SelectUserSimple',
  props: {
    errors: {},
    getInputValue: {},
    metadata: {},
    permission: {},
    model: {},
    label: {
      type: String,
      required: false,
      default: "responsable"
    },
    name: {
      type: String,
      required: false,
      default: "responsable_id"
    }
  }
};

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");

  return ($props.metadata && $props.metadata.users)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectSimple, {
        key: 0,
        label: $props.label,
        placeholder: $props.label,
        name: $props.name,
        defaultValue: $props.metadata.users && $props.metadata.users.filter(el=> el.id ===$props.model[$props.name]),
        options: $props.metadata.users,
        disabled: $props.permission,
        errors: $props.errors[$props.name],
        onSetSelected: $props.getInputValue
      }, null, 8 /* PROPS */, ["label", "placeholder", "name", "defaultValue", "options", "disabled", "errors", "onSetSelected"]))
    : vue.createCommentVNode("v-if", true)
}

script$g.render = render$g;
script$g.__file = "src/components/BaseSelect/BaseSelectFormSimple/SelectUserSimple.vue";

var script$f = {
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      selectedIndex: 0,
    }
  },

  watch: {
    items() {
      this.selectedIndex = 0;
    },
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler();
        return true
      }

      if (event.key === 'ArrowDown') {
        this.downHandler();
        return true
      }

      if (event.key === 'Enter') {
        this.enterHandler();
        return true
      }

      return false
    },

    upHandler() {
      this.selectedIndex = ((this.selectedIndex + this.items.length) - 1) % this.items.length;
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },

    enterHandler() {
      this.selectItem(this.selectedIndex);
    },

    selectItem(index) {
      const item = this.items[index];

      if (item) {
        this.command({ id: item });
      }
    },
  }
};

const _hoisted_1$b = { class: "items" };
const _hoisted_2$a = ["onClick"];
const _hoisted_3$6 = {
  key: 1,
  class: "item"
};

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
    ($props.items.length)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($props.items, (item, index) => {
          return (vue.openBlock(), vue.createElementBlock("button", {
            class: vue.normalizeClass(["item", { 'is-selected': index === $data.selectedIndex }]),
            key: index,
            onClick: $event => ($options.selectItem(index))
          }, vue.toDisplayString(item), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$a))
        }), 128 /* KEYED_FRAGMENT */))
      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, " No result "))
  ]))
}

script$f.render = render$f;
script$f.__file = "src/components/Wysiwyg/components/MentionList.vue";

var script$e = {

  name: "BaseWysiwyg",
  components: {
    EditorContent: vue3.EditorContent,
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    displayFormatButton: {
      type: Boolean,
      required: false,
      default: true
    },
    suggestionVariables: {
      required: false,
      default: []
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false
    },
  },
  emits :['update:modelValue', 'change'],
  data() {
    return {
      editor: null,
    }
  },
  watch: {
    modelValue(newValue) {
      let html = this.editor.getHTML();
      if(html !== newValue) {
        this.editor.commands.setContent( newValue);
      }

    }
  },
  methods: {
    setTextAtPosition(text) {
      let stringVar = '<span data-type="mention" class="mention" data-id="'+text.value+'">@</span>';
      this.editor.commands.insertContent( stringVar );
    }
  },
  mounted() {
    this.editor = new vue3.Editor({
      extensions: [
        StarterKit__default["default"],
        Document__default["default"],
        Paragraph__default["default"],
        Text__default["default"],
        Mention__default["default"].configure({

          HTMLAttributes: {
            class: 'mention',
          },
          suggestion: {

            items: ({query}) => this.suggestionVariables.filter(
                (model) => {
                  let search = query.length ? query.toLowerCase() : '';
                  if ( search.length < 2 || model.name && model.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
                    return
                  }else {
                    return model.name
                  }
                }
            ).slice(0, 10).reduce((init,item)=>{
              init.push(item.name);
              return init
            },[]),
            render: () => {
              let component;
              let popup;
              return {
                onStart: (props) => {
                  component = new vue3.VueRenderer(script$f, {
                    props,
                    editor: props.editor,
                  });
                  popup = tippy__default["default"]("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                  });
                },
                onUpdate(props) {
                  component.updateProps(props);
                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  });
                },
                onKeyDown(props) {
                  if(component && component.ref) {
                    return component.ref.onKeyDown(props);
                  }
                },
                onExit() {
                  popup[0].destroy();
                  component.destroy();
                },
              };

            }
          }
        }),
      ],
      content: this.modelValue,
      onUpdate: () => {
        
        this.$emit('update:modelValue', this.editor.getHTML());
        this.$emit('change', this.editor.getHTML());
      }
    });
  },

};

const _hoisted_1$a = {
  key: 0,
  class: "capitalize-first"
};
const _hoisted_2$9 = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_3$5 = { key: 1 };
const _hoisted_4$3 = { key: 0 };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_editor_content = vue.resolveComponent("editor-content");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          ($props.required)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$9, "*"))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true),
    ($data.editor)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$5, [
          ($props.displayFormatButton)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$3, [
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('bold') }]),
                  onClick: _cache[0] || (_cache[0] = $event => ($data.editor.chain().focus().toggleBold().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'bold'] })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('italic') }]),
                  onClick: _cache[1] || (_cache[1] = $event => ($data.editor.chain().focus().toggleItalic().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'italic'] })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('strike') }]),
                  onClick: _cache[2] || (_cache[2] = $event => ($data.editor.chain().focus().toggleStrike().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'strikethrough'] })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('heading', { level: 1 }) }]),
                  onClick: _cache[3] || (_cache[3] = $event => ($data.editor.chain().focus().toggleHeading({ level: 1 }).run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ['fal', 'font'],
                    style: {"font-size":"14px"}
                  })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('heading', { level: 2 }) }]),
                  onClick: _cache[4] || (_cache[4] = $event => ($data.editor.chain().focus().toggleHeading({ level: 2 }).run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ['fal', 'font'],
                    style: {"font-size":"10px"}
                  })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('heading', { level: 3 }) }]),
                  onClick: _cache[5] || (_cache[5] = $event => ($data.editor.chain().focus().toggleHeading({ level: 3 }).run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, {
                    icon: ['fal', 'font'],
                    style: {"font-size":"7px"}
                  })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('paragraph') }]),
                  onClick: _cache[6] || (_cache[6] = $event => ($data.editor.chain().focus().setParagraph().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'paragraph'] })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('bulletList') }]),
                  onClick: _cache[7] || (_cache[7] = $event => ($data.editor.chain().focus().toggleBulletList().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'list-ul'] })
                ], 2 /* CLASS */),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["px-4 py-2 border border-gray-300 bg-gray-200 rounded", { 'is-active': $data.editor.isActive('orderedList') }]),
                  onClick: _cache[8] || (_cache[8] = $event => ($data.editor.chain().focus().toggleOrderedList().run()))
                }, [
                  vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'list-ol'] })
                ], 2 /* CLASS */)
              ]))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createVNode(_component_editor_content, {
      editor: $data.editor,
      ref: "ed"
    }, null, 8 /* PROPS */, ["editor"]),
    ($props.errors && $props.errors.length > 0)
      ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 2 }, vue.renderList($props.errors, (error, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: index,
            class: "form-help text-red-600"
          }, vue.toDisplayString(_ctx.$t(error, {'attribute': _ctx.$t($props.name)})), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$e.render = render$e;
script$e.__file = "src/components/Wysiwyg/BaseWysiwyg.vue";

var script$d = {
  name: 'SelectSettingDefaultMessage',
  props: {
    errors: {},
    getInputValue: {},
    options: {},
    label: {},
    placeholder: {
      required: false
    },
    required:{
      default: true
    },
    model: {},

  }
};

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");

  return ($props.options)
    ? (vue.openBlock(), vue.createBlock(_component_BaseSelectSimple, {
        key: 0,
        label: $props.label,
        placeholder: $props.placeholder,
        name: "id",
        defaultValue: $props.options.filter(el=> el.id === $props.model),
        options: $props.options,
        disabled: false,
        errors: {},
        required: $props.required,
        onSetSelected: $props.getInputValue
      }, null, 8 /* PROPS */, ["label", "placeholder", "defaultValue", "options", "required", "onSetSelected"]))
    : vue.createCommentVNode("v-if", true)
}

script$d.render = render$d;
script$d.__file = "src/components/DynamicForm/components/SelectSettingDefaultMessage.vue";

var script$c = {
  name: 'DynamicFormInput',
  components: {
    SelectSettingDefaultMessage: script$d,
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
      let date = new Date();
      let today = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

      return new Date(moment__default["default"](today, 'DD/MM/YYYY'))
    },
  },
  methods: {
    getOptionInputValue({attribute, value}){
      this.$emit('questionValue', {attribute: attribute, value: value, index: this.questionIndex});
    },
  },
  mounted() {
    return this.questionValue.value = this.defaultValue
  }
};

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseInputDynamicForm = vue.resolveComponent("BaseInputDynamicForm");
  const _component_BaseTextArea = vue.resolveComponent("BaseTextArea");
  const _component_BaseSelectSimple = vue.resolveComponent("BaseSelectSimple");
  const _component_BaseSimpleRadioGroup = vue.resolveComponent("BaseSimpleRadioGroup");
  const _component_BaseSimpleDatePicker = vue.resolveComponent("BaseSimpleDatePicker");
  const _component_BaseSelectSimpleAjax = vue.resolveComponent("BaseSelectSimpleAjax");
  const _component_SelectSettingDefaultMessage = vue.resolveComponent("SelectSettingDefaultMessage");
  const _component_BaseBooleanRadioGroup = vue.resolveComponent("BaseBooleanRadioGroup");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    ($props.question.type === 'input')
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass($props.classes)
        }, [
          vue.createVNode(_component_BaseInputDynamicForm, {
            label: $props.question.question,
            placeholder: $props.question.question,
            name: $props.question.name,
            value: $data.questionValue.value,
            disabled: $options.permission,
            required: true,
            defaultValue: $props.defaultValue,
            onChange: vue.withModifiers($options.getOptionInputValue, ["self"]),
            labelClass: $props.classLabel,
            isDefaultValue: $props.isDefaultValue
          }, null, 8 /* PROPS */, ["label", "placeholder", "name", "value", "disabled", "defaultValue", "onChange", "labelClass", "isDefaultValue"])
        ], 2 /* CLASS */))
      : vue.createCommentVNode("v-if", true),
    ($props.question.type === 'input number')
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass($props.classes)
        }, [
          vue.createVNode(_component_BaseInputDynamicForm, {
            label: $props.question.question,
            placeholder: $props.question.question,
            name: $props.question.name,
            value: $data.questionValue.value,
            disabled: $options.permission,
            required: true,
            type: "number",
            defaultValue: $data.questionValue.value,
            onChange: vue.withModifiers($options.getOptionInputValue, ["self"]),
            labelClass: $props.classLabel,
            isDefaultValue: $props.isDefaultValue
          }, null, 8 /* PROPS */, ["label", "placeholder", "name", "value", "disabled", "defaultValue", "onChange", "labelClass", "isDefaultValue"])
        ], 2 /* CLASS */))
      : ($props.question.type === 'textArea')
        ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 2,
            class: vue.normalizeClass($props.classes)
          }, [
            vue.createVNode(_component_BaseTextArea, {
              label: $props.question.question,
              placeholder: $props.question.question,
              name: $props.question.name,
              required: true,
              disabled: $options.permission,
              onChange: vue.withModifiers($options.getOptionInputValue, ["self"])
            }, null, 8 /* PROPS */, ["label", "placeholder", "name", "disabled", "onChange"])
          ], 2 /* CLASS */))
        : ($props.question.type === 'select')
          ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 3,
              class: vue.normalizeClass($props.classes)
            }, [
              vue.createVNode(_component_BaseSelectSimple, {
                label: $props.question.question,
                placeholder: $props.question.question,
                name: $props.question.name,
                options: $props.question.options,
                trackBy: "name",
                disabled: $options.permission,
                required: true,
                onSetSelected: $options.getOptionInputValue
              }, null, 8 /* PROPS */, ["label", "placeholder", "name", "options", "disabled", "onSetSelected"])
            ], 2 /* CLASS */))
          : ($props.question.type === 'radio')
            ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 4,
                class: vue.normalizeClass($props.classes)
              }, [
                (vue.openBlock(), vue.createBlock(_component_BaseSimpleRadioGroup, {
                  key: $props.defaultValue,
                  name: $props.question.name,
                  label: $props.question.question,
                  isShowingKey: false,
                  isReturningKey: true,
                  trackBy: $props.radioTrackBy,
                  required: true,
                  options: $props.question.options,
                  translatable: false,
                  disabled: $options.permission,
                  "is-vertical": $props.vertical_align,
                  defaultValue: $props.defaultValue,
                  onChange: vue.withModifiers($options.getOptionInputValue, ["self"])
                }, null, 8 /* PROPS */, ["name", "label", "trackBy", "options", "disabled", "is-vertical", "defaultValue", "onChange"]))
              ], 2 /* CLASS */))
            : ($props.question.type === 'datepicker')
              ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 5,
                  class: vue.normalizeClass($props.classes)
                }, [
                  (vue.openBlock(), vue.createBlock(_component_BaseSimpleDatePicker, {
                    key: $props.question,
                    label: $props.question.question,
                    defaultValue: $options.getDate,
                    name: $props.question.name,
                    onChange: vue.withModifiers($options.getOptionInputValue, ["self"])
                  }, null, 8 /* PROPS */, ["label", "defaultValue", "name", "onChange"]))
                ], 2 /* CLASS */))
              : ($props.question.type === 'selectAjax')
                ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 6,
                    class: vue.normalizeClass($props.classes)
                  }, [
                    (vue.openBlock(), vue.createBlock(_component_BaseSelectSimpleAjax, {
                      key: $props.question,
                      url: $props.question.url,
                      label: $props.question.question,
                      name: $props.question.name,
                      "track-by": $props.ajaxTrackBy,
                      attributeLabel: $props.ajaxAttributeLabel,
                      onSelected: $options.getOptionInputValue
                    }, null, 8 /* PROPS */, ["url", "label", "name", "track-by", "attributeLabel", "onSelected"]))
                  ], 2 /* CLASS */))
                : ($props.question.type === 'SelectSettingDefaultMessage')
                  ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 7 }, [
                      vue.createCommentVNode("  attributeLabel='title'"),
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass($props.classes)
                      }, [
                        ($props.question.options)
                          ? (vue.openBlock(), vue.createBlock(_component_SelectSettingDefaultMessage, {
                              key: 0,
                              label: $props.question.question,
                              placeholder: $props.question.question,
                              name: $props.question.name,
                              options: $props.question.options,
                              modelValue: $data.questionValue.value,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.questionValue.value) = $event)),
                              onSelected: $options.getOptionInputValue,
                              onSetDelected: $options.getOptionInputValue,
                              model: $props.defaultValue,
                              class: vue.normalizeClass($props.classLabel)
                            }, null, 8 /* PROPS */, ["label", "placeholder", "name", "options", "modelValue", "onSelected", "onSetDelected", "model", "class"]))
                          : vue.createCommentVNode("v-if", true)
                      ], 2 /* CLASS */)
                    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                  : ($props.question.type === 'BaseBooleanRadioGroup')
                    ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 8,
                        class: vue.normalizeClass($props.classes)
                      }, [
                        vue.createVNode(_component_BaseBooleanRadioGroup, {
                          required: true,
                          name: $props.question.name,
                          label: $props.question.question,
                          defaultValue: $props.defaultValue,
                          onChange: $options.getOptionInputValue
                        }, null, 8 /* PROPS */, ["name", "label", "defaultValue", "onChange"])
                      ], 2 /* CLASS */))
                    : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script$c.render = render$c;
script$c.__file = "src/components/DynamicForm/DynamicFormInput.vue";

var script$b = {
  name: 'DropdownStatus',
  emits: ['select'],
  components: {
    Menu: vue$1.Menu,
    MenuButton: vue$1.MenuButton,
    MenuItems: vue$1.MenuItems,
    MenuItem: vue$1.MenuItem,
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      required: true
    },
    displayChevron: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      required: false,
      default: 'name'
    },
    with_label: {
      required: false,
      default: true
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
      default: 'color'
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
    cButtonStyle(){
      return this.btnStyle ? 'btn' : ' px-2 py-1 '
    },
    cButtonClasses(){
      return [this.cButtonColor, this.cButtonStyle]
    }
  },
  methods: {
    mSelect( value ) {
      this.$emit('select', {
        [this.trackBy]: value
      });
    }
  }
};

const _hoisted_1$9 = {
  key: 1,
  class: "capitalize-first"
};
const _hoisted_2$8 = { class: "px-1 py-1" };
const _hoisted_3$4 = ["onClick"];
const _hoisted_4$2 = { class: "flex-1 capitalize-first text-left" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_MenuButton = vue.resolveComponent("MenuButton");
  const _component_MenuItem = vue.resolveComponent("MenuItem");
  const _component_MenuItems = vue.resolveComponent("MenuItems");
  const _component_Menu = vue.resolveComponent("Menu");

  return (vue.openBlock(), vue.createBlock(_component_Menu, {
    as: "div",
    class: "relative inline-block text-left z-10"
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", null, [
        vue.createVNode(_component_MenuButton, {
          class: vue.normalizeClass(["flex justify-center space-x-2 items-center w-full text-sm font-medium text-white rounded-md capitalize-first", $options.cButtonClasses])
        }, {
          default: vue.withCtx(() => [
            ($props.icon !== null)
              ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                  key: 0,
                  class: "flex-shrink-0",
                  icon: ["fal",$props.icon]
                }, null, 8 /* PROPS */, ["icon"]))
              : vue.createCommentVNode("v-if", true),
            ($props.with_label)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$9, vue.toDisplayString($options.cCurentStatut && $options.cCurentStatut[$props.label]), 1 /* TEXT */))
              : vue.createCommentVNode("v-if", true),
            ($props.displayChevron)
              ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                  key: 2,
                  icon: ["fal","chevron-down"]
                }))
              : vue.createCommentVNode("v-if", true)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["class"])
      ]),
      vue.createVNode(vue.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_MenuItems, { class: "absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_2$8, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (item) => {
                  return (vue.openBlock(), vue.createBlock(_component_MenuItem, { key: item }, {
                    default: vue.withCtx(({ active }) => [
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass([
                  active ? 'bg-gray-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-3',
                  $options.cCurentStatut[$props.trackBy] === item[$props.trackBy] ? 'bg-gray-200' : ''
                ]),
                        onClick: $event => ($options.mSelect( item[$props.trackBy] ))
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass(["flex-shrink-0 w-3 h-3 rounded-full", "bg-theme-" + item[$props.color]])
                        }, null, 2 /* CLASS */),
                        vue.createElementVNode("span", _hoisted_4$2, vue.toDisplayString(item[$props.label]), 1 /* TEXT */),
                        ($options.cCurentStatut[$props.trackBy] === item[$props.trackBy])
                          ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                              key: 0,
                              class: "flex-shrink-0",
                              icon: ["fal","check"]
                            }))
                          : vue.createCommentVNode("v-if", true)
                      ], 10 /* CLASS, PROPS */, _hoisted_3$4)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}

script$b.render = render$b;
script$b.__file = "src/components/DropdownFiles/DropdownStatus.vue";

var script$a = {
  name:'DropDownColoredStatus',
  components: {
    DropdownStatus: script$b
  },
  emits: ['select'],
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      type: [Object, String],
      required: true
    },
    color_attribute: {
      type: String,
      default: 'bg_color'
    },
    icon: {
      required: false,
      default: null
    },
    with_label: {
      required: false,
      default: true
    },
    displayChevron: {
      required: false,
      default: true
    } ,
    btnStyle: {
      required: false,
      default: false
    }
  },
  methods: {
    mSelect( payload ) {
      this.$emit('select', payload);
    }
  }
};

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dropdown_status = vue.resolveComponent("dropdown-status");

  return (vue.openBlock(), vue.createBlock(_component_dropdown_status, {
    options: $props.options,
    current: $props.current,
    displayChevron: true,
    with_label: $props.with_label,
    color: $props.color_attribute,
    icon: $props.icon,
    btnStyle: $props.btnStyle,
    onSelect: $options.mSelect
  }, null, 8 /* PROPS */, ["options", "current", "with_label", "color", "icon", "btnStyle", "onSelect"]))
}

script$a.render = render$a;
script$a.__file = "src/components/DropdownFiles/DropdownColoredStatus.vue";

var script$9 = {
  name: 'DropdownTaskStatusSquare',
  emits: ['select'],
  components: {
    Menu: vue$1.Menu,
    MenuButton: vue$1.MenuButton,
    MenuItems: vue$1.MenuItems,
    MenuItem: vue$1.MenuItem,
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
      });
    }
  }
};

const _hoisted_1$8 = { class: "px-1 py-1" };
const _hoisted_2$7 = ["onClick"];
const _hoisted_3$3 = { class: "flex-1 capitalize-first text-left" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_MenuButton = vue.resolveComponent("MenuButton");
  const _component_MenuItem = vue.resolveComponent("MenuItem");
  const _component_MenuItems = vue.resolveComponent("MenuItems");
  const _component_Menu = vue.resolveComponent("Menu");

  return (vue.openBlock(), vue.createBlock(_component_Menu, {
    as: "div",
    class: "relative inline-block text-left"
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", null, [
        vue.createVNode(_component_MenuButton, {
          class: vue.normalizeClass(["flex w-8 h-8 justify-center items-center text-white rounded-md capitalize-first", $options.cButtonClasses])
        }, {
          default: vue.withCtx(() => [
            ($props.icon !== null)
              ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                  key: 0,
                  icon: ["fal",$props.icon],
                  spin: ['spinner-third','circle-notch'].includes($props.icon)
                }, null, 8 /* PROPS */, ["icon", "spin"]))
              : vue.createCommentVNode("v-if", true)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["class"])
      ]),
      vue.createVNode(vue.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_MenuItems, { class: "absolute left-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-100" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_1$8, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (item) => {
                  return (vue.openBlock(), vue.createBlock(_component_MenuItem, { key: item }, {
                    default: vue.withCtx(({ active }) => [
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass([
                  active ? 'bg-gray-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-3',
                  $options.cCurentStatut[$props.trackBy] === item[$props.trackBy] ? 'bg-gray-200' : ''
                ]),
                        onClick: $event => ($options.mSelect( item[$props.trackBy] ))
                      }, [
                        vue.createElementVNode("span", {
                          class: vue.normalizeClass(["flex-shrink-0 w-3 h-3 rounded-full", "bg-theme-" + item[$props.color]])
                        }, null, 2 /* CLASS */),
                        vue.createElementVNode("span", _hoisted_3$3, vue.toDisplayString(item[$props.label]), 1 /* TEXT */),
                        ($options.cCurentStatut[$props.trackBy] === item[$props.trackBy])
                          ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                              key: 0,
                              class: "flex-shrink-0",
                              icon: ["fal","check"]
                            }))
                          : vue.createCommentVNode("v-if", true)
                      ], 10 /* CLASS, PROPS */, _hoisted_2$7)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}

script$9.render = render$9;
script$9.__file = "src/components/DropdownFiles/DropdownTaskStatusSquare.vue";

var script$8 = {
  name: 'DropdownWorkStatus',
  components: {
    DropdownStatus: script$b
  },
  emits: ['select'],
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      type: [Object, String],
      required: true
    }
  },
  methods: {
    mSelect( payload ) {
      this.$emit('select', payload);
    }
  }
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dropdown_status = vue.resolveComponent("dropdown-status");

  return (vue.openBlock(), vue.createBlock(_component_dropdown_status, {
    options: $props.options,
    current: $props.current,
    displayChevron: true,
    color: "bg_color",
    onSelect: $options.mSelect
  }, null, 8 /* PROPS */, ["options", "current", "onSelect"]))
}

script$8.render = render$8;
script$8.__file = "src/components/DropdownFiles/DropdownWorkStatus.vue";

// Create component
const FilePond = vueFilePond__default["default"](
    FilePondPluginFileValidateType__default["default"],
    FilePondPluginImagePreview__default["default"]
);

var script$7 = {
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

          apiClient__default["default"].post(this.url, formData).then(response => {
            load(response.statusText);
          }).catch(() => {
          });
        },
      }
    }
  },
  methods: {
    handleProcess(){

    },
    handleAddFile(error, file) {
      this.myFiles.push(file);
    },
    processSubmit() {
      this.$refs['pond'].processFiles();
    },
    async afterSubmit(){
      this.$refs['pond'].removeFiles();
      this.$emit('confirm-submit');
    }
  },
  beforeMount() {
    this.work = this.$store.getters.getWork;
  }
};

const _hoisted_1$7 = { class: "flex justify-end" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_file_pond = vue.resolveComponent("file-pond");
  const _component_BaseButton = vue.resolveComponent("BaseButton");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createVNode(_component_file_pond, {
      name: "attachments",
      ref: "pond",
      instantUpload: "false",
      server: $options.server,
      "label-idle": "Glissez ici vos fichiers ou <span class='filepond--label-action'>cliquez ici</span> pour selectionnez sur votre ordinateur",
      "allow-multiple": "true",
      "accepted-file-types": "image/jpeg, image/png,application/pdf",
      onAddfile: $options.handleAddFile,
      onProcessfiles: _cache[0] || (_cache[0] = $event => ($options.afterSubmit())),
      files: _ctx.myFiles
    }, null, 8 /* PROPS */, ["server", "onAddfile", "files"]),
    vue.createElementVNode("div", _hoisted_1$7, [
      vue.createVNode(_component_BaseButton, {
        icon: "paper-plane",
        title: _ctx.$t('button.send'),
        onClick: $options.processSubmit
      }, null, 8 /* PROPS */, ["title", "onClick"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$7.render = render$7;
script$7.__scopeId = "data-v-5a4f8226";
script$7.__file = "src/components/FileDrop/BaseFileDropComponent.vue";

var script$6 = {
  name: 'BaseInputDynamicForm',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'textarea', 'number'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    isDefaultValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modelValue: ""
    }
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    isRequired() {
      return this.required
    },
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cLabelClass() {
      return this.labelClass === '' ? 'form-label' : this.labelClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    cDefaultValue() {
      return this.isDefaultValue ? this.value : this.modelValue
    }
  },
  watch: {
    modelValue(newValue) {
      switch (this.parseType) {
        case 'int':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseInt(newValue) : '',
            attribute: this.name
          });
          break
        case 'float':
          this.$emit('change', {
            value: newValue != '' && !isNaN(newValue) ? parseFloat(newValue) : '',
            attribute: this.name
          });
          break
        default:
          this.$emit('change', {
            value: this.modelValue,
            attribute: this.name
          });

      }
    },

  },

};

const _hoisted_1$6 = ["for"];
const _hoisted_2$6 = {
  key: 0,
  class: "text-red-600"
};
const _hoisted_3$2 = ["name", "type", "value", "id", "min", "max", "placeholder", "disabled", "required"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          for: $props.name,
          class: vue.normalizeClass(["capitalize-first", $options.cLabelClass])
        }, [
          vue.createTextVNode(vue.toDisplayString($props.label) + " ", 1 /* TEXT */),
          ($props.label && $options.isRequired)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$6, "*"))
            : vue.createCommentVNode("v-if", true)
        ], 10 /* CLASS, PROPS */, _hoisted_1$6))
      : vue.createCommentVNode("v-if", true),
    vue.withDirectives(vue.createElementVNode("input", {
      name: $props.name,
      type: $props.type,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.modelValue) = $event)),
      value: $options.cDefaultValue,
      id: $props.name,
      min: $props.min,
      max: $props.max,
      class: vue.normalizeClass([$options.cInputClass, "border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"]),
      placeholder: $props.placeholder,
      disabled: $options.isDisabled,
      required: $options.isRequired
    }, null, 10 /* CLASS, PROPS */, _hoisted_3$2), [
      [vue.vModelDynamic, $data.modelValue]
    ]),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "form-help text-red-600"
      }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name), max: this.max, min: this.min})), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script$6.render = render$6;
script$6.__file = "src/components/DynamicForm/components/BaseInputDynamicForm.vue";

var script$5 = {
  name: 'BaseContentTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    rowClick:{
      type: String,
      required: false,
      default: ''
    },
    redirect_to_field:{
      type: String,
      required: false,
      default: 'id'
    },
    search:{
      type: Boolean,
      default: false
    },
    rows:{ // je pense que cette props n'est pas utilisée
      type: Array,
      required: false
    },
    modelList:{
      type: Array,
      required: true
    },
    isBordered: {
      type: Boolean,
      required: false,
      default: false
    },
    isHoverable: {
      type: Boolean,
      required: false,
      default: false
    },
    isSmallTable: {
      type: Boolean,
      required: false,
      default: false
    },
    isResponsive: {
      type: Boolean,
      required: false,
      default: false
    },
    isStriped: {
      type: Boolean,
      required: false,
      default: false
    },
    theadRowClasses: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      searchTerms: '',
      sortDirection: null,
      sortColumn: null,
      sortType: null,
      currentSort: '',
    }
  },
  computed: {
    tdClasses() {
      return this.isBordered ? 'border' : 'border-b'
    },
    thClasses() {
      return this.isBordered ? 'border' : ''
    },
    trClasses() {
      return this.isHoverable ? 'hover:bg-gray-200 dark:hover:bg-gray-600' : ''
    },
    tableClasses() {
      return this.isSmallTable ? 'table--sm' : ''
    },

    divClasses() {
      return this.isResponsive ? 'overflow-x-auto' : ''
    },

    filteredModels() {

      let copyModelList = this.modelList;

      if (this.searchTerms.length >= 1) {
        copyModelList = copyModelList.filter((model) => {
          let search = this.searchTerms.length ? this.searchTerms.toLowerCase() : '';
          let values = this.filtrableColumns;
          let flag = false;
          values.forEach((val) => {
            if (model[val] && model[val].toLowerCase().indexOf(search.toLowerCase()) > -1) {
              flag = true;
              return;
            }
          });
          if (flag) return model
        });
      }

      if( this.sortDirection && this.sortColumn ){
        copyModelList = copyModelList.sort((a,b) => {
          let fa, fb;
          if( this.sortType && this.sortType === 'date' ){
            fa = a[this.sortColumn] ? a[this.sortColumn]['sort_value'] : ( this.sortDirection === 'up' ? '9999999999999999' : ( this.sortDirection === 'down' ? '00000000000000000' : '' ) );
            fb = b[this.sortColumn] ? b[this.sortColumn]['sort_value'] : ( this.sortDirection === 'up' ? '9999999999999999' : ( this.sortDirection === 'down' ? '00000000000000000' : '' ) );
          } else {
            fa = a[this.sortColumn].toLowerCase();
            fb = b[this.sortColumn].toLowerCase();
          }
          if (fa < fb) {
            return this.sortDirection ==='up' ? -1 : 1
          }
          if (fa > fb) {
            return this.sortDirection ==='up' ? 1 : -1
          }
          return 0
        });
      }
      return copyModelList;

    },

    filtrableColumns() {
      return  this.columns.filter(function (column){
        return ___default$1["default"].has(column,'searchable')
      }).map(obj => {
        return obj.field
      })
    },
  },
  methods: {
    generateStripedClass(index) {
      return this.isStriped && index % 2 !== 0 ? 'bg-gray-200 dark:bg-dark-1' : ''
    },
    mRowClick(val){
      if(this.rowClick !== ''){
        this.$emit(this.rowClick,val);
      }
    },
    filterList(terms) {
      this.searchTerms = terms;
    },
    handleSortColumn({column,direction, type}){

      this.currentSort = column;

      this.sortColumn = column;
      this.sortDirection = direction;
      this.sortType = type;

    },
  }
};

const _hoisted_1$5 = { class: "flex justify-end items-center" };
const _hoisted_2$5 = ["onClick"];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseSearchInput = vue.resolveComponent("BaseSearchInput");
  const _component_BaseButton = vue.resolveComponent("BaseButton");
  const _component_BaseThComponent = vue.resolveComponent("BaseThComponent");
  const _component_BaseLabel = vue.resolveComponent("BaseLabel");
  const _component_ContentTableCell = vue.resolveComponent("ContentTableCell");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.divClasses)
  }, [
    vue.createCommentVNode("#region top header "),
    vue.createElementVNode("div", _hoisted_1$5, [
      vue.createCommentVNode("#region searchbar "),
      (this.search)
        ? (vue.openBlock(), vue.createBlock(_component_BaseSearchInput, {
            key: 0,
            onTypeInput: $options.filterList
          }, null, 8 /* PROPS */, ["onTypeInput"]))
        : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode("#endregion "),
      vue.createCommentVNode("#region sync button "),
      vue.createVNode(_component_BaseButton, {
        color: "secondary",
        isoutline: true,
        icon: "sync",
        tooltip: _ctx.$t('button.refresh'),
        onClick: _cache[0] || (_cache[0] = $event => (this.$emit('refresh-click'))),
        scopedClasses: "mx-2",
        title: null
      }, null, 8 /* PROPS */, ["tooltip"]),
      vue.createCommentVNode("#endregion ")
    ]),
    vue.createCommentVNode("#endregion "),
    vue.createElementVNode("table", {
      class: vue.normalizeClass(["table", $options.tableClasses])
    }, [
      vue.createCommentVNode("#region header "),
      vue.createElementVNode("thead", null, [
        vue.createElementVNode("tr", {
          class: vue.normalizeClass($props.theadRowClasses)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column) => {
            return (vue.openBlock(), vue.createBlock(_component_BaseThComponent, {
              key: column.field,
              column: column,
              "th-classes": $options.thClasses,
              currentSort: $data.currentSort,
              onSortColumn: $options.handleSortColumn
            }, null, 8 /* PROPS */, ["column", "th-classes", "currentSort", "onSortColumn"]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ]),
      vue.createCommentVNode("#endregion "),
      vue.createElementVNode("tbody", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.filteredModels, (model, index) => {
          return (vue.openBlock(), vue.createElementBlock("tr", {
            onClick: $event => (this.$emit('rowClick', model[$props.redirect_to_field] )),
            key: index,
            class: vue.normalizeClass([$options.trClasses, $options.generateStripedClass(index)])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
              return (vue.openBlock(), vue.createElementBlock("td", {
                key: index,
                class: vue.normalizeClass(["dark:border-dark-5", $options.tdClasses])
              }, [
                (column.type === 'button')
                  ? (vue.openBlock(), vue.createBlock(_component_BaseButton, {
                      key: 0,
                      color: column.metadata.type,
                      icon: column.metadata.icon,
                      onClick: vue.withModifiers($event => (this.$emit(column.metadata.method,model.id )), ["stop"]),
                      tooltip: _ctx.$t('button.delete'),
                      isOutline: column.metadata.outline,
                      title: column.metadata.title
                    }, null, 8 /* PROPS */, ["color", "icon", "onClick", "tooltip", "isOutline", "title"]))
                  : vue.createCommentVNode("v-if", true),
                (column.type === 'label' && model[column.metadata.value])
                  ? (vue.openBlock(), vue.createBlock(_component_BaseLabel, {
                      key: 1,
                      icon: column.metadata.icon,
                      content: model[column.metadata.value],
                      color: model[column.metadata.color]
                    }, null, 8 /* PROPS */, ["icon", "content", "color"]))
                  : (vue.openBlock(), vue.createBlock(_component_ContentTableCell, {
                      key: 2,
                      model: model,
                      column: column
                    }, null, 8 /* PROPS */, ["model", "column"]))
              ], 2 /* CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ], 10 /* CLASS, PROPS */, _hoisted_2$5))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "src/components/BaseTable/BaseContentTable.vue";

var script$4 = {
  name: "BaseShowEditInput",
  props: {
    name: {
      type: String,
      default: ''
    },
    editionMode: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
    type: {
      type: String,
      default: "text",
    },
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    parseType: {
      type: String,
      required: false,
      default: 'text',
      validator: function (value) {
        const admittedTypes = ['text', 'int', 'float'];
        return admittedTypes.indexOf(value) !== -1
      }
    },
    buttonLabel: {type: String, required: false, default: null},
    buttonColor: {
      type: String,
      required: false,
      default: 'primary',
      validator: function (value) {
        const possibleTypes = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'info'];
        return possibleTypes.indexOf(value) !== -1
      }
    },
    isOutline: {
      type: Boolean,
      required: false,
      default: false
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false
    },
    isSoft: {
      type: Boolean,
      required: false,
      default: false
    },
    isElevated: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: function (value) {
        const possibleSizes = ['', 'small', 'medium', 'large'];
        return possibleSizes.indexOf(value) !== -1
      }
    },
    buttonIcon: {type: String, required: false, default: null},
    buttonFunction: {}
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    buttonTextColorClass() {
      return this.textColor ? `text-${this.textColor}` : ''
    },
    buttonCursorClass() {
      return `cursor-${this.cursor}`
    },
    buttonRoundedClass() {
      return this.isRounded ? 'rounded-full' : ''
    },
    buttonTypeClass() {
      if (this.isOutline) {
        return `btn-outline-${this.buttonColor}`
      }
      if (this.isSoft) {
        return `btn-${this.buttonColor}-soft`
      }
      return `btn-${this.buttonColor}`
    },
    buttonSizeClass() {
      switch (this.size) {
        case 'small' :
          return 'btn-sm'
        case 'large' :
          return 'btn-lg'
        case 'medium' :
        default :
          return ''
      }
    },
    buttonElevationClass() {
      return this.isElevated ? 'shadow-md' : ''
    },
    buttonClasses() {
      return [this.buttonTypeClass, this.buttonRoundedClass, this.buttonElevationClass, this.buttonSizeClass, this.scopedClasses, this.buttonCursorClass, this.buttonTextColorClass].join(' ')
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  },
};

const _hoisted_1$4 = { class: "mt-1 flex rounded-md shadow-sm" };
const _hoisted_2$4 = { class: "relative flex items-stretch flex-grow focus-within:z-10" };
const _hoisted_3$1 = ["id", "type", "min", "max", "value", "placeholder"];
const _hoisted_4$1 = { key: 1 };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.cGroupClass)
  }, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("div", null, [
            vue.createVNode(_component_BaseEditLabel, {
              label: $props.label,
              required: $props.required
            }, null, 8 /* PROPS */, ["label", "required"]),
            vue.createElementVNode("div", _hoisted_1$4, [
              vue.createElementVNode("div", _hoisted_2$4, [
                vue.createElementVNode("input", {
                  id: $props.id,
                  type: $props.type,
                  min: $props.min,
                  max: $props.max,
                  value: $props.modelValue,
                  placeholder: $props.placeholder,
                  onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
                  class: "form-control border-gray-400 focus:border-blue-300 focus:ring-blue-300 focus:ring-1"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$1)
              ]),
              vue.createElementVNode("button", {
                type: "button",
                class: vue.normalizeClass(["-ml-px relative inline-flex items-center space-x-2 px-4 py-2 font-medium text-sm rounded-r-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 content-center", $options.buttonClasses]),
                onClick: _cache[1] || (_cache[1] = (...args) => ($props.buttonFunction && $props.buttonFunction(...args)))
              }, [
                ($props.buttonIcon)
                  ? (vue.openBlock(), vue.createBlock(_component_font_awesome_icon, {
                      key: 0,
                      class: "h-full flex content-center item-center cursor-pointer dark:bg-dark-2 w-3",
                      icon: ['fal', $props.buttonIcon],
                      size: "2x"
                    }, null, 8 /* PROPS */, ["icon"]))
                  : vue.createCommentVNode("v-if", true),
                ($props.buttonLabel)
                  ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1, vue.toDisplayString($props.buttonLabel), 1 /* TEXT */))
                  : vue.createCommentVNode("v-if", true)
              ], 2 /* CLASS */)
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
            return (vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "form-help text-red-600"
            }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : (vue.openBlock(), vue.createBlock(_component_BaseShowLabel, {
          key: 1,
          label: $props.label,
          "model-value": $props.modelValue
        }, null, 8 /* PROPS */, ["label", "model-value"]))
  ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "src/components/BaseShowEditInput/BaseShowEditInputButton.vue";

var script$3 = {
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
      this.dFirstValue = this.firstValue;
    },
    secondValue(){
      this.dSecondValue = this.secondValue;
    },
    thirdValue(){
      this.dThirdValue = this.thirdValue;
    },
  }
};

const _hoisted_1$3 = {
  key: 0,
  class: "block text-sm font-medium text-gray-500 capitalize"
};
const _hoisted_2$3 = {
  key: 1,
  class: "mt-1 bg-white rounded-md shadow-sm -space-y-px"
};
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "" };
const _hoisted_5 = { class: "relative rounded-md shadow-sm" };
const _hoisted_6 = { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" };
const _hoisted_7 = { class: "text-gray-500 sm:text-sm capitalize-first" };
const _hoisted_8 = ["name", "id"];
const _hoisted_9 = { class: "" };
const _hoisted_10 = { class: "relative rounded-md shadow-sm" };
const _hoisted_11 = { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" };
const _hoisted_12 = { class: "text-gray-500 sm:text-sm capitalize-first" };
const _hoisted_13 = ["name", "id"];
const _hoisted_14 = { class: "relative shadow-sm" };
const _hoisted_15 = { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" };
const _hoisted_16 = { class: "text-gray-500 sm:text-sm capitalize-first" };
const _hoisted_17 = ["name", "id"];
const _hoisted_18 = { class: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3" };
const _hoisted_19 = { class: "block text-sm font-medium text-gray-800 capitalize" };
const _hoisted_20 = { class: "grid grid-cols-2 mt-4" };
const _hoisted_21 = { class: "col-span-1" };
const _hoisted_22 = { class: "col-span-1 mb-2" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");

  return (vue.openBlock(), vue.createElementBlock("fieldset", null, [
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("legend", _hoisted_1$3, vue.toDisplayString($props.legend), 1 /* TEXT */))
      : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode("region editionMode"),
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, [
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("div", _hoisted_4, [
              vue.createElementVNode("div", _hoisted_5, [
                vue.createElementVNode("div", _hoisted_6, [
                  vue.createElementVNode("span", _hoisted_7, vue.toDisplayString($props.firstLabel), 1 /* TEXT */)
                ]),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  name: $props.firstName,
                  id: $props.firstName,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.dFirstValue) = $event)),
                  class: "block w-full pl-12 mr-12 sm:text-sm border-gray-300 rounded-tl-md focus:border-gray-300 focus:ring-0",
                  placeholder: " ",
                  onInput: _cache[1] || (_cache[1] = (...args) => ($options.updateFirstValue && $options.updateFirstValue(...args)))
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_8), [
                  [vue.vModelText, $data.dFirstValue]
                ])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_9, [
              vue.createElementVNode("div", _hoisted_10, [
                vue.createElementVNode("div", _hoisted_11, [
                  vue.createElementVNode("span", _hoisted_12, vue.toDisplayString($props.secondLabel), 1 /* TEXT */)
                ]),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  name: $props.secondName,
                  id: $props.secondName,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.dSecondValue) = $event)),
                  class: "block w-full pl-12 sm:text-sm border-gray-300 rounded-tr-md focus:border-gray-300 focus:ring-0",
                  placeholder: " ",
                  "aria-describedby": "price-currency",
                  onInput: _cache[3] || (_cache[3] = (...args) => ($options.updateSecondValue && $options.updateSecondValue(...args)))
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_13), [
                  [vue.vModelText, $data.dSecondValue]
                ])
              ])
            ])
          ]),
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", _hoisted_14, [
              vue.createElementVNode("div", _hoisted_15, [
                vue.createElementVNode("span", _hoisted_16, vue.toDisplayString($props.thirdLabel), 1 /* TEXT */)
              ]),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "text",
                name: $props.thirdName,
                id: $props.thirdName,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.dThirdValue) = $event)),
                class: "block w-full pl-12 pr-12 sm:text-sm border-gray-300 focus:border-gray-300 focus:ring-0",
                placeholder: " ",
                "aria-describedby": "price-currency",
                onInput: _cache[5] || (_cache[5] = (...args) => ($options.updateThirdValue && $options.updateThirdValue(...args)))
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_17), [
                [vue.vModelText, $data.dThirdValue]
              ])
            ])
          ])
        ]))
      : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
          vue.createCommentVNode("endregion"),
          vue.createCommentVNode("region affichage"),
          vue.createElementVNode("div", _hoisted_18, [
            vue.createElementVNode("legend", _hoisted_19, vue.toDisplayString($props.legend), 1 /* TEXT */),
            vue.createElementVNode("div", _hoisted_20, [
              vue.createElementVNode("div", _hoisted_21, [
                vue.createVNode(_component_BaseShowLabel, {
                  label: `${$props.firstLabel} (jours)`,
                  "model-value": $props.firstValue
                }, null, 8 /* PROPS */, ["label", "model-value"])
              ]),
              vue.createElementVNode("div", _hoisted_22, [
                vue.createVNode(_component_BaseShowLabel, {
                  label: `${$props.secondLabel} (jours)`,
                  "model-value": $props.secondValue
                }, null, 8 /* PROPS */, ["label", "model-value"])
              ])
            ]),
            vue.createVNode(_component_BaseShowLabel, {
              label: `${$props.thirdLabel} (€)`,
              "model-value": $props.thirdValue
            }, null, 8 /* PROPS */, ["label", "model-value"])
          ])
        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)),
    vue.createCommentVNode("endregion")
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/BaseShowEditInput/BaseShowEditTreeInput.vue";

var script$2 = {
  name: "BaseSimpleSearchInput",
  emits: ['update:modelValue'],
  props:{
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  computed:{
    cGroupClass() {
      return this.groupClass === '' ? 'mt-1' : this.groupClass
    },
  },
  methods: {
    updateInput(event){
      this.$emit("update:modelValue", event.target.value);
    }
  }
};

const _hoisted_1$2 = ["placeholder"];
const _hoisted_2$2 = { class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = vue.resolveComponent("font-awesome-icon");

  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["relative rounded-md shadow-sm", $options.cGroupClass])
  }, [
    vue.createElementVNode("input", {
      type: "text",
      name: "account-number",
      class: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md",
      onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
      placeholder: _ctx.$t('global.placeholder.search')
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$2),
    vue.createElementVNode("div", _hoisted_2$2, [
      vue.createVNode(_component_font_awesome_icon, { icon: ['fal', 'search'] })
    ])
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/components/BaseInput/BaseSimpleSearchInput.vue";

var script$1 = {
  name: 'HelloWorld',
};

const _hoisted_1$1 = /*#__PURE__*/vue.createElementVNode("h1", null, " est ce que ça marche TOUJOURS.... ?? ", -1 /* HOISTED */);
const _hoisted_2$1 = [
  _hoisted_1$1
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, _hoisted_2$1))
}

script$1.render = render$1;
script$1.__file = "src/components/HelloWorld.vue";

var script = {
  directives: {mask: vueTheMask.mask},
  name: 'BaseShowEditIsoDateInput',
  data() {
    return {
      internalValue: null,
    }
  },
  components: { BaseEditLabel: script$1j, BaseShowLabel: script$1k },
  props: {
    editionMode: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    groupClass: {
      type: String,
      required: false,
      default: ''
    },
    labelClass: {
      type: String,
      required: false,
      default: ''
    },
    mask: {
      type: Array,
      required: false,
      default() {
        return ['##/##/####']
      }
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: "",
      require: true,
    },
  },
  computed: {
    cGroupClass() {
      return this.groupClass === '' ? 'mt-3 w-full' : this.groupClass
    },
    cInputClass() {
      return this.inputClass === '' ? 'form-control' : this.inputClass
    },
    cDisplayedValueWhenNotEditionMode(){
      return moment__default["default"](this.modelValue).format('DD/MM/YYYY')
    },
    cInternalValue(){
      return this.internalValue
    },
    internalValueIsAFullDate(){
      return this.isFullDate(this.cInternalValue)
    }
  },
  watch: {
    modelValue: {
      handler(newValue){
        if(newValue){
          this.internalValue = moment__default["default"](newValue).format('DD/MM/YYYY');
        }
      },
      immediate: true,
      deep:true,
    }
  },
  methods: {
    isFullDate(payload){
      return /\d{2}\/\d{2}\/\d{4}/.test(payload)
    },
    updateInput(event) {
      if (this.isFullDate(event.target.value)) {
        this.$emit("update:modelValue", moment__default["default"](event.target.value).format());
      }
    }
  },
};

const _hoisted_1 = ["name", "value", "id", "placeholder"];
const _hoisted_2 = {
  key: 1,
  class: "mt-3"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseEditLabel = vue.resolveComponent("BaseEditLabel");
  const _component_BaseShowLabel = vue.resolveComponent("BaseShowLabel");
  const _directive_mask = vue.resolveDirective("mask");

  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createTextVNode(vue.toDisplayString($options.internalValueIsAFullDate) + " " + vue.toDisplayString($options.cInternalValue) + " ", 1 /* TEXT */),
    ($props.editionMode)
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass([$options.cGroupClass, "mt-3"])
        }, [
          vue.createVNode(_component_BaseEditLabel, {
            label: $props.label,
            required: $props.required
          }, null, 8 /* PROPS */, ["label", "required"]),
          vue.withDirectives(vue.createElementVNode("input", {
            name: $props.name,
            type: "text",
            value: $data.internalValue,
            onInput: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
            id: $props.name,
            class: vue.normalizeClass([ $options.internalValueIsAFullDate ? 'focus:border-green-400 focus:ring-green-400' : 'focus:border-red-500focus:ring-red-500', 'border-gray-400 focus:ring-1', $options.cInputClass]),
            placeholder: $props.placeholder
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1), [
            [_directive_mask, $props.mask]
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.errors, (error, index) => {
            return (vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "form-help text-red-600"
            }, vue.toDisplayString(_ctx.$t(error, {attribute: _ctx.$t('attributes.' + $props.name)})), 1 /* TEXT */))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.createVNode(_component_BaseShowLabel, {
            label: $props.label,
            "model-value": $options.cDisplayedValueWhenNotEditionMode
          }, null, 8 /* PROPS */, ["label", "model-value"])
        ]))
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/components/BaseShowEditInput/BaseShowEditIsoDateInput.vue";

var components = {
    ActivityTable: script$1l,
    BaseInputDynamicForm: script$6,
    BaseShowEditTreeInput: script$3,
    BaseShowEditInputButton: script$4,
    BaseFileDropComponent: script$7,
    DropdownStatus: script$b,
    BaseContentTable: script$5,
    DropdownColoredStatus: script$a,
    DropdownWorkStatus: script$8,
    DropdownTaskStatusSquare: script$9,
    DynamicFormInput: script$c,
    SelectCustomer: script$i,
    SelectUserSimple: script$g,
    BaseWysiwyg: script$e,
    SelectLanguage: script$h,
    SelectCompaniesMultiple: script$k,
    SelectCompanySimple: script$j,
    ActivityTableRow: script$1m,
    BaseBankShowEditSelectSimple: script$1i,
    BaseBooleanRadioGroup: script$1h,
    BaseButton: script$1g,
    BaseButtonInput: script$1f,
    BaseCard: script$1e,
    BaseCardSection: script$1d,
    BaseCheckBox: script$1c,
    BaseCompanyShowEditSelectMultiple: script$1b,
    BaseCompanyShowEditSelectSimple: script$1a,
    BaseCountryShowEditSelectSimple: script$19,
    BaseCustomerShowEditSelectSimple: script$18,
    BaseDateInput: script$16,
    BaseDocShowEditSelectMultiple: script$15,
    BaseEditLabel: script$1j,
    BaseEventTypeShowEditSelectSimple: script$14,
    BaseInput: script$13,
    BaseLabel: script$12,
    BaseLanguageShowEditSelectMultiple: script$11,
    BaseLanguageShowEditSelectSimple: script$10,
    BaseMaskedInput: script$17,
    BasePageFull: script$X,
    BasePhoneInput: script$W,
    BaseRadioGroup: script$V,
    BaseSearchInput: script$U,
    BaseSelectMultiple: script$T,
    BaseSelectSimple: script$S,
    BaseSelectSimpleAjax: script$R,
    BaseShowEditDateInput: script$Q,
    BaseShowEditDatePicker: script$P,
    BaseShowEditInput: script$O,
    BaseShowEditPhoneInput: script$N,
    BaseShowEditRadioGroup: script$L,
    BaseShowEditSelectAjax: script$K,
    BaseShowEditSelectMultiple: script$J,
    BaseShowEditSelectSimple: script$I,
    BaseShowEditTextArea: script$H,
    BaseShowEditTimeInput: script$G,
    BaseShowLabel: script$1k,
    BaseShowPhoneLabel: script$F,
    BaseSimpleCard: script$E,
    BaseSimpleCheckboxGroup: script$D,
    BaseSimpleDatePicker: script$C,
    BaseSimpleRadioGroup: script$B,
    BaseSimpleShowEditCheckboxGroup: script$y,
    BaseSimpleTab: script$x,
    BaseSwitch: script$w,
    BaseTable: script$v,
    BaseTextArea: script$u,
    BaseThComponent: script$t,
    BaseTimeInput: script$s,
    BaseTrueFalseShowEditRadioGroup: script$r,
    BaseUserShowEditSelectSimple: script$q,
    CheckboxWithInput: script$z,
    ColumnVisibilityDropDownComponent: script$p,
    ContentTableCell: script$o,
    IFramePdf: script$n,
    LabelWitchCheckBoxChecked: script$A,
    SettingsPageFull: script$m,
    ToastUndoComponent: script$l,
    BaseSimpleSearchInput: script$2,
    BaseShowEditIsoDateInput: script,

    HelloWorld: script$1,
};

const plugin = {

    install (Vue) {
        for (const prop in components) {
            // console.log('components',components)
            // eslint-disable-next-line no-prototype-builtins
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;
