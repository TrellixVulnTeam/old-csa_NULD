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
            <template #cell(studentSeats)="{item}">
                <div>

                    <b-row>
                        <b-col class="mt-2 mx-0 px-1" style="text-align:right;">
                    {{item.studentSeatsUsed}} / 

                        </b-col>
                        <b-col class="ml-0 px-0 mr-4">
                    <b-input style="4rem" :value="item.studentSeats" ></b-input>

                        </b-col>
                    </b-row>
                </div>
            </template>
            <template #cell(teacherSeats)="{item}">
                <div>
                    <b-row>
                        <b-col class="mt-2 mx-0 px-1" style="text-align:right;">
                    {{item.teacherSeatsUsed}} / 

                        </b-col>
                        <b-col class="ml-0 px-0 mr-4">
                    <b-input style="4rem" :value="item.teacherSeats" ></b-input>

                        </b-col>
                    </b-row>
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
                    x.teacherSeats = Math.round(Math.random() * 100);
                    x.teacherSeatsUsed = Math.round(Math.random() * x.teacherSeats);

                    x.studentSeats = Math.round(Math.random() * 100);
                    x.studentSeatsUsed = Math.round(Math.random() * x.studentSeats);
                    return x;
                }).slice(0, 5),
                institutionFields: [
                    { key: 'institutionName', label: 'Institution Name'},
                    { key: 'pid', label: 'PID'},
                    { key: 'institutionTypeID', label: 'Type'},
                    { key: 'city', label: 'City'},
                    { key: 'stateCode', label: 'State Code'},
                    { key: 'enrollment', label: 'Enrollment'},
                    { key: 'studentSeats', label: 'Student Seats Used/Available'},
                    { key: 'teacherSeats', label: 'Teacher Seats Used/Available'},
                    // { key: 'seatsUsed', label: 'Seats Used'},
                ],
                institutionType: csaTypes.institutionTypeOptions
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>