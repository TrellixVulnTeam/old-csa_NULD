<template>
    <div>

            <b-form-group
            id="toEmailGroup"
            label="Email To:"
            label-for="input-1"
            >
            <b-row>
                <b-col  cols="10" class="pr-0">

                <b-form-input id="input-1" v-model="toEmail" type="email" trim></b-form-input>
                </b-col>
                <b-col  cols="2" class="pl-0">

                <b-dropdown variant="white" no-caret>
                    <template #button-content>
                    <!-- <b-icon icon="person-lines-fill"></b-icon> -->

                    <font-awesome-icon style="color: #00a1e4;"
                        icon="address-book"
                        class="h3"
                    />
                    </template>


                    <b-dropdown-form>
                        <b-form-group label="Filter" label-for="dropdown-form-email" @submit.stop.prevent>
                        <b-form-input
                            id="dropdown-form-email"
                            size="sm"
                            placeholder="email@example.com"
                        ></b-form-input>
                        </b-form-group>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#">Megan Reiffer megan.reiffer@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake5 User fake.user5@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake4 User fake.user4@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake3 User fake.user3@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake2 User fake.user2@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake1 User fake.user1@explorelearning.com</b-dropdown-item>
                </b-dropdown>
                </b-col>
            </b-row>
            </b-form-group>


            <b-form-group
            id="ccEmailGroup"
            label="Cc:"
            label-for="input-cc"
            >
            <b-row>

                <b-col  cols="10" class="pr-0">
                    <b-form-input id="input-cc" v-model="ccEmail" type="email" trim></b-form-input>
                </b-col>
                <b-col  cols="2" class="pl-0">

                <b-dropdown variant="white" no-caret>
                    <template #button-content>
                    <!-- <b-icon icon="person-lines-fill"></b-icon> -->

                    <font-awesome-icon style="color: #00a1e4;"
                        icon="address-book"
                        class="h3"
                    />
                    </template>


                    <b-dropdown-form>
                        <b-form-group label="Filter" label-for="dropdown-form-email" @submit.stop.prevent>
                        <b-form-input
                            id="dropdown-form-email"
                            size="sm"
                            placeholder="email@example.com"
                        ></b-form-input>
                        </b-form-group>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#">Megan Reiffer megan.reiffer@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake5 User fake.user5@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake4 User fake.user4@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake3 User fake.user3@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake2 User fake.user2@explorelearning.com</b-dropdown-item>
                    <b-dropdown-item href="#">Fake1 User fake.user1@explorelearning.com</b-dropdown-item>
                </b-dropdown>
                </b-col>
            </b-row>
            </b-form-group>


            <b-form-group
            id="titleEmailGroup"
            label="Title:"
            label-for="input-title"
            >
            <b-form-input id="input-title" v-model="title" trim></b-form-input>
            </b-form-group>

            <b-form-group
            id="additionalTextEmailGroup"
            label="Additional Text (Optional):"
            label-for="input-additional"
            >
            <b-form-textarea placeholder="Fills the first few lines of the email." rows="3" id="input-additional" v-model="additionalText" trim></b-form-textarea>
            </b-form-group>

            <b-form-checkbox v-model="isRenewal">Is Renewal</b-form-checkbox>

            
            <b-button-group class="mt-4">
            <b-button v-b-toggle.collapse-email-preview variant="info">Preview Email</b-button>
            </b-button-group>

            <b-collapse id="collapse-email-preview" class="mt-2">
                <b-card style="width:fit-content">
                    <td v-html="emailPreviewData.htmlContent"></td>
                </b-card>
            </b-collapse>
    </div>
</template>

<script>
import emailPreview from '../misc/emailPreview.json';

    export default {
        props: {
            toEmail: {
                type: String,
                default: ""
            },
            ccEmail: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""

            },
            additionalText: {
                type: String,
                default: ""
            },
            isRenewal: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                emailPreviewData: emailPreview
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>