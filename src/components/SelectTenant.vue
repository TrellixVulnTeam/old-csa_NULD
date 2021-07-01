<template>
    <div>
        <b-input-group class="px-5">
            <b-form-input
                    placeholder="Umbrella Search"
                    v-model="searchInput"
                    style="border-radius: 50px"
                  ></b-form-input>
                  <b-input-group-append>
                    <!-- <b-button style="border-radius:50px;" size="sm" text="Button" variant="white"><b-icon icon="search"></b-icon><b-icon icon="caret-down"></b-icon></b-button> -->
                    <b-dropdown
                      variant="white"
                      style="border-radius: 50px; margin-top: 0px !important"
                      size="sm"
                      id="tenant-search"
                      class="m-md-2"
                    >
                      <template #button-content>
                        <b-icon icon="search"></b-icon>
                      </template>
                      <b-dropdown-item>Umbrella ID</b-dropdown-item>
                      <b-dropdown-item>Umbrellas Name</b-dropdown-item>
                      <b-dropdown-item
                        >Institution Name</b-dropdown-item
                      >
                      <b-dropdown-item
                        >Subscription Name</b-dropdown-item
                      >
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>State</b-dropdown-item>
                      <b-dropdown-item
                        >Country</b-dropdown-item
                      >
                      <b-dropdown-item
                        >SF Account #</b-dropdown-item
                      >
                      <b-dropdown-item>PID</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>User's Name</b-dropdown-item>
                      <b-dropdown-item>Username</b-dropdown-item>
                      <b-dropdown-item>User Email</b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>


        </b-input-group>

            <b-input-group prepend="filter" class="mt-5">
              <b-form-input></b-form-input>
               
            </b-input-group>

            <b-table
              striped
              bordered
              head-variant="dark"
              class="w-100 border"
              hover
              selectable
              :items="[
                { ParentInstituionName: 'Miami Middle School', nonSiteSubscriptions: 'Grant', umbrellaID: 99},
                { ParentInstituionName: 'Miami High', nonSiteSubscriptions: 'Trial', umbrellaID: 101},
                { ParentInstituionName: 'Miami High', nonSiteSubscriptions: 'Teacher Subscription', umbrellaID: 103},
                { ParentInstituionName: 'Miami High', nonSiteSubscriptions: '-', umbrellaID: 104},
              ]"
            >
            <template v-slot:head()="data">
              <h5 class="m-0">
                  {{ data.label }}
              </h5>
            </template>
            </b-table>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        searchInput: ''
        }
    },    
    }
</script>

<style lang="scss" scoped>

</style>