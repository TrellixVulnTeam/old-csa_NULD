<template>
    <div>
        <CSACard class=" mt-4" title="" style="min-width:fit-content; width:100%">
            <template #card-title>
                    
                <h3 class="d-inline  mb-0"><font-awesome-icon
                                            class="text-green h3 mb-0"
                                            icon="school"
                                        ></font-awesome-icon>
                                        Verify Institutions ({{items.length}})</h3>
            </template>
            <template #card-body>
        <b-table
            :sticky-header="true"
            :fields="institutionFields"
            :items="items"
            striped
            hover
            bordered
            head-variant="dark"
            class="w-100 border mt-4">

            <template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>
            <template #cell(institutionTypeID)="{value}">
                <div>
                    {{institutionType[value]}}
                </div>
            </template>
            <template #cell(seats)="{value}">
                <div>
                    <b-input :value="value" ></b-input>
                </div>
            </template>
        </b-table>
            </template>
        </CSACard>
    </div>
</template>

<script>
import institutions from '../misc/institutionList.json';
import csaTypes from '../misc/csaTypes';
import CSACard from './WrapperComponents/CSACard.vue';

    export default {
    components: { CSACard },
        data() {
            return {
                items: institutions.ArrayList.map(x => {
                    x.seats = Math.round(Math.random() * 100);
                    x.seatsUsed = Math.round(Math.random() * x.seats);
                    return x;
                }).slice(0, 5),
                institutionFields: [
                    { key: 'institutionName', label: 'Institution Name'},
                    { key: 'pid', label: 'PID'},
                    { key: 'institutionTypeID', label: 'Type'},
                    { key: 'city', label: 'City'},
                    { key: 'stateCode', label: 'State Code'},
                    { key: 'enrollment', label: 'Enrollment'},
                    { key: 'seats', label: 'Seats'},
                    { key: 'seatsUsed', label: 'Seats Used'},
                ],
                institutionType: csaTypes.institutionTypeOptions
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>