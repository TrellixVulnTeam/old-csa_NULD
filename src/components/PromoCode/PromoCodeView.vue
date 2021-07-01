<template>
    <div>
        <div class="m-3">

            <b-button variant="success">Create Promo Code</b-button>
        </div>

        
        <b-table :items="promoItems" :fields="promoFields">
            <template #cell(startsOn)="data">
                {{ new Date(data.value).toLocaleString() }}
            </template>

            <template #cell(isEnabled)="data">
                <b-icon v-if="data.enabled" icon="check" variant="success"></b-icon>
                <b-icon v-else icon="x" variant="danger"></b-icon>
            </template>

            <template #cell(expiresOn)="data">
                {{ new Date(data.value).toLocaleString() }}
            </template>

            <template #cell(promoCodeTypeID)="data">
                {{getProductType(data.value)}}
            </template>

            <template #cell(details)="data">
                {{getDetails(data.item)}}
            </template>

            <template #cell(action)="">
                <b-button variant="outline-secondary"><b-icon icon="pencil"></b-icon></b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import csaTypes from '../../misc/csaTypes'
    export default {
        name: 'PromoCode',
        data() {
            return {
                promoItems: [],
                promoFields: [{label: "Code", key:"code"}, {label: "Starts On", key:"startsOn"}, {label: "Expires On", key:"expiresOn"}, {label: "Enabled", key:"isEnabled"}, {label: "Message", key:"message"}, {label: "Type", key: "promoCodeTypeID"}, {label: "Max Uses", key:"maxUses"}, {label: "Details", key:"details"}, {label: "Edit", key:"action"} ]
            }
        },
        methods: {
            getPromoCodes() {
                const data = {"ArrayList":[{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"2YEAR","startsOn":"2018-11-16T15:23:37.608Z","expiresOn":"2019-09-02T14:23:37.608Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":2,"purchaseNewPricePerSeat":20.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"AA425","startsOn":"2021-01-14T14:24:35.793Z","expiresOn":"2021-01-18T14:24:35.793Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":"Dr Dre's Quarter Special","maxUses":0,"timesUsed":1,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":1,"purchaseNewPricePerSeat":25.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"ANDRES1","startsOn":"2020-06-15T10:53:27.128Z","expiresOn":"2020-06-30T10:53:27.128Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":null,"maxUses":20,"timesUsed":0,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":1,"purchaseNewPricePerSeat":20.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"Andypro","startsOn":"2020-07-16T19:07:39.453Z","expiresOn":"2020-07-22T04:00:00Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":null,"maxUses":20,"timesUsed":1,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":1,"purchaseNewPricePerSeat":25.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"CAST4519","startsOn":"2019-11-21T20:24:58.943Z","expiresOn":"2019-12-21T05:00:00Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"DAVIS3019","startsOn":"2019-08-23T18:55:53.545Z","expiresOn":"2019-09-30T18:55:53.545Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":30,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"ELQA","startsOn":"2021-05-19T17:55:26.764Z","expiresOn":"2021-05-23T04:00:00Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":"Von's Promo, NICE!","maxUses":0,"timesUsed":0,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":10.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"EXP","startsOn":"2021-05-17T04:00:00Z","expiresOn":"2021-05-18T04:00:00Z","isValid":false,"isEnabled":true,"promoCodeTypeID":2,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":0,"trialNewSeats":0,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"GB4518","startsOn":"2018-10-01T13:21:34.597Z","expiresOn":"2019-10-15T13:21:34.597Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"GB6018","startsOn":"2018-10-01T13:00:26.361Z","expiresOn":"2019-10-15T13:00:26.361Z","isValid":false,"isEnabled":false,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"HISD4520","startsOn":"2020-01-10T19:56:22.959Z","expiresOn":"2020-02-10T19:56:22.959Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":false},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"ILR4519","startsOn":"2019-04-23T19:52:00.456Z","expiresOn":"2019-06-30T19:52:00.456Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"LACUE4519","startsOn":"2019-12-04T22:18:45.526Z","expiresOn":"2020-01-04T22:18:45.526Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"LATM4519","startsOn":"2019-11-04T18:47:45.341Z","expiresOn":"2019-12-04T18:47:45.341Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"MANATEE6018","startsOn":"2018-07-30T01:10:48.189Z","expiresOn":"2018-09-01T01:10:48.189Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":60,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"NCEA19R","startsOn":"2019-04-10T18:54:23.908Z","expiresOn":"2019-07-01T18:54:23.908Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"QATRIAL","startsOn":"2019-03-08T15:56:25.992Z","expiresOn":"2019-03-09T05:00:00Z","isValid":false,"isEnabled":false,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":180,"trialNewSeats":20,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"R30C","startsOn":"2020-05-18T13:42:42.423Z","expiresOn":"2021-06-30T13:42:42.423Z","isValid":true,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":30,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"R45NOV19","startsOn":"2019-11-04T13:27:23.226Z","expiresOn":"2019-11-30T13:27:23.226Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"R60B","startsOn":"2020-06-15T10:52:04.188Z","expiresOn":"2020-06-30T10:52:04.188Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":60,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"R60C","startsOn":"2020-03-16T13:59:27.256Z","expiresOn":"2020-06-30T13:59:27.256Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":60,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"REG1R4519","startsOn":"2019-05-15T21:25:14.815Z","expiresOn":"2019-06-15T21:25:14.815Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"RFLX60SS","startsOn":"2020-03-10T19:54:17.859Z","expiresOn":"2020-04-30T19:54:17.859Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":60,"trialNewSeats":30,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"RG1945","startsOn":"2019-07-25T19:15:37.650Z","expiresOn":"2019-10-31T19:15:37.650Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true},{"modifiedByID":0,"modifiedOn":null,"createdByID":0,"createdOn":null,"code":"T4518","startsOn":"2018-10-08T17:18:10.671Z","expiresOn":"2018-12-31T18:18:10.671Z","isValid":false,"isEnabled":true,"promoCodeTypeID":1,"message":null,"maxUses":0,"timesUsed":0,"trialNewDurationDays":45,"trialNewSeats":35,"purchaseYearsAtPrice":0,"purchaseNewPricePerSeat":0.0000,"productID":1,"messageDisplayed":true}]};
                this.promoItems = data.ArrayList;
            },
            getProductType(value) {
                return Object.entries(csaTypes.promoCodeTypeOptions).find(x => x[1]=== value)[0]
            },
            getDetails(promoCode) {
                if (promoCode.promoCodeTypeID == csaTypes.promoCodeTypeOptions.Trial) { // TRIAL promo
                    return promoCode.trialNewSeats + " seats for " + promoCode.trialNewDurationDays + " days."
                }
                else if (promoCode.promoCodeTypeID == csaTypes.promoCodeTypeOptions.Purchase){ // PURCHASE promo
                    if (promoCode.purchaseYearsAtPrice == 0){
                        return `$${promoCode.purchaseNewPricePerSeat} per seat; no years limit.`;
                    }
                    else {
                        return `$${promoCode.purchaseNewPricePerSeat} per seat for ${promoCode.purchaseYearsAtPrice} years.`;
                    }
                }
                return "";
            }
        },
        created () {
            this.getPromoCodes();
        },
    }
</script>

<style lang="scss" scoped>

</style>