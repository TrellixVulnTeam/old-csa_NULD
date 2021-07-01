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
                        <b-row class="my-2">
                            <b-col><strong>Source:</strong> <p v-if="step > 0">Miami B.</p> </b-col>
                            <b-col><strong>Destination:</strong> Miami A.</b-col>
                        </b-row>
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
                            <b-col>Users from 6 Institutions</b-col>
                            <b-col><strong>Total Users:</strong>100</b-col>


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

                            <b-col><strong>Source:</strong> <p v-if="step > 0" class="d-inline">Rodriguez, Antoinette (Grant)</p> </b-col>
                            <b-col><strong>Destination:</strong> CICERO PREPARATORY ACADEMY</b-col>

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


                            <b-col><strong>Source:</strong> <p v-if="step > 0" class="d-inline">CICERO PREPARATORY ACADEMY</p> </b-col>
                            <b-col><strong>Destination:</strong> CCLB GATEWAY CITIES CHTR SCH</b-col>
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