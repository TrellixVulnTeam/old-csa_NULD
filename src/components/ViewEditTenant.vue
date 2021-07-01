<template>
    <div>
        <b-container>
            <b-row align-h="center">
                <b-col cols="3">
                    <b-form-group
                    label="Max Classes per Teacher:"
                    label-cols="auto"
                    label-for="classes-cap-input"
                    description=""
                    >
                    <b-form-input
                    id="classes-cap-input"
                    v-model="tenantData.classesCap"
                    type="number"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>

            </b-row>
            <b-row align-h="center">
                <b-col cols="3">
                    <b-form-group
                    label="Max Students per Class:"
                    label-cols="auto"
                    label-for="student-cap-input"
                    description=""
                    >
                    <b-form-input
                    id="student-cap-input"
                    v-model="tenantData.studentCap"
                    type="number"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="2">
                    <b-button class="mr-4" variant="primary" @click="editMode = !editMode">{{editMode? 'Save Caps': 'Update Caps'}}</b-button>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    export default {
        props: {
            tenantData: {
            type: Object,
            default: null,
            },
        },
        data() {
            return {
                editMode: false
            }
        },
        computed: {
            isCreate() {
                return !this.tenantData.tenantID;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>