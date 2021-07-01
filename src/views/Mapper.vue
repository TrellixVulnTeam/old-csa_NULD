<template>
  <div>
    <CSACard
      title="Map Source  Umbrella"
      :bodyVisible="true"
      :hideCaret="true"
      class="w-100 mt-4 mb-5"
    >
      <template #card-body>
        <div>
          <div class="mb-2" >
            <b-icon icon="circle" variant="success"></b-icon> <b-icon icon="arrow-right"></b-icon> <b-icon icon="circle"></b-icon>
          </div>
          <SelectTenant ></SelectTenant>=
        </div>
      </template>
    </CSACard>

    <CSACard 
      title="Destination Umbrella"
      :bodyVisible="true"
      :hideCaret="true"
      class="w-100"
    >
      <template #card-body>
        <div>
          <div class="mb-2" >
            <b-icon icon="circle"></b-icon> <b-icon icon="arrow-right"></b-icon> <b-icon icon="circle"  variant="success"></b-icon>
          </div>
          <b-card>
          <b-container>
            <b-row>
              <b-col>
                <p><strong>Parent Institution Name:</strong> Miami A.</p>
              </b-col>
              <b-col>
                <p><strong>Umbrella ID:</strong>10419</p>
              </b-col>
            </b-row>
          </b-container>
          </b-card>
        </div>
      </template>
    </CSACard>
  </div>
</template>

<script>
import CSACard from "../components/WrapperComponents/CSACard.vue";
import SelectTenant from "../components/SelectTenant.vue";
export default {
  components: { SelectTenant, CSACard },
  data() {
    return {
      types: {Umbrella: 'Umbrella'}
    }
  },
};
</script>

<style lang="scss" scoped>
</style>