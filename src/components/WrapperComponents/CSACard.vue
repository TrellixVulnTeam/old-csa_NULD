<template>
  <b-card class="m-2 shadow card">
    <b-card-title>

      <slot name="card-title">      
        {{title}}
      </slot>

      <b-button :hidden="hideCaret" @click="bodyVisible = !bodyVisible" variant="white">
        <b-icon :icon="collapseIcon"></b-icon
      ></b-button>
    </b-card-title>

    <b-collapse v-model="bodyVisible" >
      <b-card-text>
        <slot name="card-body">
          <b-table striped hover :items="items" class="w-100"></b-table>
        </slot>
      </b-card-text>
    </b-collapse>
  </b-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    bodyVisible: {
        type: Boolean,
        default: false
    },
    hideCaret: {
        type: Boolean,
        default: false
    },
    items: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
    };
  },
  computed: {
    collapseIcon() {
      return this.bodyVisible ? "caret-up" : "caret-down";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: fit-content;
}
</style>