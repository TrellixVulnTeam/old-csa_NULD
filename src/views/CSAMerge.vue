<template>
  <div>
    <b-container class="pb-5">
      <div class="">
        <b-breadcrumb
          class="text-center mx-1 mt-3 mb-0 justify-content-center"
          style="background-color: transparent; font-weight: bold"
          :items="tabs"
          @click="tabChanged(1)"
        >
        </b-breadcrumb>
      </div>

      <Mapper v-if="tab == 0"></Mapper>
      <MapSubscription v-if="tab == 1"></MapSubscription>
      <MapInstitution v-if="tab == 2"></MapInstitution>
      <CSACard v-if="tab == 3" title="Confirm Merge" :bodyVisible="true" :hideCaret="true" class="w-100">
        <template #card-body>
          <b-button  size="lg" class="my-5" variant="success"><h3>Merge</h3></b-button>
          <PreviewMerge></PreviewMerge>
        </template> 
      </CSACard>
    </b-container>

    <div class="position-fixed" style="top:50%; left:20px;">
      <b-button @click="tabChanged(-1)" variant="white"><b-icon icon="caret-left" font-scale="3"  ></b-icon></b-button>
    </div>
    <div class="position-fixed" style="top:50%; right:20px;" v-if="tab != tabs.length -1">
      <b-button @click="tabChanged(1)" variant="white"><b-icon icon="caret-right" font-scale="3"  ></b-icon></b-button>
    </div>
  </div>
</template>

<script>
import MapInstitution from '../components/MapInstitution.vue';
import MapSubscription from '../components/MapSubscription.vue';
import CSACard from '../components/WrapperComponents/CSACard.vue';
import Mapper from './Mapper.vue';
import PreviewMerge from './PreviewMerge.vue';
export default {
  components: { Mapper, PreviewMerge, CSACard, MapSubscription, MapInstitution},
  data(){
    return {
      tabs: [
        { text: 'Map Umbrella', active: true },
        // { text: 'Preview', active: false },
          { text: 'Map Subscription', active: false },
          { text: 'Map Institution', active: false },
          { text: 'Confirm Merge', active: false },
        // { text: 'Map Umbrella', active: true },
        // { text: 'Map Institution', active: false },
        // { text: 'Preview', active: false },
        //   { text: 'Map Subscription', active: false },
        //   { text: 'Confirm Merge', active: false },
        //   { text: 'Continue Order fullfillment', active: false },
      ],
      tab: 0
    }
  },
  methods: {
    tabChanged(nextTab) {
      var nextTabPos = this.tab + nextTab;
      if (nextTabPos == this.tabs.length) nextTabPos = 0;
      if (nextTabPos == -1) nextTabPos = (this.tabs.length-1);
      this.tabs[this.tab].active = false;
      this.tab = nextTabPos;
      this.tabs[nextTabPos].active = true;
    }
  },
  
};
</script>
<style lang="scss" scoped>
</style>