<template>
    <div class="w-100 h-100">
        <b-row>
            <b-col>
                <div class="mb-3">
                    <h1 class="display-4">Move Users</h1>
                </div>
            </b-col>
        </b-row>
        <b-row class="h-75">
            <b-col>
                <b-card header-tag="header" header-bg-variant="el-light-dark">
                    <template #header class="bg-el-light-dark">
                        <b-tabs pills align="center" style="font-weight: bold">
                            <b-tab
                                v-for="(tab, index) in tabs"
                                :key="index"
                                @click="changeTab(index)"
                                :title="tab.name"
                                :disabled="index % 2 == 1"
                                :title-link-class="linkClass(index)"
                            >
                            </b-tab>
                        </b-tabs>
                    </template>
                    <b-card-text>
                        <Mapper v-if="activeTab == 0"></Mapper>
                        <UsersToMap v-if="activeTab == 2"></UsersToMap>
                        <MapSubscription
                            v-if="activeTab == 4"
                        ></MapSubscription>
                        <MapInstitution v-if="activeTab == 6"></MapInstitution>
                        <div v-if="activeTab == 8" class="mt-4">
                            <h3>Confirm Merge</h3>
                            <b-button size="lg" class="my-4" variant="success"
                                ><h3>Merge</h3></b-button
                            >
                            <PreviewMerge></PreviewMerge>
                        </div>
                        <b-row class="mt-4">
                            <b-col class="p-0">
                                <b-button
                                    size="lg"
                                    variant="el-light-dark"
                                    class="float-left w-25"
                                    @click="changeTab((activeTab -= 2))"
                                    :disabled="activeTab == 0"
                                    >Previous</b-button
                                >
                            </b-col>
                            <b-col class="p-0">
                                <b-button
                                    v-if="activeTab < tabs.length - 1"
                                    size="lg"
                                    variant="el-light-dark"
                                    class="float-right w-25"
                                    @click="changeTab((activeTab += 2))"
                                    >Next</b-button
                                >
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="3" class="h-100">
                <MergeSummary :step="activeTab / 2"></MergeSummary>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import MapInstitution from "../components/MapInstitution.vue";
    import MapSubscription from "../components/MapSubscription.vue";
    import UsersToMap from "../components/UsersToMap.vue";
    import Mapper from "./Mapper.vue";
    import MergeSummary from "./MergeSummary.vue";
    import PreviewMerge from "./PreviewMerge.vue";
    export default {
        components: {
            Mapper,
            PreviewMerge,
            MapSubscription,
            MapInstitution,
            UsersToMap,
            MergeSummary,
        },
        data() {
            return {
                tabs: [
                    { name: "Umbrella", active: true },
                    { name: ">" },
                    { name: "Users", active: false },
                    { name: ">" },
                    { name: "Destination Subscription", active: false },
                    { name: ">" },
                    { name: "Destination Institutions", active: false },
                    { name: ">" },
                    { name: "Confirm", active: false },
                ],
                activeTab: 0,
            };
        },
        methods: {
            changeTab(index) {
                this.tabs[this.activeTab].active = false;
                this.activeTab = index;
                this.tabs[this.activeTab].active = true;
            },
            linkClass(idx) {
                if (this.activeTab === idx) {
                    return ["bg-light", "text-el-light-dark"];
                } else {
                    return ["bg-el-light-dark", "text-light"];
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
    @import "../app.scss";

    .row {
        margin: 0;
    }

    .nav-item {
        font-size: 125%;
    }
</style>