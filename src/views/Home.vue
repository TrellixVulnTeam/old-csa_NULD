<template>
  <div class="home pb-5">
    <b-card class="bg-light sidenav shadow" style="display:none">
      <b-nav class="d-flex ml-4">
        <h1 class="display-4 text-dark">CSA</h1>
        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="building"></b-icon> Umbrella</b-button
          ></b-nav-item
        >
        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="house"></b-icon> Tenant</b-button
          ></b-nav-item
        >
        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="book"></b-icon> Subscription</b-button
          ></b-nav-item
        >
        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="person"></b-icon> User</b-button
          ></b-nav-item
        >

        <hr class="border-top border-dark w-75" />

        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="card-checklist"></b-icon> Rostered Umbrellas</b-button
          ></b-nav-item
        >
        <b-nav-item class="text-dark font-weight-bold" active
          ><b-button variant="outline-white" class="text-dark"
            ><b-icon icon="gear"></b-icon> Miscellaneous</b-button
          ></b-nav-item
        >
      </b-nav>
    </b-card>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="">
      <b-container>
        <b-row>
          <b-col>
            <CSACard title="Search" :bodyVisible="true" :hideCaret="true" style="width:100%;">
              <template #card-body>
                <div>
                <CSATable :items="items" ></CSATable>
                      </div>
              </template>
            </CSACard>
        </b-col>
        </b-row>
        <b-row>
          <b-col>
            <CSACard title="Create" :bodyVisible="true" style="width:100%;" :hideCaret="true">

              <template #card-body>
                <div>
                    <b-button variant="success">Create Single Standalone Umbrella</b-button>
                    <div>
                      <b-button variant="outline-success" class="m-2" >Create Scratch Umbrella</b-button>
                      </div>
                </div>
              </template>
            </CSACard>
        </b-col>
        <b-row>
        </b-row>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import CSACard from "../components/WrapperComponents/CSACard.vue";
import CSATable from '../components/WrapperComponents/CSATable.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",
  components: {
    CSACard,
    CSATable,
    // HelloWorld
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      institutions: [],
      allInsts: [],
      institutionFields: [
        "institutionID",
        "institutionName",
        "Enrollment",
        "city",
        "stateCode",
        "postalCode",
        "externalSchoolID",
      ],
    };
  },
  methods: {
    loadInsitituions() {
      var response = `{"ArrayList":[{"tenantID":2029,"institutionID":68294,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BAYWOOD ELEMENTARY SCHOOL","enrollment":344,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1524047"},{"tenantID":2029,"institutionID":68287,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BELLEVUE-SANTA FE CHARTER SCH","enrollment":160,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170294"},{"tenantID":2029,"institutionID":68292,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BISHOP'S PEAK ELEM SCHOOL","enrollment":453,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170373"},{"tenantID":2029,"institutionID":68288,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"CONRAD L SMITH ELEMENTARY SCH","enrollment":388,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170309"},{"tenantID":2029,"institutionID":68305,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"DEL MAR ELEMENTARY SCHOOL","enrollment":398,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"3329647"},{"tenantID":2029,"institutionID":68289,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"HAWTHORNE ELEMENTARY SCHOOL","enrollment":335,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170335"},{"tenantID":2029,"institutionID":68279,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LAGUNA MIDDLE SCHOOL","enrollment":703,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121135"},{"tenantID":2029,"institutionID":68295,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS OSOS MIDDLE SCHOOL","enrollment":610,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1543419"},{"tenantID":2029,"institutionID":68290,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS RANCHOS ELEMENTARY SCHOOL","enrollment":483,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170347"},{"tenantID":2029,"institutionID":68306,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MONARCH GROVE ELEM SCHOOL","enrollment":332,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"4013853"},{"tenantID":2029,"institutionID":68280,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MORRO BAY HIGH SCHOOL","enrollment":860,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121161"},{"tenantID":2029,"institutionID":68299,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACHECO ELEMENTARY SCHOOL","enrollment":549,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890813"},{"tenantID":2029,"institutionID":68296,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACIFIC BEACH HIGH SCHOOL","enrollment":62,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1826924"},{"tenantID":2029,"institutionID":68298,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS COASTAL ADULT SCHOOL","enrollment":900,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890564"},{"tenantID":2029,"institutionID":2498,"institutionTypeID":2,"parentInstitutionID":0,"parentInstitutionName":null,"institutionName":"SAN LUIS COASTAL UNIF SCH DIST","enrollment":7410,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121070"},{"tenantID":2029,"institutionID":68293,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS OBISPO HIGH SCHOOL","enrollment":1395,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170397"},{"tenantID":2029,"institutionID":68291,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SINSHEIMER ELEMENTARY SCHOOL","enrollment":390,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170359"},{"tenantID":2029,"institutionID":68317,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"TEACH ELEMENTARY SCHOOL","enrollment":185,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"5346471"}]}`;
      this.allInsts = JSON.parse(response).ArrayList;
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
    loadTree() {
      // var chart = {
      //     container: "#tree-simple"
      // };
      // var response = `{"ArrayList":[{"tenantID":2029,"institutionID":68294,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BAYWOOD ELEMENTARY SCHOOL","enrollment":344,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1524047"},{"tenantID":2029,"institutionID":68287,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BELLEVUE-SANTA FE CHARTER SCH","enrollment":160,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170294"},{"tenantID":2029,"institutionID":68292,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BISHOP'S PEAK ELEM SCHOOL","enrollment":453,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170373"},{"tenantID":2029,"institutionID":68288,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"CONRAD L SMITH ELEMENTARY SCH","enrollment":388,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170309"},{"tenantID":2029,"institutionID":68305,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"DEL MAR ELEMENTARY SCHOOL","enrollment":398,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"3329647"},{"tenantID":2029,"institutionID":68289,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"HAWTHORNE ELEMENTARY SCHOOL","enrollment":335,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170335"},{"tenantID":2029,"institutionID":68279,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LAGUNA MIDDLE SCHOOL","enrollment":703,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121135"},{"tenantID":2029,"institutionID":68295,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS OSOS MIDDLE SCHOOL","enrollment":610,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1543419"},{"tenantID":2029,"institutionID":68290,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS RANCHOS ELEMENTARY SCHOOL","enrollment":483,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170347"},{"tenantID":2029,"institutionID":68306,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MONARCH GROVE ELEM SCHOOL","enrollment":332,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"4013853"},{"tenantID":2029,"institutionID":68280,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MORRO BAY HIGH SCHOOL","enrollment":860,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121161"},{"tenantID":2029,"institutionID":68299,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACHECO ELEMENTARY SCHOOL","enrollment":549,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890813"},{"tenantID":2029,"institutionID":68296,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACIFIC BEACH HIGH SCHOOL","enrollment":62,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1826924"},{"tenantID":2029,"institutionID":68298,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS COASTAL ADULT SCHOOL","enrollment":900,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890564"},{"tenantID":2029,"institutionID":2498,"institutionTypeID":2,"parentInstitutionID":0,"parentInstitutionName":null,"institutionName":"SAN LUIS COASTAL UNIF SCH DIST","enrollment":7410,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121070"},{"tenantID":2029,"institutionID":68293,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS OBISPO HIGH SCHOOL","enrollment":1395,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170397"},{"tenantID":2029,"institutionID":68291,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SINSHEIMER ELEMENTARY SCHOOL","enrollment":390,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170359"},{"tenantID":2029,"institutionID":68317,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"TEACH ELEMENTARY SCHOOL","enrollment":185,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"5346471"}]}`;
      // var parent_node = JSON.parse(response).ArrayList.find(x=> x.institutionID == 0);

      // var children = JSON.parse(response).ArrayList.filter(x=> x.parentInstitutionID == 0).map(j=> {return {text: {name: j.institutionName}}});
      // var nodeStructure = {
      //   text: { name: parent_node.institutionName},
      //   children
      // }

      // var treeData = [
      //   {
      //     "name": "Top Level",
      //     "parent": "null",
      //     "children": [
      //       {
      //         "name": "Level 2: A",
      //         "parent": "Top Level",
      //         "children": [
      //           {
      //             "name": "Son of A",
      //             "parent": "Level 2: A"
      //           },
      //           {
      //             "name": "Daughter of A",
      //             "parent": "Level 2: A"
      //           }
      //         ]
      //       },
      //       {
      //         "name": "Level 2: B",
      //         "parent": "Top Level"
      //       }
      //     ]
      //   }
      // ];
      var response = `{"ArrayList":[{"tenantID":2029,"institutionID":68294,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BAYWOOD ELEMENTARY SCHOOL","enrollment":344,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1524047"},{"tenantID":2029,"institutionID":68287,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BELLEVUE-SANTA FE CHARTER SCH","enrollment":160,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170294"},{"tenantID":2029,"institutionID":68292,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"BISHOP'S PEAK ELEM SCHOOL","enrollment":453,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170373"},{"tenantID":2029,"institutionID":68288,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"CONRAD L SMITH ELEMENTARY SCH","enrollment":388,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170309"},{"tenantID":2029,"institutionID":68305,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"DEL MAR ELEMENTARY SCHOOL","enrollment":398,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"3329647"},{"tenantID":2029,"institutionID":68289,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"HAWTHORNE ELEMENTARY SCHOOL","enrollment":335,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170335"},{"tenantID":2029,"institutionID":68279,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LAGUNA MIDDLE SCHOOL","enrollment":703,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121135"},{"tenantID":2029,"institutionID":68295,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS OSOS MIDDLE SCHOOL","enrollment":610,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1543419"},{"tenantID":2029,"institutionID":68290,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"LOS RANCHOS ELEMENTARY SCHOOL","enrollment":483,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170347"},{"tenantID":2029,"institutionID":68306,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MONARCH GROVE ELEM SCHOOL","enrollment":332,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93402","city":"LOS OSOS","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"4013853"},{"tenantID":2029,"institutionID":68280,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"MORRO BAY HIGH SCHOOL","enrollment":860,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93442","city":"MORRO BAY","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121161"},{"tenantID":2029,"institutionID":68299,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACHECO ELEMENTARY SCHOOL","enrollment":549,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890813"},{"tenantID":2029,"institutionID":68296,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"PACIFIC BEACH HIGH SCHOOL","enrollment":62,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1826924"},{"tenantID":2029,"institutionID":68298,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS COASTAL ADULT SCHOOL","enrollment":900,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"2890564"},{"tenantID":2029,"institutionID":2498,"institutionTypeID":2,"parentInstitutionID":0,"parentInstitutionName":null,"institutionName":"SAN LUIS COASTAL UNIF SCH DIST","enrollment":7410,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"121070"},{"tenantID":2029,"institutionID":68293,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SAN LUIS OBISPO HIGH SCHOOL","enrollment":1395,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170397"},{"tenantID":2029,"institutionID":68291,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"SINSHEIMER ELEMENTARY SCHOOL","enrollment":390,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93401","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"1170359"},{"tenantID":2029,"institutionID":68317,"institutionTypeID":4,"parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","institutionName":"TEACH ELEMENTARY SCHOOL","enrollment":185,"isActive":true,"isCustom":false,"stateCode":"CA","countryCode":"USA","postalCode":"93405","city":"SN LUIS OBISP","startOfSchoolDay":22,"startOfSchoolMonth":8,"salesforceAccountID":null,"externalSchoolID":null,"subCount":0,"pid":"5346471"}]}`;
      var data = JSON.parse(response).ArrayList;
      var dataMap = data.reduce(function (map, node) {
        map[node.institutionID] = node;
        return map;
      }, {});
      var treeData = [];
      data.forEach(function (node) {
        // add to parent
        var parent = dataMap[node.parentInstitutionID];
        if (parent) {
          if (parent.children && parent.children.length > 3) {
            return;
          }
          // create child array if it doesn't exist
          (parent.children || (parent.children = []))
            // add node to child array
            .push(node);
        } else {
          // parent is null or missing
          treeData.push(node);
        }
      });

      // ************** Generate the tree diagram  *****************
      var margin = { top: 30, right: 120, bottom: 20, left: 20 },
        width = 960 - margin.right - margin.left,
        height = 300 - margin.top - margin.bottom;

      var i = 0;
      var tree = d3.layout.tree().size([height, width]);

      console.log(i);

      var diagonal = d3.svg.diagonal().projection(function (d) {
        return [d.x, d.y];
      });
      var svg = d3
        .select("#tree-example")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // root = treeData[0];

      // update(root);

      update(treeData[0]);
      function update(root) {
        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
          d.y = d.depth * 100;
        });

        // Declare the nodesâ€¦
        var node = svg.selectAll("g.node").data(nodes, function (d) {
          return d.id || (d.id = ++i);
        });

        // Enter the nodes.
        var nodeEnter = node
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          })
          .on("click", click);

        nodeEnter
          .append("circle")
          .attr("r", 10)
          .style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
          });

        nodeEnter
          .append("text")
          .attr("y", function (d) {
            return d.children || d._children ? -18 : 18;
          })
          .attr("dy", ".35em")
          .attr("text-anchor", "middle")
          .text(function (d) {
            return d.institutionName;
          })
          .style("fill-opacity", 1);

        // Declare the links
        var link = svg.selectAll("path.link").data(links, function (d) {
          return d.target.id;
        });

        // Enter the links.
        link
          .enter()
          .insert("path", "g")
          .attr("class", "link")
          .attr("d", diagonal);
      }

      // Toggle children on click.
      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    },
  },
  computed: {},
  created() {
    this.loadInsitituions();
  },
  mounted() {
    this.loadTree();
  },
};
</script>
<style lang="scss" scoped>
@import "../app.scss";

$leftMargin: 20px;
$actNavWidth: $navBarWidth - $leftMargin;
// .sidenav { //rounded
//   height: 95%; /* Full-height: remove this if you want "auto" height */
//   // width: 160px; /* Set the width of the sidebar */

//   // width: 14%;
//   width: $navBarWidth;
//   position: fixed; /* Fixed Sidebar (stay in place on scroll) */
//   z-index: 1; /* Stay on top */
//   top: 0; /* Stay at the top */
//   left: 0;
//   overflow-x: hidden; /* Disable horizontal scroll */
//   // background-color: $el-light-dark;
//   // padding-top: 20px;
//   // border-radius:0 47px 0px 0;
//   border-radius: 47px;
//   margin: $leftMargin;
//   // margni
// }
.sidenav {
  //square
  height: 100%; /* Full-height: remove this if you want "auto" height */
  // width: 160px; /* Set the width of the sidebar */

  // width: 14%;
  width: $navBarWidth;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  // background-color: $el-light-dark;
  // padding-top: 20px;
  border-radius: 0;
}

#tree-example {
  min-width: 400px;
  min-height: 200px;
}
</style>
<style>
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text {
  font: 12px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
.node {
  cursor: pointer;
}
</style>

