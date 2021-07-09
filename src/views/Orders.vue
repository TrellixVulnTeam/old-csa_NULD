<template>
    <div>
        <!-- Page Title -->
        <div>
            <h1 class="m-0 text-center">Orders Dashboard</h1>
        </div>

        <b-container fluid>
            <b-row>
                <b-col cols="9">
                    <!-- Draft Orders -->
                    <b-card class="card shadow m-4 text-center text-dark">
                        <b-card-text>
                            <slot name="card-body">
                                <b-row>
                                    <b-col>
                                        <h2 class="text-left mt-1 m-0">
                                            <b-button class="mb-1"
                                                @click="
                                                    collapseDraft =
                                                        !collapseDraft
                                                "
                                                variant="white"
                                            >
                                                <b-icon
                                                    :icon="
                                                        collapseChevron(
                                                            collapseDraft
                                                        )
                                                    "
                                                    font-scale="2"
                                                    class="m-0 p-0"
                                                ></b-icon
                                            ></b-button>
                                            Draft Orders 
                                    <b-icon
                                        icon="file-earmark-ruled"
                                        class="ml-0 mb-1"
                                        style="vertical-align: sub"
                                    ></b-icon>
                                    
                                    ({{ items.length }})
                                        </h2>
                                    </b-col>
                                    <b-col>
                                        <b-input-group
                                            class=""
                                            prepend="Filter"
                                            :hidden="!collapseDraft"
                                        >
                                            <b-form-input
                                                v-model="draftFilter"
                                            ></b-form-input>
                                        </b-input-group>
                                    </b-col>
                                </b-row>
                                <b-collapse
                                    id="draftOrders"
                                    v-model="collapseDraft"
                                    class="center"
                                >
                                    <b-dropdown
                                        variant="outline-dark"
                                        class="mb-3 float-right"
                                        :text="'Entries per Page: ' + perPage"
                                        size="sm"
                                    >
                                        <b-dropdown-item
                                            v-for="entryOption in [
                                                5, 10, 25, 100,
                                            ]"
                                            @click="perPage = entryOption"
                                            :key="entryOption"
                                            >{{ entryOption }}</b-dropdown-item
                                        >
                                    </b-dropdown>
                                    <b-table
                                        :filter="draftFilter"
                                        selectable
                                        select-mode="single"
                                        @row-selected="onOrderSelected"
                                        striped
                                        hover
                                        bordered
                                        head-variant="dark"
                                        class="w-100 border"
                                        :items="items"
                                        :fields="fields"
                                        :per-page="perPage"
                                        :current-page="currentPage"
                                        ><template v-slot:head()="data">
                                            <h5 class="m-0">
                                                {{ data.label }}
                                            </h5>
                                        </template>
                                        <template #cell(productsString)="data">
                                            <Logo
                                                class="m-1"
                                                v-for="prod in data.value.split(
                                                    ';'
                                                )"
                                                :key="prod"
                                                style="height: 40px"
                                                version="leaf"
                                                :product="prod.toLowerCase()"
                                            ></Logo>
                                        </template>
                                        <template #cell(actions)="">
                                            <b-button
                                                variant="outline-success"
                                                class="mr-1"
                                            >
                                                Provision
                                            </b-button>
                                            <b-button variant="outline-info">
                                                Umbrella
                                            </b-button>
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
                                </b-collapse>
                            </slot>
                        </b-card-text>
                    </b-card>
                    <!-- Emails Sent -->
                    <b-card class="card shadow m-4 text-center text-dark">
                        <b-card-text>
                            <slot name="card-body">
                                <b-row>
                                    <b-col class=" mt-1">
                                        <h2 class="text-left m-0">
                                            <b-button  class="mb-1"
                                                @click="
                                                    collapseEmail =
                                                        !collapseEmail
                                                "
                                                variant="white"
                                            >
                                                <b-icon
                                                    :icon="
                                                        collapseChevron(
                                                            collapseEmail
                                                        )
                                                    "
                                                    font-scale="2"
                                                    class="m-0 p-0"
                                                ></b-icon
                                            ></b-button>
                                            Emails Sent 
                                            
                                        <font-awesome-icon
                                            class="h3 mb-0"
                                            icon="paper-plane"
                                        ></font-awesome-icon>
                                        
                                            ({{ emailData.length }})
                                        </h2>
                                        <b-collapse
                                            id="emailHistory"
                                            v-model="collapseEmail"
                                            class="center"
                                        >
                                            <b-dropdown
                                                variant="outline-dark"
                                                class="mb-3 float-right"
                                                :text="
                                                    'Emails of last: ' +
                                                    emailTimeOption
                                                "
                                                size="sm"
                                            >
                                                <b-dropdown-item
                                                    v-for="entryOption in [
                                                        '24 Hours',
                                                        'Week',
                                                    ]"
                                                    @click="
                                                        emailTimeOption =
                                                            entryOption
                                                    "
                                                    :key="entryOption"
                                                    >{{
                                                        entryOption
                                                    }}</b-dropdown-item
                                                >
                                            </b-dropdown>
                                            <email-history
                                                class="mt-4"
                                            ></email-history>
                                        </b-collapse>
                                    </b-col>
                                </b-row>
                            </slot>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col cols="auto" class=" ">
                    <b-card class="maxheight-vh shadow my-4 mr-4 p-0" >
                        <b-card-text>
                            <h2>Overview</h2>
                            <b-card class="mb-4 p-0" body-class="p-0">
                                <b-card-text class="p-0">
                                    <div>
                                        <b-alert
                                            show
                                            variant="secondary"
                                            class="rounded-0 m-0"
                                            ><h4 class="m-0">
                                                Activated Orders
                                            </h4>
                                        </b-alert>
                                    </div>
                                    <div class="p-2">
                                        <p class="m-0 font-weight-bold">
                                            Today
                                        </p>
                                        <b-row>
                                            <b-col>
                                                <p class="display-4 m-0">13</p>
                                                <p>New</p>
                                            </b-col>
                                            <b-col>
                                                <p class="display-4 m-0">5</p>
                                                <p>Renewal</p>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <hr class="my-1" />
                                    <OrderChart></OrderChart>
                                </b-card-text>
                            </b-card>
                            <b-card class="p-0" body-class="p-0">
                                <b-card-text>
                                    <div>
                                        <b-alert
                                            show
                                            variant="secondary"
                                            class="rounded-0 m-0"
                                            ><h4 class="m-0">Order Products</h4>
                                        </b-alert>
                                    </div>
                                    <OrderPie></OrderPie>
                                </b-card-text>
                            </b-card>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <!-- Order Modal -->

        <b-modal size="xl" ref="order-modal" no-close-on-backdrop no-footer content-class="my-modal-content">
            <template #modal-title>
                <h1 class="m-0 ml-3">
                    Order # {{ selectedOrderDetails.salesforceOrderNumber }}
                </h1>
            </template>
            <b-container>
                <b-row>
                    <b-col>
                        <b-card class="text-center">
                            <OrderSummary
                                :selectedOrderDetails="selectedOrderDetails"
                            ></OrderSummary>
                        </b-card>
                    </b-col>
                    <b-col cols="7" v-if="provisionProcess === 1">
                        <b-card title="Order Umbrella" class="mb-4">
                            <b-card-text>
                                <b-row>
                                    <b-col>
                                        <strong>Parent Institution Name</strong>
                                        <p>Parent Institution</p>
                                    </b-col>
                                    <b-col>
                                        <strong>non Site Subscriptions</strong>
                                        <p>Grant</p>
                                    </b-col>
                                    <b-col cols="3">
                                        <strong>Umbrella ID</strong>
                                        <p>520314</p>
                                    </b-col>
                                    <b-col>
                                        <b-button
                                            class="float-right"
                                            variant="success"
                                            >Provision
                                            <b-icon
                                                style="vertical-align: sub"
                                                icon="arrow-right"
                                                class="ml-2"
                                            ></b-icon
                                        ></b-button>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>

                        <small class="text-secondary"
                            >Other possible Umbrellas (Default search by
                            PID):</small
                        >
                        <b-input-group prepend="Find Umbrella" class="my-3">
                            <b-form-input placeholder="02055386"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-success"
                                    >Search</b-button
                                >
                            </b-input-group-append>
                        </b-input-group>
                        <b-table
                            :items="possibleUmbrellas"
                            :fields="[
                                'parentInstitutionName',
                                'nonSiteSubscription',
                                'umbrellaID',
                                'action',
                            ]"
                        >
                            <template #cell(nonSiteSubscription)>
                                Grant, Trial
                            </template>
                            <template #cell(action)>
                                <b-button variant="outline-success"
                                    >Provision
                                    <b-icon
                                        style="vertical-align: sub"
                                        icon="arrow-right"
                                        class="ml-2"
                                    ></b-icon>
                                </b-button>
                            </template>
                        </b-table>
                        <small class="text-secondary"
                            >Umbrella doesn't exist?<b-button
                                class="ml-2"
                                size="sm"
                                variant="outline-success"
                                >Create one</b-button
                            ></small
                        >
                    </b-col>
                    <b-col cols="7" v-if="provisionProcess === 2">
                        <h2 class="text-center mt-3">Product 1 of 2</h2>
                        <Logo
                            style="height: 40px"
                            class="d-block mx-auto mt-3"
                            version="full"
                            product="reflex"
                        ></Logo>

                        <ViewEditSubscription
                            class="mt-3"
                            :subscriptionData="subscriptionData"
                        ></ViewEditSubscription>

                        <SemiEditableInstitutionList></SemiEditableInstitutionList>
                    </b-col>
                    <b-col cols="7" v-if="provisionProcess === 3">
                        <h2 class="text-center mt-3">
                            Order Confirmation Email
                        </h2>

                        <CSAEmail
                            class="mt-4"
                            :toEmail="selectedOrderDetails.schoolContactEmail"
                            :ccEmail="selectedOrderDetails.orderOwnerEmail"
                            :title="emailSubject"
                            :isRenewal="selectedOrderDetails.renewal"
                        ></CSAEmail>
                    </b-col>
                </b-row>
            </b-container>
            <template #modal-footer="{ cancel }">
                <div class="w-100">
                    <b-button v-if="provisionProcess > 1" @click="provisionProcess = provisionProcess -1" variant="outline-dark" class="float-left mx-2">Prev</b-button>
                    <b-button  v-if="provisionProcess < 3 " @click="provisionProcess = provisionProcess +1" class="mx-2  float-right">Next</b-button>
                    <b-button @click="cancel()" class="mx-2 float-right" variant="white">Close</b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import OrdersData from "../misc/ordersData.json";
    import OrderDetailsData from "../misc/orderDetails.json";
    import Logo from "../components/WrapperComponents/Logo.vue";
    import OrderChart from "../components/Order/OrderChart.vue";
    import OrderPie from "../components/Order/OrderPie.vue";
    import ViewEditSubscription from "../components/ViewEditSubscription.vue";
    import CSAEmail from "../components/CSAEmail.vue";
    import csaTypes from "../misc/csaTypes";
    import OrderSummary from "../components/Order/OrderSummary.vue";
    import EmailHistory from "../components/EmailHistory.vue";
    import SemiEditableInstitutionList from  "../components/SemiEditableInstitutionList.vue";
    import EmailData from "../misc/emails.json";

    export default {
        components: {
            Logo,
            OrderChart,
            OrderPie,
            ViewEditSubscription,
            CSAEmail,
            OrderSummary,
            EmailHistory,
            SemiEditableInstitutionList,
        },
        props: {
            bodyVisible: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                provisionProcess: 1,
                possibleUmbrellas: [
                    {
                        umbrellaID: 100,
                        parentInstitutionName: "Fake institution name",
                    },
                ],
                draftFilter: "",
                activeFilter: "",
                items: OrdersData.reduce((items, item) => {
                    if (
                        items.find(
                            (x) =>
                                x.salesforceOrderNumber ===
                                item.salesforceOrderNumber
                        )
                    ) {
                        return items;
                    } else {
                        items.push(item);
                        return items;
                    }
                }, []),
                fields: [
                    {
                        key: "salesforceOrderNumber",
                        label: "Order Number",
                        sortable: true,
                        tdClass: "align-middle",
                    },
                    {
                        key: "orderName",
                        label: "Order Name",
                        sortable: true,
                        tdClass: "align-middle",
                    },
                    {
                        key: "orderOwner",
                        label: "Sales Rep.",
                        sortable: true,
                        tdClass: "align-middle",
                    },
                    {
                        key: "productsString",
                        label: "Products",
                        sortable: true,
                        tdClass: "align-middle",
                    },
                ],
                collapseDraft: true,
                collapseEmail: false,
                emailTimeOption: "Past 24 Hours",
                chevronActive: false,
                currentPage: 1,
                perPage: 5,
                selectedOrderDetails: {},
                subscriptionData: {
                    Subscription: {
                        modifiedByID: 0,
                        modifiedOn: "2016-09-16T18:57:17.350Z",
                        createdByID: 0,
                        createdOn: "2016-09-12T16:08:30.656666700Z",
                        subscriptionName: "Emery, Marianne",
                        licensingTypeID: 8,
                        productID: 1,
                        salesForceContractID: null,
                        salesForceContractNumber: null,
                        startsOn: "2016-09-12T04:00:00Z",
                        expiresOn: "2017-10-16T04:00:00Z",
                        enforceStartDate: false,
                        gracePeriod: 0,
                        isActive: true,
                        tenantID: 2029,
                        pendingSubscriptionID: 0,
                        pendingEffectiveOn: null,
                        sourceID: 0,
                        notes: null,
                        isSSOLTIEnabled: false,
                        isSSOSamlEnabled: false,
                        isRosterEnabled: true,
                        teachersCap: 0,
                        teachersUsed: 0,
                        upgradeAllowed: true,
                        extraSubscriptionAccessJson: null,
                        lengthInDays: 399,
                        isExpired: true,
                        subscriptionMemberList: [
                            {
                                modifiedByID: 0,
                                modifiedOn: null,
                                createdByID: 0,
                                createdOn: null,
                                subscriptionID: 145426,
                                institutionID: 68294,
                                seatsCap: 35,
                                seatsUsed: 18,
                                teachersCap: 0,
                                teachersUsed: 0,
                                tenantID: 2029,
                                institutionTypeID: 4,
                                institutionName: "BAYWOOD ELEMENTARY SCHOOL",
                                parentInstitutionID: 2498,
                                parentInstitutionName:
                                    "SAN LUIS COASTAL UNIF SCH DIST",
                                stateCode: "CA",
                                countryCode: "USA",
                                city: "LOS OSOS",
                                enrollment: 344,
                                allowRolesToEnrollStudents: false,
                                startOfSchoolDay: 22,
                                startOfSchoolMonth: 8,
                                defaultLanguageID: 0,
                                externalSchoolID: null,
                            },
                        ],
                    },
                }.Subscription,
                institutions: [],
                subscriptionList: [],
                emailData: EmailData,
            };
        },
        methods: {
            openInNewTab(url) {
                window.open(url);
            },
            collapseChevron(id) {
                return id ? "dash-circle" : "plus-circle";
            },
            onOrderSelected(order) {
                // console.log(order);
                OrderDetailsData.SFOrder.productsString =
                    order[0].productsString.replaceAll(";", ", ");
                this.selectedOrderDetails = OrderDetailsData.SFOrder;
                console.log(OrderDetailsData);
                this.$refs["order-modal"].show();
            },
            copyToClipboard(refName) {
                const element = this.$refs[refName]; // e.g. <div ref="text">

                var range;
                if (document.selection) {
                    // IE
                    range = document.body.createTextRange();
                    range.moveToElementText(element);
                    range.select();
                } else if (window.getSelection) {
                    range = document.createRange();
                    range.selectNode(element);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                }
                document.execCommand("copy");
            },
        },
        computed: {
            showPagination() {
                return this.items.length > this.perPage;
            },
            emailSubject() {
                const products = OrderDetailsData.SFOrder.productsString;
                const orderType = this.selectedOrderDetails.renewal
                    ? " Renewal Order "
                    : " Order ";
                const licensingType =
                    csaTypes.licensingTypeOptions[
                        this.selectedOrderDetails.licensingTypeID
                    ];

                var name =
                    "ExploreLearning " +
                    products +
                    orderType +
                    this.selectedOrderDetails.salesforceOrderNumber +
                    licensingType +
                    " LICENSE #";

                if (this.subscriptionList.length == 1) {
                    name +=
                        " - " +
                        this.urSubscription.subscriptionMemberList[0]
                            .institutionName;
                } else if (this.institutions && this.institutions.length == 1) {
                    name += "- " + this.institutions[0].institutionName;
                } else {
                    name += " - " + this.selectedOrderDetails.schoolContactName;
                }
                return name;
            },
        },
    };
</script>
<style lang="scss">
    // .modal-dialog {
    //     width: 100%;
    //     margin: 0;
    // }
    p {
        margin: 0;
    }
    .maxheight-vh {
        // height: 100vh;
    }

    .my-modal-content {
        width: 55vw !important;
        // width: max-content !important;
        padding-right: 20px;
    }
</style>

