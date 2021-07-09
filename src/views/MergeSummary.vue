<template>
    <div class="">
        <CSACard
            title=""
            :hideCaret="true"
            :bodyVisible="true"
            class="w-100 mb-5"
        >
            <template #card-body>
                <div>
                    <h2>Summary</h2>

                    <b-container class="mb-4">
                        <hr />
                        <b-row class="my-3">
                            <b-col>
                                <b-row class="my-1">
                                    <b-col>
                                        <font-awesome-icon
                                            icon="umbrella"
                                            class="text-blue h3"
                                        />
                                        <h4>Map Umbrella</h4>
                                    </b-col>
                                </b-row>

                                <b-row class="mb-3">
                                    <b-col>
                                        <b-row>
                                            <b-col
                                                cols="3"
                                                class="text-center"
                                                style="
                                                    border-right: 1px solid silver;
                                                "
                                            >
                                                <strong>Source</strong>
                                            </b-col>
                                            <b-col class="text-center">
                                                <p v-if="step > 0" class="m-0">
                                                    Miami A.
                                                </p>
                                                <p v-else class="m-0">-</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col
                                                cols="3"
                                                style="
                                                    border-right: 1px solid silver;
                                                "
                                            ></b-col>
                                            <b-col
                                                ><b-icon
                                                    icon="arrow-down"
                                                ></b-icon
                                            ></b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col
                                                cols="3"
                                                class="text-center"
                                                style="
                                                    border-right: 1px solid silver;
                                                "
                                            >
                                                <strong>Destination</strong>
                                            </b-col>
                                            <b-col class="text-center">
                                                <p v-if="step > 0" class="m-0">
                                                    Miami B.
                                                </p>
                                                <p v-else class="m-0">-</p>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="my-3">
                            <b-col>
                                <b-row>
                                    <b-col>
                                        <font-awesome-icon
                                            class="text-orange h3"
                                            icon="users"
                                        ></font-awesome-icon>
                                        <h4>Users to Move</h4>
                                    </b-col>
                                </b-row>
                                <div v-if="step > 1">
                                    <b-row>
                                        <b-col>
                                            <p class="display-4 mb-0">160
                                                <b-button
                                                    v-b-toggle.x
                                                    variant="white"
                                                    class="pl-0"
                                                >
                                                    <font-awesome-icon
                                                        icon="cloud-download-alt"
                                                        class="h5"
                                                /></b-button>
                                            </p>
                                        </b-col>
                                    </b-row>
                                    <!-- <div class="text-left"><strong>Total Institutions:</strong> <p class="d-inline">6</p> </div> -->
                                    <!-- <p class="text-left"><strong>Total Users:</strong> 100 <b-button v-b-toggle.x variant="white"><b-icon icon="chevron-down"></b-icon></b-button></p> -->

                                    <b-collapse id="x">
                                        <b-card>
                                            <b-card-text>
                                                <b-button
                                                    variant="outline-dark"
                                                    class="m-2"
                                                    >Export Teachers</b-button
                                                >
                                                <b-button
                                                    variant="outline-dark"
                                                    class="m-2"
                                                    >Export Students</b-button
                                                >
                                                <b-button
                                                    variant="outline-dark"
                                                    class="m-2"
                                                    >Export Classes</b-button
                                                >
                                            </b-card-text>
                                        </b-card>
                                    </b-collapse>
                                </div>
                                <b-icon v-else icon="dash"></b-icon>
                            </b-col>
                        </b-row>
                        <b-row class="my-3 mb-5">
                            <b-col>
                                <b-row>
                                    <b-col>
                                        <font-awesome-icon
                                            class="text-purple h3"
                                            icon="book-reader"
                                        ></font-awesome-icon>
                                        <h4>Map Users New Subscription</h4>
                                    </b-col>
                                </b-row>
                                    <b-row class="mt-2">
                                        <b-col
                                            cols="3"
                                            class="text-center"
                                            style="
                                                border-right: 1px solid silver;
                                            "
                                        >
                                            <strong>Source</strong>
                                        </b-col>
                                        <b-col class="text-center">
                                            <p v-if="step > 2" class="m-0">
                                                Rodriguez, Antoinette (Grant)
                                            </p>
                                            <p v-else class="m-0">-</p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col
                                            cols="3"
                                            style="
                                                border-right: 1px solid silver;
                                            "
                                        ></b-col>
                                        <b-col
                                            ><b-icon icon="arrow-down"></b-icon
                                        ></b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col
                                            cols="3"
                                            class="text-center"
                                            style="
                                                border-right: 1px solid silver;
                                            "
                                        >
                                            <strong>Destination</strong>
                                        </b-col>
                                        <b-col class="text-center">
                                            <p v-if="step > 2" class="m-0">
                                                CICERO PREPARATORY ACADEMY
                                            </p>
                                            <p v-else class="m-0">-</p>
                                        </b-col>
                                    </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="my-3">
                            <b-col>
                                <b-row>
                                    <b-col>
                                        <font-awesome-icon
                                            class="text-green h3"
                                            icon="school"
                                        ></font-awesome-icon>
                                        <h4>Institutions Mapped</h4>
                                    </b-col>
                                </b-row>
                                <div v-if="step > 3">
                                    <b-col>
                                        <p class="display-4 mb-0">6</p>
                                    </b-col>

                                    <!-- <div class="float-left"><strong>Source:</strong> <p v-if="step > 0" class="d-inline">CICERO PREPARATORY ACADEMY</p> </div> -->
                                    <!-- <p class="float-left"><strong>Destination:</strong> CCLB GATEWAY CITIES CHTR SCH</p> -->
                                </div>
                                <b-icon v-else icon="dash"></b-icon>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </template>
        </CSACard>
    </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
export default {
    components: { CSACard },
    props: {
        step: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";
</style>