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
              <div
                ref="form"
                class="repeater-form"
                :style="{height: trHeight}"
              >
                <b-row
                  v-for="(item, index) in invoiceData.items"
                  :key="index"
                  ref="row"
                  class="pb-2"
                >

                  <!-- Item Form -->
                  <!-- ? This will be in loop => So consider below markup for single item -->
                  <b-col cols="12">
                    <h4>Program</h4>
                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                    <!-- Form Input Fields OR content inside bordered area  -->
                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                    <div class="d-flex border rounded">
                      <b-row class="flex-grow-1 p-2">
                        <!-- Single Item Form Headers -->
                        <!-- <b-col
                          cols="12"
                          lg="5"
                        >
                          <v-select
                            v-model="item.itemTitle"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="itemsOptions"
                            label="itemTitle"
                            :clearable="false"
                            class="mb-2 item-selector-title"
                            placeholder="Select Item"
                            @input="val => updateItemForm(index, val)"
                          />
                        </b-col> -->
                        <b-col
                          cols="12"
                          lg="6"
                        >
                          <b-form-group
                            label="Program Name"
                            label-for="programName"
                          >
                            <b-form-input
                              id="programName"
                              v-model="programName"
                              size="lg"
                              placeholder="Program Name"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Intake"
                            label-for="programIntake"
                          >
                            <b-form-input
                              id="programIntake"
                              v-model="programIntake"
                              size="lg"
                              placeholder="Program Intake"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Start Date"
                            label-for="start-date"
                          >
                            <flat-pickr
                              v-model="startDate"
                              class="form-control"
                              placeholder="Start Date"
                              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                            />
                          </b-form-group>
                          <b-form-group
                            label="End Date"
                            label-for="end-date"
                          >
                            <flat-pickr
                              v-model="endDate"
                              class="form-control"
                              placeholder="End Date"
                              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Department"
                            label-for="programDepartment"
                          >
                            <v-select
                              v-model="item.itemTitle"
                              :options="itemsOptions"
                              label="itemTitle"
                              :clearable="false"
                              class="mb-2 item-selector-title"
                              placeholder="Select Department"
                            />

                          </b-form-group>
                        </b-col>
                        <b-col
                          cols="12"
                          lg="6"
                        >
                          <b-form-group
                            label="Tution Fee"
                            label-for="tutionFee"
                          >
                            <b-form-input
                              id="tutionFee"
                              v-model="tutionFee"
                              size="lg"
                              placeholder="Tution Fee"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Application Fee"
                            label-for="ApplicationFee"
                          >
                            <b-form-input
                              id="applicationFee"
                              v-model="applicationFee"
                              size="lg"
                              placeholder="Application Fee"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Academic Requierments"
                            label-for="academicRequierments"
                          >
                            <b-form-textarea
                              id="academicRequierments"
                              size="lg"
                              placeholder="Academic Requierments"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Summary"
                            label-for="programSummary"
                          >
                            <b-form-textarea
                              id="programSummary"
                              size="lg"
                              placeholder="Program Summary"
                            />
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <!-- Item Remove -->
                      <div class="d-flex flex-column justify-content-between border-left py-50 px-25">
                        <feather-icon
                          size="16"
                          icon="XIcon"
                          class="cursor-pointer"
                          @click="removeItem(index)"
                        />
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                size="sm"
                variant="primary"
                @click="addNewItemInItemForm"
              >
                Add Programs
              </b-button>
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
