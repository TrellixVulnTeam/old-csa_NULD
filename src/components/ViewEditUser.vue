<template>
    <div>
                      <b-container>
                        <b-row>
                          <b-col>
                            <b-form-group
                            label="First Name: "
                            label-cols="auto"
                            label-for="name-input"
                            >
                            <b-form-input
                            id="name-input"
                            v-model="userData.firstname"
                            type="text"
                            :plaintext="!editMode" :readonly="!editMode"
                            placeholder="John"
                            />
                            </b-form-group>
                          </b-col>

                          <b-col>
                            <b-form-group
                            label="Middle Name: "
                            label-cols="auto"
                            label-for="middle-name-input"
                            >
                            <b-form-input
                            id="middle-name-input"
                            v-model="userData.middlename"
                            type="text"
                            :plaintext="!editMode" :readonly="!editMode"
                            placeholder=""
                            />
                            </b-form-group>
                          </b-col>

                          <b-col>
                            <b-form-group
                            label="Last Name: "
                            label-cols="auto"
                            label-for="last-name-input"
                            >
                            <b-form-input
                            id="last-name-input"
                            v-model="userData.lastname"
                            type="text"
                            :plaintext="!editMode" :readonly="!editMode"
                            placeholder="Smith"
                            />
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-row v-if="!isCreate">
                          <b-col>
                            <b-form-group
                            label="Login ID:"
                            label-for="loginID-input"
                            label-cols="auto"
                            description=""
                            >
                            <b-form-input
                            id="loginID-input"
                            v-model="userData.loginID"
                            type="text"
                            placeholder="Login ID"
                            plaintext readonly
                            />
                            </b-form-group>
                          </b-col>
                          <b-col>
                            <b-form-group
                            label="Student SIS ID:"
                            label-for="studentid-input"
                            label-cols="auto"
                            description=""
                            >
                            <b-form-input
                            id="studentid-input"
                            v-model="userData.sisUserID"
                            type="text"
                            placeholder="Student ID"
                            plaintext readonly
                            />
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b-form-group
                            label="Username:"
                            label-for="username-input"
                            description=""
                            label-cols="auto"
                            >
                            <b-form-input
                            id="username-input"
                            v-model="userData.username"
                            type="text"
                            placeholder="Username"
                            :plaintext="!editMode" :readonly="!editMode"
                            />
                            </b-form-group>
                          </b-col>
                          <b-col>
                            <b-form-group
                            label="Password:"
                            label-for="password-input"
                            description=""
                            label-cols="auto"
                            >
                            <b-input-group>

                            <b-form-input
                            id="password-input"
                            v-model="userData.password"
                            :type="readPassword ? 'text' : 'password'"
                            placeholder=""
                            :plaintext="!editMode" :readonly="!editMode"
                            />

                            <b-input-group-append>
                            <b-button variant="white" class="d-inline">
                            <b-icon cols="2" :icon="readPassword ? 'eye-slash' : 'eye'" @click="readPassword = !readPassword"></b-icon> </b-button>
                            </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col >
                            <b-form-group
                            label="Email:"
                            label-for="email-input"
                            label-cols="auto"
                            description=""
                            >
                            <b-form-input
                            id="email-input"
                            v-model="userData.email"
                            type="email"
                            placeholder="Email"
                            :plaintext="!editMode" :readonly="!editMode"

                            />
                            </b-form-group>
                            <b-form-checkbox  switch class="float-left ml-5" size="md">Subscribed</b-form-checkbox>
                          </b-col>
                          <b-col class="ml-0 pl-0 text-left" v-if="!isCreate">
                            <div class="d-inline " style="vertical-align: sub;">

                            Email Validated 
                            <b-icon  v-if="userData.validated" variant="success" icon="check-circle-fill"></b-icon>
                            <b-icon v-else variant="danger" icon="x-circle-fill"></b-icon>
                            </div>
                          </b-col>
                          <b-col>

                          </b-col>
                        </b-row>
                        <b-row v-if="!isCreate" class="mt-3">
                          <b-col>
                            <b-form-group
                            label="Created On:"
                            label-for="createdOn-input"
                            label-cols="auto"
                            >
                            <b-form-input
                            id="createdOn-input"
                            :value="userData.createdOn ? new Date(userData.createdOn).toLocaleString() : 'Never'"
                            type="text"
                            placeholder=""
                            plaintext readonly
                            />
                            </b-form-group>
                          </b-col>
                          <b-col>
                            <b-form-group
                            label="Last Login:"
                            label-for="last-login-input"
                            description=""
                            label-cols="auto"
                            >
                            <b-form-input
                            id="last-login-input"
                            :value="userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'Never'"
                            type="text"
                            placeholder="Never"
                            plaintext readonly
                            />
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row v-if="!isCreate">
                          <b-col>
                            <b-form-group
                          label="Modified On:"
                          label-for="modified-on-input"
                          description=""                            
                          label-cols="auto"
                          >
                          <b-form-input
                          id="modified-on-input"
                          :value="userData.modifiedOn ? new Date(userData.modifiedOn).toLocaleString() : 'Never'"
                          type="text"
                          placeholder=""
                          plaintext readonly
                          />
                          </b-form-group>
                          </b-col>
                          <b-col>
                            <b-form-group
                            label="Modified By:"
                            label-for="modified-by-input"
                            description=""
                            label-cols="auto"
                            >
                            <b-form-input
                            id="modified-by-input"
                            :value="userData.modifiedBy ? new Date(userData.modifiedBy).toLocaleString() : 'Never'"
                            type="text"
                            placeholder="Never"
                            plaintext readonly
                            />
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row v-if="!isCreate">
                          <div class="border rounded-pill p-3 w-100">
                            <b-row class="">
                              <b-col class="m-0 p-0">
                            <p class=" " style="width:max-content">
                            <b-button class="m-0 ml-5 mt-2" variant="outline-dark">Unlink SSO/Roster from User</b-button>

                            <span class="ml-3 mr-1">Enabled: </span>
                            LTI
                            <b-icon  v-if="userData.ltiUserID" variant="success" icon="check-circle"></b-icon>
                            <b-icon v-else variant="danger" icon="x-circle"></b-icon>

                            <span class="ml-3 mr-1">SAML</span>
                            <b-icon  v-if="userData.samlUserID" variant="success" icon="check-circle"></b-icon>
                            <b-icon v-else variant="danger" icon="x-circle"></b-icon>
                            <span class="ml-3 mr-1">Clever</span>
                            <b-icon  v-if="userData.cleverID" variant="success" icon="check-circle"></b-icon>
                            <b-icon v-else variant="danger" icon="x-circle"></b-icon>
                            <span class="ml-3 mr-1">Roster</span>
                            <b-icon  v-if="userData.isRosterEnabled" variant="success" icon="check-circle"></b-icon>
                            <b-icon v-else variant="danger" icon="x-circle"></b-icon> 
                            </p>
                              </b-col>
                              <b-col class="m-0 p-0">

                  
                            <!-- <b-form-group
                            class="m-0"
                              label="Enabled: "
                              label-cols="auto"
                              v-slot="{ ariaDescribedby }"
                            >
                              <b-form-checkbox-group
                                :value="[userData.isRosterEnabled, userData.cleverID, userData.samlUserID, userData.isRosterEnabled, userData.ltiUserID]"
                                :options="[{text: 'LTI', value: 'isRosterEnabled'}, {text: 'SAML', value:'samlUserID'}, {text: 'Clever', value:'cleverID'}, {text: 'Roster', value:'isRosterEnabled'}]"
                                :aria-describedby="ariaDescribedby"
                                switches
                                disabled
                              ></b-form-checkbox-group>
                            </b-form-group> -->
                              </b-col>
                            </b-row>
                          </div>
                        </b-row>

                        <b-row class="mt-2">
                            <b-col>
                                <b-alert :show="userData.isDeleted" variant="danger">
                            Status: DELETED
                            <b-button variant="outline-dark" @click="userData.isDeleted = !userData.isDeleted">Undelete User</b-button>
                            </b-alert>
                                <b-alert :show="!userData.isDeleted" variant="white">
                            Status: Active
                            <b-button variant="outline-danger" @click="userData.isDeleted = !userData.isDeleted">Delete User</b-button>
                            </b-alert>

                            </b-col>
                        </b-row>
                        <div class="mt-3" v-if="!isCreate">

                          <b-button-group>
                            <b-button variant="outline-primary">Login to Frax</b-button>
                            <b-button variant="outline-primary">Login to Reflex</b-button>
                          </b-button-group>
                          <b-button size="lg" class="mx-2 float-right" variant="success" @click="editMode = !editMode">{{editMode ? 'Save': 'Update User'}}</b-button>
                          
                        </div>
                      </b-container>
                    </div>
</template>

<script>
    export default {
        props: {
            userData: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                // userData: {"loginID":3022199,"tenantID":1496,"roleID":2,"username":"CVelasco_3022199","firstname":"Carmen","lastname":"Velasco","middlename":"","email":null,"isValidEmail":false,"isSubscribedToEmails":false,"passwordHash":"2b2faf8293ecf15f190664e8cf9009ec425cd54c4931baf2190af20213ef57d","passwordClear":"cv92","sisUserID":"411040","isDeleted":false,"changeLocked":false,"lastLoginOn":"2017-06-08T20:46:00Z","createdOn":"2015-04-20T20:44:01.570Z","modifiedOn":"2016-08-19T18:43:12.420Z","modifiedByID":1743226,"reflexLicense":true,"fractionsLicense":false,"hasSubscriptionAccess":false,"institutionID":0,"institutionName":null,"profilePicture":null,"titleID":0,"samlUserID":null,"ltiUserID":123,"cleverID":null,"isRosterEnabled":false,"languageID":1,"institutionMap":{"54643":"SHERIDAN ELEMENTARY SCHOOL"},"subscriptionMap":{"54327":"SHERIDAN ELEMENTARY SCHOOL"}},
                editMode: true,
                readPassword: false,
            }
        },
        computed: {
            isCreate() {
                return !this.userData.loginID; 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>