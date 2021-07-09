<template>
    <div>
        <div class="mx-0 px-0">
            <b-row class="mx-0 px-0">
                <b-col class="mx-0 px-0">
                    <CSACard
                        title="Select Users by Subscription:"
                        :bodyVisible="true"
                        class="w-100 mt-4 mb-5"
                    >
                        <template #card-body>
                            <div>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <div>

            <b-input-group prepend="filter" class="mt-5">
              <b-form-input v-model="subFilter"></b-form-input>
               
            </b-input-group>

                                                <b-table
                                                striped
                                                bordered
                                                head-variant="dark"
                                                class="w-100 border"
                                                :filter="subFilter"
                                                    selectable
                                                    select-mode="single"
                                                    :items="subscriptions"
                                                    :fields="[
                                                        {
                                                            key: 'productID',
                                                            label: 'Product',
                                                        },
                                                        {
                                                            key: 'subscriptionName',
                                                            label: 'Subscription Name',
                                                        },
                                                        {
                                                            key: 'licensingTypeID',
                                                            label: 'Licensing Type',
                                                        },
                                                        {
                                                            key: 'salesForceContractID',
                                                            label: 'SalesForce Contract ID',
                                                        },
                                                        {
                                                            key: 'inst',
                                                            label:'Select Institutions within Subscription'
                                                        },
                                                        {
                                                            key: 'selected',
                                                            label: 'Selected Subscription',
                                                        }
                                                    ]"
                                                >

                                                <template v-slot:head()="data">
                                                <h5 class="m-0 horizontal-align">
                                                    {{ data.label }}
                                                </h5>
                                                </template>
                                                    <template
                                                        #cell(productID)="{
                                                            value,
                                                        }"
                                                    >
                                                        <div>
                                                            <Logo
                                                                :product="
                                                                    productNames[
                                                                        value
                                                                    ].toLowerCase()
                                                                "
                                                                style="
                                                                    height: 40px;
                                                                "
                                                            ></Logo>
                                                        </div>
                                                    </template>
                                                    <template
                                                        #cell(licensingTypeID)="{
                                                            value,
                                                        }"
                                                    >
                                                        <div>
                                                            {{
                                                                licensingTypeOptions[
                                                                    value
                                                                ]
                                                            }}
                                                        </div>
                                                    </template>
                                                    <template
                                                        #cell(selected)="{
                                                            rowSelected,
                                                        }"
                                                    >
                                                        <div>
                                                            <b-icon
                                                                v-if="
                                                                    rowSelected
                                                                "
                                                                font-scale="2"
                                                                icon="check"
                                                                variant="success"
                                                            ></b-icon>
                                                        </div>
                                                    </template>
                                                    <template #cell(inst)="row">
                                                        <div>
                                                            <b-button variant="white" @click="row.toggleDetails"  ><b-icon :icon="row.detailsShowing ? 'chevron-up' : 'chevron-down'"></b-icon></b-button>
                                                        </div>
                                                    </template>


                                                    <template #row-details="">
                                                        <div>
                                                        <div class="w-100 mt-4 ml-2">
                                                            <b-table
                                                                selectable
                                                                ref="table"
                                                                bordered
                                                                head-variant="dark"
                                                                class="
                                                                    w-100
                                                                    border
                                                                "
                                                                @row-selected="
                                                                    onRowSelected
                                                                "
                                                                :select-mode="
                                                                    selectMode
                                                                "
                                                                :items="
                                                                    institutions
                                                                "
                                                                :fields="
                                                                    institutionFields
                                                                "
                                                            >
                                                                <template
                                                                    v-slot:head()="data"
                                                                >
                                                                    <h5
                                                                        class="
                                                                            m-0
                                                                        "
                                                                    >
                                                                        {{
                                                                            data.label
                                                                        }}
                                                                    </h5>
                                                                </template>
                                                                <template
                                                                    #cell(Name)="{
                                                                        item,
                                                                    }"
                                                                >
                                                                    <p
                                                                        class="
                                                                            mb-0
                                                                            mt-2
                                                                        "
                                                                    >
                                                                        {{
                                                                            item.Name
                                                                        }}
                                                                    </p>
                                                                </template>
                                                                <template
                                                                    #cell(selected)="{
                                                                        rowSelected,
                                                                    }"
                                                                >
                                                                    <div>
                                                                        <b-icon
                                                                            v-if="
                                                                                !rowSelected
                                                                            "
                                                                            font-scale="2"
                                                                            icon="check"
                                                                            variant="success"
                                                                        ></b-icon>
                                                                    </div>
                                                                </template>
                                                            </b-table>
                                                        </div>
                                                        </div>
                                                    </template>
                                                </b-table>
                                            </div>
                                            <!-- <ul class="list-group">
                                                <li
                                                    v-for="selectedSubscription in selectedSubscriptions"
                                                    :key="
                                                        selectedSubscription.subscriptionID
                                                    "
                                                    class="list-group-item"
                                                >
                                                    <h4 class="m-2">
                                                        Subscription:
                                                        {{
                                                            selectedSubscription.subscriptionName
                                                        }}
                                                        <b-button
                                                            variant="outline-dark"
                                                            class="float-right"
                                                            v-b-toggle="
                                                                'collapse-' +
                                                                selectedSubscription.subscriptionID
                                                            "
                                                            >Select by
                                                            Institution
                                                            <b-icon
                                                                icon="chevron-down"
                                                            ></b-icon>
                                                        </b-button>
                                                    </h4>
                                                    <b-collapse
                                                        :id="
                                                            'collapse-' +
                                                            selectedSubscription.subscriptionID
                                                        "
                                                        class="mt-2"
                                                    >
                                                        <div class="w-100 mt-4">
                                                            <b-table
                                                                selectable
                                                                ref="table"
                                                                bordered
                                                                head-variant="dark"
                                                                class="
                                                                    w-100
                                                                    border
                                                                "
                                                                @row-selected="
                                                                    onRowSelected
                                                                "
                                                                :select-mode="
                                                                    selectMode
                                                                "
                                                                :items="
                                                                    institutions
                                                                "
                                                                :fields="
                                                                    institutionFields
                                                                "
                                                            >
                                                                <template
                                                                    v-slot:head()="data"
                                                                >
                                                                    <h5
                                                                        class="
                                                                            m-0
                                                                        "
                                                                    >
                                                                        {{
                                                                            data.label
                                                                        }}
                                                                    </h5>
                                                                </template>
                                                                <template
                                                                    #cell(Name)="{
                                                                        item,
                                                                    }"
                                                                >
                                                                    <p
                                                                        class="
                                                                            mb-0
                                                                            mt-2
                                                                        "
                                                                    >
                                                                        {{
                                                                            item.Name
                                                                        }}
                                                                    </p>
                                                                </template>
                                                                <template
                                                                    #cell(selected)="{
                                                                        rowSelected,
                                                                    }"
                                                                >
                                                                    <div>
                                                                        <b-icon
                                                                            v-if="
                                                                                !rowSelected
                                                                            "
                                                                            font-scale="2"
                                                                            icon="check"
                                                                            variant="success"
                                                                        ></b-icon>
                                                                    </div>
                                                                </template>
                                                            </b-table>
                                                        </div>
                                                    </b-collapse>
                                                </li>
                                            </ul>-->
                                        </b-col> 
                                    </b-row>
                                </b-container>
                            </div>
                        </template>
                    </CSACard>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <CSACard title="Preview Users Selected (160)" class="w-100">
                        <template #card-body>
                            <div>
                                <UserList
                                    :customFields="userListFields"
                                ></UserList>
                            </div>
                        </template>
                    </CSACard>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import UserList from "./UserList.vue";
import CSACard from "./WrapperComponents/CSACard.vue";
import csaTypes from "../misc/csaTypes";
import Logo from "./WrapperComponents/Logo.vue";

export default {
    components: { UserList, CSACard, Logo },
    data() {
        return {
            subFilter: '',
            productNames: csaTypes.products,
            licensingTypeOptions: csaTypes.licensingTypeOptions,
            selectedId: null,
            selectedSubscriptions: [],
            selectedInstitutions: [],
            institutionFields: [
                { key: "Name", label: "Institution Name" },
                { key: "selected", label: "Select Users from Institution" },
            ],
            
            subscriptions: { ArrayList: [ { subscriptionID: 54327, subscriptionName: "SHERIDAN ELEMENTARY SCHOOL", licensingTypeID: 1, productID: 1, salesForceContractID: "80033000002o240AAA", salesForceContractNumber: "00058706", startsOn: "2017-08-01T04:00:00Z", expiresOn: "2022-07-31T04:00:00Z", isActive: true, isExpired: false, tenantID: 1496, sourceID: 0, notes: null, mainInstitutionName: "SHERIDAN ELEMENTARY SCHOOL", mainInstitutionID: 54643, institutionTypeID: 4, city: "ORANGE COVE", stateCode: "CA", upgradeAllowed: true, extraSubscriptionAccessJson: null, }, { subscriptionID: 101080, subscriptionName: "Kennerley, Tonya", licensingTypeID: 8, productID: 1, salesForceContractID: null, salesForceContractNumber: null, startsOn: "2015-09-09T04:00:00Z", expiresOn: "2022-07-31T04:00:00Z", isActive: true, isExpired: false, tenantID: 1496, sourceID: 0, notes: null, mainInstitutionName: "MCCORD ELEMENTARY SCHOOL", mainInstitutionID: 54639, institutionTypeID: 4, city: "ORANGE COVE", stateCode: "CA", upgradeAllowed: true, extraSubscriptionAccessJson: null, }, { subscriptionID: 102590, subscriptionName: "Cory, Sonia", licensingTypeID: 8, productID: 1, salesForceContractID: null, salesForceContractNumber: null, startsOn: "2015-09-15T04:00:00Z", expiresOn: "2022-07-31T04:00:00Z", isActive: true, isExpired: false, tenantID: 1496, sourceID: 0, notes: null, mainInstitutionName: "MCCORD ELEMENTARY SCHOOL", mainInstitutionID: 54639, institutionTypeID: 4, city: "ORANGE COVE", stateCode: "CA", upgradeAllowed: true, extraSubscriptionAccessJson: null, }, { subscriptionID: 155630, subscriptionName: "Thiesen, Amy", licensingTypeID: 8, productID: 1, salesForceContractID: null, salesForceContractNumber: null, startsOn: "2016-11-02T04:00:00Z", expiresOn: "2022-07-31T04:00:00Z", isActive: true, isExpired: false, tenantID: 1496, sourceID: 0, notes: null, mainInstitutionName: "RIVERVIEW ELEMENTARY SCHOOL", mainInstitutionID: 54642, institutionTypeID: 4, city: "PARLIER", stateCode: "CA", upgradeAllowed: true, extraSubscriptionAccessJson: null, }, { subscriptionID: 158685, subscriptionName: "Rodriguez, Heather", licensingTypeID: 8, productID: 1, salesForceContractID: null, salesForceContractNumber: null, startsOn: "2016-11-18T05:00:00Z", expiresOn: "2022-07-31T04:00:00Z", isActive: true, isExpired: false, tenantID: 1496, sourceID: 0, notes: null, mainInstitutionName: "RIVERVIEW ELEMENTARY SCHOOL", mainInstitutionID: 54642, institutionTypeID: 4, city: "PARLIER", stateCode: "CA", upgradeAllowed: true, extraSubscriptionAccessJson: null, }, ], }.ArrayList,
            institutions: [ { InstitutionID: 92, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "EDISON-BETHUNE CHARTER ACADEMY", PID: "57089", StateCode: "CA", CountryCode: "USA", PostalCode: "93706", City: "FRESNO", Enrollment: 576, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0xBB6437BD804AFF547F2BF7434D56420EDAE6070C", IsActive: true, ModifiedByID: 0, ModifiedOn: "2017-11-30 16:36:55.0100000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 93, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "ALICE WORSLEY SCHOOL", PID: "59154", StateCode: "CA", CountryCode: "USA", PostalCode: "93725", City: "FRESNO", Enrollment: 300, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x276C0D9DAC259088673D6BF9B55FC3581906F1C0", IsActive: true, ModifiedByID: 0, ModifiedOn: "2013-06-11 13:46:11.2066667", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 94, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "RAMACHER SCHOOL", PID: "59166", StateCode: "CA", CountryCode: "USA", PostalCode: "93728", City: "FRESNO", Enrollment: 70, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x61ED6107B8E98C9933DBA1300BB6B6E168DF697B", IsActive: true, ModifiedByID: 0, ModifiedOn: "2015-02-09 16:13:44.2100000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 95, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "SUTHERLAND CENTER", PID: "59219", StateCode: "CA", CountryCode: "USA", PostalCode: "93630", City: "KERMAN", Enrollment: 124, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x0A540B6C550861212D2E52E46A9B7693D6E606C3", IsActive: true, ModifiedByID: 0, ModifiedOn: "2017-01-03 17:00:24.9200000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 96, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "MONTE VISTA SCHOOL", PID: "1553892", StateCode: "CA", CountryCode: "USA", PostalCode: "93654", City: "REEDLEY", Enrollment: 155, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x23078301B4DBB33F6408F91588FA0A9E7AC27020", IsActive: true, ModifiedByID: 0, ModifiedOn: "2011-08-10 12:45:34.4833333", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 97, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "TEILMAN COMMUNITY DAY", PID: "4897427", StateCode: "CA", CountryCode: "USA", PostalCode: "93706", City: "FRESNO", Enrollment: 205, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x4E8344EFF865EB3201CE78C224C6E6AB1E288281", IsActive: false, ModifiedByID: 0, ModifiedOn: "2018-06-05 15:05:56.9700000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 98, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "VIOLET HEINTZ ED ACADEMY", PID: "4897441", StateCode: "CA", CountryCode: "USA", PostalCode: "93609", City: "CARUTHERS", Enrollment: 200, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x4C1D123D201960E3E185DD0A956E3625BADAE55C", IsActive: false, ModifiedByID: 0, ModifiedOn: "2018-06-05 15:05:56.9700000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 99, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "DNA COMMUNITY SCHOOL", PID: "4953617", StateCode: "CA", CountryCode: "USA", PostalCode: "93722", City: "FRESNO", Enrollment: 12, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0xF34ABC0B01D9BE2EFDBCA387FDDE4FA22492CE36", IsActive: true, ModifiedByID: 0, ModifiedOn: "2013-12-16 14:59:18.4066667", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 100, TenantID: 2883, InstitutionTypeID: 4, ParentInstitutionID: 3364, Name: "HUME LAKE CHARTER SCHOOL", PID: "10755754", StateCode: "CA", CountryCode: "USA", PostalCode: "93628", City: "HUME", Enrollment: 64, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x4F52AA0EC5C9B1131796BABE22A02DE43D8F87D7", IsActive: true, ModifiedByID: 0, ModifiedOn: "2017-11-30 16:36:55.0100000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, { InstitutionID: 3364, TenantID: 2883, InstitutionTypeID: 7, ParentInstitutionID: null, Name: "FRESNO CO OFFICE OF EDUCATION", PID: "59128", StateCode: "CA", CountryCode: "USA", PostalCode: "93721", City: "FRESNO", Enrollment: null, StartOfSchoolDay: null, StartOfSchoolMonth: null, DefaultLanguageID: null, AllowRolesToEnrollStudents: false, SalesforceAccountID: null, EnableBatchImport: false, ExternalSchoolID: null, Hash: "0x8762F2A7F9E5884563DE0309B5FFCC6DE1F20A79", IsActive: true, ModifiedByID: 0, ModifiedOn: "2018-06-05 15:05:56.9700000", CreatedByID: 0, CreatedOn: "2010-01-27 12:12:00.0000000", }, ],
            userListFields: [ { label: "Full Name", key: "fullName" }, { label: "Institution", key: "institutionName" }, { label: "Login ID", key: "loginID" }, { label: "Role", key: "roleID", sortable: true }, { label: "Username", key: "username" }, { label: "Email", key: "email" }, { label: "Last Login", key: "lastLoginOn" }, { label: "Deleted", key: "isDeleted" }, { label: "Products", key: "products" }, ],
        };
    },
    methods: {
        subscriptionSelected(subscriptionID) {
            console.log(subscriptionID);
            const x = this.subscriptions.find(
                (x) => x.subscriptionID === subscriptionID
            );
            console.log(x);
            if (!x) return;
            this.selectedSubscriptions.push(x);
        },
        institutionSelected(id) {
            this.selectedInstitutions.push(
                this.institutions.find((inst) => inst.InstitutionID === id)
            );
        },
        subscriptionOption(subscription) {
            const mainSubsInfo = `${subscription.subscriptionName} (${
                csaTypes.licensingTypeOptions[subscription.licensingTypeID]
            })`;
            return subscription.salesForceContractID
                ? `${mainSubsInfo} SalesForce Contract ID: ${subscription.salesForceContractID}`
                : mainSubsInfo;
        },
    },
    created() {
        this.selectedSubscriptions.push(this.subscriptions[0]);

        this.$refs.table.selectAllRows();
    },
};
</script>

<style lang="scss" scoped>
</style>