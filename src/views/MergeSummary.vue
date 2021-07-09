<template>
    <div class="h-100">
        <b-card class="h-100">
            <template #header>
                <h1 class="mb-0">Summary</h1>
            </template>
            <b-row class="mb-4">
                <b-col>
                    <b-row>
                        <b-col>
                            <h4>Umbrellas</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-row>
                                <b-col
                                    cols="3"
                                    class="text-center"
                                    style="border-right: 1px solid silver"
                                >
                                    <strong>Source</strong>
                                </b-col>
                                <b-col class="text-center">
                                    <p v-if="step > 0" class="m-0">Miami A.</p>
                                    <p v-else class="m-0">-</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col
                                    cols="3"
                                    style="border-right: 1px solid silver"
                                ></b-col>
                                <b-col
                                    ><b-icon icon="arrow-down"></b-icon
                                ></b-col>
                            </b-row>
                            <b-row>
                                <b-col
                                    cols="3"
                                    class="text-center"
                                    style="border-right: 1px solid silver"
                                >
                                    <strong>Destination</strong>
                                </b-col>
                                <b-col class="text-center">
                                    <p v-if="step > 0" class="m-0">Miami B.</p>
                                    <p v-else class="m-0">-</p>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr />
            <b-row class="my-4">
                <b-col>
                    <b-row>
                        <b-col>
                            <h4>Users</h4>
                        </b-col>
                    </b-row>
                    <b-row v-if="step > 1">
                        <b-col>
                            <p class="display-4 m-0">6</p>
                            <p class="m-0">Institutions</p>
                        </b-col>
                        <b-col>
                            <p class="display-4 m-0">254</p>
                            <p class="m-0">Total Users</p>
                        </b-col>
                    </b-row>
                    <b-icon v-else icon="dash"></b-icon>
                </b-col>
            </b-row>
            <hr />
            <b-row class="my-4">
                <b-col>
                    <b-row>
                        <b-col>
                            <h4>Subscriptions</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col
                            cols="3"
                            class="text-center"
                            style="border-right: 1px solid silver"
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
                            style="border-right: 1px solid silver"
                        ></b-col>
                        <b-col><b-icon icon="arrow-down"></b-icon></b-col>
                    </b-row>
                    <b-row>
                        <b-col
                            cols="3"
                            class="text-center"
                            style="border-right: 1px solid silver"
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
            <hr />
            <b-row class="mt-4">
                <b-col>
                    <b-row>
                        <b-col>
                            <h4>Map Users new Institutions</h4>
                        </b-col>
                    </b-row>
                    <div v-if="step > 3">
                        <b-col
                            ><strong>Source:</strong>
                            <p v-if="step > 0" class="d-inline">
                                CICERO PREPARATORY ACADEMY
                            </p>
                        </b-col>
                        <b-col
                            ><strong>Destination:</strong> CCLB GATEWAY CITIES
                            CHTR SCH</b-col
                        >
                    </div>
                    <b-icon v-else icon="dash"></b-icon>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            step: {
                type: Number,
                default: 0,
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>