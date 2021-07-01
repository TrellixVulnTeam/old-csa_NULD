<template>
    <div>

        <b-container>
            <b-row>
                <b-col>
                    <CSACard title="Subscription" class="w-75" :hideCaret="true" bodyVisible>
                        <template #card-body>
                            
                            <div>
                                <ViewEditSubscription :subscriptionData="subscriptionData"></ViewEditSubscription>
                            </div>
                        </template>
                    </CSACard>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard.vue'
import ViewEditSubscription from '../components/ViewEditSubscription'
    export default {
  components: { ViewEditSubscription, CSACard },
        data() {
            return {
                subscriptionData: {"Subscription":{"modifiedByID":0,"modifiedOn":"2016-09-16T18:57:17.350Z","createdByID":0,"createdOn":"2016-09-12T16:08:30.656666700Z","subscriptionID":145426,"subscriptionName":"Emery, Marianne","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2016-09-12T04:00:00Z","expiresOn":"2017-10-16T04:00:00Z","enforceStartDate":false,"gracePeriod":0,"isActive":true,"tenantID":2029,"pendingSubscriptionID":0,"pendingEffectiveOn":null,"sourceID":0,"notes":null,"isSSOLTIEnabled":false,"isSSOSamlEnabled":false,"isRosterEnabled":true,"teachersCap":0,"teachersUsed":0,"upgradeAllowed":true,"extraSubscriptionAccessJson":null,"lengthInDays":399,"isExpired":true,"subscriptionMemberList":[{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"subscriptionID":145426,"institutionID":68294,"seatsCap":35,"seatsUsed":18,"teachersCap":0,"teachersUsed":0,"tenantID":2029,"institutionTypeID":4,"institutionName":"BAYWOOD ELEMENTARY SCHOOL","parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","stateCode":"CA","countryCode":"USA","city":"LOS OSOS","enrollment":344,"allowRolesToEnrollStudents":false,"startOfSchoolDay":22,"startOfSchoolMonth":8,"defaultLanguageID":0,"externalSchoolID":null}]}}.Subscription
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>