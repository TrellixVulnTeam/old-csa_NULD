<template>
    <div class="pr-4 pb-5">
        <grant-period-status v-for="item in periodInfoList" :key="item.productID" :info="item" :editMode="editMode"></grant-period-status>

        <b-button @click="editMode = !editMode" variant="primary" class="float-right">{{editMode ? 'Save' : 'Update'}}</b-button>
        <b-button @click="editMode = !editMode" v-if="editMode" variant="secondary" class="float-right mx-2">Cancel</b-button>
    </div>
</template>

<script>
import GrantPeriodStatus from './GrantPeriodStatus.vue';
    export default {
  components: { GrantPeriodStatus },
        data() {
            return {
                periodInfoList: [],
                editMode: false,
            }
        },
        methods: {
            getPeriodInfoList() {
                this.periodInfoList = {"ArrayList":[{"productID":1,"startsOn":"2021-05-19T04:00:00Z","endsOn":"2021-05-31T04:00:00Z","displayBanner":true,"grantPeriod":false},{"productID":2,"startsOn":"2018-05-01T15:44:36.819Z","endsOn":"2021-05-31T04:00:00Z","displayBanner":false,"grantPeriod":false}]}.ArrayList;
            }
        },
        created () {
            this.getPeriodInfoList();
        },
    }
</script>

<style lang="scss" scoped>

</style>