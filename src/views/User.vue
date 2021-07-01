<template>
    <div>

      <SideTab :subscriptionsInTenant="subscriptionsInTenant" :umbrellaId="userData.umbrellaID" :institutionList="[userData.institutionMap[0]]" :subscriptionList="[{id: Object.keys(userData.subscriptionMap)[0], productID:1, name: Object.values(userData.subscriptionMap)[0]}]" ></SideTab>      
      
        <b-container class="ml-tab">
            <b-row>
              <b-col>
                <CSACard title="User" class="w-75" bodyVisible hideCaret>
                  <template #card-body>
                    <ViewEditUser :userData="userData"></ViewEditUser>
                  </template>
                </CSACard>
              </b-col>

            </b-row>
                <b-row>
                    <b-col>
                        <CSACard title="LoginHistory"></CSACard>
                        <CSACard title="Classes"></CSACard>
                        <CSACard title="Related Logins"></CSACard>
                        <CSACard title="Order History"></CSACard>
                        <CSACard title="RegCodeHistory"></CSACard>
                        <CSACard title="Email History"></CSACard>
                    </b-col>
                </b-row>
        </b-container>

    </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard'
import SideTab from '../components/SideTab.vue'
import ViewEditUser from '../components/ViewEditUser.vue'

    export default {
        components: {
            CSACard,
            SideTab,
                ViewEditUser
        },

        data() {
            return {
                userData: {"loginID":3022199,"tenantID":1496,"roleID":2,"username":"CVelasco_3022199","firstname":"Carmen","lastname":"Velasco","middlename":"","email":null,"isValidEmail":false,"isSubscribedToEmails":false,"passwordHash":"2b2faf8293ecf15f190664e8cf9009ec425cd54c4931baf2190af20213ef57d","passwordClear":"cv92","sisUserID":"411040","isDeleted":false,"changeLocked":false,"lastLoginOn":"2017-06-08T20:46:00Z","createdOn":"2015-04-20T20:44:01.570Z","modifiedOn":"2016-08-19T18:43:12.420Z","modifiedByID":1743226,"reflexLicense":true,"fractionsLicense":false,"hasSubscriptionAccess":false,"institutionID":0,"institutionName":null,"profilePicture":null,"titleID":0,"samlUserID":null,"ltiUserID":123,"cleverID":null,"isRosterEnabled":false,"languageID":1,"institutionMap":{"54643":"SHERIDAN ELEMENTARY SCHOOL"},"subscriptionMap":{"54327":"SHERIDAN ELEMENTARY SCHOOL"}},
                subscriptionsInTenant: [
                  {id: 1, name: "Frax Subscription 123",seatsLeft: 10, product: "Frax"},
                  {id: 1, name: "Highschool gizmo sub.", seatsLeft: 2, product: "Gizmos"}
                ]
            }
        },
    }
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