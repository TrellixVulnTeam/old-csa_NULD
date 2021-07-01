<template>
  <div>
    <SideTab
      :umbrellaId="10142"
      :institutionList="[]"
      :subscriptionList="[]"
    ></SideTab>
    <b-container class="ml-tab">
      <b-row>
        <b-col>
          <CSACard title="Institution" class="w-100" bodyVisible hideCaret>
            <template #card-body>
              <ViewEditInstitution
                :institutionData="institutionData"
              ></ViewEditInstitution>
            </template>
          </CSACard>
        </b-col>
        <b-col cols="3">
          <CSACard title="Create" bodyVisible hideCaret>
            <template #card-body>
              <b-container>
                <b-row align-v="center">
                  <b-col>
                    <b-button variant="outline-success"
                      >Create SubInstitution</b-button
                    >
                  </b-col>
                </b-row>
                <b-row class="my-3">
                  <b-col>
                    <b-button variant="outline-success">Create Subscription</b-button>
                  </b-col>
                </b-row>
                <b-row class="my-3">
                  <b-col>
                    <b-button variant="outline-success">Create User</b-button>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-button variant="outline-success"
                      >Convert to new Umbrella</b-button
                    >
                  </b-col>
                </b-row>
              </b-container>
            </template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CSACard title="Subscriptions" class="w-100"> </CSACard>
        </b-col>
        <b-col>
          <CSACard title="Users" class="w-100"> </CSACard>
        </b-col>
      </b-row>
      <b-row>
          <CSACard title="History Log" class="w-100">
              <template #card-body>
                  <AuditLog></AuditLog>
              </template>
          </CSACard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AuditLog from '../components/AuditLog.vue';
import CSACard from "../components/WrapperComponents/CSACard.vue";
import SideTab from "../components/SideTab.vue";
import ViewEditInstitution from "../components/ViewEditInstitution.vue";
export default {
  components: {
    SideTab,
    CSACard,
    ViewEditInstitution,
    AuditLog,
  },
  data() {
    return {
      institutionData: {
        Institution: {
          modifiedByID: 0,
          modifiedOn: "2017-01-03T22:00:24.920Z",
          createdByID: 0,
          createdOn: "2010-01-27T17:12:00Z",
          tenantID: 2029,
          institutionID: 68294,
          institutionTypeID: 4,
          metaName: "BAYWOOD ELEMENTARY SCHOOL",
          parentInstitutionID: 2498,
          parentInstitutionName: "SAN LUIS COASTAL UNIF SCH DIST",
          institutionName: "BAYWOOD ELEMENTARY SCHOOL",
          isActive: true,
          isCustom: false,
          stateCode: "CA",
          countryCode: "USA",
          postalCode: "93402",
          city: "LOS OSOS",
          enrollment: 344,
          startOfSchoolDay: 22,
          startOfSchoolMonth: 8,
          defaultLanguageID: 0,
          allowRolesToEnrollStudents: false,
          salesforceAccountID: null,
          externalSchoolID: null,
          changeLocked: false,
          pid: "1524047",
        },
      }.Institution,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../app.scss";

.ml-tab {
  margin-left: $navBarWidth;
}
.ml-tab-x {
  margin-left: $navBarWidth + 20px;
}
</style>