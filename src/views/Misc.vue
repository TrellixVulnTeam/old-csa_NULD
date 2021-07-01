<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <CSACard title="Decode Regcode" hideCaret bodyVisible class="w-100">
            <template #card-body>
              <b-input-group prepend="Regcode" class="mt-3">
                <b-form-input type="text"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-primary">Decode RegCode</b-button>
                </b-input-group-append>
              </b-input-group>
            </template>
          </CSACard>
        </b-col>
        <b-col>
          <CSACard title="Search RegCode" hideCaret bodyVisible class="w-100">
            <template #card-body>
              <b-input-group prepend="Email" class="mt-3">
                <b-form-input type="email"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-primary">Find RegCode</b-button>
                </b-input-group-append>
              </b-input-group>
            </template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CSACard title="Grant Period Status" class="w-100">
            <template #card-body>
              <div>
                <grant-period-status-view></grant-period-status-view>
              </div>
            </template>
          </CSACard>
        </b-col>
        <b-col cols="3">
          <CSACard title="Marketing Data" hideCaret bodyVisible>
            <template #card-body>
              <div>
                <b-button variant="outline-dark"
                  >Export Marketing User Emails</b-button
                >
                <div>
                  <b-button variant="outline-dark" class="mt-2"
                    >Export Marketing User Usage</b-button
                  >
                </div>
              </div>
            </template>
          </CSACard>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CSACard title="Promo Code" class="w-100">
            <template #card-body>
              <div>
                <promoCode></promoCode>
              </div>
            </template>
          </CSACard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
import PromoCode from "../components/PromoCode/PromoCodeView.vue";
import GrantPeriodStatusView from "../components/GrantPeriodStatus/GrantPeriodStatusView.vue";
export default {
  components: { CSACard, PromoCode, GrantPeriodStatusView },
};
</script>

<style lang="scss" scoped>
</style>