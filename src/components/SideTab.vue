<template>
  <div>
    <div class="sidebar shadow pt-2 ">
      <b-collapse v-model="tabExpanded">
        <div v-if="!isTenant">
        <b-button variant="white" class="m-2"
          >Umbrella: 1239149 <b-icon icon="arrow-right-circle"></b-icon>
        </b-button>
        <b-button variant="white" class="m-2"
          >Parent Institution: SAN LUIS COASTAL UNIF SCH DIST
          <b-icon icon="arrow-right-circle"></b-icon>
        </b-button>
      </div>
      <!-- <b-button variant="white" class="m-2"
        >Institution: Orange County HighSchool
        <b-icon icon="arrow-right-circle"></b-icon>
      </b-button> -->
      <div v-if="isTenant">
        <!-- <h4>Quick Actions</h4> -->

        <b-row align-v="center"> 
          <b-col>

          <h4>Potential Orders</h4>
          <!-- <div class="d-block"><p class="text-secondary">none</p></div> -->
        <b-col><b-button pill class="m-2" variant="-dark">MIAMI DOLPHINS (RENEWAL) 012491409124 <b-icon icon="arrow-right-circle"></b-icon></b-button></b-col>
        <b-col><b-button pill class="m-2" variant="-dark">MIAMI HIGH 012491409124 <b-icon icon="arrow-right-circle"></b-icon></b-button></b-col>
          </b-col>
        </b-row>
<hr>
        <b-row>
          <b-col>
            <b-button variant="outline-danger" class="mx-3" pill
              >Merge in Users from External Umbrella</b-button
            >
          </b-col>
        </b-row>
      </div>
      <div v-if="subscriptionList.length > 0">
        <hr />
        <h4>Subscriptions:</h4>
        <b-button
          v-b-tooltip.hover
          title="Active"
          v-for="sub in subscriptionList"
          :key="sub.id"
          variant="white"
          class="m-2"
        >
          <b-icon icon="check-circle-fill" variant="success"></b-icon>
          (<strong>{{ products[sub.productID] }}</strong
          >) {{ sub.name }} <b-icon icon="arrow-right-circle"></b-icon>
        </b-button>
        <b-button
          v-b-tooltip.hover
          title="Expired!"
          variant="white"
          class="m-2"
        >
          <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
          (<strong>Frax</strong>) Subscription
          <b-icon icon="arrow-right-circle"></b-icon>
        </b-button>

        <div>
          <hr class="w-50" />
          <a href="#"
            >Other Subs. in Umbrella <b-icon icon="chevron-down"></b-icon>
          </a>

          <b-button
            v-b-tooltip.hover
            title="Expired!"
            variant="white"
            class="m-2"
          >
            <b-icon icon="check-circle" variant="success"></b-icon>
            (<strong>Frax</strong>) William Mary's
            <b-icon icon="plus-circle"></b-icon>
          </b-button>

          <b-button
            v-b-tooltip.hover
            title="Expired!"
            variant="white"
            class="m-2"
          >
            <b-icon icon="exclamation-circle" variant="danger"></b-icon>
            (<strong>Frax</strong>) Dolphins <strong>(full)</strong>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Expired!"
            variant="white"
            class="m-2"
          >
            <b-icon icon="check-circle" variant="success"></b-icon>
            (<strong>Frax</strong>) MIAMI MIDDLE <strong>(full)</strong>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Expired!"
            variant="white"
            class="m-2"
          >
            <b-icon icon="check-circle" variant="success"></b-icon>
            (<strong>Frax</strong>) MIAMI ELEM.
            <b-icon icon="plus-circle"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Expired!"
            variant="white"
            class="m-2"
          >
            <b-icon icon="check-circle" variant="success"></b-icon>
            (<strong>Frax</strong>) Math Club
            <b-icon icon="plus-circle"></b-icon>
          </b-button>
          <b-button
            variant="outline-success"
            class="m-2"
            v-b-modal.create-subscription-modal
            >Create<b-icon icon="plus"></b-icon>
          </b-button>
        </div>
      </div>
      <hr />
      <h4>SSO/Rostering</h4>
      <b-button variant="outline-dark" pill class="m-2">
        {{ hasRostering ? "Manage" : "Add" }} Rostering
        <b-icon icon="gear"></b-icon>
      </b-button>
      <b-button variant="outline-dark" pill class="m-2">
        {{ hasSSO ? "Manage" : "Add" }} SSO
        <b-icon font-scale="1.5" icon="link-45deg"></b-icon>
      </b-button>
      </b-collapse>

      <div>
        <b-button variant="none" class="mb-0 pb-0"  @click="toggleExpand">
        <b-icon :icon="tabExpanded ? 'chevron-up' : 'chevron-down'" font-scale="2"  class="m-0 p-0"></b-icon>

        </b-button>
      </div>
    </div>

    <b-modal id="create-subscription-modal" title="Add/Create Subscription">
      <strong>Existing subscriptions in Umbrella:</strong>
      <b-table
        :items="subscriptionsInTenant"
        :fields="['id', 'name', 'product', 'active', 'seatsLeft', 'add']"
      >
        <template #cell(active)="row">
          <div>
            <b-icon
              v-if="row.active"
              icon="x-circle"
              font-scale="1.5"
              variant="danger"
            ></b-icon>
            <b-icon
              v-else
              icon="check"
              font-scale="1.5"
              variant="success"
            ></b-icon>
          </div>
        </template>

        <template #cell(add)="row">
          <div>
            <b-button variant="outline-success" pill
              ><b-icon icon="plus" font-scale="1.5"></b-icon>
              {{ row.name }}</b-button
            >
          </div>
        </template>
      </b-table>
      <p class="text-secondary">
        Subscription doesn't already exist?
        <b-button variant="success">Create new Subscription</b-button>
      </p>
      <template #modal-footer>
        <div>
          <b-button variant="outline-secondary">Cancel</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import csaTypes from "../misc/csaTypes.js";
export default {
  props: {
    umbrellaId: {
      type: Number,
    },
    institutionList: {
      type: Array,
      default: null,
    },
    subscriptionList: {
      type: Array,
      default: null,
    },
    hasRostering: {
      type: Boolean,
      default: false,
    },
    hasSSO: {
      type: Boolean,
      default: false,
    },
    subscriptionsInTenant: {
      type: Array,
      default: null,
    },
    isTenant: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      products: csaTypes.products,
      tabExpanded: true,
    };
  },
  methods: {
    toggleExpand() {
      this.tabExpanded = !this.tabExpanded;
      console.log("EMEIT");
      this.$emit('on-collapse', this.tabExpanded);
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  border-radius: 0 0 30px 0;
  top: 85px;
  z-index: 0;
  // height: 700px;
  height: fit-content;
  width: 20%;
  max-width: 250px;
  background-color: white;
  position: absolute;
  padding-bottom: 20px;
}
</style>