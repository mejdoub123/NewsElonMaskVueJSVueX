<template>
  <div class="wrapper">
    <Navbar />
    <NavbarExtend />
    <div class="page-wrapper">
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import NavbarExtend from "./components/NavbarExtend.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    NavbarExtend,
    Footer,
  },
};
</script>
<style></style>
