<template>
    <div>

        <b-container>
            <b-row>
                <b-col>
                    <b-form-group
                    label="Name:"
                    label-cols="auto"
                    label-for="name-input"
                    description=""
                    >
                    <b-form-input
                    id="name-input"
                    v-model="institutionData.institutionName"
                    type="text"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                    label="Institution Type:"
                    label-cols="auto"
                    label-for="type-input"
                    description=""
                    >
                    <b-form-select v-if="editMode"
                    id="type-input"
                    v-model="institutionData.institutionTypeID"
                    :options="institutionTypeOptions"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""></b-form-select>
                    <p v-else class="float-left form-control-plaintext text-left">{{institutionTypeOptions[institutionData.institutionTypeID]}}</p>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-checkbox class="float-left" v-model="institutionData.isCustom">Is Custom</b-form-checkbox>
                </b-col>
            </b-row>
            <b-row>
               <b-col>
                    <b-form-group
                    label="Country:"
                    label-cols="auto"
                    label-for="country-input"
                    description=""
                    >
                    <b-form-select v-if="editMode"
                    id="country-input"
                    v-model="institutionData.country"
                    :options="countryOptions"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""></b-form-select>
                    <p v-else class="float-left form-control-plaintext text-left">{{countryOptions[institutionData.country]}}</p>
                    </b-form-group>
               </b-col>
               <b-col>
                   <b-form-group
                   label="State:"
                   label-cols="auto"
                   label-for="state-input"
                   description=""
                   >
                   <b-form-select v-if="editMode"
                   id="state-input"
                   v-model="institutionData.state"
                   :options="stateOptions"
                   :plaintext="!editMode" :readonly="!editMode"
                   placeholder=""></b-form-select>
                   <p v-else class="float-left form-control-plaintext text-left">{{stateOptions[institutionData.state]}}</p>
                   </b-form-group>
               </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                    label="City"
                    label-cols="auto"
                    label-for="city-input"
                    description=""
                    >
                    <b-form-input
                    id="city-input"
                    v-model="institutionData.city"
                    type="text"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                    label="Postal Code:"
                    label-cols="auto"
                    label-for="postal-code-input"
                    description=""
                    >
                    <b-form-input
                    id="postal-code-input"
                    v-model="institutionData.postalCode"
                    type="text"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
            </b-row>


        <b-row class="mt-2">
            <b-col>
                <b-alert :show="!institutionData.isActive" variant="danger">
            Status: INACTIVE
            <b-button variant="outline-dark" @click="institutionData.isActive = !institutionData.isActive">Activate Institution</b-button>
            </b-alert>
                <b-alert :show="institutionData.isActive" variant="white">
            Status: Active
            <b-button variant="outline-danger" @click="institutionData.isActive = !institutionData.isActive">Deactivate Institution</b-button>
            </b-alert>

            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-button class="float-right" variant="primary" @click="editMode=!editMode">{{editMode ? 'Save Institution' : 'Edit Institution'}}</b-button>

            </b-col>
        </b-row>
        </b-container>

    </div>
</template>

<script>
import csaTypes from '../misc/csaTypes';
    export default {
        props: {
            institutionData: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                institutionTypeOptions: Object.entries(csaTypes.institutionTypeOptions).map(x=> {return {text:x[0], value:[x[1]]}}),
                editMode: true,
                countryOptions: [],
                stateOptions: [],

            }
        },
        computed: {
            isCreate() {
                return !this.userData.loginID;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>