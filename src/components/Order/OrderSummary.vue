<template>
  <div>
    <h2 class="text-center">Order Summary</h2>
    <b-card-text>
      <b-row class="my-4">
        <b-col>
          <strong>Order Name</strong>
          <p>
            {{ selectedOrderDetails.orderName }}
          </p>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col>
          <strong>ID </strong>
          <p ref="orderId">
            {{ selectedOrderDetails.salesforceOrderID }}
          </p>
        </b-col>
        <b-col>
          <strong>PID</strong>
          <p>02055386</p>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col cols="3">
          <strong>Type </strong>
          <p>
            {{ selectedOrderDetails.renewal ? "Renewal" : "New Order" }}
          </p>
        </b-col>
        <b-col>
          <strong> Duration </strong>
          <p>
            {{ new Date(selectedOrderDetails.startDate).toLocaleDateString() }}
            -
            {{ new Date(selectedOrderDetails.endDate).toLocaleDateString() }}
          </p>
        </b-col>
        <b-col cols="3">
          <strong> Seats </strong>
          <p>
            {{ selectedOrderDetails.defaultSeats }}
          </p>
        </b-col></b-row
      ><b-row class="my-4">
        <b-col>
          <strong class="">Products</strong>
          <div v-if="selectedOrderDetails.productsString">
            <Logo
              class="m-1"
              v-for="prod in selectedOrderDetails.productsString.split(', ')"
              :key="prod"
              style="height: 40px"
              version="leaf"
              :product="prod.toLowerCase()"
            ></Logo>
          </div>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col>
          <strong>Sales Rep. </strong>
          <div>
            {{ selectedOrderDetails.orderOwner }}
            <br />
            <p class="d-inline" ref="ownerEmail">
              {{ selectedOrderDetails.orderOwnerEmail }}
            </p>
            <b-button
              variant="white"
              class="p-0 pl-2"
              style="vertical-align: baseline"
              @click="copyToClipboard('ownerEmail')"
              ><b-icon icon="files" font-scale="1"></b-icon
            ></b-button>
          </div>
        </b-col>
      </b-row>

      <b-row class="my-4">
        <b-col>
          <strong>School Contact</strong>
          <div>
            {{ selectedOrderDetails.schoolContactName }}
            <br />
            <p class="d-inline" ref="schoolContactEmail">
              {{ selectedOrderDetails.schoolContactEmail }}
            </p>
            <b-button
              variant="white"
              class="p-0 pl-2"
              style="vertical-align: baseline"
              @click="copyToClipboard('schoolContactEmail')"
              ><b-icon icon="files" font-scale="1"></b-icon
            ></b-button>
          </div>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col>
          <strong>Notes</strong>
          <p>{{ selectedOrderDetails.notes }}</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-button
            variant="outline-info"
            style="vertical-align: baseline"
            @click="
              openInNewTab(
                SALESFORCE_CONTRACT_PREFIX +
                  selectedOrderDetails.salesforceOrderID +
                  '/view'
              )
            "
            >View in Salesforce</b-button
          >
        </b-col>
      </b-row>
    </b-card-text>
  </div>
</template>

<script>
import Logo from "../WrapperComponents/Logo.vue";

export default {
  components: { Logo },
  props: {
    selectedOrderDetails: {
      type: Object,
    },
  },
  data() {
    return {
      SALESFORCE_CONTRACT_PREFIX:
        "https://explorelearning.lightning.force.com/lightning/r/Contract/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>