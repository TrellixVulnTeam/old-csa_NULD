<template>
    <div>

            <b-form-group
            id="toEmailGroup"
            label="Email To:"
            label-for="input-1"
            >
            <b-form-input id="input-1" v-model="toEmail" type="email" trim></b-form-input>
            </b-form-group>


            <b-form-group
            id="ccEmailGroup"
            label="Cc:"
            label-for="input-cc"
            >
            <b-form-input id="input-cc" v-model="ccEmail" type="email" trim></b-form-input>
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
            <b-button variant="success">Send Email</b-button>
            </b-button-group>

            <b-collapse id="collapse-email-preview" class="mt-2">
                <b-card>
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