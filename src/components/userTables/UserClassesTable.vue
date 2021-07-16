<template>
    <div>

        <b-table
        
            :items="items"
            :current-page="currentPage"
            :per-page="perPage"
            :fields="fields"
            striped
            bordered
            head-variant="dark"
            ><template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>

            <template #cell(classOwner)="{item}">
                <div>
                    {{item.ownerFirstname}} {{item.ownerLastname}}
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
    export default {
        props: {
            items: {
                type: Array,
                default: () => {return {"ArrayList":[{"classID":799488,"className":"My First Class","classShortName":null,"institutionID":68266,"ownerLoginID":10036950,"assignmentInfo":null,"startDate":null,"endDate":null,"createdOn":"2019-09-09T15:17:17.348317500Z","enrollmentCode":null,"ownerFirstname":"Brianne","ownerLastname":"Prickett","institutionName":"HARLOE ELEMENTARY SCHOOL","classRostered":false}]}.ArrayList}
            },
        },
        data() {
            return {
                fields: [
                    {
                        key: "className",
                        label: "Class Name"
                    },
                    {
                        key: "classID",
                        label: "Class ID"
                    },
                    {
                        key: "institutionName",
                        label: "Institution Nme"
                    },
                    {
                        key: "classOwner",
                        label: "Class Owner"
                    },
                    {
                        key: "assignmentInfo",
                        label: "Assignment"
                    },
                    {
                        key: "classID",
                        label: "Created On"
                    }
                ],
                perPage: 10,
                currentPage: 1,
            };
        },

        computed: {
            showPagination() {
                return this.items.length > this.perPage;
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>