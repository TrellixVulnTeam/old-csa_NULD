<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-form-group
            label="Name:"
            label-cols="auto"
            label-for="name-input"
            description=""
          >
            <b-form-input
              id="name-input"
              v-model="subscriptionData.subscriptionName"
              type="text"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            />
          </b-form-group>
        </b-col>

        <b-col v-if="false">
          <b-button variant="outline-dark" class="">View Pending Subscription <b-icon icon="box-arrow-up-right" class="ml-2"></b-icon> </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="false">
          <b-form-group
            label="Product:"
            label-cols="auto"
            label-for="product-select"
            description=""
              v-if="editMode"
          >
            <b-form-select
              id="product-select"
              v-model="subscriptionData.productID"
              :options="products"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            >
            </b-form-select>
          </b-form-group>
          <Logo v-else-if="subscriptionData.productID < 100" style="height:40px" class="float-left" version="full" :productId="Number(subscriptionData.productID)" :product="products[subscriptionData.productID].toLowerCase()"></Logo>
          
          <b-form-group
            v-else
            label="Product:"
            label-cols="auto"
            label-for="product-select"
            description=""
          ><p   style="height:40px" class="float-left  form-control-plaintext text-left" >{{products[subscriptionData.productID]}}</p>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Licensing Type:"
            label-cols="auto"
            label-for="licensing-select"
            description=""
          >
            <b-form-select
              v-if="editMode"
              id="licensing-select"
              v-model="subscriptionData.licensingTypeID"
              :options="licensingTypes"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            ></b-form-select>
            <p v-else class="float-left form-control-plaintext text-left">
              {{ licensingTypes.find(x => x.value = subscriptionData.licensingTypeID).text }}

            </p>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="!isCreate">
        <b-col>
          <b-form-group
            label="Created On:"
            label-for="createdOn-input"
            label-cols="auto"
          >
            <b-form-input
              id="createdOn-input"
              :value="
                subscriptionData.createdOn
                  ? new Date(subscriptionData.createdOn).toLocaleString()
                  : 'Never'
              "
              type="text"
              placeholder=""
              plaintext
              readonly
            />
          </b-form-group>
        </b-col>

        <b-col >
          <b-form-group
            label="Misc Source:"
            label-cols="auto"
            label-for="misc-select"
            description=""
          >
            <b-form-select
              v-if="editMode"
              id="misc-select"
              v-model="subscriptionData.sourceID"
              :options="miscSourceOptions"
              :plaintext="!editMode"
              :readonly="!editMode"
              :disabled="!isCreate"
              placeholder=""
            ></b-form-select>
            <p v-else class="float-left form-control-plaintext text-left">
              {{ miscSourceOptions[subscriptionData.sourceID].text }}
            </p>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Starts:"
            label-cols="auto"
            label-for="starts-on-input"
            description=""
          >
            <b-form-input
              id="starts-on-input"
              :value="
                subscriptionData.startsOn &&
                new Date(subscriptionData.startsOn).toISOString().split('T')[0]
              "
              @input="
                subscriptionData.startsOn = new Date($event.target).valueAsDate
              "
              type="date"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            />
          </b-form-group>

          <b-form-checkbox
            v-model="subscriptionData.enforceStartDate"
            switch
            class="float-left ml-5"
            size="md"
            >Enforce Start date</b-form-checkbox
          >
        </b-col>
        <b-col>
          <b-form-group
            label="Expires:"
            label-cols="auto"
            label-for="expireson-input"
            description=""
          >
          <b-input-group>

            <b-form-input
              id="expireson-input"
              :value="
                subscriptionData.expiresOn &&
                new Date('01/01/2020').toISOString().split('T')[0]
              "
              @input="
                subscriptionData.expiresOn = new Date($event.target).valueAsDate
              "
              type="date"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            >
            </b-form-input>
            <b-input-group-append >
            <b-button v-if="new Date('01/01/2020') < new Date()" variant="white" v-b-tooltip.hover title="Expired!">
            <b-icon variant="danger" icon="exclamation-circle" ></b-icon>
            </b-button>
            </b-input-group-append>
          </b-input-group>
          </b-form-group>

          <b-form-group
            label="Grace Period"
            label-cols="auto"
            label-for="grace-period-select"
            description=""
          >
            <b-form-select
              v-if="editMode"
              style="width:fit-content" class="float-left"
              id="grace-period-select"
              v-model="subscriptionData.gracePeriod"
              :options="gracePeriodOptions"
              :plaintext="!editMode"
              :readonly="!editMode"
              placeholder=""
            ></b-form-select>
            <p v-else class="float-left form-control-plaintext text-left">
              {{ gracePeriodOptions[subscriptionData.gracePeriod] }}
            </p>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
          <b-col>

          <b-form-group
            label="Notes:"
            label-cols="auto"
            label-for="notes-input"
            description=""
          >
            <b-form-textarea
            id="notes-input"
            v-model="subscriptionData.notes"
            placeholder="Enter notes here..."
            rows="3"
            :plaintext="!editMode"
            :readonly="!editMode"
            ></b-form-textarea>
          </b-form-group>
          </b-col>

      </b-row>

      <b-row v-if="!isCreate">
        <b-col class="border rounded-pill p-3 mt-2">
          <p class=" " style="width: max-content">
            <span class="ml-2" for="">Enabled: </span>
            <b-icon
              v-if="subscriptionData.ltiUserID"
              variant="success"
              icon="check-circle"
            ></b-icon>
            <b-icon v-else variant="danger" icon="x-circle"></b-icon>
            LTI

            <b-icon
              v-if="subscriptionData.samlUserID"
              variant="success"
              icon="check-circle"
            ></b-icon>
            <b-icon v-else variant="danger" icon="x-circle"></b-icon>
            SAML
            <b-icon
              v-if="subscriptionData.cleverID"
              variant="success"
              icon="check-circle"
            ></b-icon>
            <b-icon v-else variant="danger" icon="x-circle"></b-icon>
            Clever
            <b-icon
              v-if="subscriptionData.isRosterEnabled"
              variant="success"
              icon="check-circle"
            ></b-icon>
            <b-icon v-else variant="danger" icon="x-circle"></b-icon> Roster
          </p>
          <b-col class="m-0 p-0">
            <!-- <b-form-group
                            class="m-0"
                              label="Enabled: "
                              label-cols="auto"
                              v-slot="{ ariaDescribedby }"
                            >
                              <b-form-checkbox-group
                                :value="[userData.isRosterEnabled, userData.cleverID, userData.samlUserID, userData.isRosterEnabled, userData.ltiUserID]"
                                :options="[{text: 'LTI', value: 'isRosterEnabled'}, {text: 'SAML', value:'samlUserID'}, {text: 'Clever', value:'cleverID'}, {text: 'Roster', value:'isRosterEnabled'}]"
                                :aria-describedby="ariaDescribedby"
                                switches
                                disabled
                              ></b-form-checkbox-group>
                            </b-form-group> -->
          </b-col>
        </b-col>
      </b-row>

        <b-row class="mt-2" v-if="!isCreate">
            <b-col>
                <b-alert :show="!subscriptionData.isActive" variant="danger">
            Status: INACTIVE
            <b-button variant="outline-dark" @click="subscriptionData.isActive = !subscriptionData.isActive">Activate Subscription</b-button>
            </b-alert>
                <b-alert :show="subscriptionData.isActive" variant="white">
            Status: Active
            <b-button variant="outline-danger" @click="subscriptionData.isActive = !subscriptionData.isActive">Deactivate Subscription</b-button>
            </b-alert>

            </b-col>
        </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-button v-if="!hideEditButton" :variant="isCreate ? 'success' : 'primary'" @click="editButtonClicked" class="float-right">
            {{ saveButtonTitle }}
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import csaTypes from "../misc/csaTypes";
import Logo from './WrapperComponents/Logo.vue';
export default {
  components: { Logo },
  props: {
    subscriptionData: {
      type: Object,
      default: null,
    },
    hideEditButton: {
      type: Boolean
    }
  },
  data() {
    return {
      editMode: true,
      licensingTypes: Object.entries(csaTypes.licensingTypeOptions).map((x) => {
        return { text: x[1], value: x[0] };
      }),
      products: csaTypes.products,
      gracePeriodOptions: csaTypes.gracePeriodOptions,
      miscSourceOptions: Object.entries(csaTypes.subSourceOptions).map((x) => {
        return { text: x[0], value: x[1] };
      }),
    };
  },
  computed: {
    isCreate() {
      return !this.subscriptionData.subscriptionID;
    },

    saveButtonTitle() {
      if (this.isCreate) return "Create Subscription";
      return this.editMode ? "Save Subscription" : "Edit Subscription"
    },
  },
  methods: {
    editButtonClicked() {
      if (!this.editMode) {
        this.editMode = !this.editMode;
        return;
      }

      this.editMode = !this.editMode;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>