<template>
  <div>
    <b-breadcrumb
      class="text-center justify-content-center mx-1 mt-3"
      style="background-color: transparent; font-weight: bold"
      :items="[
        { text: 'Frax Order', active: true },
        'Reflex Order',
        'Gizmos Order',
        { text: 'Send Email(s)' },
      ]"
    ></b-breadcrumb>
    <b-container >
      <b-row>
        <b-col>
          <CSACard title="Create Frax Subscription" bodyVisible hideCaret class="w-100">
            <template #card-body>
              <div>
                <ul class="d-inline-block">
                  <li>Order item 1044193931 MIAMI MIDDLE</li>
                  <li>Order item 13940913  MIAMI DOLPHINS</li>
                  <li>Order item 12390140  MIAMI MATH CLUB</li>
                </ul>
                <view-edit-subscription :subscriptionData="{isActive:true}"></view-edit-subscription>
              </div>
            </template>
          </CSACard>
        </b-col>
        <b-col cols="3">
          <CSACard title="Other Subscriptions in Umbrella" class="w-100" >
            <template #card-body>
              <b-table >

              </b-table>
            </template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CSACard title="Institutions" class="w-100">
            <template #card-body>
              <p>hi</p>
            </template>
          </CSACard>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="false">
      <b-row>
        <b-col> </b-col>
      </b-row>

      <b-row>
        <b-col>
          <CSACard title="Order Item 1 - Reflex" bodyVisible :hideCaret="true">
            <template #card-body>
              <!-- <b-table variant="dark" striped
          :items="[
            { orderItem: 1, product: 'Reflex', _showDetails: true },
            { orderItem: 2, product: 'Frax' },
          ]"
        >
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card class="">
              <p style="width:700px;height:300px;">Subscription Draft info {{ row.id }}</p>
            </b-card>
          </template>
        </b-table> -->
              <!-- <p style="width:700px;height:300px;">Subscription Draft info

              </p> -->
              <CSAEmail style="width: 500px"></CSAEmail>
              <!-- <CSACard style="width:100%" class="" title="Subscription Draft info" :hideCaret="true" :bodyVisible="true">
                <template #card-body>
                  <p style="width:700px;height:300px;"></p>
                </template>
              </CSACard> -->
              <!-- <b-button class="float-right mt-5" variant="outline-dark">Next Order item</b-button> -->
            </template>
          </CSACard>
        </b-col>
        <b-col>
          <CSACard title="Order Summary" bodyVisible :hideCaret="true">
            <template #card-body>
              <div class="mx-5">
                <ul>
                  <li>Reflex Subscription</li>
                  <li>Frax Subscription</li>
                  <li>Gizmos Subscription</li>
                </ul>
              </div>
            </template>
          </CSACard>
          <!-- <CSACard style="width:100%" class="" title="Institutions">
              </CSACard>
              <CSACard style="width:100%" class="" title="Other Subscriptions in Umbrella">
              </CSACard> -->
          <CSACard title="Contact book">
            <template #card-body>
              <div>
                <b-input-group prepend="Filter:" class="mt-3">
                  <b-form-input></b-form-input>
                  <b-input-group-append>
                    <b-dropdown text="Type" variant="outline-dark">
                      <b-dropdown-item>SalesForce Contacts (1)</b-dropdown-item>
                      <b-dropdown-item>Account Contacts (3)</b-dropdown-item>
                      <b-dropdown-item>PD Contacts (66)</b-dropdown-item>
                      <b-dropdown-item>Sales Contacts (136)</b-dropdown-item>
                      <b-dropdown-item>Support Contacts (72)</b-dropdown-item>
                      <b-dropdown-item
                        >Global Address Book (52)</b-dropdown-item
                      >
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
                <b-list-group>
                  <b-list-group-item
                    href="#"
                    v-for="item in [
                      'Kristin Wells superwoman@comics.com Superwoman',
                      'Diana Prince wonderwoman@comics.com Wonderwoman',
                    ]"
                    :key="item"
                    >{{ item }}</b-list-group-item
                  >
                </b-list-group>
              </div>
            </template>
          </CSACard>
        </b-col>
      </b-row>

      <!-- <b-row>
  <b-col>
    <CSACard title="Institions/SendEmail/OtherSubscriptions/Etc"></CSACard>
  </b-col>
</b-row> -->

      <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
      <b-modal id="modal-1" title="Special actions?" >
        <!-- <b-modal id="modal-1" title="Select Umbrella for 'Miami Dolphins'"> -->
        <!-- <b-table :items="[{id:100, name:'Miami Central', PIDs:[123, 124] }, {id:101, name:'Miami High', PIDs:[123, 124] }]">
    </b-table>
    <hr class="mt-3">
    <p class="text-secondary d-inline">Can't find it? </p>
    <b-button variant="outline-success">Create new Umbrella</b-button> -->
        <b-button variant="outline-dark" class="mx-2"
          >Merge in an existing Umbrella</b-button
        >
        <b-button variant="outline-dark">Split into a new Umbrella</b-button>
        <template #modal-footer>
          <div>
            <b-button variant="outline-success">skip</b-button>
          </div>
        </template>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
import CSAEmail from "../components/CSAEmail.vue";
import ViewEditSubscription from '../components/ViewEditSubscription.vue';
export default {
  components: { CSACard, CSAEmail, ViewEditSubscription,  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-item.active {
  color: white;
}
</style>