<template>
    <div>
        <b-row class="mb-2">
            <b-col cols="2" class="my-auto">
                <p class="display-4">2</p>
                <p>Job(s) missed last night </p>
            </b-col>
            <b-col>
                <b-table
            :items="missedItems"
              striped hover
              class="w-100 border">
            <template v-slot:head()="data">
              <h6 class="m-0">
                  {{ data.label }}
              </h6>
            </template>
            <template #cell(enabled)="{value}">
                <p class="h2">

                <b-icon v-if="value" icon="check" variant="success"></b-icon>
                <b-icon v-else icon="x" variant="danger"></b-icon>
                </p>
            </template>

                </b-table>
            </b-col>
        </b-row>
        <h4>Other Errors:</h4>
        <b-table
            :items="items"
              striped hover
              bordered
              small
              head-variant="dark"
              class="w-100 border"
        >

            <template v-slot:head()="data">
              <h5 class="m-0">
                  {{ data.label }}
              </h5>
            </template>
            <template #cell(enabled)="{value}">
                <p class="h2">

                <b-icon v-if="value" icon="check" variant="success"></b-icon>
                <b-icon v-else icon="x" variant="danger"></b-icon>
                </p>
            </template>
            <template #cell(startTime)="{value}">
                {{new Date(value).toLocaleString()}}
            </template>
            <template #cell(endTime)="{value}">
                {{new Date(value).toLocaleString()}}
            </template>

        </b-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            items:[
              {
                mainInstitutionName: 'INDIAN PRAIRIE SCH DIST 204',
                tenantID: 9244,
                jobType: 'OneRoster',
                jobExecutionID: 20281,
                message: 'Fatal error - Please contact technical support.',
                ssoType: 'SAML',
                startTime: '2020-11-19T16:04:00.05',
                endTime: '2020-11-19T16:07:45.323',
                stepName: 'processOneRosterClasses',
                enabled: true,
              },
            ],
            missedItems:[
              {
                mainInstitutionName: 'INDIAN PRAIRIE SCH DIST 205',
                tenantID: 9244,
                jobType: 'OneRoster',
                message: 'Fatal error - Please contact technical support.',
                ssoType: 'LTI',
                lastRan: '2020-11-19T16:04:00.05',
                stepName: 'processOneRosterClasses',
                enabled: true,
              },
              {
                mainInstitutionName: 'INDIAN PRAIRIE SCH DIST 206',
                tenantID: 9244,
                jobType: 'OneRoster',
                message: '',
                ssoType: 'SAML',
                lastRan: '2020-11-19T16:04:00.05',
                stepName: 'processOneRosterClasses',
                enabled: false,
              },
            ], 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>