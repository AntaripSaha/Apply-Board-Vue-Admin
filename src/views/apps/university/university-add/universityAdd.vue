<template>
  <section class="invoice-add-wrapper">

    <b-row class="invoice-add">

      <!-- Col: Left (Invoice Container) -->
      <b-col
        cols="12"
        xl="12"
        md="12"
      >
        <b-form @submit.prevent>
          <b-card
            no-body
            class="invoice-preview-card"
          >
            <!-- Spacer -->
            <hr class="invoice-spacing">

            <!-- Invoice Client & Payment Details -->
            <b-card-body
              class="invoice-padding pt-0"
            >
              <h3 class="mb-2">
                University Informations
              </h3>
              <b-row class="invoice-spacing">
                <!-- Col: Invoice To -->
                <b-col
                  cols="12"
                  xl="6"
                  class="mb-lg-1"
                >
                  <!-- University Informations-->
                  <b-form-group
                    label="University Name"
                    label-for="name"
                  >
                    <b-form-input
                      id="name"
                      v-model="universityName"
                      size="lg"
                      placeholder="University Name"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Founded Years"
                    label-for="foundedyears"
                  >
                    <b-form-input
                      id="foundedyears"
                      v-model="foundedYears"
                      size="lg"
                      placeholder="Founded Years"
                    />
                  </b-form-group>
                  <b-form-group
                    label="University Type"
                    label-for="type"
                  >
                    <b-form-input
                      id="type"
                      v-model="universityType"
                      size="lg"
                      placeholder="University Type"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Gallery"
                    label-for="type"
                  >
                    <b-form-file
                      v-model="files"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                      multiple
                    />
                  </b-form-group>

                </b-col>
                <b-col
                  cols="12"
                  xl="6"
                  class="mb-lg-1"
                >
                  <template>
                    <quill-editor
                      v-model="universityDescription"
                    />
                  </template>
                </b-col>
              </b-row>
              <h4 class="mb-2">
                University Features
              </h4>
              <b-row
                v-for="(item, index) in items"
                :id="item.id"
                :key="item.id"
                ref="row"
              >

                <!-- Item Name -->
                <b-col md="4">
                  <b-form-group
                    label="Feature Title"
                    label-for="feature-title"
                  >
                    <b-form-input
                      id="feature-title"
                      v-model="item.featureTitle"
                      type="text"
                      placeholder="Enter Feature Title"
                    />
                  </b-form-group>
                </b-col>

                <!-- Cost -->
                <b-col md="6">
                  <b-form-group
                    label="Feature Description"
                    label-for="description"
                  >
                    <b-form-textarea
                      id="textarea-rows"
                      v-model="item.featureDescription"
                      placeholder="Description of the Feature"
                      rows="3"
                    />
                  </b-form-group>
                </b-col>

                <!-- Remove Button -->
                <b-col
                  lg="2"
                  md="3"
                  class="mb-50"
                >
                  <b-button
                    v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                    variant="outline-danger"
                    class="mt-0 mt-md-2"
                    @click="removeItem(index)"
                  >
                    <feather-icon
                      icon="XIcon"
                      class="mr-25"
                    />
                    <span>Delete</span>
                  </b-button>
                </b-col>
              </b-row>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                @click="repeateAgain"
              >
                <feather-icon
                  icon="PlusIcon"
                  class="mr-25"
                />
                <span>Add New</span>
              </b-button>
            </b-card-body>
            <b-col cols="12">
              <hr>
            </b-col>
            <!-- Items Section -->
            <b-card-body class="invoice-padding form-item-section">
              <b-col
                cols="12"
              >
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  type="submit"
                  class="mt-2 "
                  variant="primary"
                  @click="saveUniversity"
                >
                  Submit
                </b-button>
              </b-col>
            </b-card-body>
          </b-card>
        </b-form>
      </b-col>
    </b-row>

    <invoice-sidebar-add-new-customer />
  </section>
</template>

<script>
import Logo from '@core/layouts/components/Logo.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import {
  BFormFile, BRow, BCol, BCard, BCardBody, BButton, BCardText, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormCheckbox, BPopover, VBToggle,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import { quillEditor } from 'vue-quill-editor'
// import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarAddNewCustomer from '../InvoiceSidebarAddNewCustomer.vue'
// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    BFormFile,
    quillEditor,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BButton,
    BCardText,
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BFormTextarea,
    BFormCheckbox,
    BPopover,
    flatPickr,
    vSelect,
    Logo,
    InvoiceSidebarAddNewCustomer,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,

  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        featureTitle: '',
        featureDescription: '',
        prevHeight: 0,
      }],
      nextTodoId: 2,
      universityName: '',
      foundedYears: '',
      universityType: '',
      files: [],
      universityDescription: '',
      programName: '',
      programIntake: '',
      startDate: '',
      endDate: '',
      tutionFee: '',
      applicationFee: '',
      value: '',
      context: null,
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option', disabled: true },
        {
          label: 'Grouped options',
          options: [
            { value: { C: '3PO' }, text: 'Option with object value' },
            { value: { R: '2D2' }, text: 'Another option with object value' },
          ],
        },
      ],
    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    saveUniversity() {
      console.warn(this.items)
      console.warn('description'.this.startDate)
    },
    onContext(ctx) {
      this.context = ctx
    },
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
  setup() {
    const itemsOptions = [
      {
        itemTitle: 'Computer Science',
      },
      {
        itemTitle: 'Electrical Engineering',
      },
      {
        itemTitle: 'Civil Engineering',
      },
      {
        itemTitle: 'Architect',
      },
    ]

    return {
      itemsOptions,
    }
  },
}
</script>
<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
.invoice-add-wrapper {
  .add-new-client-header {
    padding: $options-padding-y $options-padding-x;
      color: $success;

    &:hover {
      background-color: rgba($success, 0.12);
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
@import '~@core/scss/base/components/variables-dark';

.form-item-section {
background-color:$product-details-bg;
}

.form-item-action-col {
  width: 27px;
}

.repeater-form {
  // overflow: hidden;
  transition: .35s height;
}

.v-select {
  &.item-selector-title,
  &.payment-selector {
    background-color: #fff;

    .dark-layout & {
      background-color: unset;
    }
  }
}

.dark-layout {
  .form-item-section {
    background-color: $theme-dark-body-bg;

    .row .border {
      background-color: $theme-dark-card-bg;
    }

  }
}
</style>
<style lang="scss">
@import '@core/scss/vue/libs/quill.scss';
</style>
