<template>
  <div>
    <h2 class="pb-2 mt-4">Select Subscription</h2>
    <CSACard
      title=""
      :bodyVisible="true"
      :hideCaret="true"
      class="w-100 mt-4 mb-5 px-5"
    >
      <template #card-body>

      <b-row class="w-100">
          <b-col class="p-0"  cols="6">
              <h3 class="mb-3">Source Subscription</h3>
          </b-col>
          <b-col cols="2"></b-col>
          <b-col  cols="4">
              <h3 class="mb-3">Destination Subscription</h3>
          </b-col>
      </b-row>
      <b-row class="w-100 mt-3" align-v="center" align-h="center">
          <b-col class="p-0" cols="6">
            
            <b-input-group prepend="filter">
              <b-form-input></b-form-input>
               
            </b-input-group>
          <b-table
            striped
            bordered
            head-variant="dark"
            class="w-100 border"
            hover
            :fields="fields"
            :items="items.slice(1)"
          >
            <template v-slot:head()="data">
              <h5 class="m-0">
                {{ data.label }}
              </h5>
            </template>
            <template #cell(ProductID)="{ value }">
              <div>
                <Logo
                  class="m-1"
                  style="height: 40px"
                  version="leaf"
                  :productId="value"
                  :product="productNames[value].toLowerCase()"
                ></Logo>
              </div>
            </template>
            <template #cell(LicensingTypeID)="{ value }">
              <div>
                {{ licensingTypes[value] }}
              </div>
            </template>
            <template #cell(map)="data">
              <div>
                <!-- <b-form-input
                  list="mappable-subscription-list-id"
                  @input="(id) => (data.map = id)"
                ></b-form-input>

                <datalist id="mappable-subscription-list-id" >
                  <option 
                    v-for="option in mappableSubscriptions"
                    :key="option.vaue"
                    :value="option.value"
                  >
                   <p> {{ option.text }}</p>
                  </option>
                </datalist> -->
                <b-form-select v-model="data.map" class="mb-3">

                  <b-form-select-option :value="option.value"  v-for="option in mappableSubscriptions"
                    :key="option.vaue">{{ option.text }}</b-form-select-option>
                </b-form-select>
              </div>
            </template>
          </b-table>
          </b-col>
          <b-col cols="2">
              <p>
                  <b-icon
                      icon="arrow-right"
                      variant="el-light-dark"
                      font-scale="4"
                  ></b-icon>
              </p>
          </b-col>
          <b-col class="p-0" cols="4">
              <div class="mb-5">

                  <h3 class=" mb-3">{{items[0].SubscriptionName}}

                  </h3>
                <Logo
                  class="m-1 mb-3"
                  style="height: 40px"
                  version="leaf"
                  :productId="value"
                  :product="productNames[items[0].ProductID].toLowerCase()"
                ></Logo>

                  <b-row>
                    <b-col>

                  <strong>Non Site Subscriptions</strong>
                  <p>{{licensingTypes[items[0].LicensingTypeID]}}</p>
                    </b-col>
                  </b-row>
              </div>
          </b-col>
      </b-row>

        <div>
        </div>
      </template>
    </CSACard>
  </div>
</template>

<script>
import csaTypes from "../misc/csaTypes";
import CSACard from "./WrapperComponents/CSACard.vue";
import Logo from "./WrapperComponents/Logo.vue";

export default {
  components: {
    Logo,
    CSACard,
  },
  data() {
    return {
      searchInput: "",
      productNames: csaTypes.products,
      licensingTypes: csaTypes.licensingTypeOptions,
      fields: [
        {key:"SubscriptionName", label:"Subscription Name"},
        {key:"LicensingTypeID", label:"Licensing Type"},
        {key:"SalesForceContractID", label:"SalesForce Contract ID"},
        {key:"ProductID", label:"Product"},
      ],
      items: [ { SubscriptionID: 210735, TenantID: 23, SubscriptionName: "CICERO PREPARATORY ACADEMY", Accesskey: "ED4B5A84-C02C-4E60-967C-06B260FCDCE1", LicensingTypeID: 2, ProductID: 1, SalesForceContractID: "8000b000002SVZ8AAO", SalesForceContractNumber: "00090676", StartsOn: "2018-01-11 00:00:00.0000000", ExpiresOn: "2020-01-31 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 750, IsExpired: 1, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5777610, ModifiedOn: "2019-01-15 12:06:50.2431330", CreatedByID: 3997462, CreatedOn: "2018-01-11 14:18:15.1500000", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 219125, TenantID: 23, SubscriptionName: "Morris, Marshall", Accesskey: "3DF903E1-292E-47C7-B0F1-C660A4ED4BC6", LicensingTypeID: 8, ProductID: 1, SalesForceContractID: "0030b00001wUOan", SalesForceContractNumber: null, StartsOn: "2018-02-19 00:00:00.0000000", ExpiresOn: "2019-03-18 00:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 392, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 4427714, ModifiedOn: "2018-03-05 09:17:45.6066667", CreatedByID: 4427714, CreatedOn: "2018-03-05 09:17:07.0733333", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 339738, TenantID: 23, SubscriptionName: "Kilmer, Charles (Grant)", Accesskey: "0FE41A90-6DFE-4958-914D-564C039E3053", LicensingTypeID: 8, ProductID: 1, SalesForceContractID: null, SalesForceContractNumber: null, StartsOn: "2019-09-20 23:29:56.3940000", ExpiresOn: "2020-10-20 23:29:56.3940000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 396, IsExpired: 1, IsActive: false, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 11601523, ModifiedOn: "2020-05-27 13:08:51.8662669", CreatedByID: 0, CreatedOn: "2019-09-20 23:29:56.2668810", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 356552, TenantID: 23, SubscriptionName: "Rodriguez, Antoinette (Grant)", Accesskey: "5A94730B-3CA1-4E18-A101-CF296CBCC150", LicensingTypeID: 8, ProductID: 1, SalesForceContractID: null, SalesForceContractNumber: null, StartsOn: "2019-10-30 16:40:06.4600000", ExpiresOn: "2020-11-30 16:40:06.4600000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 397, IsExpired: 1, IsActive: false, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 11601523, ModifiedOn: "2020-05-27 13:09:11.7271508", CreatedByID: 0, CreatedOn: "2019-10-30 16:40:06.2967473", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 387934, TenantID: 23, SubscriptionName: "Shepard, Crystal", Accesskey: "F48DD0D7-24CA-4410-9FE3-76D9EE66ED62", LicensingTypeID: 3, ProductID: 1, SalesForceContractID: null, SalesForceContractNumber: null, StartsOn: "2020-03-04 08:08:24.0970000", ExpiresOn: "2020-04-03 08:08:24.0220000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 30, IsExpired: 1, IsActive: false, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 9792896, ModifiedOn: "2020-03-26 11:55:39.1732821", CreatedByID: 0, CreatedOn: "2020-03-04 08:08:23.8665564", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 394074, TenantID: 23, SubscriptionName: "ACADEMY OF MATH & SCIENCE", Accesskey: "F7E53028-8535-4308-A069-09FCE5EF944E", LicensingTypeID: 5, ProductID: 1, SalesForceContractID: null, SalesForceContractNumber: null, StartsOn: "2020-03-20 05:49:31.6680000", ExpiresOn: "2020-06-19 23:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 91, IsExpired: 1, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5983625, ModifiedOn: "2020-05-21 09:41:29.7786169", CreatedByID: 5995714, CreatedOn: "2020-03-20 05:50:10.5059440", TeachersCap: 0, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 402297, TenantID: 23, SubscriptionName: "STEPPING STONES ACADEMY", Accesskey: "8C734B5A-9399-4254-85A5-633C0C550849", LicensingTypeID: 4, ProductID: 1, SalesForceContractID: null, SalesForceContractNumber: null, StartsOn: "2020-04-01 12:15:37.0320000", ExpiresOn: "2020-05-30 23:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 59, IsExpired: 1, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 9786413, ModifiedOn: "2020-03-30 12:16:23.7985072", CreatedByID: 9786413, CreatedOn: "2020-03-30 12:15:57.9303896", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 420417, TenantID: 23, SubscriptionName: "La Paloma Academy-South", Accesskey: "84D9715C-9FFC-46E5-9B7D-324B87BB4A72", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000003BK2OAAW", SalesForceContractNumber: "00112440", StartsOn: "2020-05-19 12:00:00.0000000", ExpiresOn: "2021-06-30 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 407, IsExpired: 0, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 9786413, ModifiedOn: "2020-05-19 07:40:38.7738289", CreatedByID: 9786413, CreatedOn: "2020-05-19 07:40:38.7738289", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, ], subscriptionsToMap: [ { SubscriptionID: 44321, TenantID: 42, SubscriptionName: "South Buffalo Charter School", Accesskey: "E9045F84-3404-4508-87A1-F09B45227BF3", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000003BIrzAAG", SalesForceContractNumber: "00112299", StartsOn: "2017-01-01 00:00:00.0000000", ExpiresOn: "2021-06-30 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 1641, IsExpired: 0, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5995714, ModifiedOn: "2020-05-13 13:41:12.5786513", CreatedByID: 162083, CreatedOn: "2013-12-11 11:25:39.0133333", TeachersCap: 0, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 98176, TenantID: 42, SubscriptionName: "ROCHESTER PREP MS-WEST", Accesskey: "8B8D52F3-EE3E-4D79-A005-68F868FCA7A5", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000002S8kWAAS", SalesForceContractNumber: "00083218", StartsOn: "2016-10-06 00:00:00.0000000", ExpiresOn: "2019-08-31 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 1059, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5995714, ModifiedOn: "2018-08-30 09:34:54.0388997", CreatedByID: 1828615, CreatedOn: "2015-08-11 12:55:00.4966667", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 162234, TenantID: 42, SubscriptionName: "SOUTH BRONX EARLY CLG ACAD CS", Accesskey: "D591AFC1-66F3-457B-8968-7FC2E4C581CF", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000002KZoBAAW", SalesForceContractNumber: "00072967", StartsOn: "2016-12-12 00:00:00.0000000", ExpiresOn: "2019-01-31 00:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 780, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5777610, ModifiedOn: "2018-01-08 12:08:21.1400000", CreatedByID: 3997462, CreatedOn: "2016-12-12 09:48:16.7366667", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 175173, TenantID: 42, SubscriptionName: "HARLEM VILLAGE ACAD MS WEST", Accesskey: "85F6A5A6-CBAC-4C26-94C1-756649BDCA72", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "80033000002oG05AAE", SalesForceContractNumber: "00060206", StartsOn: "2017-03-22 00:00:00.0000000", ExpiresOn: "2018-03-31 00:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 374, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 3997462, ModifiedOn: "2017-03-22 10:40:53.7200000", CreatedByID: 3997462, CreatedOn: "2017-03-22 10:40:53.7200000", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 185213, TenantID: 42, SubscriptionName: "Bedford Stuy Collegiate CS", Accesskey: "C5E75C59-D973-4A8A-9A31-6E709295AFF9", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000003IVF4AAO", SalesForceContractNumber: "00102351", StartsOn: "2017-08-08 00:00:00.0000000", ExpiresOn: "2020-09-30 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 1149, IsExpired: 1, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 9792898, ModifiedOn: "2019-09-04 08:05:49.2029989", CreatedByID: 4574939, CreatedOn: "2017-08-08 14:16:15.0033333", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 197960, TenantID: 42, SubscriptionName: "MERRICK ACADEMY-QUEENS PCS", Accesskey: "A70AF016-1B6E-49B5-A333-0B5F567A7EA1", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b0000030VzRAAU", SalesForceContractNumber: "00086118", StartsOn: "2017-10-16 00:00:00.0000000", ExpiresOn: "2019-10-31 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 745, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 4574939, ModifiedOn: "2018-10-12 15:21:37.7217531", CreatedByID: 5995714, CreatedOn: "2017-10-16 14:15:46.4933333", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 221166, TenantID: 42, SubscriptionName: "NYC CHARTER SCHOOL OF THE ARTS", Accesskey: "6EAFE420-5740-4F63-AA24-3E02DED9AC22", LicensingTypeID: 2, ProductID: 1, SalesForceContractID: "8000b000003ELJAAA4", SalesForceContractNumber: "00075808", StartsOn: "2018-03-23 00:00:00.0000000", ExpiresOn: "2019-03-31 00:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 373, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 4574939, ModifiedOn: "2018-03-23 09:24:51.8600000", CreatedByID: 4574939, CreatedOn: "2018-03-23 09:24:51.8600000", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 221168, TenantID: 42, SubscriptionName: "BOYS PREP BRONX ELEM SCHOOL", Accesskey: "A727C303-D131-43AA-B230-99C62A0EFD23", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000003ELJFAA4", SalesForceContractNumber: "00075809", StartsOn: "2018-03-23 00:00:00.0000000", ExpiresOn: "2019-03-31 00:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 373, IsExpired: 1, IsActive: true, SourceID: 0, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 4574939, ModifiedOn: "2018-03-23 09:39:52.8500000", CreatedByID: 4574939, CreatedOn: "2018-03-23 09:39:52.8500000", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 223628, TenantID: 42, SubscriptionName: "BRONX CHARTER SCH FOR THE ARTS", Accesskey: "7EA4B5A7-EAE4-4B02-BC6D-F21220238870", LicensingTypeID: 2, ProductID: 1, SalesForceContractID: "8000b000002d9oKAAQ", SalesForceContractNumber: "00094570", StartsOn: "2018-04-20 00:00:00.0000000", ExpiresOn: "2020-06-30 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 802, IsExpired: 1, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5983625, ModifiedOn: "2020-05-28 07:50:53.8165328", CreatedByID: 5777610, CreatedOn: "2018-04-20 08:36:42.7333333", TeachersCap: 0, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, { SubscriptionID: 282316, TenantID: 42, SubscriptionName: "Charter Sch for Applied Tech", Accesskey: "4BCCF1BD-3D70-4457-AE56-CE293523866F", LicensingTypeID: 1, ProductID: 1, SalesForceContractID: "8000b000003Mi02AAC", SalesForceContractNumber: "00110949", StartsOn: "2019-03-13 12:00:00.0000000", ExpiresOn: "2021-06-30 12:00:00.0000000", EnforceStartsOn: false, GracePeriod: 0, LengthInDays: 840, IsExpired: 0, IsActive: true, SourceID: null, PendingSubscriptionID: null, PendingEffectiveOn: null, ModifiedByID: 5995714, ModifiedOn: "2020-03-12 14:29:03.5379180", CreatedByID: 4574939, CreatedOn: "2019-03-13 09:38:23.4600576", TeachersCap: null, TeachersUsed: null, UpgradeAllowed: true, ExtraSubscriptionAccessJson: null, }, ],
    };
  },
  computed: {
    mappableSubscriptions() {
      return this.subscriptionsToMap
        .filter(
          (x) => !this.items.some((s) => s.SubscriptionID == x.SubscriptionID)
        )
        .map((y) => {
          return { value: y.SubscriptionID, text: this.subscriptionOption(y) };
        });
    },
  },
  methods: {
      subscriptionOption(subscription) {
          const mainSubsInfo =  `${subscription.SubscriptionName} (${csaTypes.products[subscription.ProductID]} - ${csaTypes.licensingTypeOptions[subscription.LicensingTypeID]})`
          return subscription.SalesForceContractID ?  `${mainSubsInfo} SalesForce Contract ID: ${subscription.SalesForceContractID}` : mainSubsInfo;
      }
  },
};
</script>

<style lang="scss" scoped>

</style>