<template>
    <div
        :title="isSplit ? 'Preview Split' : 'Preview Merge'"
        name="overalPreviewSummary"
        :bodyVisible="true"
        :hideCaret="true"
        class="w-100"
    >
        <template>
            <div>
                <b-container>
                    <b-row>
                        <b-col v-if="!isSplit">
                            <CSACard
                                class="w-100"
                                title="Possible conflicts (3)"
                                name="possibleConflicts"
                            >
                                <template #card-body>
                                    <div>
                                        <b-table
                                            bordered
                                            head-variant="dark"
                                            class="w-100 border"
                                            :items="[
                                                {
                                                    Type: 'Same StudentID',
                                                    Value: '20100',
                                                    sourceUser: 'Jane Doe',
                                                    destinationUser:
                                                        'Jamie Doe',
                                                    resolution:
                                                        'StudentID of Source Student  \'Jane Doe\' will change to dup-20100',
                                                },
                                                {
                                                    Type: 'Same Name',
                                                    Value: 'John Doe',
                                                    sourceUser: 'John Doe',
                                                    destinationUser: 'John Doe',
                                                    resolution: '',
                                                },
                                                {
                                                    Type: 'Same Email',
                                                    Value:
                                                        'student@studentschool.com',
                                                    sourceUser: 'Johnathon Doe',
                                                    destinationUser: 'John Doe',
                                                    resolution: '',
                                                },
                                            ]"
                                            >
                                            
                                            <template v-slot:head()="data">
                                                <h5 class="m-0">
                                                    {{ data.label }}
                                                </h5>
                                            </template>
                                            
                                            <template
                                                #cell(sourceUser)="{value}"
                                            >
                                                <div>
                                                    <b-button
                                                        variant="outline-dark"
                                                        >{{ value }}</b-button
                                                    >
                                                </div>
                                            </template>
                                            <template
                                                #cell(destinationUser)="{value}"
                                            >
                                                <div>
                                                    <b-button
                                                        variant="outline-dark"
                                                        >{{ value }}</b-button
                                                    >
                                                </div>
                                            </template>
                                            <template
                                                #cell(resolution)="{value}"
                                            >
                                                <div style="max-width:220px;">
                                                    <p v-if="value" class="text-left">
                                                        {{ value }}
                                                    </p>
                                                    <b-icon
                                                        v-else
                                                        icon="dash"
                                                    ></b-icon>
                                                </div>
                                            </template>
                                        </b-table>
                                    </div>
                                </template>
                            </CSACard>
                        </b-col>
                    </b-row>
                </b-container>
                <!-- <b-button v-if="!isSplit" class="float-left mt-5" variant="outline-dark"><b-icon icon="chevron-left"></b-icon> Previous</b-button>
            <b-button  v-if="!isSplit" class="float-right mt-5" variant="success">Next</b-button> -->
            </div>
        </template>
    </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
// import users from '../misc/usersInUmbrella.json';
// import csaTypes from '../misc/csaTypes';

export default {
    components: { CSACard },
    props: {
        isSplit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            // teachers: users.filter(x => x.roleID === csaTypes.loginRoleOptions.Teacher),
            teacherFields: ["loginID", "firstname", "lastname", "email"],
            // students:  users.filter(x => x.roleID === csaTypes.loginRoleOptions.Student),
            studentFields: ["loginID", "firstname", "lastname", "sisUserID"],
            classes: [],
            classesFields: [],
        };
    },
};
</script>

<style lang="scss" scoped></style>
