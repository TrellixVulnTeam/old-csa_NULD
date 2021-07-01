<template>
    <div>
        <b-table
            :items="emailData"
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
            <template #cell(Delivered)="{ value }">
                <div>
                    <b-icon
                        :icon="value ? 'check' : 'x'"
                        font-scale="1.8"
                        :variant="value ? 'success' : 'danger'"
                    ></b-icon>
                </div>
            </template>

            <template #cell(Opened)="{ value }">
                <div>
                    <b-icon
                        :icon="value ? 'check' : 'x'"
                        font-scale="1.8"
                        :variant="value ? 'success' : 'danger'"
                    ></b-icon>
                </div>
            </template>
        </b-table>
        <b-pagination
            v-if="showPagination"
            size="md"
            class="w-50 m-auto"
            v-model="currentPage"
            :total-rows="emailData.length"
            :per-page="perPage"
            aria-controls="my-table"
            align="fill"
        ></b-pagination>
    </div>
</template>

<script>
    import EmailData from "../misc/emails.json";
    export default {
        data() {
            return {
                fields: [
                    { key: "To", tdClass: "align-middle", sortable: true },
                    {
                        key: "EmailSubject",
                        label: "Subject",
                        tdClass: "align-middle",
                        sortable: true,
                    },
                    { key: "Delivered", tdClass: "align-middle", sortable: true },
                    { key: "Opened", tdClass: "align-middle", sortable: true },
                ],
                emailData: EmailData,
                perPage: 10,
                currentPage: 1,
            };
        },

        computed: {
            showPagination() {
                return this.emailData.length > this.perPage;
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>