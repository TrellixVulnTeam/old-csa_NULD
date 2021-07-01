<template>
    <div>
        <b-table
                    :filter="filter"
                    selectable
                    select-mode="single"
                    @row-selected="onRowSelected"
                    striped
                    hover
                    bordered
                    head-variant="dark"
                    class="w-100 border"
                    :items="items"
                    :fields="fields"
                    :per-page="perPage"
                    :current-page="currentPage"
                >
                    <template v-slot:head()="data">
                        <h5 class="m-0">
                            {{ data.label }}
                        </h5>
                    </template>


                    <template #cell(productID)="{value}">
                        <div>
                            <Logo :productId="value" :product="productNames[value].toLowerCase()"></Logo>
                        </div>
                    </template>
                    <template #cell(licensingTypeID)="{value}">
                        <div>
                            {{licensingTypeNames[value]}}
                        </div>
                    </template>
                    <template #cell(cityState)="{item}">
                        <div>
                            {{item.city}}, {{item.stateCode}}
                        </div>
                    </template>

                    <template #cell(duration)="{item}">
                        <div>
                            {{item.startsOn | toDate}} - {{item.expiresOn | toDate}}
                        </div>
                    </template>
                    <template #cell(sourceID)="{value}">
                        <div>
                            {{sourceTypes[value]}}
                        </div>
                    </template>
        </b-table>
        <b-pagination
            v-if="showPagination"
            size="md"
            class="w-50 m-auto"
            v-model="currentPage"
            :total-rows="items.length"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
        ></b-pagination>
    </div>
</template>

<script>
import csaTypes from "../misc/csaTypes";
import Logo from './WrapperComponents/Logo.vue';

export default {
    components: { Logo },
    props: {
        filter: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            items: {"ArrayList":[{"subscriptionID":54327,"subscriptionName":"SHERIDAN ELEMENTARY SCHOOL","licensingTypeID":1,"productID":1,"salesForceContractID":"80033000002o240AAA","salesForceContractNumber":"00058706","startsOn":"2017-08-01T04:00:00Z","expiresOn":"2022-07-31T04:00:00Z","isActive":true,"isExpired":false,"tenantID":1496,"sourceID":0,"notes":null,"mainInstitutionName":"SHERIDAN ELEMENTARY SCHOOL","mainInstitutionID":54643,"institutionTypeID":4,"city":"ORANGE COVE","stateCode":"CA","upgradeAllowed":true,"extraSubscriptionAccessJson":null},{"subscriptionID":101080,"subscriptionName":"Kennerley, Tonya","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2015-09-09T04:00:00Z","expiresOn":"2022-07-31T04:00:00Z","isActive":true,"isExpired":false,"tenantID":1496,"sourceID":0,"notes":null,"mainInstitutionName":"MCCORD ELEMENTARY SCHOOL","mainInstitutionID":54639,"institutionTypeID":4,"city":"ORANGE COVE","stateCode":"CA","upgradeAllowed":true,"extraSubscriptionAccessJson":null},{"subscriptionID":102590,"subscriptionName":"Cory, Sonia","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2015-09-15T04:00:00Z","expiresOn":"2022-07-31T04:00:00Z","isActive":true,"isExpired":false,"tenantID":1496,"sourceID":0,"notes":null,"mainInstitutionName":"MCCORD ELEMENTARY SCHOOL","mainInstitutionID":54639,"institutionTypeID":4,"city":"ORANGE COVE","stateCode":"CA","upgradeAllowed":true,"extraSubscriptionAccessJson":null},{"subscriptionID":155630,"subscriptionName":"Thiesen, Amy","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2016-11-02T04:00:00Z","expiresOn":"2022-07-31T04:00:00Z","isActive":true,"isExpired":false,"tenantID":1496,"sourceID":0,"notes":null,"mainInstitutionName":"RIVERVIEW ELEMENTARY SCHOOL","mainInstitutionID":54642,"institutionTypeID":4,"city":"PARLIER","stateCode":"CA","upgradeAllowed":true,"extraSubscriptionAccessJson":null},{"subscriptionID":158685,"subscriptionName":"Rodriguez, Heather","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2016-11-18T05:00:00Z","expiresOn":"2022-07-31T04:00:00Z","isActive":true,"isExpired":false,"tenantID":1496,"sourceID":0,"notes":null,"mainInstitutionName":"RIVERVIEW ELEMENTARY SCHOOL","mainInstitutionID":54642,"institutionTypeID":4,"city":"PARLIER","stateCode":"CA","upgradeAllowed":true,"extraSubscriptionAccessJson":null}]}.ArrayList,
            fields: [
                {label: "Subscription Name", key: "subscriptionName"},
                {label: "ID", key: "subscriptionID"},
                {label: "Product", key: "productID"},
                {label: "Type" , key: "licensingTypeID"},
                {label: "SF Contract" , key: "salesForceContractID"},
                {label: "Main Institution" 	, key: "mainInstitutionName" },
                {label: "City/State" , key: "cityState"},//"stateCode", "city"
                {label: "Duration" , key: "duration"},
                {label: "Source" 	, key: "sourceID"},
                {label: "Notes", key:"notes" },
            ],
            productNames: csaTypes.products,
            perPage: 10,
            currentPage: 1,
            userTypes: csaTypes.loginRoleAllOptions,
            licensingTypeNames: csaTypes.licensingTypeOptions,
            sourceTypes: csaTypes.subSourceOptions,
        };
    },
    methods: {
        onRowSelected() {},
    },
    computed: {
        showPagination() {
            return this.items.length > this.perPage;
        },
    },
    filters: {
        toDate: function(value) {
            return new Date(value).toLocaleDateString();
        }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>