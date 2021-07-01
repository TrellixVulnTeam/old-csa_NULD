<template>
    <div>
        <b-input-group prepend="" class="ml-5 w-auto" align="fill">
            <b-form-input></b-form-input>
            <b-input-group-append>
                <b-button>Search</b-button>
                <b-button variant="outline-dark">Export All</b-button>
            </b-input-group-append>
        </b-input-group>
        <b-table
            :items="items"
            :fields="fields"
            selectable
            hover

        >
              <template #cell(actions)="">
                
                <b-dropdown text="Actions" variant="outline-dark">
                    <div v-for="action in actions" :key="action.text">
                        <b-dropdown-item v-if="action.text"  :variant="action.variant">{{action.text}}</b-dropdown-item>
                        <b-dropdown-divider v-else></b-dropdown-divider>
                    </div>
                </b-dropdown>
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
</template>

<script>
    export default {
        props: {
            items: {
                type: Object,
                default: null
            }, 
            fields: {
                type: Object,
                default: null
            },
            actions: {
                type: Object,
                default: null
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>