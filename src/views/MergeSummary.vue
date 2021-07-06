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
                                    <font-awesome-icon icon="umbrella" class="text-blue h3"/>
                                <h4>
                                    Map Umbrella 
                                    </h4>
                            </b-col>
                        </b-row>

                        <!-- <div class="text-left"><strong class="d-block">Source:</strong> <p v-if="step > 0" class="d-inline ml-3">Miami Middle School <br></p>
                        <p class="mt-2"><span class="text-left"><strong class="d-block">Destination:</strong><span class="ml-3"> Miami A.</span></span></p>
                        </div> -->

                            <b-table  :items="[
                            {
                                Source: 'Miami Middle School',
                                Destination: 'Miami A.'

                            }, 
                            ]" :fields="['Source', 'to','Destination']">
                            <template v-slot:head()="data">
                                            <h6 class="m-0 font-weight-bold">
                                                {{ data.label }}
                                            </h6></template>
                                <template #cell(to)>
                                    <b-icon icon="arrow-right">
                                    </b-icon>
                                </template>
                            </b-table>
                    </b-col>
                </b-row>
                <b-row class="my-3">

                    <b-col>
                        <b-row>
                            <b-col>
                                     <font-awesome-icon class="text-orange h3" icon="users"></font-awesome-icon> 
                                <h4>
                                     Users to Move</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 1">
                            <b-row>
                                <b-col>

                            <p class="display-4 mb-0">6</p>
                            <p>Institutions</p>

                                </b-col>
                                <b-col>
                            <p class="display-4 mb-0">160</p>
                            <p class="ml-3">Users<b-button v-b-toggle.x variant="white">
                                <font-awesome-icon icon="cloud-download-alt" class="h5"/></b-button></p>

                                </b-col>
                            </b-row>
                            <!-- <div class="text-left"><strong>Total Institutions:</strong> <p class="d-inline">6</p> </div> -->
                            <!-- <p class="text-left"><strong>Total Users:</strong> 100 <b-button v-b-toggle.x variant="white"><b-icon icon="chevron-down"></b-icon></b-button></p> -->

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
                <b-row class="my-3">

                    <b-col>
                        <b-row>
                            <b-col>
                                     <font-awesome-icon class="text-purple h3" icon="book-reader"></font-awesome-icon>
                                <h4>
                                 Map Users New Subscription</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 2">
<!-- 
                                <div class="text-left"><strong class="d-block">Source:</strong> <p v-if="step > 0" class="d-inline ml-3">Rodriguez, Antoinette (Grant) <br></p>
                                <p class="mt-2"><span class="text-left"><strong class="d-block">Destination:</strong><span class="ml-3"> CICERO PREPARATORY ACADEMY</span></span></p>
                                </div> -->



                            <b-table  :items="[
                            {
                                Source: 'Rodriguez, Antoinette (Grant)',
                                Destination: 'CICERO PREPARATORY ACADEMY'

                            }, 
                            ]" :fields="['Source', 'to','Destination']">
                            <template v-slot:head()="data">
                                            <h6 class="m-0 font-weight-bold">
                                                {{ data.label }}
                                            </h6></template>
                                <template #cell(to)>
                                    <b-icon icon="arrow-right">
                                    </b-icon>
                                </template>
                            </b-table>

                        </div>
                        <b-icon v-else icon="dash"></b-icon>
                    </b-col>
                </b-row>
                <b-row class="my-3">
                    <b-col>
                        <b-row>
                            <b-col>
                                     <font-awesome-icon class="text-salmon h3" icon="school"></font-awesome-icon> 
                                <h4>
                                Map Users New Institutions</h4>
                            </b-col>
                        </b-row>
                        <div v-if="step > 3">

                            <b-table :items="[
                            {
                                Source: 'CICERO PREPARATORY ACADEMY',
                                Destination: 'CCLB GATEWAY CITIES CHTR SCH'

                            }, {
                                Source: 'GLENN CO OFFICE OF EDUCATION',
                                Destination: 'GLENN CO OFFICE OF EDUCATION'
                            }
                            ]" :fields="['Source', 'to','Destination']">
                            <template v-slot:head()="data">
                                            <h6 class="m-0">
                                                {{ data.label }}
                                            </h6></template>
                                <template #cell(to)>
                                    <b-icon icon="arrow-right">
                                    </b-icon>
                                </template>
                            </b-table>

                            <!-- <div class="float-left"><strong>Source:</strong> <p v-if="step > 0" class="d-inline">CICERO PREPARATORY ACADEMY</p> </div> -->
                            <!-- <p class="float-left"><strong>Destination:</strong> CCLB GATEWAY CITIES CHTR SCH</p> -->
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
@import "../app.scss";
$jscharBlue: rgb(54, 162, 235);
$jscharRed: rgb(255, 99, 132);
$jscharOrange: rgb(255, 159, 64);
$jscharYellow: rgb(255, 205, 86);
$jscharGreen: rgb(75, 192, 192);
$jscharBlue: rgb(54, 162, 235);
$jscharPurple: rgb(153, 102, 255);
$jschargrey: rgb(201, 203, 207);

.text-blue {
    color:$jscharBlue;
}
.text-orange {
    color: $jscharOrange;
}
.text-purple {
    color: $jscharPurple;
}
.text-salmon {
    color: $jscharGreen;
}
</style>