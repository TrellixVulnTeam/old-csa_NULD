<template>
  <div>
    <div class="mx-5">
      <b-row>
        <b-col >
          <!-- <CSACard
            class="w-100"
            title="Last Failed SSO Logs"
            :items="[
              {
                TenantID: 37310,
                ProductID: 1,
                SsoType: 'LTI',
                FriendlyMessage:
                  'We were unable to get a valid user id from the request.  Please contact your portal Administrator.',
                Message:
                  'Could not map LtiUserIDField{name=\'lis_person_sourcedid\', custom=false} to ltiResource',
                LogType: 'ERROR',
                CreatedOn: '2021-01-21 11:12:20.8818160',
                LogID: 1048,
              },
            ]"
          >
          </CSACard> -->

          <CSACard class="w-100" title="SSO Summary" bodyVisible>
            <template #card-body>
              <div>
                <SSOChart></SSOChart>
              </div>
            </template>
          </CSACard>
        </b-col>

        <b-col cols="3">
          <CSACard title="User Quick Search" bodyVisible hideCaret>
            <template #card-body>
              <div>
                <b-input-group prepend="Email:" class="mt-3">
                  <b-form-input></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-success">Search</b-button>
                  </b-input-group-append>
                </b-input-group>

                <b-input-group prepend="Username:" class="mt-3">
                  <b-form-input></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-success">Search</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <CSACard
            class="w-100"
            title="Failed Roster Jobs"
            :items="[
              {
                endTime: '2020-11-19T16:07:45.323',
                isEnabled: 'X',
                jobExecutionID: 20281,
                jobType: 'OneRoster',
                mainInstitutionName: 'INDIAN PRAIRIE SCH DIST 204',
                message: 'Fatal error - Please contact technical support.',
                ssoType: 'SAML',
                startTime: '2020-11-19T16:04:00.05',
                stepName: 'processOneRosterClasses',
                tenantID: 9244,
              },
            ]"
          >
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CSACard class="w-100" title="History Log">
            <template #card-body>
              <AuditLog></AuditLog>
            </template>
          </CSACard>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AuditLog from "../components/AuditLog.vue";
import CSACard from "../components/WrapperComponents/CSACard";
import SSOChart from '../components/SSOChart.vue';
export default {
  components: {
    CSACard,
    AuditLog,
    SSOChart
  },
};
</script>

<style lang="scss" scoped>
</style>