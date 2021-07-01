<template>
    <div>
    <CSACard
      title="Set the users new Institutions"
      :bodyVisible="true"
      :hideCaret="true"
      class="w-100 mt-4 mb-5"
    >
      <template #card-body>
        <div>
          <b-table
            striped
            bordered
            head-variant="dark"
            class="w-100 border"
            hover
            :items="items"
            :fields="fields"
          >
            <template v-slot:head()="data">
              <h5 class="m-0">
                {{ data.label }}
              </h5>
            </template>
            <template #cell(InstitutionTypeID)="{ value }">
              <div>
                {{ institutionTypes[value] }}
              </div>
            </template>
            <template #cell(map)="data">
              <div>
                <b-form-input
                  list="mappable-institution-list-id"
                  @input="(id) => (data.map = id)"
                ></b-form-input>

                <datalist id="mappable-institution-list-id">
                  <option
                    v-for="option in mappableInstitutions"
                    :key="option.vaue"
                    :value="option.value"
                  >
                    {{ option.text }}
                  </option>
                </datalist>
              </div>
            </template>
          </b-table>
        </div>
      </template>
    </CSACard>
    </div>
</template>

<script>
    import csaTypes from '../misc/csaTypes';
    import CSACard from "./WrapperComponents/CSACard.vue";
    export default {
  components: {
    CSACard,
  },
    data() {
      return {
        institutionTypes: csaTypes.institutionTypeOptions,
        searchInput: '',
        fields:[
          // {key:"InstitutionID", label: "Institution ID"}, 
          {key:"Name", label: "Users from Institution"}, 
          // {key:"InstitutionTypeID", label: "Institution Type"}, 
          {key:"map", label: "Mapped Destination Institution"},
        ],
        items: [ { "InstitutionID": 101, "TenantID": 2884, "InstitutionTypeID": 4, "ParentInstitutionID": 3365, "Name": "WILLIAM FINCH CHARTER SCHOOL", "PID": "10018192", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "95963", "City": "ORLAND", "Enrollment": 69, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xE522F89EA77AEB52243D8290062D4EF42E976096", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-11-30 16:36:55.0100000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 3365, "TenantID": 2884, "InstitutionTypeID": 7, "ParentInstitutionID": null, "Name": "GLENN CO OFFICE OF EDUCATION", "PID": "59855", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "95988", "City": "WILLOWS", "Enrollment": null, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xE5CDD71AF491AC27B060F94F32160BBCB8F8A115", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2010-01-27 12:12:00.0000000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 163058, "TenantID": 2884, "InstitutionTypeID": 4, "ParentInstitutionID": 3365, "Name": "WILLIAM FINCH SCHOOL", "PID": "11705324", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "95963", "City": "ORLAND", "Enrollment": 150, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xAE6646E4E580F74D1FD7DB903FDC8B3FB68DCCFD", "IsActive": false, "ModifiedByID": 0, "ModifiedOn": "2018-06-05 15:05:56.9700000", "CreatedByID": 0, "CreatedOn": "2011-11-21 12:28:40.1466667" }, { "InstitutionID": 168202, "TenantID": 2884, "InstitutionTypeID": 4, "ParentInstitutionID": 3365, "Name": "WALDEN ACADEMY", "PID": "11739545", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "95988", "City": "WILLOWS", "Enrollment": 167, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xF0BF47EDBE5D8B826965E735EA37A85634AC2385", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-11-30 16:36:55.0100000", "CreatedByID": 0, "CreatedOn": "2012-08-01 14:23:17.2566667" }, { "InstitutionID": 286314, "TenantID": 2884, "InstitutionTypeID": 4, "ParentInstitutionID": 3365, "Name": "CCLB GATEWAY CITIES CHTR SCH", "PID": "12162282", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "90807", "City": "LONG BEACH", "Enrollment": 401, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x98ED075A6F706893989163BE85A53C893CF00A28", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-01-03 17:00:24.9200000", "CreatedByID": 0, "CreatedOn": "2017-01-03 17:00:24.9200000" }, { "InstitutionID": 286317, "TenantID": 2884, "InstitutionTypeID": 4, "ParentInstitutionID": 3365, "Name": "SUCCESS ONE CHARTER SCHOOL", "PID": "12162414", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "95988", "City": "WILLOWS", "Enrollment": 102, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x8D11837B26EEA7DCEF5161146FF5C2042C7138AD", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-11-30 16:36:55.0100000", "CreatedByID": 0, "CreatedOn": "2017-01-03 17:00:24.9200000" } ],
        institutionsToMap: [ { "InstitutionID": 92, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "EDISON-BETHUNE CHARTER ACADEMY", "PID": "57089", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93706", "City": "FRESNO", "Enrollment": 576, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xBB6437BD804AFF547F2BF7434D56420EDAE6070C", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-11-30 16:36:55.0100000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 93, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "ALICE WORSLEY SCHOOL", "PID": "59154", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93725", "City": "FRESNO", "Enrollment": 300, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x276C0D9DAC259088673D6BF9B55FC3581906F1C0", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2013-06-11 13:46:11.2066667", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 94, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "RAMACHER SCHOOL", "PID": "59166", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93728", "City": "FRESNO", "Enrollment": 70, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x61ED6107B8E98C9933DBA1300BB6B6E168DF697B", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2015-02-09 16:13:44.2100000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 95, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "SUTHERLAND CENTER", "PID": "59219", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93630", "City": "KERMAN", "Enrollment": 124, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x0A540B6C550861212D2E52E46A9B7693D6E606C3", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-01-03 17:00:24.9200000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 96, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "MONTE VISTA SCHOOL", "PID": "1553892", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93654", "City": "REEDLEY", "Enrollment": 155, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x23078301B4DBB33F6408F91588FA0A9E7AC27020", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2011-08-10 12:45:34.4833333", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 97, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "TEILMAN COMMUNITY DAY", "PID": "4897427", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93706", "City": "FRESNO", "Enrollment": 205, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x4E8344EFF865EB3201CE78C224C6E6AB1E288281", "IsActive": false, "ModifiedByID": 0, "ModifiedOn": "2018-06-05 15:05:56.9700000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 98, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "VIOLET HEINTZ ED ACADEMY", "PID": "4897441", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93609", "City": "CARUTHERS", "Enrollment": 200, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x4C1D123D201960E3E185DD0A956E3625BADAE55C", "IsActive": false, "ModifiedByID": 0, "ModifiedOn": "2018-06-05 15:05:56.9700000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 99, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "DNA COMMUNITY SCHOOL", "PID": "4953617", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93722", "City": "FRESNO", "Enrollment": 12, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0xF34ABC0B01D9BE2EFDBCA387FDDE4FA22492CE36", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2013-12-16 14:59:18.4066667", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 100, "TenantID": 2883, "InstitutionTypeID": 4, "ParentInstitutionID": 3364, "Name": "HUME LAKE CHARTER SCHOOL", "PID": "10755754", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93628", "City": "HUME", "Enrollment": 64, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x4F52AA0EC5C9B1131796BABE22A02DE43D8F87D7", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2017-11-30 16:36:55.0100000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" }, { "InstitutionID": 3364, "TenantID": 2883, "InstitutionTypeID": 7, "ParentInstitutionID": null, "Name": "FRESNO CO OFFICE OF EDUCATION", "PID": "59128", "StateCode": "CA", "CountryCode": "USA", "PostalCode": "93721", "City": "FRESNO", "Enrollment": null, "StartOfSchoolDay": null, "StartOfSchoolMonth": null, "DefaultLanguageID": null, "AllowRolesToEnrollStudents": false, "SalesforceAccountID": null, "EnableBatchImport": false, "ExternalSchoolID": null, "Hash": "0x8762F2A7F9E5884563DE0309B5FFCC6DE1F20A79", "IsActive": true, "ModifiedByID": 0, "ModifiedOn": "2018-06-05 15:05:56.9700000", "CreatedByID": 0, "CreatedOn": "2010-01-27 12:12:00.0000000" } ],
      }
    },    
    computed: {
      mappableInstitutions() {
        return this.institutionsToMap
          .filter(
          (x) => !this.items.some((s) => s.InstitutionID == x.InstitutionID)
          )
          .map((y) => {
            return { value: y.InstitutionID, text: y.Name };
          });
      },
    },
    }
</script>

<style lang="scss" scoped>

</style>