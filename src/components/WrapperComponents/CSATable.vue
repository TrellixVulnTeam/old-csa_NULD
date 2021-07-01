<template>
    <div>
        <!-- TODO: add filter and export button -->

        <b-card class="mb-0 pb-0">
            <div>
                <b-button v-if="showExport" variant="outline-dark">
                    Export All</b-button
                >
            </div>

            <div class="">
                <b-row>
                    <b-col>
                        <h6 class="m-2 float-right">
                            <b-button variant="outline-dark" size="sm"
                                >Clear all filters</b-button
                            >
                            <b-dropdown
                                variant="outline-dark"
                                class="m-2"
                                text="Entries: 5"
                                size="sm"
                            >
                            </b-dropdown>
                        </h6>
                        <h6 class="m-2 float-right">
                            <b-button-group>
                                <b-button class="mt-2" variant="none" size="sm"
                                    >Active
                                </b-button>
                                <b-button class="mt-2" variant="none" size="sm">
                                    <b-icon icon="x"></b-icon
                                ></b-button>
                            </b-button-group>
                        </h6>
                    </b-col>
                    <b-col>
                        <b-input-group class="mt-3 float-right">
                            <b-input-group-prepend>
                                <!-- <b-input-group-text>Search Filter</b-input-group-text> -->
                            </b-input-group-prepend>
                            <b-form-input
                                placeholder="Quick Filter"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-dropdown variant="info" v-if="filterItems">
                                    <template #button-content>
                                        <b-icon icon="funnel"></b-icon>
                                    </template>
                                    <b-dropdown-item-button
                                        v-for="item in filterItems"
                                        :key="item.text"
                                        >{{ item.text }}</b-dropdown-item-button
                                    >
                                </b-dropdown>
                            </b-input-group-append>
                        </b-input-group>
                    </b-col>
                </b-row>
            </div>
        </b-card>
        <b-table
            sortable
            selectable
            hover
            :items="tableItems"
            :fields="tableHeaders"
            :per-page="perPage"
            :current-page="currentPage"
        ></b-table>
        <b-pagination
            v-if="showPagination"
            class=""
            :value="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
        ></b-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array,
            headers: {
                type: Array,
                default: null,
            },
            suggestedTotalRows: {
                type: Number,
                default: 8,
            },
            suggestedPerPage: {
                type: Number,
                default: 8,
            },
            filter: {
                type: Boolean,
                default: false,
            },
            filterItems: {
                type: Array,
                // default: null
                default: () => [{ text: "Valid" }],
            },
            showExport: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                currentPage: 1,
                shownFilterItems: [],
            };
        },
        computed: {
            tableItems() {
                return this.items;
            },
            tableHeaders() {
                if (this.headers) return this.headers;
                return Object.keys(this.tableItems[0]).map((x) => {
                    return { label: x, key: x, sortable: true };
                });
            },
            totalRows() {
                return this.suggestedTotalRows;
            },
            perPage() {
                return this.suggestedPerPage;
            },
            showPagination() {
                return this.items.length > this.totalRows;
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>