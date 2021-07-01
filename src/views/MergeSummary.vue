<template>
    <div class="">
        <CSACard title="" :hideCaret="true" :bodyVisible="true" 
      class="w-100 mb-5" >
    
            <template #card-body>
                <div>
                    <h2>Summary</h2>
                    
            <b-container class="mb-4">
                <hr>
                <b-row class="my-3">
                    <b-col>
                        <b-row class="my-1">
                            <b-col>
                                <h4>Map Umbrella</h4>
                            </b-col>
                        </b-row>

                        <div class="text-left"><strong>Source:</strong> <p v-if="step > 0" class="d-inline">Miami Middle School <br>
                        <span class="text-left"><strong>Destination:</strong> Miami A.</span></p>
                        </div>

                    </b-col>
                </b-row>
                <hr>
                <b-row class="my-3">

                    <b-col>
                        <b-row>
                            <b-col>
                                <h4>Users to Move</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 1">
                            <div class="text-left"><strong>Total Institutions:</strong> <p class="d-inline">6</p> </div>
                            <p class="text-left"><strong>Total Users:</strong> 100 <b-button v-b-toggle.x variant="white"><b-icon icon="chevron-down"></b-icon></b-button></p>

                            <b-collapse id="x">
                                <b-card>
                                    <b-card-text>
                                        <b-button variant="outline-dark" class="m-2">Export Teachers</b-button>
                                        <b-button variant="outline-dark" class="m-2">Export Students</b-button>
                                        <b-button variant="outline-dark" class="m-2">Export Classes</b-button>
                                    </b-card-text>
                                </b-card>
                            </b-collapse>

                        </div>
                        <b-icon v-else icon="dash"></b-icon>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="my-3">

                    <b-col>
                        <b-row>
                            <b-col>
                                <h4>Map Users new Subscription</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 2">
                            
                            
                            <div class="text-left"><strong>Source:</strong> <p class="d-inline">Rodriguez, Antoinette (Grant)</p> </div>
                            <p class="text-left"><strong>Destination:</strong> CICERO PREPARATORY ACADEMY</p>

                        </div>
                        <b-icon v-else icon="dash"></b-icon>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="my-3">
                    <b-col>
                        <b-row>
                            <b-col>
                                <h4>Map Users new Institutions</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 3">

                            <div class="float-left"><strong>Source:</strong> <p v-if="step > 0" class="d-inline">CICERO PREPARATORY ACADEMY</p> </div>
                            <p class="float-left"><strong>Destination:</strong> CCLB GATEWAY CITIES CHTR SCH</p>
                        </div>
                        <b-icon v-else icon="dash"></b-icon>
                    </b-col>
                </b-row>
            </b-container>    
                </div>
            </template>
      </CSACard>
    </div>
</template>

<script>
import CSACard from '../components/WrapperComponents/CSACard.vue'
    export default {
    components: { CSACard },
        props: {
            step: {
                type: Number,
                default: 0
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>