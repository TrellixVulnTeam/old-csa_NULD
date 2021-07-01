<template>
    <div>
        <b-container class="border rounded m-3 p-3 pl-4">
            <b-row>
                <b-col>
                    <div class="float-left form-control-plaintext text-left">
                        <Logo style="height:40px" version="full" :productId="info.productID" :product="productTypes[info.productID].toLowerCase()"></Logo>
                        </div>
                </b-col>
                <b-col>
                    <b-form-group
                    label="Display Banner:"
                    label-cols="auto"
                    label-for="display-banner-select"
                    description=""
                    >

                    <b-form-checkbox v-if="editMode" class="float-left" button-variant="outline-dark" v-model="info.displayBanner" button><b-icon :icon="info.displayBanner ? 'eye':'eye-slash'" font-scale="1.5"></b-icon></b-form-checkbox>
                    <b-icon v-else class="float-left mt-2" :icon="info.displayBanner ? 'eye':'eye-slash'" font-scale="1.5"></b-icon>
                    <!-- <b-form-select v-if="editMode"
                    id="display-banner-select"
                    v-model="info.displayBanner" 
                    :options="displayBannerOptions"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""></b-form-select>
                    <p v-else class="float-left form-control-plaintext text-left">{{info.displayBanner ? displayBannerOptions[0].text : displayBannerOptions[1].text}}</p> 
                    -->
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-form-group
                    label="Starts On:"
                    label-cols="auto"
                    label-for="starts-on-input"
                    description=""
                    >
                    <b-form-input
                    id="starts-on-input"
                    :value="info.startsOn ? new Date(info.startsOn).toLocaleString() : 'Never'"
                    type="text"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                    label="Ends On:"
                    label-cols="auto"
                    label-for="ends-on-input"
                    description=""
                    >
                    <b-form-input
                    id="ends-on-input"
                    :value="info.endsOn ? new Date(info.endsOn).toLocaleString() : 'Never'"
                    type="text"
                    :plaintext="!editMode" :readonly="!editMode"
                    placeholder=""
                    />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
import csaTypes from '../../misc/csaTypes'
import Logo from '../WrapperComponents/Logo.vue'
    export default {
  components: { Logo },
        props: {
            info: {
                type: Object
            },
            editMode: {
                type: Boolean,
                default:false
            }
        },
        data() {
            return {
                displayBannerOptions: [{text:'Visible', value:true}, {text:'Invisible', value:false}],
                productTypes: csaTypes.products,
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>