<template>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="subheader">{{ New.author }}</div>
        </div>
        <div class="h1 mb-3">{{ New.title }}</div>
        <div class="flex">
          <div>
            {{ New.published_date
            }}<a
              :href="New.link"
              class="card card-sponsor"
              target="_blank"
              rel="noopener"
              aria-label="Sponsor Tabler!"
              :style="'background-image: url(' + New.media + ');'"
              ><div class="card-body"></div
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "new-item",
  props: {
    New: Object,
  },
};
</script>
<style scoped></style>
