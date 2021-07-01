<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-table :items="logs" :fields="tableHeaders" :per-page="perPage" :current-page="currentPage">

          </b-table>
            <b-pagination
            v-model="currentPage"
            :total-rows="maxRows"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
            ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    objectType: {
      type: String,
      default: null
    },
    objectID: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      logs: [ //TODO: remove
        {
          ID: 507508,
          ObjectType: "User",
          ObjectID: 27926260,
          ActivityType: "Reset Password",
          UpdatedField: "Password",
          OriginalFieldValue: "833xy2dy",
          NewFieldValue: "833xy2dy",
          ActivityDate: "2018-11-12 13:47:46.147",
          ActivityBy: " ",
        },
        {
          ID: 507518,
          ObjectType: "User",
          ObjectID: 19107973,
          ActivityType: "Reset Password",
          UpdatedField: "Password",
          OriginalFieldValue: "clover12",
          NewFieldValue: "math12",
          ActivityDate: "2018-11-12 13:59:28.260",
          ActivityBy: " ",
        },
        {
          ID: 507527,
          ObjectType: "User",
          ObjectID: 28442689,
          ActivityType: "Reset Password",
          UpdatedField: "Password",
          OriginalFieldValue: "wRg3S5eCrEpuJqm",
          NewFieldValue: "Lalaland",
          ActivityDate: "2018-11-12 14:12:25.080",
          ActivityBy: " ",
        },
        {
          ID: 507536,
          ObjectType: "Subscription",
          ObjectID: 27914,
          ActivityType: "Edit",
          UpdatedField: "SF Contract Number",
          OriginalFieldValue: "00087962",
          NewFieldValue: "00087987",
          ActivityDate: "2018-11-12 14:34:45.877",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507537,
          ObjectType: "Subscription",
          ObjectID: 27914,
          ActivityType: "Edit",
          UpdatedField: "Start Date",
          OriginalFieldValue: "{ts '2019-03-01 00:00:00'}",
          NewFieldValue: "3/1/19",
          ActivityDate: "2018-11-12 14:34:45.877",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507538,
          ObjectType: "Subscription",
          ObjectID: 27914,
          ActivityType: "Edit",
          UpdatedField: "End Date",
          OriginalFieldValue: "{ts '2020-02-29 00:00:00'}",
          NewFieldValue: "2/29/20",
          ActivityDate: "2018-11-12 14:34:45.877",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507546,
          ObjectType: "Subscription",
          ObjectID: 27920,
          ActivityType: "Create",
          UpdatedField: null,
          OriginalFieldValue: null,
          NewFieldValue: null,
          ActivityDate: "2018-11-12 14:57:46.680",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507547,
          ObjectType: "Group",
          ObjectID: 249352,
          ActivityType: "Move",
          UpdatedField: "Subscription",
          OriginalFieldValue: "21860",
          NewFieldValue: "27920",
          ActivityDate: "2018-11-12 14:58:54.137",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507548,
          ObjectType: "Group",
          ObjectID: 67023,
          ActivityType: "Move",
          UpdatedField: "Subscription",
          OriginalFieldValue: "21860",
          NewFieldValue: "27920",
          ActivityDate: "2018-11-12 14:58:54.137",
          ActivityBy: "Bert Corbin",
        },
        {
          ID: 507549,
          ObjectType: "Group",
          ObjectID: 249354,
          ActivityType: "Move",
          UpdatedField: "Subscription",
          OriginalFieldValue: "21860",
          NewFieldValue: "27920",
          ActivityDate: "2018-11-12 14:58:54.137",
          ActivityBy: "Bert Corbin",
        },
      ],
      tableHeaders: [
        {
          label: "User",
          key: "ActivityBy",
        },
        {
          label: "Event Type",
          key: "ActivityType",
        },
        {
          label: "Updated Field",
          key: "UpdatedField",
        },
        {
          label: "Original Value",
          key: "OriginalFieldValue",
        },
        {
          label: "New Value",
          key: "NewFieldValue",
        },
        {
          label: "Time",
          key: "ActivityDate",
        },
      ],
      currentPage:1,
      maxRows: 10,
      perPage: 4,
    };
  },
  methods: {
    getLogs() {
      //TODO: this.objectType, this.objectID
    }
  },
};
</script>


<style lang="scss" scoped>
</style>