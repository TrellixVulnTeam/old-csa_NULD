<template>
  <div>
    <div class="pb-5">
      <div class="">
        <h1>Move Users </h1>
      </div>

      <div style="margin:0 100px;">
        <b-row>
          <b-col>
            <CSACard title=""  :bodyVisible="true" :hideCaret="true" class="w-100">
                <template #card-body>
                  <div>
                  <b-breadcrumb
                    class="text-center mx-4 mt-3 mb-0 justify-content-center"
                    style=" font-weight: bold"
                    :items="tabs"
                    @click="tabChanged(1)"
                  >
                  </b-breadcrumb>
                    <div class="mx-4">

                      <Mapper v-if="tab == 0"></Mapper>
                      <UsersToMap  v-if="tab == 1"></UsersToMap>
                      <MapSubscription v-if="tab == 2"></MapSubscription>
                      <MapInstitution v-if="tab == 3"></MapInstitution>
                      <div v-if="tab == 4" class="mt-4">
                        <h3>Confirm Merge</h3>
                      <PreviewMerge></PreviewMerge>
                      </div>
                    </div>
                    <b-button size="lg" variant="dark" class="float-left mt-5" @click="tabChanged(-1)">Previous</b-button>
                    <b-button v-if="tab < tabs.length-1" size="lg" variant="dark" class="float-right mt-5" @click="tabChanged(1)">Next</b-button>
                    <b-button v-if="tab == 4" size="lg" class="float-right mt-5" variant="success">Merge</b-button>

                  </div>
                </template>

            </CSACard>

          </b-col>
          <b-col cols="3" class=""><MergeSummary :step="tab"></MergeSummary></b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import MapInstitution from '../components/MapInstitution.vue';
import MapSubscription from '../components/MapSubscription.vue';
import UsersToMap from '../components/UsersToMap.vue';
import CSACard from '../components/WrapperComponents/CSACard.vue';
import Mapper from './Mapper.vue';
import MergeSummary from './MergeSummary.vue';
import PreviewMerge from './PreviewMerge.vue';
export default {
  components: { Mapper, PreviewMerge, CSACard, MapSubscription, MapInstitution, UsersToMap, MergeSummary},
  data(){
    return {
      tabs: [
        { text: 'Map Umbrella', active: true },
        { text: 'Users To Move', active: false },
          { text: 'To New Subscription', active: false },
          { text: 'To New Institution', active: false },
          { text: 'Merge', active: false },
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
@import "../app.scss";
li.breadcrumb-item.active {
    text-decoration: underline;
    text-decoration-color: $el-light-blue;
    color: $el-light-blue;
}
</style>