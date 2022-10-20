<template>
  <b-card-code title="About">
    <b-card-text>Write University Descriptions</b-card-text>

    <quill-editor
      v-model="content"
      :options="snowOption"
    />
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
// import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { quillEditor } from 'vue-quill-editor'
import { codeSnow } from './code'

export default {
  components: {
    quillEditor,
    // BCardCode,
    BCardText,
  },
  data() {
    return {
      codeSnow,
      snowOption: {
        theme: 'snow',
      },
    }
  },

}
</script>
