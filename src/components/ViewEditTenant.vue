<template>
    <div>
        <b-container class="mt-4" fluid>
            <b-row align-h="center">
                <b-col>
                    <h2>{{ tenantData.mainInstitutionName }}</h2>
                </b-col>
            </b-row>
            <b-row class="mt-3" align-h="around">
                <b-col>
                    <b-card>
                        <b-row>
                            <b-col cols="3">
                                <p>Institution Type</p>
                                <h3>
                                    {{
                                        institutionTypeOptions[
                                            tenantData.institutionTypeID
                                        ]
                                    }}
                                </h3>
                            </b-col>
                            <b-col cols="3">
                                <p>PID</p>
                                <h3>{{ tenantData.pid }}</h3>
                            </b-col>
                            <b-col>
                                <b-row align-v="center">
                                    <b-col>
                                        <p>Salesforce Account ID</p>
                                        <h3>
                                            {{ tenantData.salesforceAccountID }}
                                        </h3></b-col
                                    >
                                    <b-col>
                                        <b-button
                                            class="float-left"
                                            variant="outline-info"
                                            style="vertical-align: baseline"
                                            >View Account</b-button
                                        ></b-col
                                    >
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="mt-5">
                            <b-col>
                                <b-button variant="outline-danger">
                                    <font-awesome-icon
                                        class="mr-2 mb-0 h5 d-inline-block"
                                        style="
                                            vertical-align: middle;
                                            font-size: x-large;
                                        "
                                        icon="cog"
                                    ></font-awesome-icon>
                                    <h5
                                        class="d-inline-block mb-0"
                                        style="vertical-align: middle"
                                    >
                                        Edit Configuration
                                    </h5></b-button
                                >
                            </b-col>
                        </b-row>
                        <b-row align-h="center">
                            <b-col>
                                <b-form-group
                                    label="Default Seat Cap: "
                                    label-cols="auto"
                                    label-for="default-seat-cap-input"
                                >
                                    <b-form-input
                                        id="default-seat-cap-input"
                                        v-model="tenantData.defaultSeatCap"
                                        type="text"
                                        :plaintext="!editMode"
                                        :readonly="!editMode"
                                        :placeholder="tenantData.defaultSeatCap"
                                    />
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import csaTypes from "../misc/csaTypes";
    export default {
        props: {
            tenantData: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {
                editMode: false,
                institutionTypeOptions: csaTypes.institutionTypeOptions,
            };
        },
        computed: {
            isCreate() {
                return !this.tenantData.tenantID;
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>