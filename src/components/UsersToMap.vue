<template>
    <div>
        <div class="mx-0 px-0">
            <b-row class="mx-0 px-0">
                <b-col class="mx-0 px-0">
                    <card class="card shadow w-100 mb-4">
                        <b-card-header
                            header-bg-variant="white"
                            header-border-variant="white"
                            class="pb-0"
                        >
                            <h3 class="m-0">Select Users</h3>
                        </b-card-header>
                        <b-collapse v-model="selectUsersVisible">
                            <b-card-body>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <div class="input-group mb-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        id="addBySubLabel"
                                                        >Source
                                                        Subscription</span
                                                    >
                                                </div>

                                                <b-form-input
                                                    list="mappable-subscription-list-id"
                                                    @input="
                                                        subscriptionSelected
                                                    "
                                                    style="
                                                        border-bottom-right-radius: 3px;
                                                        border-top-right-radius: 3px;
                                                    "
                                                ></b-form-input>

                                                <datalist
                                                    id="mappable-subscription-list-id"
                                                >
                                                    <option
                                                        v-for="option in subscriptions"
                                                        :key="
                                                            option.subscriptionID
                                                        "
                                                        :value="
                                                            option.subscriptionID
                                                        "
                                                    >
                                                        {{
                                                            option.subscriptionName
                                                        }}
                                                    </option>
                                                </datalist>
                                            </div>
                                            <ul class="list-group">
                                                <li
                                                    v-for="selectedSubscription in selectedSubscriptions"
                                                    :key="
                                                        selectedSubscription.subscriptionID
                                                    "
                                                    class="list-group-item"
                                                >
                                                    <h4 class="my-2 float-left">
                                                        Subscription:
                                                        {{
                                                            selectedSubscription.subscriptionName
                                                        }}
                                                    </h4>
                                                    <b-button
                                                        variant="outline-dark"
                                                        class="float-right"
                                                        v-b-toggle="
                                                            'collapse-' +
                                                            selectedSubscription.subscriptionID
                                                        "
                                                        >Select by Institution
                                                        <b-icon
                                                            icon="chevron-down"
                                                        ></b-icon>
                                                    </b-button>
                                                    <b-collapse
                                                        :id="
                                                            'collapse-' +
                                                            selectedSubscription.subscriptionID
                                                        "
                                                        class="mt-3"
                                                    >
                                                        <div class="w-100 mt-5">
                                                            <b-table
                                                                selectable
                                                                ref="table"
                                                                bordered
                                                                head-variant="dark"
                                                                class="
                                                                    w-100
                                                                    mb-2
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
                                                                                rowSelected
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
                                            </ul>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-card-body>
                        </b-collapse>
                        <b-row>
                            <b-col>
                                <b-button
                                    :hidden="hideCaret"
                                    @click="
                                        selectUsersVisible = !selectUsersVisible
                                    "
                                    variant="white"
                                >
                                    <b-icon
                                        :icon="collapseSelectUsers"
                                        font-scale="2"
                                    ></b-icon>
                                </b-button>
                            </b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <card class="card shadow w-100 mb-4">
                        <b-card-header
                            header-bg-variant="white"
                            header-border-variant="white"
                            class="pb-0"
                        >
                            <h3 class="m-0">Users Selected (115)</h3>
                        </b-card-header>
                        <b-collapse v-model="usersSelectedVisible">
                            <b-card-body>
                                <div>
                                    <user-list></user-list>
                                </div>
                            </b-card-body>
                        </b-collapse>
                        <b-row>
                            <b-col>
                                <b-button
                                    :hidden="hideCaret"
                                    @click="
                                        usersSelectedVisible =
                                            !usersSelectedVisible
                                    "
                                    variant="white"
                                >
                                    <b-icon
                                        :icon="collapseUsersSelected"
                                        font-scale="2"
                                    ></b-icon>
                                </b-button>
                            </b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import UserList from "./UserList.vue";

    export default {
        components: { UserList },
        data() {
            return {
                selectedId: null,
                selectUsersVisible: true,
                usersSelectedVisible: false,
                selectedSubscriptions: [],
                selectedInstitutions: [],
                institutionFields: [
                    { key: "Name", label: "Institution Name" },
                    { key: "selected", label: "Select Users from Institution" },
                ],
                subscriptions: {
                    ArrayList: [
                        {
                            subscriptionID: 54327,
                            subscriptionName: "SHERIDAN ELEMENTARY SCHOOL",
                            licensingTypeID: 1,
                            productID: 1,
                            salesForceContractID: "80033000002o240AAA",
                            salesForceContractNumber: "00058706",
                            startsOn: "2017-08-01T04:00:00Z",
                            expiresOn: "2022-07-31T04:00:00Z",
                            isActive: true,
                            isExpired: false,
                            tenantID: 1496,
                            sourceID: 0,
                            notes: null,
                            mainInstitutionName: "SHERIDAN ELEMENTARY SCHOOL",
                            mainInstitutionID: 54643,
                            institutionTypeID: 4,
                            city: "ORANGE COVE",
                            stateCode: "CA",
                            upgradeAllowed: true,
                            extraSubscriptionAccessJson: null,
                        },
                        {
                            subscriptionID: 101080,
                            subscriptionName: "Kennerley, Tonya",
                            licensingTypeID: 8,
                            productID: 1,
                            salesForceContractID: null,
                            salesForceContractNumber: null,
                            startsOn: "2015-09-09T04:00:00Z",
                            expiresOn: "2022-07-31T04:00:00Z",
                            isActive: true,
                            isExpired: false,
                            tenantID: 1496,
                            sourceID: 0,
                            notes: null,
                            mainInstitutionName: "MCCORD ELEMENTARY SCHOOL",
                            mainInstitutionID: 54639,
                            institutionTypeID: 4,
                            city: "ORANGE COVE",
                            stateCode: "CA",
                            upgradeAllowed: true,
                            extraSubscriptionAccessJson: null,
                        },
                        {
                            subscriptionID: 102590,
                            subscriptionName: "Cory, Sonia",
                            licensingTypeID: 8,
                            productID: 1,
                            salesForceContractID: null,
                            salesForceContractNumber: null,
                            startsOn: "2015-09-15T04:00:00Z",
                            expiresOn: "2022-07-31T04:00:00Z",
                            isActive: true,
                            isExpired: false,
                            tenantID: 1496,
                            sourceID: 0,
                            notes: null,
                            mainInstitutionName: "MCCORD ELEMENTARY SCHOOL",
                            mainInstitutionID: 54639,
                            institutionTypeID: 4,
                            city: "ORANGE COVE",
                            stateCode: "CA",
                            upgradeAllowed: true,
                            extraSubscriptionAccessJson: null,
                        },
                        {
                            subscriptionID: 155630,
                            subscriptionName: "Thiesen, Amy",
                            licensingTypeID: 8,
                            productID: 1,
                            salesForceContractID: null,
                            salesForceContractNumber: null,
                            startsOn: "2016-11-02T04:00:00Z",
                            expiresOn: "2022-07-31T04:00:00Z",
                            isActive: true,
                            isExpired: false,
                            tenantID: 1496,
                            sourceID: 0,
                            notes: null,
                            mainInstitutionName: "RIVERVIEW ELEMENTARY SCHOOL",
                            mainInstitutionID: 54642,
                            institutionTypeID: 4,
                            city: "PARLIER",
                            stateCode: "CA",
                            upgradeAllowed: true,
                            extraSubscriptionAccessJson: null,
                        },
                        {
                            subscriptionID: 158685,
                            subscriptionName: "Rodriguez, Heather",
                            licensingTypeID: 8,
                            productID: 1,
                            salesForceContractID: null,
                            salesForceContractNumber: null,
                            startsOn: "2016-11-18T05:00:00Z",
                            expiresOn: "2022-07-31T04:00:00Z",
                            isActive: true,
                            isExpired: false,
                            tenantID: 1496,
                            sourceID: 0,
                            notes: null,
                            mainInstitutionName: "RIVERVIEW ELEMENTARY SCHOOL",
                            mainInstitutionID: 54642,
                            institutionTypeID: 4,
                            city: "PARLIER",
                            stateCode: "CA",
                            upgradeAllowed: true,
                            extraSubscriptionAccessJson: null,
                        },
                    ],
                }.ArrayList,
                institutions: [
                    {
                        InstitutionID: 92,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "EDISON-BETHUNE CHARTER ACADEMY",
                        PID: "57089",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93706",
                        City: "FRESNO",
                        Enrollment: 576,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0xBB6437BD804AFF547F2BF7434D56420EDAE6070C",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2017-11-30 16:36:55.0100000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 93,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "ALICE WORSLEY SCHOOL",
                        PID: "59154",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93725",
                        City: "FRESNO",
                        Enrollment: 300,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x276C0D9DAC259088673D6BF9B55FC3581906F1C0",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2013-06-11 13:46:11.2066667",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 94,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "RAMACHER SCHOOL",
                        PID: "59166",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93728",
                        City: "FRESNO",
                        Enrollment: 70,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x61ED6107B8E98C9933DBA1300BB6B6E168DF697B",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2015-02-09 16:13:44.2100000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 95,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "SUTHERLAND CENTER",
                        PID: "59219",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93630",
                        City: "KERMAN",
                        Enrollment: 124,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x0A540B6C550861212D2E52E46A9B7693D6E606C3",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2017-01-03 17:00:24.9200000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 96,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "MONTE VISTA SCHOOL",
                        PID: "1553892",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93654",
                        City: "REEDLEY",
                        Enrollment: 155,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x23078301B4DBB33F6408F91588FA0A9E7AC27020",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2011-08-10 12:45:34.4833333",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 97,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "TEILMAN COMMUNITY DAY",
                        PID: "4897427",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93706",
                        City: "FRESNO",
                        Enrollment: 205,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x4E8344EFF865EB3201CE78C224C6E6AB1E288281",
                        IsActive: false,
                        ModifiedByID: 0,
                        ModifiedOn: "2018-06-05 15:05:56.9700000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 98,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "VIOLET HEINTZ ED ACADEMY",
                        PID: "4897441",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93609",
                        City: "CARUTHERS",
                        Enrollment: 200,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x4C1D123D201960E3E185DD0A956E3625BADAE55C",
                        IsActive: false,
                        ModifiedByID: 0,
                        ModifiedOn: "2018-06-05 15:05:56.9700000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 99,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "DNA COMMUNITY SCHOOL",
                        PID: "4953617",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93722",
                        City: "FRESNO",
                        Enrollment: 12,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0xF34ABC0B01D9BE2EFDBCA387FDDE4FA22492CE36",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2013-12-16 14:59:18.4066667",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 100,
                        TenantID: 2883,
                        InstitutionTypeID: 4,
                        ParentInstitutionID: 3364,
                        Name: "HUME LAKE CHARTER SCHOOL",
                        PID: "10755754",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93628",
                        City: "HUME",
                        Enrollment: 64,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x4F52AA0EC5C9B1131796BABE22A02DE43D8F87D7",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2017-11-30 16:36:55.0100000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                    {
                        InstitutionID: 3364,
                        TenantID: 2883,
                        InstitutionTypeID: 7,
                        ParentInstitutionID: null,
                        Name: "FRESNO CO OFFICE OF EDUCATION",
                        PID: "59128",
                        StateCode: "CA",
                        CountryCode: "USA",
                        PostalCode: "93721",
                        City: "FRESNO",
                        Enrollment: null,
                        StartOfSchoolDay: null,
                        StartOfSchoolMonth: null,
                        DefaultLanguageID: null,
                        AllowRolesToEnrollStudents: false,
                        SalesforceAccountID: null,
                        EnableBatchImport: false,
                        ExternalSchoolID: null,
                        Hash: "0x8762F2A7F9E5884563DE0309B5FFCC6DE1F20A79",
                        IsActive: true,
                        ModifiedByID: 0,
                        ModifiedOn: "2018-06-05 15:05:56.9700000",
                        CreatedByID: 0,
                        CreatedOn: "2010-01-27 12:12:00.0000000",
                    },
                ],
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
        },
        created() {
            this.selectedSubscriptions.push(this.subscriptions[0]);

            this.$refs.table.selectAllRows();
        },
        computed: {
            collapseSelectUsers() {
                return this.selectUsersVisible ? "chevron-up" : "chevron-down";
            },
            collapseUsersSelected() {
                return this.usersSelectedVisible ? "chevron-up" : "chevron-down";
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>