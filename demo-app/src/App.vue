<template>
  <div id="app">
    <HeaderNav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from "@/components/Header/HeaderNav";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
    Footer,
  },
};
</script>
