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
                      size="lg"
                      placeholder="Founded Years"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Institution Type"
                    label-for="largeInput"
                  >
                    <b-form-input
                      id="InstitutionType"
                      size="lg"
                      placeholder="Institution Type"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  cols="12"
                  xl="6"
                  class="mb-lg-1"
                >
                  <b-form-group
                    label="Avg. Application Fees"
                    label-for="avgApplicationFee"
                  >
                    <b-form-input
                      id="avgApplicationFee"
                      size="lg"
                      placeholder="Application Fees"
                    />
                  </b-form-group>
                  <quill-editor-snow />
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
                              size="lg"
                              placeholder="Program Name"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Level"
                            label-for="programLevel"
                          >
                            <b-form-input
                              id="programLevel"
                              size="lg"
                              placeholder="Program Level"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Intake"
                            label-for="programIntake"
                          >
                            <b-form-input
                              id="programIntake"
                              size="lg"
                              placeholder="Program Intake"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Program Department"
                            label-for="programDepartment"
                          >
                            <b-form-input
                              id="programDepartment"
                              size="lg"
                              placeholder="Program Department"
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
                            class=""
                          >
                            <b-form-input
                              id="tutionFee"
                              size="lg"
                              placeholder="Tution Fee"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Application Fee"
                            label-for="ApplicationFee"
                          >
                            <b-form-input
                              id="ApplicationFee"
                              size="lg"
                              placeholder="Application Fee"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Tution Fee"
                            label-for="tutionFee"
                          >
                            <b-form-input
                              id="tutionFee"
                              size="lg"
                              placeholder="Tution Fee"
                            />
                          </b-form-group>
                          <label class="d-inline d-lg-none">Summary</label>
                          <b-form-textarea
                            v-model="item.description"
                            placeholder="Program Summary"
                            class="mt-2 mb-lg-0"
                          />
                        </b-col>
                      </b-row>
                      <div class="d-flex flex-column justify-content-between border-left py-50 px-25">
                        <feather-icon
                          size="16"
                          icon="XIcon"
                          class="cursor-pointer"
                          @click="removeItem(index)"
                        />
                        <feather-icon
                          :id="`form-item-settings-icon-${index}`"
                          size="16"
                          icon="SettingsIcon"
                          class="cursor-pointer"
                        />

                        <!-- Setting Item Form -->
                        <b-popover
                          :ref="`form-item-settings-popover-${index}`"
                          :target="`form-item-settings-icon-${index}`"
                          triggers="click"
                          placement="lefttop"
                        >
                          <b-form @submit.prevent>
                            <b-row>

                              <!-- Field: Discount -->
                              <b-col cols="12">
                                <b-form-group
                                  label="Discount(%)"
                                  :label-for="`setting-item-${index}-discount`"
                                >
                                  <b-form-input
                                    :id="`setting-item-${index}-discount`"
                                    :value="null"
                                    type="number"
                                  />
                                </b-form-group>
                              </b-col>

                              <!-- Field: Tax 1 -->
                              <b-col cols="6">
                                <b-form-group
                                  label="Tax 1"
                                  :label-for="`setting-item-${index}-tax-1`"
                                >
                                  <v-select
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :value="'10%'"
                                    :options="['0%', '1%', '10%', '14%', '18%']"
                                    :input-id="`setting-item-${index}-tax-1`"
                                    :clearable="false"
                                  />
                                </b-form-group>
                              </b-col>

                              <!-- Field: Tax 2 -->
                              <b-col cols="6">
                                <b-form-group
                                  label="Tax 2"
                                  :label-for="`setting-item-${index}-tax-2`"
                                >
                                  <v-select
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :value="'10%'"
                                    :options="['0%', '1%', '10%', '14%', '18%']"
                                    :input-id="`setting-item-${index}-tax-2`"
                                    :clearable="false"
                                  />
                                </b-form-group>
                              </b-col>

                              <b-col
                                cols="12"
                                class="d-flex justify-content-between mt-1"
                              >
                                <b-button
                                  variant="outline-primary"
                                  @click="() => {$refs[`form-item-settings-popover-${index}`][0].$emit('close')}"
                                >
                                  Apply
                                </b-button>
                                <b-button
                                  variant="outline-secondary"
                                  @click="() => {$refs[`form-item-settings-popover-${index}`][0].$emit('close')}"
                                >
                                  Cancel
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-form>
                        </b-popover>
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
            </b-card-body>

            <!-- Spacer -->
            <hr class="invoice-spacing">

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
  BRow, BCol, BCard, BCardBody, BButton, BCardText, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormCheckbox, BPopover, VBToggle,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import QuillEditorSnow from '../../../forms/form-element/quill-editor/QuillEditorSnow.vue'
import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarAddNewCustomer from '../InvoiceSidebarAddNewCustomer.vue'

export default {
  components: {
    QuillEditorSnow,
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
        itemTitle: 'App Design',
        cost: 24,
        qty: 1,
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'App Customization',
        cost: 26,
        qty: 1,
        description: 'Customization & Bug Fixes.',
      },
      {
        itemTitle: 'ABC Template',
        cost: 28,
        qty: 1,
        description: 'Bootstrap 4 admin template.',
      },
      {
        itemTitle: 'App Development',
        cost: 32,
        qty: 1,
        description: 'Native App Development.',
      },
    ]

    const updateItemForm = (index, val) => {
      const { cost, qty, description } = val
      invoiceData.value.items[index].cost = cost
      invoiceData.value.items[index].qty = qty
      invoiceData.value.items[index].description = description
    }

    const paymentMethods = [
      'Bank Account',
      'PayPal',
      'UPI Transfer',
    ]

    return {
      invoiceData,
      clients,
      itemsOptions,
      updateItemForm,
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
