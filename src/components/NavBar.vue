<template>
    <div id="nav" class="mx-0 mt-0 px-0 pt-0" style="margin-top: 0; z-index: 1">
        <b-navbar
            style="height: 85px"
            class="m-0 shadow"
            toggleable="lg"
            type="light"
            variant="white"
        >
            <b-navbar-brand href="#/ordersboard"
                ><h1 class="m-0 display-4">CSA</h1></b-navbar-brand
            >

            <b-navbar-toggle target="nav-collapse" v-if="jti"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav v-if="jti">
                <b-navbar-nav>
                    <b-nav-item class="mr-3" href="#/orders"
                        ><b-icon
                            class="mr-1"
                            style="vertical-align: sub"
                            icon="file-earmark-ruled"
                        ></b-icon>
                        Orders</b-nav-item
                    >
                    <b-nav-item class="mr-3" href="#/techboard"
                        ><b-icon
                            class="mr-1"
                            style="vertical-align: sub"
                            icon="life-preserver"
                        ></b-icon>
                        Support</b-nav-item
                    >
                    <b-nav-item class="mr-3" href="#/misc"
                        ><b-icon
                            class="mr-1"
                            style="vertical-align: sub"
                            icon="shop"
                        ></b-icon>
                        Marketing</b-nav-item
                    >
                    <b-nav-item class="mr-3" href="#"
                        ><b-icon
                            class="mr-1"
                            style="vertical-align: sub"
                            icon="card-checklist"
                        ></b-icon>
                        Rostered Tenants</b-nav-item
                    >
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-input-group class="ml-tab-x" style="width: 60%">
                            <b-nav-item-dropdown
                                no-caret
                                right
                                v-b-tooltip.hover
                                title="History"
                            >
                                <template #button-content>
                                    <b-icon icon="clock"></b-icon>
                                </template>
                                <b-dropdown-item
                                    href="#"
                                    v-for="item in pastSearchResults"
                                    :key="item"
                                    @click="searchInput = item"
                                    >{{ item }}</b-dropdown-item
                                >
                            </b-nav-item-dropdown>

                            <b-form-input
                                placeholder="Super Search"
                                v-model="searchInput"
                                style="border-radius: 50px"
                            ></b-form-input>
                            <b-input-group-append>
                                <!-- <b-button style="border-radius:50px;" size="sm" text="Button" variant="white"><b-icon icon="search"></b-icon><b-icon icon="caret-down"></b-icon></b-button> -->
                                <b-dropdown
                                    variant="white"
                                    right
                                    style="
                                        border-radius: 50px;
                                        margin-top: 0px !important;
                                    "
                                    size="sm"
                                    id="dropdown-1"
                                    class="m-md-2"
                                >
                                    <template #button-content>
                                        <b-icon icon="search"></b-icon>
                                    </template>

                                    <b-dropdown-item @click="searchClicked"
                                        >Subscriptions: by Contract
                                        #</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Subscriptions: by Subscription
                                        Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Subscriptions: by Institution
                                        Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Subscriptions: by
                                        State</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Subscriptions: by
                                        Country</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Subscriptions: by User
                                        Email</b-dropdown-item
                                    >
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item
                                        >Umbrellas: by Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Umbrellas: by Institution
                                        Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Umbrellas: by SF Account
                                        #</b-dropdown-item
                                    >
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item
                                        >Institutions: by Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Institutions: by PID</b-dropdown-item
                                    >
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item
                                        >Logins: by Name</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Logins: by Username</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Logins: by Email</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Logins: by RegCode</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Logins: by Order
                                        Number</b-dropdown-item
                                    >
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item
                                        >Load Subscription ID</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Load Institution ID</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Load Umbrella Account
                                        ID</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Load Login ID</b-dropdown-item
                                    >
                                    <b-dropdown-item
                                        >Load Registration ID</b-dropdown-item
                                    >
                                </b-dropdown>
                            </b-input-group-append>
                        </b-input-group>
                    </b-nav-form>

                    <b-nav-item @click="logoutButtonClicked"
                        >Log out</b-nav-item
                    >
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
    import { mapActions, mapState } from "vuex";
    import urls from "@explorelearning/urls";
    export default {
        data() {
            return {
                searchInput: "",
                pastSearchResults: [],
            };
        },
        methods: {
            ...mapActions("platform/app", ["initApp", "logout"]),
            async logoutButtonClicked() {
                await this.logout({
                    baseUrl: `${urls.getUrls().services}/platform/auth/logout/csa`,
                });
                this.$router.push({ path: "/login" });
            },
            searchClicked() {
                this.pastSearchResults.push(this.searchInput);
            },
        },
        computed: {
            ...mapState("platform/app", ["jti"]),
        },
    };
</script>