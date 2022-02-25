<template>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <NewItem :New="New" :key="New._id" v-for="New in allNews" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import NewItem from "./NewItem.vue";
export default {
  components: {
    NewItem,
  },
  methods: mapActions(["fetchNews"]),
  computed: mapGetters(["allNews"]),
  created() {
    this.fetchNews();
  },
};
</script>
<style scoped></style>
