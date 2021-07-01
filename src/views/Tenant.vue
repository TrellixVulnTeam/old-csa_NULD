<template>
  <div>
    <SideTab 
      @on-collapse="recieved"
      :umbrellaId="10142"
      :institutionList="[]"
      :subscriptionList="[]"
      isTenant
    ></SideTab>

    <!-- <b-button v-b-toggle.sidebar-1 class="float-left ml-2"  variant="outline-dark"><b-icon icon="chevron-right" class=""></b-icon></b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" body-class="barpadding" style="margin-top:100px !important; " no-header >
      <div class="px-3 py-2">
        <h2 class="">Quick Actions 
          
    <b-button v-b-toggle.sidebar-1 class="float-right ml-2" variant="outline-dark">
      <b-icon icon="chevron-left" class=""></b-icon></b-button>
        </h2>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar> -->

    <div class=" ml-tab-x mr-4" :class="tabClosed ? 'ml-4' : 'ml-tab-x' ">
      <div>
        <div>
          <div
            :title="'Umbrella '+ tenantData.tenantID"
            class="w-100 shadow-none"
            bodyVisible
            hideCaret
          >
          <h1 class="display-4 mb-4">Umbrella {{tenantData.tenantID}}</h1>
            <div>
              

            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Umbrella Settings"><ViewEditTenant :tenantData="tenantData"></ViewEditTenant></b-tab>
              <b-tab title="Institutions Hierarchy (30)" active>                  <InstitutionHierarchy></InstitutionHierarchy></b-tab>
              <b-tab title="Users (1000)"><UserList></UserList></b-tab>
              <b-tab title="Subscriptions (9)"><Subscriptionlist></Subscriptionlist></b-tab>
            </b-tabs>
              <!-- <CSACard class="mt-5" title="Institution Hierarchy" bodyVisible hideCaret>
                <template #card-title>
                  <div>
                    <b-breadcrumb class="text-align-center" style="background-color:white;justify-content:center;" :items="[{text:'Institution Hierarchy', active:true}, 'Users', 'Subscriptions']"></b-breadcrumb>

                  </div>
                </template>
                <template #card-body>
                  <InstitutionHierarchy></InstitutionHierarchy>
                </template>
              </CSACard> -->
            </div>
          </div>
        </div>
        <b-col cols="3">
          <CSACard
            title="Quick Access Actions"
            bodyVisible
            hideCaret
            v-if="false"
          >
            <template #card-body>
              <b-container>
                <b-row align-v="center">
                  <b-col>
                    <b-button variant="outline-success"
                      >Create Parent Institution</b-button
                    >
                  </b-col>
                </b-row>
                <b-row class="my-3">
                  <b-col>
                    <b-button variant="outline-success">Create User</b-button>
                  </b-col>
                </b-row>
                <b-row class="my-3">
                  <b-col>
                    <b-button variant="outline-success"
                      >Create Subscription</b-button
                    >
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-button variant="outline-danger"
                      >Merge into existing Umbrella</b-button
                    >
                  </b-col>
                </b-row>
              </b-container>
            </template>
          </CSACard>
        </b-col>
      </div>
      <!-- <b-row >
        <b-col>
          <CSACard title="Users" class="w-100">
            <template #card-body></template>
          </CSACard>
        </b-col>
        <b-col>
          <CSACard title="Subscriptions" class="w-100">
            <template #card-body></template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row v-if="false">
        <b-col>
          <CSACard title="Institution Hierarchy" bodyVisible hideCaret>
            <template #card-body>
              <InstitutionHierarchy></InstitutionHierarchy>
            </template>
          </CSACard>
        </b-col>
      </b-row> -->
    </div>
  </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
import SideTab from "../components/SideTab.vue";
import ViewEditTenant from "../components/ViewEditTenant.vue";
import InstitutionHierarchy from "./institutionHierarchy/institutionHierarchy.vue";
import UserList from '../components/UserList.vue';
import Subscriptionlist from '../components/Subscriptionlist.vue';
export default {
  components: { ViewEditTenant, CSACard, SideTab, InstitutionHierarchy, UserList, Subscriptionlist },
  data() {
    return {
      tabClosed: false,
      tenantData: {
        Tenant: {
          tenantID: 1239149,
          mainInstitutionID: 2498,
          mainInstitutionName: "SAN LUIS COASTAL UNIF SCH DIST",
          mainSalesforceAccountID: null,
          isCustom: false,
          isSSOLTIEnabled: false,
          isSSOSamlEnabled: false,
          isRosterEnabled: true,
          timeOffset: -480,
          timezoneID: null,
          changeLocked: false,
          classesCap: 0,
          studentCap: 0,
        },
      }.Tenant,
    };
  },
  methods: {
    recieved(e) {
      console.log('received');
      console.log(e);
      this.tabClosed=!this.tabClosed;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.ml-tab {
  margin-left: $navBarWidth;
  // margin-left: 370px;
}
.ml-tab-x {
  margin-left: $navBarWidth + 20px;
}
.barpadding {
  margin-top: 100px !important;
}
div#sidebar-1 {
    margin-top: 85px !important;
}
</style>