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
            </b-card-body>

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
import invoiceStoreModule from '../invoiceStoreModule'
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
      console.warn('description'.this.startDate)
    },
    onContext(ctx) {
      this.context = ctx
    },
    addNewItemInItemForm() {
      this.$refs.form.style.overflow = 'hidden'
      this.invoiceData.items.push(JSON.parse(JSON.stringify(this.itemFormBlankItem)))

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
        setTimeout(() => {
          this.$refs.form.style.overflow = null
        }, 350)
      })
    },
    removeItem(index) {
      this.invoiceData.items.splice(index, 1)
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
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const clients = ref([])
    store.dispatch('app-invoice/fetchClients')
      .then(response => { clients.value = response.data })

    const itemFormBlankItem = {
      item: null,
      cost: 0,
      qty: 0,
      description: '',
    }

    const invoiceData = ref({
      id: 5037,
      client: null,

      // ? Set single Item in form for adding data
      items: [JSON.parse(JSON.stringify(itemFormBlankItem))],

      salesPerson: '',
      note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
      paymentMethod: null,
    })

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

    const paymentMethods = [
      'Bank Account',
      'PayPal',
      'UPI Transfer',
    ]

    return {
      invoiceData,
      clients,
      itemsOptions,
      itemFormBlankItem,
      paymentMethods,
    }
  },
}
</script>

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
