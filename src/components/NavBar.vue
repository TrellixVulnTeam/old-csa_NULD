<template>
    <div>
        <b-navbar
            class="m-0 shadow csa-navbar"
            toggleable="lg"
            variant="el-light-dark"
            type="dark"
        >
            <b-navbar-brand>
                <h1 class="m-0 display-4 mr-3">CSA</h1>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" v-if="jti"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav v-if="jti">
                <!-- Nav Buttons -->
                <b-navbar-nav>
                    <b-nav-item
                        v-for="(item, index) in items"
                        :key="index"
                        class="mr-4"
                        @click="changeNav(index)"
                        :href="item.url"
                        :class="item.active ? 'active-nav' : 'inactive-nav'"
                        :active="item.active"
                        ><b-icon
                            :icon="item.icon"
                            class="mr-2"
                            style="vertical-align: sub"
                            font-scale="1.5"
                        ></b-icon
                        >{{ item.name }}
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Nav Search Bar -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-input-group class="ml-tab-x">
                            <b-nav-item-dropdown
                                no-caret
                                right
                                v-b-tooltip.hover
                                title="History"
                            >
                                <template #button-content>
                                    <b-icon
                                        font-scale="1.5"
                                        icon="clock"
                                    ></b-icon>
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
                                style="border-radius: 3px; height: auto"
                            ></b-form-input>
                            <b-input-group-append>
                                <!-- <b-button style="border-radius:50px;" size="sm" text="Button" variant="white"><b-icon icon="search"></b-icon><b-icon icon="caret-down"></b-icon></b-button> -->
                                <b-dropdown
                                    variant="dark"
                                    right
                                    style="
                                        border-radius: 3px;
                                        margin-top: 0px !important;
                                    "
                                    id="dropdown-1"
                                >
                                    <template #button-content>
                                        <b-icon
                                            icon="search"
                                            variant="light"
                                        ></b-icon>
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

                    <b-nav-item @click="logoutButtonClicked" class="ml-4 mr-2">
                        Log out
                        <b-icon icon="box-arrow-in-right"></b-icon
                    ></b-nav-item>
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
                items: [
                    {
                        name: "Orders",
                        icon: "file-earmark-ruled",
                        url: "/#/orders",
                        active: true,
                    },
                    {
                        name: "Support",
                        icon: "life-preserver",
                        url: "/#/tech",
                        active: false,
                    },
                    {
                        name: "Marketing",
                        icon: "shop",
                        url: "/#/orders",
                        active: false,
                    },
                    {
                        name: "Rostering",
                        icon: "clipboard-check",
                        url: "/#/roserting",
                        active: false,
                    },
                ],
                activeIndex: 0,
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
            changeNav(index) {
                this.items[this.activeIndex].active = false;
                this.activeIndex = index;
                this.items[this.activeIndex].active = true;
            },
        },
        computed: {
            ...mapState("platform/app", ["jti"]),
        },
    };
</script>

<style lang="scss">
    .csa-navbar {
        position: fixed;
        height: 90px;
        width: 100%;
        z-index: 100;
    }

    .active-nav {
        font-weight: bold;
        border-bottom: 1px solid white;
    }

    .inactive-nav {
        font-weight: bold;
    }

    .logout {
        color: white !important;
    }
</style>