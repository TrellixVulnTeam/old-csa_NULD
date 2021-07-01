<template>
    <div
        :title="isSplit ? 'Preview Split' : 'Preview Merge'"
        name="overalPreviewSummary"
        :bodyVisible="true"
        :hideCaret="true"
        class="w-100">
        <template>
          <div>
            <b-container>
              <b-row>

                <b-col v-if="!isSplit" >

                  <CSACard  class="w-100" title="Possible conflicts (2)" name="possibleConflicts" :items="[{Type:'Same StudentID', Value:'20100'}, {Type:'Same Name', Value:'John Doe'}]">

                  </CSACard>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card class="w-100 shadow mt-3  m-2" :items="[{id:1, name:'Sally'}]">
                    <b-title>
                      <h4>Moving 30 Teachers <b-button variant="outline-dark">Export</b-button> </h4>
                      
                      <b-button variant="outline-white">
                        <b-icon icon="caret-down"></b-icon
                      ></b-button>

                      <!-- <b-card-text>
                        <b-table :items="teachers" :fields="teacherFields" 
                                        bordered
                                        head-variant="dark"
                                        class="w-100 border"><template v-slot:head()="data">
                                            <h5 class="m-0">
                                                {{ data.label }}
                                            </h5>
                                        </template></b-table>
                      </b-card-text> -->
                    </b-title>
                  </b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card class="w-100 shadow mt-3 m-2">
                    <b-title>
                      <h4>Moving 100 Students <b-button variant="outline-dark">Export</b-button> </h4>
                      <b-button variant="white">
                        <b-icon icon="caret-down"></b-icon
                      ></b-button>
                    </b-title>
                      <!-- <b-card-text>
                        <b-table :items="students" :fields="studentFields" 
                                        bordered
                                        head-variant="dark"
                                        class="w-100 border"><template v-slot:head()="data">
                                            <h5 class="m-0">
                                                {{ data.label }}
                                            </h5>
                                        </template></b-table>
                      </b-card-text> -->

                  </b-card>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-card class="w-100 shadow mt-3 m-2">
                    <b-title>
                      <h4>Moving 15 Classes <b-button variant="outline-dark">Export</b-button> </h4>
                      
                      <b-button variant="white">
                        <b-icon icon="caret-down"></b-icon
                      ></b-button>
                    </b-title>

                  </b-card>
                </b-col>
              </b-row>
            </b-container>
            <!-- <b-button v-if="!isSplit" class="float-left mt-5" variant="outline-dark"><b-icon icon="chevron-left"></b-icon> Previous</b-button>
            <b-button  v-if="!isSplit" class="float-right mt-5" variant="success">Next</b-button> -->
          </div>
        </template>
      </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard.vue'
// import users from '../misc/usersInUmbrella.json';
// import csaTypes from '../misc/csaTypes';

    export default {
  components: { CSACard },
        props: {
          isSplit: {
            type: Boolean,
            default: false
          },
        },
        data() {
          return {
            // teachers: users.filter(x => x.roleID === csaTypes.loginRoleOptions.Teacher),
            teacherFields: [
              "loginID",
              "firstname",
              "lastname",
              "email",
            ],
            // students:  users.filter(x => x.roleID === csaTypes.loginRoleOptions.Student),
            studentFields:[
              "loginID",
              "firstname",
              "lastname",
              "sisUserID",
            ],
            classes: [],
            classesFields:[],

            

          }
        },
    }
</script>

<style lang="scss" scoped>

</style>