<template>
  <div v-if="label" class="capitalize-first">{{ label }} <span class="text-red-600" v-if="required">*</span></div>
  <div v-if="editor">
    <div v-if="displayFormatButton">
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }">
        <font-awesome-icon :icon="['fal', 'bold']" />
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }">
        <font-awesome-icon :icon="['fal', 'italic']" />
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
        <font-awesome-icon :icon="['fal', 'strikethrough']" />
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <font-awesome-icon :icon="['fal', 'font']" style="font-size: 14px"/>
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        <font-awesome-icon :icon="['fal', 'font']" style="font-size: 10px"/>
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        <font-awesome-icon :icon="['fal', 'font']" style="font-size: 7px"/>
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }">
        <font-awesome-icon :icon="['fal', 'paragraph']"/>
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }">
        <font-awesome-icon :icon="['fal', 'list-ul']"/>
      </button>
      <button
          class="px-4 py-2 border border-gray-300 bg-gray-200 rounded"
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }">
        <font-awesome-icon :icon="['fal', 'list-ol']"/>
      </button>
    </div>
  </div>
  <editor-content
      :editor="editor"
      ref="ed"
  />
  <template v-if="errors && errors.length > 0">
    <div v-for='(error,index) in errors' :key='index' class="form-help text-red-600">
      {{ $t(error, {'attribute': $t(name)}) }}
    </div>
  </template>

</template>

<script>
import { Editor, EditorContent, VueRenderer } from '@tiptap/vue-3'
import tippy from "tippy.js";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import Mention from '@tiptap/extension-mention'
import MentionList from "./components/MentionList.vue";


export default {

  name: "BaseWysiwyg",
  components: {
    EditorContent,
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
        this.editor.commands.setContent( newValue)
      }

    }
  },
  methods: {
    setTextAtPosition(text) {
      let stringVar = '<span data-type="mention" class="mention" data-id="'+text.value+'">@</span>';
      this.editor.commands.insertContent( stringVar )
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Mention.configure({

          HTMLAttributes: {
            class: 'mention',
          },
          suggestion: {

            items: ({query}) => this.suggestionVariables.filter(
                (model) => {
                  let search = query.length ? query.toLowerCase() : '';
                  if ( search.length < 2 || model.name && model.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
                    return
                  }else{
                    return model.name
                  }
                }
            ).slice(0, 10).reduce((init,item)=>{
              init.push(item.name)
              return init
            },[]),
            render: () => {
              let component;
              let popup;
              return {
                onStart: (props) => {
                  component = new VueRenderer(MentionList, {
                    props,
                    editor: props.editor,
                  });
                  popup = tippy("body", {
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
        
        this.$emit('update:modelValue', this.editor.getHTML())
        this.$emit('change', this.editor.getHTML())
      }
    })
  },

}
</script>


<style>

.ProseMirror {
  border: 1px solid #1c3faa;
  width: 100% !important;
  padding: 20px !important;
}
.ProseMirror h1 {
  font-size: 30px;
}
.ProseMirror h2 {
  font-size: 20px;
}
.ProseMirror h3 {
  font-size: 12px;
  font-weight: normal;
}

.ProseMirror blockquote {
  padding-left: 1rem;
  border-left: 2px solid black;
}

.ProseMirror ul{
  list-style: circle;
  padding: 0 1rem;
}
.ProseMirror ol {
  list-style: revert;
  padding: 0 1rem;
}

.mention {
  border: 1px solid #000;
  border-radius: 0.4rem;
  padding: 0.1rem 0.3rem;
  box-decoration-break: clone;
}
div.tippy-box {
  background-color: transparent !important;
}

</style>

