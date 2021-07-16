<template>
    <div class="w-100 h-100">
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

        <div class="ml-tab-x mr-4" :class="tabClosed ? 'ml-4' : 'ml-tab-x'">
            <div>
                <div>
                    <h1 class="display-4">Umbrella</h1>
                    <CSACard
                        title=""
                        class="w-100 shadow-none"
                        style="max-height: 85vh; height: 85vh !important"
                        :bodyVisible="true"
                        :hideCaret="true"
                    >
                        <template #card-body>
                            <div>
                                <div>
                                    <h3 class="text-secondary mb-4">
                                        Parent Institution: SAN LUIS COASTAL
                                        UNIF SCH DIST
                                    </h3>
                                    <div class="w-100 h-100 bg-white"></div>

                                    <b-tabs content-class="mt-3" align="center">
                                        <b-tab title="Umbrella Profile" active>
                                            <template #title>
                                                <font-awesome-icon
                                                    class="text-black h3"
                                                    icon="home"
                                                ></font-awesome-icon
                                                ><span class="ml-2"
                                                    >Umbrella Profile</span
                                                >
                                            </template>
                                            <ViewEditTenant
                                                :tenantData="tenantData"
                                            ></ViewEditTenant
                                        ></b-tab>
                                        <b-tab>
                                            <template #title>
                                                <font-awesome-icon
                                                    class="text-green h3"
                                                    icon="school"
                                                ></font-awesome-icon
                                                ><span class="ml-2"
                                                    >Institutions (30)</span
                                                >
                                            </template>
                                            <InstitutionHierarchy></InstitutionHierarchy>
                                            <b-button
                                                class="my-4"
                                                variant="success"
                                                >Create New
                                                Institution</b-button
                                            >
                                        </b-tab>
                                        <b-tab>
                                            <template #title>
                                                <font-awesome-icon
                                                    class="text-orange h3"
                                                    icon="users"
                                                ></font-awesome-icon>
                                                <span class="ml-2"
                                                    >Users (1000)</span
                                                > </template
                                            ><UserList></UserList>
                                            <b-button
                                                class="my-4"
                                                variant="success"
                                                >Create New User</b-button
                                            >
                                        </b-tab>
                                        <b-tab>
                                            <template #title>
                                                <font-awesome-icon
                                                    class="text-purple h3"
                                                    icon="book-reader"
                                                ></font-awesome-icon>
                                                <span class="ml-2"
                                                    >Subscriptions (9)</span
                                                >
                                            </template>
                                            <Subscriptionlist></Subscriptionlist>
                                            <b-button
                                                class="my-4"
                                                variant="success"
                                                >Create New
                                                Subscription</b-button
                                            >
                                        </b-tab>
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
                        </template>
                    </CSACard>
                </div>
                <!-- <b-col cols="3">
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
                                        <b-button variant="outline-success"
                                            >Create User</b-button
                                        >
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
                                            >Merge into existing
                                            Umbrella</b-button
                                        >
                                    </b-col>
                                </b-row>
                            </b-container>
                        </template>
                    </CSACard>
                </b-col> -->
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
    import UserList from "../components/UserList.vue";
    import Subscriptionlist from "../components/Subscriptionlist.vue";
    export default {
        components: {
            ViewEditTenant,
            CSACard,
            SideTab,
            InstitutionHierarchy,
            UserList,
            Subscriptionlist,
        },
        data() {
            return {
                tabClosed: false,
                tenantData: {
                    Tenant: {
                        tenantID: 1239149,
                        mainInstitutionID: 2498,
                        institutionTypeID: 2,
                        parentInstitutionID: 0,
                        parentInstitutionName: null,
                        mainInstitutionName: "SAN LUIS COASTAL UNIF SCH DIST",
                        mainSalesforceAccountID: null,
                        stateCode: "CA",
                        countryCode: "USA",
                        postalCode: "93401",
                        city: "SN LUIS OBISP",
                        isCustom: false,
                        isSSOLTIEnabled: false,
                        isSSOSamlEnabled: false,
                        isRosterEnabled: true,
                        timeOffset: -480,
                        timezoneID: null,
                        changeLocked: false,
                        classesCap: 0,
                        studentCap: 0,
                        subCount: 0,
                        pid: "121070",
                        salesforceAccountID: "H4325KJ425S6432K",
                        defaultSeatCap: 500,
                    },
                }.Tenant,
            };
        },
        methods: {
            recieved(e) {
                console.log("received");
                console.log(e);
                this.tabClosed = !this.tabClosed;
            },
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
    .h-vh {
        height: 100vh;
    }
</style>
