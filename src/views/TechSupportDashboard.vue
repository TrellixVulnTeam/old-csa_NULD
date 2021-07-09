<template>
  <div>
    <div class="mx-5">
      <b-row>
        <b-col>
            <h1 class="mb-3 text-center">Tech Support Dashboard</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col >

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
        <b-col>
          <CSACard
            class="w-100"
            title="Failed Roster Jobs"

          >
          <template #card-body>
            <div>
              <RosterJobSummary></RosterJobSummary>
            </div>
          </template>
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
import RosterJobSummary from '../components/RosterJobSummary.vue';
export default {
  components: {
    CSACard,
    AuditLog,
    SSOChart,
    RosterJobSummary
  },
};
</script>

<style lang="scss" scoped>
</style>
