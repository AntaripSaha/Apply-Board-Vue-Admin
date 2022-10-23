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
                Department
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
                    label="Department Name"
                    label-for="departmentName"
                  >
                    <b-form-input
                      id="departmentName"
                      v-model="departmentName"
                      size="lg"
                      placeholder="Department Name"
                    />
                  </b-form-group>
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
                  @click="saveDepartment"
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
import Ripple from 'vue-ripple-directive'
import {
  BRow, BCol, BCard, BCardBody, BButton, BForm, BFormGroup, BFormInput, VBToggle,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,

  },
  data() {
    return {
      departmentName: '',
    }
  },
  methods: {
    saveDepartment() {
      console.warn(this.departmentName)
    },
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
