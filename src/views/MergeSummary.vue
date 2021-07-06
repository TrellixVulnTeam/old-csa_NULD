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
                                <b-col cols="3" class="text-center">
                                    <strong>Source</strong>
                                </b-col>
                                <b-col class="text-center">
                                    <p v-if="step > 0" class="m-0">Miami A.</p>
                                    <p v-else class="m-0">-</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="3"></b-col>
                                <b-col
                                    ><b-icon icon="arrow-down"></b-icon
                                ></b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="3" class="text-center">
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
                            <h4>Users to Move</h4>
                        </b-col>
                    </b-row>
                    <div v-if="step > 1">
                        <b-col>Users from 6 Institutions</b-col>
                        <b-col><strong>Total Users:</strong>100</b-col>
                    </div>
                    <b-icon v-else icon="dash"></b-icon>
                </b-col>
            </b-row>
            <hr />
            <b-row class="my-4">
                <b-col>
                    <b-row>
                        <b-col>
                            <h4>Map Users new Subscription</h4>
                        </b-col>
                    </b-row>
                    <div v-if="step > 2">
                        <b-col
                            ><strong>Source:</strong>
                            <p v-if="step > 0" class="d-inline">
                                Rodriguez, Antoinette (Grant)
                            </p>
                        </b-col>
                        <b-col
                            ><strong>Destination:</strong> CICERO PREPARATORY
                            ACADEMY</b-col
                        >
                    </div>
                    <b-icon v-else icon="dash"></b-icon>
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