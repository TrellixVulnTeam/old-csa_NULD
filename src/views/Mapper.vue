<template>
    <div>
        <h3>Select Umbrellas</h3>
        <b-row class="w-100 mt-3" align-v="center" align-h="center">
            <b-col class="p-0">
                <CSACard title="Source" :bodyVisible="true" :hideCaret="true">
                    <template #card-body>
                        <SelectTenant></SelectTenant>
                    </template>
                </CSACard>
            </b-col>
            <b-col cols="auto">
                <p>
                    <b-icon
                        icon="arrow-right"
                        variant="el-light-dark"
                        font-scale="4"
                    ></b-icon>
                </p>
            </b-col>
            <b-col class="p-0">
                <CSACard
                    title="Destination"
                    :bodyVisible="true"
                    :hideCaret="true"
                >
                    <template #card-body>
                        <SelectTenant></SelectTenant>
                    </template>
                </CSACard>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CSACard from "../components/WrapperComponents/CSACard.vue";
    import SelectTenant from "../components/SelectTenant.vue";
    export default {
        components: { SelectTenant, CSACard },
        data() {
            return {
                types: { Umbrella: "Umbrella" },
            };
        },
    };
</script>

<style lang="scss" scoped>
    .row {
        margin: 0;
    }
</style>