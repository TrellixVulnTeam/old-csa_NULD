<template>
    <div>

        <SideTab
            :umbrellaId="subscriptionData.tenantID"
            :institutionList="[]"
        ></SideTab>
        <div class="ml-tab mr-4" :class="tabClosed ? 'ml-4' : 'ml-tab-x'">
            <div>
                <h1 class="display-4">

                    <font-awesome-icon
                        class="text-white"
                        icon="book-reader"
                    ></font-awesome-icon>
                    Subscription</h1>

                <CSACard
                    title=""
                    class="w-100 shadow-none h-vh mb-5"
                    :bodyVisible="true"
                    :hideCaret="true"
                >
                    <template #card-body>
                        <div>
                            <div>
                                <b-tabs content-class="mt-3" align="center">
                                    <b-tab active>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-black h3"
                                                icon="cog"
                                            ></font-awesome-icon
                                            ><span class="ml-2"
                                                >Subscription Settings</span
                                            >
                                        </template>
                                <ViewEditSubscription class="mt-5" :subscriptionData="subscriptionData"></ViewEditSubscription>
                                        <SemiEditableInstitutionList></SemiEditableInstitutionList>
                                    </b-tab>

                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-orange h3"
                                                icon="users"
                                            ></font-awesome-icon>
                                            <span class="ml-2"
                                                >Users (100)</span
                                            >
                                        </template>
                                        <UserList></UserList>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </div>
                    </template>
                </CSACard>
            </div>
        </div>
    </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard.vue'
import ViewEditSubscription from '../components/ViewEditSubscription'
import UserList from '../components/UserList.vue'
import SideTab from '../components/SideTab.vue'
import SemiEditableInstitutionList from '../components/SemiEditableInstitutionList.vue'
    export default {
  components: { ViewEditSubscription, CSACard, UserList, SideTab, SemiEditableInstitutionList, },
    data() {
            return {
                tabClosed: false,
                subscriptionData: {"Subscription":{"modifiedByID":0,"modifiedOn":"2016-09-16T18:57:17.350Z","createdByID":0,"createdOn":"2016-09-12T16:08:30.656666700Z","subscriptionID":145426,"subscriptionName":"Emery, Marianne","licensingTypeID":8,"productID":1,"salesForceContractID":null,"salesForceContractNumber":null,"startsOn":"2016-09-12T04:00:00Z","expiresOn":"2017-10-16T04:00:00Z","enforceStartDate":false,"gracePeriod":0,"isActive":true,"tenantID":2029,"pendingSubscriptionID":0,"pendingEffectiveOn":null,"sourceID":0,"notes":null,"isSSOLTIEnabled":false,"isSSOSamlEnabled":false,"isRosterEnabled":true,"teachersCap":0,"teachersUsed":0,"upgradeAllowed":true,"extraSubscriptionAccessJson":null,"lengthInDays":399,"isExpired":true,"subscriptionMemberList":[{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"subscriptionID":145426,"institutionID":68294,"seatsCap":35,"seatsUsed":18,"teachersCap":0,"teachersUsed":0,"tenantID":2029,"institutionTypeID":4,"institutionName":"BAYWOOD ELEMENTARY SCHOOL","parentInstitutionID":2498,"parentInstitutionName":"SAN LUIS COASTAL UNIF SCH DIST","stateCode":"CA","countryCode":"USA","city":"LOS OSOS","enrollment":344,"allowRolesToEnrollStudents":false,"startOfSchoolDay":22,"startOfSchoolMonth":8,"defaultLanguageID":0,"externalSchoolID":null}]}}.Subscription
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>