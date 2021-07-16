<template>
    <div>
        <b-input-group class="my-3" prepend="Filter">
            <b-form-input v-model="filter"></b-form-input>
        </b-input-group>

        <b-dropdown
            variant="outline-dark"
            class="mb-3 float-left"
            :text="'Items per Page: ' + perPage"
            size="md"
        >
            <b-dropdown-item
                v-for="pageOption in [5, 10, 25, 50, 100]"
                @click="perPage = pageOption"
                :key="pageOption"
                >{{ pageOption }}
            </b-dropdown-item>
        </b-dropdown>

        <b-table
            :filter="filter"
            :fields="fields"
            :items="parentInstitutions"
            :per-page="perPage"
            :current-page="currentPage"
            head-variant="dark"
            outlined
            bordered
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
    // import innerTable from "./innerTable.vue";
    import institutions from "../../misc/institutionList.json";
    export default {
        // components: { innerTable },
        props: {
            filter: {
                type: String,
                default: "",
            },
        },
        data() {
            return {
                allInsts: [],
                fields: [
                    { key: "institutionName", sortable: true },
                    { key: "pid", sortable: true },
                    { key: "city", sortable: true },
                    { key: "stateCode", sortable: true },
                    { key: "postalCode", sortable: true },
                    { key: "enrollment", sortable: true },
                ],
                institutions: [],
                parentInstitutions: [],
                perPage: 10,
                currentPage: 1,
            };
        },
        methods: {
            onRowSelected() {},
            loadInsitituions() {
                this.allInsts = institutions.ArrayList;
                this.institutions = this.allInsts.filter(
                    (x) => x.parentInstitutionID == 0
                );
            },
            loadParentInsitituions() {
                this.parentInstitutions = institutions.ArrayList.filter(
                    (e) => e.parentInstitutionID == 0
                );
            },
            subItems(item) {
                console.log(item);
                return this.allInsts.filter(
                    (x) => x.parentInstitutionID == item.institutionID
                );
            },
        },
        computed: {
            showPagination() {
                return this.items.length > this.perPage;
            },
        },
        created() {
            this.loadInsitituions();
            this.loadParentInsitituions();
        },
    };
</script>

<style lang="scss" scoped>
</style>
