<template>
    <div>

          <b-badge class="m-4 text-black" pill
            style="background-color:#f5c6ca; "
            ><span class="text-black" style="color:black">
                Sessions &#60;5secs, user could be having login issues.</span>
            </b-badge>


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
            <template #cell(startOn)="{value}">
                <div>
                    {{new Date(value).toLocaleString()}} 
                </div>
            </template>
            <template #cell(endOn)="{value}">
                <div>
                    {{new Date(value).toLocaleString()}} 
                </div>
            </template>
            <template #cell(duration)="{value}">
                <div class="font-weight-bold">
                    {{value}} 
                </div>
            </template>
            <template #cell(localStartOn)="{value}">
                <div>
                    {{new Date(value).toLocaleString()}} 
                </div>
            </template>
            <template #cell(productID)="{value}">
                <div>
                    <Logo :product="productTypes[value].toLowerCase()"
                                                                style="
                                                                    height: 40px;
                                                                "
                                                            ></Logo>
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
import csaTypes from "../../misc/csaTypes"
import loginHistory from "../../misc/UserLoginHistory.json";
import Logo from '../WrapperComponents/Logo.vue';

const defaultItems = loginHistory.ArrayList.map(item => {
    const milliSec = 1000;
    const fiveMilliSecs = 5 * milliSec;
    item.duration = csaTypes.timeSince(new Date(item.startOn), new Date(item.endOn)); 
    item._rowVariant =  new Date(item.endOn) - new Date(item.startOn) <= fiveMilliSecs ? 'danger' : '';
    return item;
})
    export default {
    components: { Logo },
        props: {
            items: {
                type: Array,
                default: () => {return defaultItems}
            },
        },
        data() {
            return {
                productTypes: csaTypes.products,
                fields: [
                    {
                        label: "Started On",
                        key: "startOn"},
                    {
                        label: "Ended On",
                        key: "endOn"},{
                        label: "Duration",
                        key: "duration"},
                    {
                        label: "Local Start Time",
                        key: "localStartOn"},
                    {
                        label: "Time Offset",
                        key: "localTimeOffset"},
                    {
                        label: "Server Nodes",
                        key: "nodes"},
                    {
                        label: "Product",
                        key: "productID"
                    },
                ],
                perPage: 10,
                currentPage: 1,
            };
        },
        methods: {
            timeSinceFunc: csaTypes.timeSince,
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