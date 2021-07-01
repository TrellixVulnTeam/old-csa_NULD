<template>
    <div>
        <b-breadcrumb
      class="text-center mx-1 mt-3  justify-content-center"
      style="
        background-color: transparent;
        font-weight: bold;
      "
      :items="[
        { text: 'Select Umbrella to Split', active: false },
        { text: 'Select Institutions & Users to move', active: false },
        { text: 'Select Subscriptions to move', active: false },
        { text: 'Confirm Split', active: true },
      ]"
    ></b-breadcrumb>
        

        <b-container class="mb-5">
            <b-row  v-if="false">
                <b-col>
                    <CSACard title="Select Umbrella to Split" class="w-100" :hideCaret="true" :bodyVisible="true">
                        <template #card-body><div>
                            <selectTenant></selectTenant>
                            <b-button class="float-right" variant="outline-primary">Next</b-button>
                            </div></template>
                    </CSACard>
                </b-col>
            </b-row>
            <b-row  v-if="false">
                <b-col >
                    <CSACard title="Select Institutions & Users to move" :bodyVisible="true" :hideCaret="true" class="w-100">
                        <template #card-body>
                            <div>
                                <b-table 
                                    hover 
                                    selectable
                                    select-mode="single"
                                    :selectRow="selectRow"
                                    :items="insitutionItems"
                                    :fields="['select', 'id', 'name', 'other']"
                                    >

                                    <template #cell(select)="data">
                                        <b-form-checkbox v-model="data.selected" inline>Select all users</b-form-checkbox>
                                    </template>  

                                    <template #row-details="" class="pl-5">
                                        <div>

                                        <b-card class="ml-5">
                                            <b-table :items="userItems" :fields="['select', 'id', {label: 'User\'s Name', key:'name'}, 'other']">
                                                <p>Select users to transfer</p>
                                                <template #cell(select)="data">
                                                    <b-form-checkbox v-model="data.selected" inline></b-form-checkbox>
                                                </template>           
                                            </b-table>
                                        </b-card>
                                        </div>
                                    </template>
                                </b-table>

                                <b-button variant="outline-dark" class="float-left mt-5">Back</b-button>

                                <b-button variant="success" class="float-right mt-5">Next</b-button>
                            </div>
                        </template>
                    </CSACard>
                </b-col>
            </b-row>
            
            <b-row  v-if="false">
                <b-col>
                    <CSACard title="Select Subscriptions to Move" class="w-100" :hideCaret="true" :bodyVisible="true">
                        <template #card-body><div>
                            <MapSubscription></MapSubscription>
                            <b-button class="float-right" variant="outline-primary">Next</b-button>
                            </div></template>
                    </CSACard>
                </b-col>
            </b-row>
            <b-row>
                <b-col>

                    <CSACard v-if="true" title="Confirm Split" :bodyVisible="true" :hideCaret="true" class="w-100">
                        <template #card-body>
                        <b-button size="lg" class="my-5" variant="success">Split</b-button>

                        <preview-merge :isSplit="true"></preview-merge>
            <b-button  class="float-left mt-5" variant="outline-dark"><b-icon icon="chevron-left"></b-icon> Previous</b-button>

                        </template>
                    </CSACard>
                </b-col>
            </b-row>
        </b-container>



<!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
  <b-modal id="modal-1" title="Select Umbrella to split out of 'Miami Dolphins'">
    <b-table :items="[{id:100, name:'Miami Central', PIDs:[123, 124] }, {id:101, name:'Miami High', PIDs:[123, 124] }]">
    </b-table>
    <hr class="mt-3">
    <p class="text-secondary d-inline">Can't find it? </p>
    <b-button variant="outline-success">Create new Umbrella</b-button>
    <template #modal-footer>
      <div>
        <b-button  variant="outline-success">Split</b-button>
      </div>
    </template>
  </b-modal>
    </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard.vue'
import SelectTenant from '../components/SelectTenant.vue'
import MapSubscription from '../components/MapSubscription.vue'
import PreviewMerge from './PreviewMerge.vue'
    export default {
  components: { CSACard,  SelectTenant, MapSubscription, PreviewMerge },
  data() {
      return {
          insitutionItems: [{id: 100, name:'Miami High', etc: 'other...',  _showDetails: true}, {id: 100, name:'Miami Middle', etc: 'other...', _showDetails: false}],
          userItems: [{id: 1030, name: "Peter Pan", etc:"other....", }, {id: 1050, name: "Wendy Darling", etc:"other....", }, {id: 1050, name: "John Darling", etc:"other....", }, {id: 1050, name: "Michael Darling", etc:"other....", }]
      }
  },
        methods: {
            selectRow(row) {
                console.log(row);
                row._showDetails = true
                // this.$refs.selectableTable.clearSelected()
                this.insitutionItems[row]._showDetails = true;
                
            }
        },
    
    }
</script>

<style lang="scss" scoped>
.breadcrumb-item.active {
  color: white;
}
</style>