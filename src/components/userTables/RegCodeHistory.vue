<template>
    <div>

        <b-table
        
            :items="items"
            :current-page="currentPage"
            :per-page="perPage"
            :fields="fields"
            striped
            bordered
            head-variant="dark"
            ><template v-slot:head()="data">
                <h5 class="m-0">
                    {{ data.label }}
                </h5>
            </template>

            <template #cell(isValid)="{value}">
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
            <template #cell(expiresOn)="{value}">
                <div>
                    {{new Date(value).toLocaleDateString()}} 
                </div>
            </template>
            <template #cell(regTypeID)="{value}">
                <div>
                    {{displayRegCodeType(value)}} 
                </div>
            </template>
            <template #cell(productID)="{value}">
                <div>
                    <Logo :product="productTypes[value].toLowerCase()"
                        style="
                            height: 40px;
                        "
                    ></Logo>
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
import csaTypes from "../../misc/csaTypes"
import Logo from "../WrapperComponents/Logo.vue"
    export default {
        components: { Logo },
        props: {
            items: {
                type: Array,
                default: () => {return {"ArrayList":[{"regCode":"CBPCJ6Z5","regTypeID":5,"email":null,"productID":1,"expiresOn":"2021-02-22T14:19:46.039Z","maxUses":20,"timesUsed":0,"isActive":false,"isValid":false,"clientJson":null},{"regCode":"FBPCJ3Z5","regTypeID":5,"email":null,"productID":1,"expiresOn":"2021-02-22T14:19:47.509Z","maxUses":20,"timesUsed":0,"isActive":false,"isValid":false,"clientJson":null},{"regCode":"6BPCJ7Z5","regTypeID":5,"email":null,"productID":1,"expiresOn":"2021-02-22T14:19:49.521Z","maxUses":20,"timesUsed":0,"isActive":true,"isValid":false,"clientJson":null}]}.ArrayList}
            },
        },
        data() {
            return {
                productTypes: csaTypes.products,
                displayRegCodeType: csaTypes.displayRegCodeTypeID,
                fields: [

                    {label: "RegCode",
                    key:  "regCode",
                    },
                    {label: "Product",
                    key:  "productID",
                    },
                    {label: "RegType",
                    key:  "regTypeID",
                    },
                    {label: "Email",
                    key:  "email",
                    },
                    {label: "Valid",
                    key:  "isValid",
                    },
                    {label: "Expires On",
                    key:  "expiresOn",
                    },
                    {label: "Max Uses",
                    key:  "maxUses",
                    },
                    {label: "Times Used",
                    key:  "timesUsed",
                    }
                ],
                perPage: 10,
                currentPage: 1,
            };
        },

        computed: {
            showPagination() {
                return this.items.length > this.perPage;
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>