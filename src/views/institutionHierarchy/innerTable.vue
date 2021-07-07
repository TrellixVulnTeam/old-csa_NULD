<template>
    <div class="m-0 p-0 w-100">
        <div class="w-100">
            <div>

        <b-input-group prepend="" class="ml-5 w-auto" align="fill">
            <b-form-input></b-form-input>
            <b-input-group-append>
                <b-button>Search</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-table
            class="shadow-sm ml-5 w-100 border"
            :fields="fields"
            :items="items"
            per-page="5"
            striped
            hover
            bordered
            head-variant="dark"
            >

            <template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>
            <template #cell(actions)="">
                <b-dropdown text="Actions" variant="outline-dark">
                <b-dropdown-item>View/Edit</b-dropdown-item>
                <b-dropdown-item>Make Parent Institution</b-dropdown-item>
                <b-dropdown-item variant="success" v-if="enableSubInstitution"
                    >Create/Add SubInstitution</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item variant="danger">Deactivate</b-dropdown-item>
                </b-dropdown>
            </template>

            <template #cell(ShowSubInstitutions)=""> 
                
        <slot name="details">
         - 
        </slot>
        </template>
        </b-table>
        <b-pagination
        class="ml-5"
        value="1"
        total-rows="8"
        per-page="5"
        aria-controls="my-table"
        align="fill"
        ></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            fields: {
                type: Array
            },
            items: {
                type: Array

            },
            enableSubInstitution: {
                type: Boolean,
                default: true
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>