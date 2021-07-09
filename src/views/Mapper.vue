<template>
    <div class="mt-4">
        <h2 class="pb-2">Select Umbrella</h2>

        <CSACard
            title=""
            :bodyVisible="true"
            :hideCaret="true"
            class="w-100 px-4"
        >
            <template #card-body>
                <b-row class="w-100">
                    <b-col class="p-0"  cols="6">
                        <h3 class="mb-3">Source Umbrella</h3>
                    </b-col>
                    <b-col cols="2"></b-col>
                    <b-col  cols="4">
                        <h3 class="mb-3">Destination Umbrella</h3>
                    </b-col>
                </b-row>
                <b-row class="w-100 mt-3" align-v="center" align-h="center">
                    <b-col class="p-0" cols="6">
                        <SelectTenant></SelectTenant>
                    </b-col>
                    <b-col cols="2">
                        <p>
                            <b-icon
                                icon="arrow-right"
                                variant="el-light-dark"
                                font-scale="4"
                            ></b-icon>
                        </p>
                    </b-col>
                    <b-col class="p-0" cols="4">
                        <div class="mb-5">

                            <h3 class=" mb-3">Miami High</h3>
                            <b-row>
                              <b-col>

                            <strong>Non Site Subscriptions</strong>
                            <p>Teacher Subscription</p>
                              </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </template>
        </CSACard>
    </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
import SelectTenant from "../components/SelectTenant.vue";
export default {
    components: { SelectTenant, CSACard },
    data() {
        return {
            types: { Umbrella: "Umbrella" },
        };
    },
};
</script>

<style lang="scss">
@media only screen and (min-width: 768px) {
    .is-table-row {
        display: table;
    }
    .is-table-row [class*="col-"] {
        float: none;
        display: table-cell;
        vertical-align: top;
    }
}

.is-table-row .box {
    background: none;
    position: static;
}
</style>