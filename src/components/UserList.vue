<template>
    <div>
        <b-table
            :filter="filter"
            selectable
            select-mode="single"
            @row-selected="onRowSelected"
            striped
            hover
            bordered
            head-variant="dark"
            class="w-100 border"
            :items="items"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
        >
            <template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>

            <template #cell(fullName)="{ item }">
                <div>{{ item.firstname }} {{ item.lastname }}</div>
            </template>

            <template #cell(roleID)="{ value }">
                <div>
                    {{ userTypes[value] }}
                </div>
            </template>

            <template #cell(passwordClear)="{ value }">
                <div>
                    <b-input-group>
                        <b-form-input
                            class="text-right"
                            type="password"
                            plaintext
                            :value="value"
                        ></b-form-input>

                        <b-button variant="white">
                            <b-icon icon="eye"></b-icon>
                        </b-button>
                    </b-input-group>
                </div>
            </template>

            <template #cell(email)="{ value }">
                <div>
                    <p v-if="value">value</p>
                    <b-icon v-else icon="dash"></b-icon>
                </div>
            </template>

            <template #cell(isSubscribedToEmails)="{ value }">
                <div>
                    <b-icon
                        v-if="value"
                        icon="check"
                        font-scale="1.5"
                        variant="success"
                    ></b-icon>
                    <b-icon
                        v-else
                        icon="x-circle"
                        font-scale="1.5"
                        variant="danger"
                    ></b-icon>
                </div>
            </template>

            <template #cell(isDeleted)="{ value }">
                <div>
                    <b-icon
                        v-if="value"
                        icon="check"
                        font-scale="1.5"
                        variant="danger"
                    ></b-icon>
                    <b-icon v-else icon="dash"></b-icon>
                </div>
            </template>


            <template #cell(products)="{ item }">
                <div>
                    <Logo v-if="item.reflexLicense" product="reflex"></Logo>
                    <Logo v-if="item.fractionsLicense" product="frax"></Logo>
                    <Logo v-if="item.gizmosLicense" product="gizmos"></Logo>
                    <Logo v-if="item.s4usLicense" product="s4us"></Logo>
                </div>
            </template>
        </b-table>
        <b-pagination
            v-if="showPagination"
            size="md"
            class="w-50 m-auto"
            v-model="currentPage"
            :total-rows="items.length"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
        ></b-pagination>
    </div>
</template>

<script>
import usersInUmbrella from "../misc/usersInUmbrella.json";
import csaTypes from "../misc/csaTypes";
import Logo from './WrapperComponents/Logo.vue';

export default {
    components: { Logo },
    props: {
        filter: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            items: usersInUmbrella.ArrayList,
            fields: [
                { label: "Full Name", key: "fullName" },
                { label: "Institution", key: "institutionName" },
                { label: "Login ID", key: "loginID" },
                { label: "Role", key: "roleID" },
                { label: "Username", key: "username" },
                { label: "Password", key: "passwordClear" },
                { label: "Student ID", key: "sisUserID" },
                { label: "Email", key: "email" },
                { label: "Subscribed", key: "isSubscribedToEmails" },
                { label: "Last Login", key: "lastLoginOn" },
                { label: "Deleted", key: "isDeleted" },
                { label: "Products", key: "products" },
            ],
            perPage: 10,
            currentPage: 1,
            userTypes: csaTypes.loginRoleAllOptions,
        };
    },
    methods: {
        onRowSelected() {},
        onDataFilled() {
            if (this.items[0].cleverID) {
                this.fields.push({ label: "Clever ID", key: "cleverID" });
            } else if (this.items[0].samlUserID) {
                this.fields.push({ label: "SAML ID", key: "samlUserID" });
            } else if (this.items[0].ltiUserID) {
                this.fields.push({ label: "LTI ID", key: "ltiUserID" });
            }
        },
    },
    created() {
        this.onDataFilled();
    },
    computed: {
        showPagination() {
            return this.items.length > this.perPage;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>