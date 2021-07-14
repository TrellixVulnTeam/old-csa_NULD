<template>
    <div>
        <SideTab
            :umbrellaId="userData.umbrellaID"
            :institutionList="[userData.institutionMap[0]]"
        ></SideTab>

        <div class="ml-tab mr-4" :class="tabClosed ? 'ml-4' : 'ml-tab-x'">
            <div>
                <h1 class="display-4">User</h1>

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
                                                >User Settings</span
                                            >
                                        </template>
                                        <ViewEditUser
                                            class="mt-5"
                                            :userData="userData"
                                        ></ViewEditUser>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-purple h3"
                                                icon="book-reader"
                                            ></font-awesome-icon>
                                            <span class="ml-2"
                                                >Subscriptions (9)</span
                                            >
                                        </template>
                                        <Subscriptionlist></Subscriptionlist>
                                    </b-tab>

                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-orange h3"
                                                icon="users"
                                            ></font-awesome-icon>
                                            <span class="ml-2"
                                                >Related Users (100)</span
                                            >
                                        </template>

                                        <UserList></UserList>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-blue h3"
                                                icon="chalkboard"
                                            ></font-awesome-icon
                                            ><span class="ml-2">Classes</span>
                                        </template>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="text-success h3"
                                                icon="arrow-alt-circle-right"
                                            ></font-awesome-icon
                                            ><span class="ml-2"
                                                >Login History</span
                                            >
                                        </template>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                style="transform: rotate(-45deg);"
                                                class="text-danger h3"
                                                icon="ticket-alt"
                                            ></font-awesome-icon
                                            ><span class="ml-2"
                                                >RegCode History</span
                                            >
                                        </template>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <b-icon
                                                icon="file-earmark-ruled"
                                                class="ml-0"
                                                font-scale="1.8"
                                                style="vertical-align: sub"
                                            ></b-icon>
                                            <span class="ml-2"
                                                >Order History</span
                                            >
                                        </template>
                                    </b-tab>
                                    <b-tab>
                                        <template #title>
                                            <font-awesome-icon
                                                class="h3 mb-0"
                                                icon="paper-plane"
                                            ></font-awesome-icon>
                                            <span class="ml-2"
                                                >Email History</span
                                            >
                                        </template>
                                        <email-history></email-history>
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
import CSACard from "../components/WrapperComponents/CSACard.vue";
import SideTab from "../components/SideTab.vue";
import ViewEditUser from "../components/ViewEditUser.vue";
import Subscriptionlist from "../components/Subscriptionlist.vue";
import UserList from '../components/UserList.vue';
import EmailHistory from '../components/EmailHistory.vue';

export default {
    components: {
        CSACard,
        SideTab,
        ViewEditUser,
        Subscriptionlist,
        UserList,
        EmailHistory,
    },

    data() {
        return {
            tabClosed: false,
            userData: {
                loginID: 3022199,
                tenantID: 1496,
                roleID: 2,
                username: "CVelasco_3022199",
                firstname: "Carmen",
                lastname: "Velasco",
                middlename: "",
                email: null,
                isValidEmail: false,
                isSubscribedToEmails: false,
                passwordHash:
                    "2b2faf8293ecf15f190664e8cf9009ec425cd54c4931baf2190af20213ef57d",
                passwordClear: "cv92",
                sisUserID: "411040",
                isDeleted: false,
                changeLocked: false,
                lastLoginOn: "2017-06-08T20:46:00Z",
                createdOn: "2015-04-20T20:44:01.570Z",
                modifiedOn: "2016-08-19T18:43:12.420Z",
                modifiedByID: 1743226,
                reflexLicense: true,
                fractionsLicense: false,
                hasSubscriptionAccess: false,
                institutionID: 0,
                institutionName: null,
                profilePicture: null,
                titleID: 0,
                samlUserID: null,
                ltiUserID: 123,
                cleverID: null,
                isRosterEnabled: false,
                languageID: 1,
                institutionMap: { 54643: "SHERIDAN ELEMENTARY SCHOOL" },
                subscriptionMap: { 54327: "SHERIDAN ELEMENTARY SCHOOL" },
            },
            subscriptionsInTenant: [
                {
                    id: 1,
                    name: "Frax Subscription 123",
                    seatsLeft: 10,
                    product: "Frax",
                },
                {
                    id: 1,
                    name: "Highschool gizmo sub.",
                    seatsLeft: 2,
                    product: "Gizmos",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.ml-tab {
    margin-left: $navBarWidth;
}
.ml-tab-x {
    margin-left: $navBarWidth + 20px;
}
</style>