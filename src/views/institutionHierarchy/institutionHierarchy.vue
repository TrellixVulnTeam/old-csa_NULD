<template>
  <div>
    <b-table hover :items="institutions" :fields="[...institutionFields]" 
            striped
            bordered
            head-variant="dark"
            class="w-100 border">
            <template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>
      <template #cell(actions)="">
        <b-dropdown text="Actions" variant="outline-dark">
          <b-dropdown-item>View/Edit</b-dropdown-item>
          <b-dropdown-item variant="success"
            >Add Existing Institution</b-dropdown-item
          >
          <b-dropdown-item variant="success"
            >Create/Add SubInstitution</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item variant="danger">Deactivate</b-dropdown-item>
        </b-dropdown>
      </template>

      <template #cell(ShowSubInstitutions)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Hide": "Show" }} Sub Institutions
        </b-button>
      </template>

      <template #row-details="myRow" detailsShowing>
        <!-- <b-table
          class="shadow-sm ml-5 w-auto"
          :fields="institutionFields"
          :items="subItems(myRow.item)"
        >
          <template #cell(actions)="">
            <b-dropdown text="Actions">
              <b-dropdown-item>View/Edit</b-dropdown-item>
              <b-dropdown-item>Make Parent Institution</b-dropdown-item>
              <b-dropdown-item variant="success"
                >Create/Add SubInstitution</b-dropdown-item
              >
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item variant="danger">Delete</b-dropdown-item>
            </b-dropdown>
          </template>

          <template #cell(ShowSubInstitutions)=""> - </template>
        </b-table> -->
        <inner-table enableSubInstitution :items="subItems(myRow.item)"  :fields="institutionFields">

        </inner-table>

      </template>
    </b-table>
  </div>
</template>

<script>
import innerTable from './innerTable.vue';
import institutions from '../../misc/institutionList.json';
export default {
  components: { innerTable },
  data() {
    return {
      allInsts: [],
      institutionFields: [
        "institutionID",
        "institutionName",
        "Enrollment",
        "city",
        "stateCode",
        "postalCode",
        "actions",
        // "externalSchoolID",
        "ShowSubInstitutions",
        // 'show_details'
      ],
      institutions: [],
    };
  },
  methods: {
    loadInsitituions() {
      this.allInsts = institutions.ArrayList;
      this.institutions = this.allInsts.filter(
        (x) => x.parentInstitutionID == 0
      );
    },
    subItems(item) {
      console.log(item);
      return this.allInsts.filter(
        (x) => x.parentInstitutionID == item.institutionID
      );
    },
  },
  created() {
    this.loadInsitituions();
  },
};
</script>

<style lang="scss" scoped>
</style>