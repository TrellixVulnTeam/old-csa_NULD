<template>
    <b-card class="shadow card w-100">
        <b-card-title class="m-0">
            <slot name="card-title">
                {{ title }}
            </slot>
        </b-card-title>

        <b-collapse v-model="bodyVisible">
            <b-card-text>
                <slot name="card-body">
                    <b-table
                        striped
                        hover
                        :items="items"
                        bordered
                        head-variant="dark"
                        class="w-100 border"
                        ><template v-slot:head()="data">
                            <h5 class="m-0">
                                {{ data.label }}
                            </h5>
                        </template>
                    </b-table>
                </slot>
            </b-card-text>
        </b-collapse>
        <b-button
            :hidden="hideCaret"
            @click="bodyVisible = !bodyVisible"
            variant="white"
            class="mt-4"
        >
            <b-icon :icon="collapseIcon" font-scale="2"></b-icon>
        </b-button>
    </b-card>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: "title",
            },
            bodyVisible: {
                type: Boolean,
                default: false,
            },
            hideCaret: {
                type: Boolean,
                default: false,
            },
            items: {
                type: Array,
                default: null,
            },
        },
        data() {
            return {};
        },
        computed: {
            collapseIcon() {
                return this.bodyVisible ? "chevron-up" : "chevron-down";
            },
        },
    };
</script>

<style lang="scss" scoped>
    .card {
        width: fit-content;
    }
</style>